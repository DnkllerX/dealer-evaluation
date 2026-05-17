from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI()

# Cho phép frontend gọi API từ bất kỳ đâu
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/products")
def get_products():
    return {
        "products": [
            {"id": 1, "name": "Product 1", "description": "Smartphone XYZ"},
            {"id": 2, "name": "Product 2", "description": "Laptop ABC"},
            {"id": 3, "name": "Product 3", "description": "Headphone Pro"}
        ]
    }

@app.get("/api/health")
def health():
    return {"status": "ok"}

handler = Mangum(app)