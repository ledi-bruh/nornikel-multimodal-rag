from lmdeploy import pipeline, TurbomindEngineConfig, GenerationConfig
from PIL import Image

__all__ = ['get_answer']

_PROMPT = """Ты - профессиональный ассистент, который помогает найти ответ в приложенных документах (например, изображения).
Ты должен помочь в анализе текста, картинок, графиков, схем, таблиц.
Сначала проанализируй приложенные документы, далее найди ответ на вопрос пользователя.

Следуй эти правилам:
1. Ответ должен быть четким и касающимся вопроса.
2. Не объясняй почему ты не нашел ответ.
3. Не нужно давать советов.
4. Будь вежлив.
5. Обдумывайте свои решения дважды.

Вопрос:
{query}
"""

_MODEL_NAME = 'OpenGVLab/InternVL2-8B-AWQ'

_backend_config = TurbomindEngineConfig(model_format='awq')

_gen_config = GenerationConfig(
    max_new_tokens=64,
    top_p=0.95,
    temperature=0,
)

_pipe = pipeline(_MODEL_NAME, backend_config=_backend_config, log_level='INFO')


def get_answer(query: str, images: list[Image.Image]) -> str:
    response = _pipe((_PROMPT.format(query=query), images), gen_config=_gen_config)
    return response.text
 