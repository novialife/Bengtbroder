from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
import json

from utils import crud
from models import models, schemas
from database import engine, load_data_to_db
from dependencies import get_db
from base64 import b64encode



models.Base.metadata.create_all(bind=engine)

app = FastAPI()


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    load_data_to_db()



@app.get("/beers/", response_model=list[schemas.BeerInfo])
async def read_beers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    beers = crud.get_all_beers(db)
    return beers


@app.get("/beers/{beer_id}/info", response_model=schemas.BeerInfo)
async def read_beer_info(beer_id: str, db: Session = Depends(get_db)):
    beer_info = crud.get_beer_by_id(db, beer_id)
    if beer_info is None:
        raise HTTPException(status_code=404, detail="Beer not found")
    return beer_info


@app.get("/beers/{beer_id}/reviews", response_model=schemas.BeerResponse)
async def read_beer_review(beer_id: str, db: Session = Depends(get_db)):
    beer_review = crud.get_beer_review_by_id(db, beer_id)
    if beer_review is None:
        raise HTTPException(status_code=404, detail="Beer not found")
    
    beer_info = crud.get_beer_by_id(db, beer_id)
    if beer_info is None:
        raise HTTPException(status_code=404, detail="Beer not found")
    
    # Convert beer_info and beer_review to dictionaries
    beer_info_dict = beer_info.__dict__
    beer_review_dict = beer_review.__dict__

    # Remove SQLAlchemy instance state from dictionaries
    beer_info_dict.pop('_sa_instance_state', None)
    beer_review_dict.pop('_sa_instance_state', None)
    
    # Combine beer_info and beer_review into a single response
    response = {**beer_info_dict, **beer_review_dict}
    return response

    

    


