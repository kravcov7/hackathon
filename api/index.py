from fastapi import FastAPI

app = FastAPI()


@app.get("/api/login")
def hello_world():
    return {"data": {"id": "01", "name": "John Doe"}}


@app.get("/api/signup")
def hello_world():
    return {"message": "Hello World"}