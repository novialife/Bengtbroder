from sqlalchemy.orm import Session
from models import models, schemas
from uuid import UUID


def get_all_beers(db: Session):
    return db.query(models.BeerInfo).all()

def get_beer_review_by_id(db: Session, beer_id: UUID):
    return db.query(models.BeerReview).filter(models.BeerReview.beer_info_id == beer_id).first()

def get_beer_by_id(db: Session, beer_id: UUID):
    return db.query(models.BeerInfo).filter(models.BeerInfo.id == beer_id).first()