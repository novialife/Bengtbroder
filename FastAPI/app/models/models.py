from sqlalchemy import Boolean, Column, String, Float, LargeBinary
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
import uuid

Base = declarative_base()

class BeerInfo(Base):
    __tablename__ = "BeerInfo"

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