from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from model import MinmaiminModel

router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)

model_obj = MinmaiminModel().load_model_obj()
print(model_obj)
@router.get("/predict/")
def predict(msg: str):
    result = model_obj.predict(msg)    
    return JSONResponse(content={'result': result})
