import jwt
from views.generic import check_user_eists , query_user_data

secret_key = "12954107571231"

def encrypt_data(userid , username):
    return jwt.encode({"userid" : userid , "username": username} , secret_key , algorithm="HS256")

def decrypt_data(token):
    return jwt.decode(token , secret_key , algorithms=["HS256"])


def validate_token(token):
    decoded_token = (token)
    if decoded_token.userid is not None and decoded_token.userid is not None:
        pass
    return False

