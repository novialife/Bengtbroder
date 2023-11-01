from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from models.models import BeerInfo, BeerReview
import json
import os

SQLALCHEMY_DATABASE_URL = "sqlite:///./db.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def load_data_to_db():
    Base.metadata.create_all(bind=engine)
    
    # Load BeerInfo data
    db = SessionLocal()
    try:
        with open("beerinfo.json", "r") as file:
            data = json.load(file)
            for item in data:
                if 'BeerIcon' in item and os.path.isfile(item['BeerIcon']):
                    with open(item['BeerIcon'], 'rb') as image_file:
                        item['BeerIcon'] = image_file.read()
                beer = BeerInfo(**item)
                db.add(beer)
            db.commit()
        print("BeerInfo data loaded successfully")
    except Exception as e:
        print(f"An error occurred while loading BeerInfo data: {e}")
    finally:
        db.close()

    # Load BeerReview data
    db = SessionLocal()
    try:
        with open("beerreview.json", "r") as file:
            data = json.load(file)
            for item in data:
                beer_name = item['name']
                if beer_name:
                    beer_info = db.query(BeerInfo).filter_by(name=beer_name).first()
                    if beer_info:
                        item['beer_info_id'] = beer_info.id
                        print(f"Match found for beer {beer_name}, id: {beer_info.id}")
                    else:
                        print(f"No match found for beer {beer_name}")
                beer_review = BeerReview(**item)
                db.add(beer_review)
            db.commit()
        print("BeerReview data loaded successfully")
    except Exception as e:
        print(f"An error occurred while loading BeerReview data: {e}")
    finally:
        db.close()

load_data_to_db()
