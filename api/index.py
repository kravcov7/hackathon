from fastapi import FastAPI

app = FastAPI()


@app.get("/api/user")
def hello_world():
    return {"data": {"id": "01", "name": "John Doe"}}
