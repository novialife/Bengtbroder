from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from models.models import BeerInfo
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
    db = SessionLocal()
    try:
        with open("beerinfo.json", "r") as file:
            data = json.load(file)
            for item in data:
                # Check if BeerIcon is a file path
                if 'BeerIcon' in item and os.path.isfile(item['BeerIcon']):
                    with open(item['BeerIcon'], 'rb') as image_file:
                        item['BeerIcon'] = image_file.read()
                
                beer = BeerInfo(**item)
                db.add(beer)
            db.commit()
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        db.close()

load_data_to_db()