from transformers import Qwen2VLForConditionalGeneration, AutoProcessor
from qwen_vl_utils import process_vision_info
import torch
from PIL import Image

__all__ = ['get_answer']

_PROMPT = """Ты - профессиональный ассистент, который помогает найти ответ в приложенных документах (например, изображения).
Ты должен анализировать тексты, картинки, графики, схемы, таблицы.
Сначала проанализируй приложенные документы, далее найди ответ на вопрос пользователя, сформулируй ответ.

Следуй эти правилам:
1. Ответ должен быть четким и касающимся вопроса.
2. Не объясняй почему ты не нашел ответ.
3. Не нужно давать советов.
4. Будь вежлив.
5. Обдумывайте свои решения дважды.

Вопрос:
{query}
"""

_MODEL_NAME = 'Qwen/Qwen2-VL-7B-Instruct-AWQ'
_DEVICE = 'cuda:0'

_model = Qwen2VLForConditionalGeneration.from_pretrained(_MODEL_NAME, torch_dtype=torch.float16, device_map=_DEVICE)
_processor = AutoProcessor.from_pretrained(_MODEL_NAME)


def get_answer(query: str, images: list[Image.Image]) -> str:
    messages = [
        {
            "role": "user",
            "content": [
                *({"type": "image", "image": img} for img in images),
                {"type": "text", "text": _PROMPT.format(query=query)},
            ],
        }
    ]
    text_prompt = _processor.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    image_inputs, video_inputs = process_vision_info(messages)

    inputs = _processor(
        text=[text_prompt],
        images=image_inputs,
        videos=video_inputs,
        padding=True,
        return_tensors='pt',
    )
    inputs = inputs.to(_DEVICE)

    output_ids = _model.generate(**inputs, max_new_tokens=128, temperature=0.1)
    generated_ids = [
        output_ids[len(input_ids):]
        for input_ids, output_ids in zip(inputs.input_ids, output_ids)
    ]
    output_text = _processor.batch_decode(
        generated_ids, skip_special_tokens=True, clean_up_tokenization_spaces=True
    )

    return output_text[0]
