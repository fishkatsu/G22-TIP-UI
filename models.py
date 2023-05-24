from pydantic import BaseModel,Field
from uuid import UUID,uuid4
from typing import Optional,List
from enum import Enum

class Gender(str,Enum):
    male ='male'
    female = 'female'

class Role(str,Enum):
    ses_staff = "ses_staff"
    per_staff = "per_staff"
    oth_user ="oth_user"

class Users(BaseModel):
    user_id : int = Field(pk=True, generated=True)
    username:str
    password:Optional[UUID]= uuid4()
    gender: Gender
    roles:List[Role]