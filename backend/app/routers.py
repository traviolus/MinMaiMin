from fastapi import APIRouter, Depends, File, UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel

from model import model_obj


class Payload(BaseModel):
    msg: str


class ImagePayload(BaseModel):
    uploadedFile: UploadFile


router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)


@router.post("/predict/")
def predict(payload: Payload):
    result = model_obj.predict(str(payload.msg))    
    return JSONResponse(content={'result': result})

@router.post('/ocr/')
def image_to_text(payload: ImagePayload):
    return JSONResponse(content={'result': ''})