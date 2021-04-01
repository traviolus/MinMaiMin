from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from model import MinmaiminModel

class Payload(BaseModel):
    msg: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
    

router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)


@router.post("/predict/")
def predict(payload: Payload):
    model_obj = MinmaiminModel()
    result = model_obj.predict(msg)    
    return JSONResponse(content={'result': result})
