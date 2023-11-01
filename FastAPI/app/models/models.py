from sqlalchemy import Boolean, Column, String, Float, LargeBinary, ForeignKey, Integer, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
import uuid

Base = declarative_base()

class BeerInfo(Base):
    __tablename__ = "Beer_info"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))

    BeerIcon = Column(LargeBinary)
    name = Column(String(255), nullable=False)
    brewery = Column(String(255), nullable=False)
    country = Column(String(255), nullable=False)
    countryCode = Column(String(2), nullable=False)
    volume = Column(String(255), nullable=False)
    abv = Column(Float, nullable=False)
    price = Column(Float, nullable=False)
    type = Column(String(255), nullable=False)
    assortment_type = Column(String(255), nullable=False)
    flavor_profile = Column(String(255), nullable=False)
    package_type = Column(String(255), nullable=False)
    rating_count = Column(Float, nullable=False)
    rating_score = Column(Float, nullable=False)
    
    reviews = relationship("BeerReview", back_populates="beer_info")

class BeerReview(Base):
    __tablename__ = "Beer_review"

    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    beer_info_id = Column(String(36), ForeignKey('Beer_info.id'))

    name = Column(String(255), nullable=False)
    flag = Column(String(255), nullable=False)
    overview_description = Column(String(255), nullable=False)
    number_in_stock = Column(Integer, nullable=False)
    expected_delivery_date = Column(JSON, nullable=False)
    taste_description = Column(JSON, nullable=False)
    pairings = Column(JSON, nullable=False)
    about = Column(JSON, nullable=False)
    reviews = Column(JSON, nullable=False)
    ratings = Column(JSON, nullable=False)

    beer_info = relationship("BeerInfo", back_populates="reviews")
