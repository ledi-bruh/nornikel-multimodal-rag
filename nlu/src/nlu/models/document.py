from pydantic import BaseModel

__all__ = [
    'DocumentMetadata',
    'Document',
]


class DocumentMetadata(BaseModel):
    source: str
    page: int
    image: str


class Document(BaseModel):
    id: str
    score: float
    metadata: DocumentMetadata
