from sqlalchemy.orm import declarative_base
from sqlalchemy import Column , String , DateTime , Integer
import uuid

Base = declarative_base()


def generate_uuid():
    return str(uuid.uuid4())


class User(Base):
    __tablename__ = "user"

    id = Column(String , primary_key = True , default = generate_uuid)
    created = Column(DateTime , nullable=False)
    username = Column(String , nullable= False)
    name = Column(String , nullable= True)
    avatar_url = Column(String , nullable=False)
    followers = Column(Integer , nullable=True)
    following = Column(Integer , nullable = True)
    public_repos = Column(Integer , nullable = True)

    def dict(self):
        return {
            "id" : id ,
            "created" : self.created,
            "username" : self.username , 
            "name" : self.name , 
            "avatar_url" : self.avatar_url , 
            "followers" : self.followers,
            "public_repos" : self.public_repos
        }
