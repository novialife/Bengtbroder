from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
import json

from utils import crud
from models import models, schemas
from database import engine, load_data_to_db
from dependencies import get_db


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


@app.get("/details/{beer_type}/{beer_name}/{beer_id}", response_model=schemas.BeerReview)
async def read_beer(beer_type: str, beer_name: str, beer_id: str, db: Session = Depends(get_db)):
    beer = crud.get_beer_by_id(db, beer_id)
    if beer is None:
        raise HTTPException(status_code=404, detail="Beer not found")
    return beer

