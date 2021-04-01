from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from model import MinmaiminModel

router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)

model = MinmaiminModel().load_model()

@router.post("/predict/")
def predict(msg: str):
    result = model.predict(msg)
    return JSONResponse(content={'result': result})