import databases
from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from uuid import uuid4
from models import Users,Gender,Role
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from databases import Database, DatabaseURL
app = FastAPI()

db: List[Users] = [
    Users(user_id = uuid4(),
          username = "Evelyn",
          password= uuid4(),
          gender = Gender.female,
          roles=[Role.per_staff]),

    Users(user_id = uuid4(),
          username = "Mary",
          password= uuid4(),
          gender = Gender.male,
          roles=[Role.ses_staff]),
]

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    return {"message": "Hello, World!"}

@app.get("/api/v1/users")
async def fetch_users():
    return db;

@app.post("api/v1/users")
async def register_user(users:Users):
    db.append(users)
    return{"user_id":users.user_id}

@app.get("/login")
async def create_user(user: Users):
    # Create a new user in the database
    query = Users.insert().values(username=user.username, password=user.password)
    last_record_id = await db.execute(query)
    return {"user_id": last_record_id}

@app.post("/login")
def login(username: str, password: str):
    # Return appropriate response based on success or failure
    if username == "admin" and password == "12345":
        return {"message": "Login successful"}
    else:
        return {"message": "Invalid username or password"}

@app.get("/login")
def login(username: str, password: str):
    # Authenticate the user and perform any necessary validations
    # Return appropriate response based on success or failure
    # Example response
    if username == "admin" and password == "password":
        return {"message": "Login successful"}
    else:
        return {"message": "Invalid username or password"}

@app.get("/check-db-connection")
async def check_db_connection():
    try:
        # Execute a simple query to check the database connection
        query = "SELECT 1"
        async with db.connection() as connection:
            result = await connection.fetch_one(query)
            return {"message": "Database connection is successful"}
    except Exception as e:
        return {"message": "Failed to connect to the database", "error": str(e)}