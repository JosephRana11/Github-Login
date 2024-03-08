from fastapi import FastAPI
from fastapi.responses import RedirectResponse 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


client_id = "56641010b134453af657"
client_secret = "a3095047c24243cb6d15928e3d2b9a0ba77f5238"

redirect_uri = "http://localhost:3000/auth/callback"

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    'http://localhost:3000/login',
    'localhost:3000/login',
    'localhost:3000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class user_code(BaseModel):
    code : str


@app.get("/api/login")
def redirect_login():
    print("Login request incoming")
    return RedirectResponse(f'https://github.com/login/oauth/authorize?client_id={client_id}&redirect_uri={redirect_uri}' , status_code = 302)


@app.post("/api/token")
def get_token(user_code : user_code):
    print(user_code.code)
    return {"Required" : "code  "}