from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

app = FastAPI(
    title="MinMaiMin",
    description="Backend system for E.L.C.'s project => MinMaiMin.",
    version="0.1",
    docs_url="/docs/"
)

@app.exception_handler(RequestValidationError)
async def custom_validation_exception_handler(request, e):
    return await request_validation_exception_handler(request, e)

@app.get("/")
async def root():
    return {"message": "MinMaiMin v0.1"}
