from fastapi import FastAPI
from fastapi.responses import RedirectResponse 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx

client_id = "56641010b134453af657"
client_secret = "5c008c46390bf0d75563ac9155630f787a4e6db6"

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
async def get_token(user_code : user_code):
    print("Incoming request ")
    print(f"USER AUTHORIATION CODE {user_code.code}")
    
    response = await get_access_token(user_code.code)
    print(response , response['access_token'])

    if 'access_token' in response:
        return {'access_token' : response['access_token']}
    else:
        return{"Error" : "User authentication failed! Try again"}


async def get_access_token(code : str):
    params = {
        'client_id' : client_id,
        'client_secret' : client_secret , 
        'code' : code
    }
    headers = {'Accept' : 'application/json'}
    async with httpx.AsyncClient() as client:
        response = await client.post(url = "https://github.com/login/oauth/access_token" , params = params , headers = headers)
        return response.json()
