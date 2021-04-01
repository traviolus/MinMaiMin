from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from model import MinmaiminModel

class Payload(BaseModel):
    msg: str
    

router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)


@router.post("/predict/")
def predict(payload: Payload):
    model_obj = MinmaiminModel()
    result = model_obj.predict(str(payload.msg))    
    return JSONResponse(content={'result': float(result)})
