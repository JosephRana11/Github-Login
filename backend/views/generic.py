from models.models import User
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from datetime import datetime

engine = create_engine("sqlite:////home/joseph/Desktop/InternAssignment/GithubLogin/database/database.db"))

session_maker = sessionmaker(bind=engine)

def create_new_user(obj):
    user = User(created = datetime.now()
    for key,value in obj.items():
        user[key] = value
    with session_maker() as session:
        session.add(user)
        session.commit()
    print("User Created")


def query_user(id):
    with sessionmaker() as session:
        user = session.query(User).filter_by(User.id == id).first()
        return user


def user_eists(username):
  with session_maker() as session:
       user = session.query(User).filter_by(User.id == id).first()
       return user.exits()