import jwt


secret_key = "12954107571231"

def encrypt_data(userid , username):
    return jwt.encode({"userid" : userid , "username": username} , secret_key , algorithm="HS256")

def decrypt_data(token):
    return jwt.decode(token , secret_key , algorithms=["HS256"])


