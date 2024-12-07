import torch
from colpali_engine.models import ColQwen2, ColQwen2Processor

__all__ = ['get_multi_embedding']

_MODEL_NAME = 'vidore/colqwen2-v1.0'
_DEVICE = 'cuda:0'

_model = ColQwen2.from_pretrained(
    _MODEL_NAME,
    torch_dtype=torch.bfloat16,
    device_map=_DEVICE,
).eval()

_processor = ColQwen2Processor.from_pretrained(_MODEL_NAME)


def get_multi_embedding(query: str) -> list[list[float]]:
    with torch.no_grad():
        batch_query = _processor.process_queries([query]).to(_model.device)
        batch_query_embedding: torch.Tensor = _model(**batch_query)

    multivector_query = batch_query_embedding[0].cpu().float().numpy().tolist()

    return multivector_query
