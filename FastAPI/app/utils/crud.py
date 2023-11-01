from sqlalchemy.orm import Session
from models import models, schemas
from uuid import UUID


def get_all_beers(db: Session):
    return db.query(models.BeerInfo).all()

def get_beer(db: Session, beer_id: UUID):
    return db.query(models.BeerInfo).filter(models.BeerInfo.id == beer_id).first()

def check_beer(db: Session, beer_id: UUID):
    if db.query(models.BeerInfo).filter(models.BeerInfo.id == beer_id).first():
        return True
    else:
        return False

def create_beer(db: Session, beer_data: dict):
    db_beer = models.BeerInfo(**beer_data)
    db.add(db_beer)
    db.commit()
    db.refresh(db_beer)
    return db_beer