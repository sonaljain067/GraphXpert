from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

def setup_cors(app: FastAPI): 
    origins = [
        "http://localhost", 
        "http://localhost:3000"
    ]

    app.add_middleware(
        CORSMiddleware, 
        allow_origins = origins, 
        allow_credentials = True, 
        allow_methods = ["GET", "POST", "PUT", "DELETE"],
        allow_headers = ["*"]
    )