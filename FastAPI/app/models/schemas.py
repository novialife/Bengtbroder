from pydantic import BaseModel

from typing import Optional
from pydantic import BaseModel, Field, HttpUrl
from uuid import UUID

class BeerInfoBase(BaseModel):
    name: str = Field(..., max_length=255, regex=r'^[\w\-]+$')
    brewery: str = Field(..., max_length=255, regex=r'^[\w\-]+$')
    country: str = Field(..., max_length=255)
    countryCode: str = Field(..., max_length=2)
    volume: str = Field(..., max_length=255)
    abv: float = Field(..., ge=0, le=100)  # Assuming ABV is a percentage, values must be between 0 and 100
    price: float = Field(..., gt=0)
    type: str = Field(..., max_length=255, regex=r'^[\w\-]+$')
    assortment_type: str = Field(..., max_length=255, regex=r'^[\w\-]+$')
    flavor_profile: str = Field(..., max_length=255, regex=r'^[\w\-]+$')
    package_type: str = Field(..., max_length=255, regex=r'^[\w\-]+$')

class BeerInfoCreate(BeerInfoBase):
    BeerIcon: Optional[HttpUrl]  # You can use HttpUrl type if you want to store URL of image

class BeerInfoInDBBase(BeerInfoBase):
    id: UUID
    BeerIcon: Optional[bytes]  # Using bytes to represent BLOB

    class Config:
        orm_mode = True

class BeerInfo(BeerInfoInDBBase):
    pass

class BeerInfoInDB(BeerInfoInDBBase):
    pass
