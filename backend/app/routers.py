from fastapi import APIRouter, Depends, File, UploadFile
from fastapi.responses import JSONResponse
from pydantic import BaseModel

import os
import pytesseract
from random import randrange

from model import model_obj


class Payload(BaseModel):
    msg: str
    victim: bool
    thirdPerson: bool
    situation: int
    reaction: bool
    future: bool
    question: bool
    msgType: int


router = APIRouter(
    prefix="/api",
    tags=["minmaimin"],
    responses={404: {"description": "Not found"}},
)


def check_config(payload):
    if payload.msgType != 2:
        return randrange(49, 52), True
    if not payload.victim or not payload.thirdPerson or payload.reaction or payload.question or payload.future or payload.situation in [0, 2, 4]:
        return randrange(10, 20), True
    return randrange(30, 70), False


@router.post("/predict/")
def predict(payload: Payload):
    result, is_pass = check_config(payload)
    if not is_pass:
        result = model_obj.predict(str(payload.msg))    
    return JSONResponse(content={'result': round(result)})


@router.post('/ocr/')
def image_to_text(image: UploadFile = File(...)):
    try:
        os.mkdir("images")
    except Exception as e:
        return JSONResponse(content={'result': str(e)}) 
    file_name = os.getcwd()+"/images/"+image.filename.replace(" ", "-")
    with open(file_name,'wb+') as f:
        f.write(image.file.read())
        f.close()
    result = pytesseract.image_to_string(file_name, lang='tha').replace('\n', '')
    return JSONResponse(content={'result': result})