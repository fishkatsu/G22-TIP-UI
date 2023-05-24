from fastapi import FastAPI
from databases import Database
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



# MySQL database connection URL
DATABASE_URL = "mysql+mysqlconnector://root:password@localhost/g22-tip"

# Create a database instance
database = Database(DATABASE_URL)

# SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# SQLAlchemy metadata
metadata = MetaData()

# Create a session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base class for declarative models
Base = declarative_base()


app = FastAPI()


@app.on_event("startup")
async def startup():
    # Connect to the database
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    # Disconnect from the database
    await database.disconnect()

@app.post("/check-db-connection")
async def check_db_connection():
    try:
        # Execute a simple query to check the database connection
        query = "SELECT 1"
        result = await database.fetch_one(query)
        return {"message": "Database connection is successful"}
    except Exception as e:
        return {"message": "Failed to connect to the database", "error": str(e)}