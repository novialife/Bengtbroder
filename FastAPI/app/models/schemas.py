from pydantic import BaseModel

from typing import Optional
from pydantic import BaseModel, Field, HttpUrl
from uuid import UUID
from base64 import b64encode

from typing import List, Dict, Union


class BeerInfoBase(BaseModel):
    name: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    BeerIcon: Optional[bytes]
    brewery: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    country: str = Field(..., max_length=255)
    countryCode: str = Field(..., max_length=2)
    volume: str = Field(..., max_length=255)
    abv: float = Field(..., ge=0, le=100)
    price: float = Field(..., gt=0)
    type: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    assortment_type: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    flavor_profile: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    package_type: str = Field(..., max_length=255, pattern=r'^[\w\s\-]+$')
    rating_count: float = Field(..., ge=0)
    rating_score: float = Field(..., ge=0, le=5)


class BeerInfoInDBBase(BeerInfoBase):
    id: UUID
    BeerIcon: Optional[bytes]  # Using bytes to represent BLOB

    class Config:
        orm_mode = True
        json_encoders = {bytes: lambda v: b64encode(v).decode('utf-8')}

class BeerInfo(BeerInfoInDBBase):
    pass

class BeerInfoInDB(BeerInfoInDBBase):
    pass

class BeerReviewBase(BeerInfoBase):
    flag: str = Field(..., max_length=255)
    overview_description: str = Field(..., max_length=1024)
    number_in_stock: int = Field(..., ge=0)
    expected_delivery_date: dict = Field(..., max_length=255)
    taste_description: dict = Field(..., max_length=255)
    pairings: dict = Field(..., max_length=255)
    about: dict = Field(..., max_length=255)
    reviews: dict = Field(..., max_length=255)
    ratings: dict = Field(..., max_length=255)

class BeerReviewInDBBase(BeerReviewBase):
    id: UUID
    BeerIcon: Optional[bytes]  # Using bytes to represent BLOB

    class Config:
        orm_mode = True
        json_encoders = {bytes: lambda v: b64encode(v).decode('utf-8')}

class BeerReview(BeerReviewInDBBase):
    pass

class BeerReviewInDB(BeerReviewInDBBase):
    pass

class BeerResponse(BeerInfo, BeerReview):
    reviews: List[Dict[str, Union[str, int]]] = Field(...)
    pass