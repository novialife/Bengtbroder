from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from utils import crud
from models import models, schemas
from database import engine
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

@app.get("/", response_model=schemas.BeerInfo)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user

@app.post("/users/check/", response_model=schemas.User)
def check_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    if crud.check_user(db, user):
        return crud.get_user_by_email(db, email=user.email)
    else:
        raise HTTPException(status_code=400, detail="Incorrect password")
    
@app.get("/countries", response_model=list)
def return_countries():
    return crud.get_countries()