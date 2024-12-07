import base64
from io import BytesIO
from PIL import Image

__all__ = [
    'img_to_b64',
    'b64_to_img',
]


def img_to_b64(image: Image.Image):
    buff = BytesIO()
    image.save(buff, format="JPEG")
    img_str = base64.b64encode(buff.getvalue())
    return img_str


def b64_to_img(data: str):
    buff = BytesIO(base64.b64decode(data))
    return Image.open(buff)
