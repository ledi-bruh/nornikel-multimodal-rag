from ..models import Document

__all__ = ['VectorRepository']


class VectorRepository:
    async def get_relevance_documents(self, multivector_query: list[list[float]], top_k: int = 10) -> list[Document]:
        raise NotImplementedError
