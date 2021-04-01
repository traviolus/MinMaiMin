from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from routers import router

app = FastAPI(
    title="MinMaiMin",
    description="Backend system for E.L.C.'s project => MinMaiMin.",
    version="0.1",
    docs_url="/docs/"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
async def root():
    return {"message": "MinMaiMin v0.1"}
