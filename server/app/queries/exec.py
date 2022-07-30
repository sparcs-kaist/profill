from sqlmodel import Session

from app.core.database import engine

def execute_query(query):
    with Session(engine) as session:
        return session.exec(query)
