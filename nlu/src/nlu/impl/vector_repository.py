from qdrant_client import AsyncQdrantClient, models

from src.nlu.utils import b64_to_img
from ..models import Document, DocumentMetadata
from ..core import VectorRepository

__all__ = ['VectorRepositoryImpl']


class VectorRepositoryImpl(VectorRepository):
    def __init__(self, qdrant_client: AsyncQdrantClient, collection_name: str):
        self._qdrant_client = qdrant_client
        self._collection_name = collection_name
        self._timeout = 100

    async def get_relevance_documents(self, multivector_query: list[list[float]], top_k: int = 10) -> list[Document]:
        search_result = await self._qdrant_client.query_points(
            collection_name=self._collection_name,
            query=multivector_query,
            limit=top_k,
            timeout=self._timeout,
            search_params=models.SearchParams(
                quantization=models.QuantizationSearchParams(
                    ignore=False,
                    rescore=True,
                    oversampling=2.0,
                ),
            ),
        )

        return [
            Document(
                id=point.id,
                score=point.score,
                metadata=DocumentMetadata(
                    source=point.payload['source'],
                    page=point.payload['page'],
                    image=point.payload['image'],
                ),
            )
            for point in search_result.points
        ]
