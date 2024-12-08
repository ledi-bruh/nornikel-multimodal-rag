FROM python:3.12.5-slim-bookworm

RUN apt-get update && \
    apt-get install -y python3 python3-pip

WORKDIR /opt/app

RUN pip install --no-cache-dir \
    torch==2.4.0

COPY ./nlu/requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r ./requirements.txt

COPY ./nlu .

CMD ["python3", "-m", "src"]
