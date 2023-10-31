---
sidebar_position: 8
---

# Dockerfile

## Создание Docker-образа с помощью Dockerfile
:::tip Что такое докерфайл?
Dockerfile - это текстовый файл, который содержит инструкции для построения Docker-образа. Обычно Dockerfile начинается с указания базового образа, для которого будет выполняться сборка.
:::

## Создание Dockerfile

Для создания Docker-образа выполните следующие инструкции:

1. Установите ОС.
2. Обновите пакеты `apt` командой `apt update`.
3. Установите `python` командой `apt install -y python3`.
4. Установите `pip` командой `apt install -y python3-pip`.
5. Разместите исходный код в директории `/data`.
6. Запустите приложение с параметром `node`.

Создайте Dockerfile с указанием инструкций для сборки образа:

```bash
FROM ubuntu

RUN apt-get update
RUN apt-get install -y python3-pip
RUN pip install node

COPY app.py /data/node-app.py

ENTRYPOINT NODE_APP=/data/node-app.py node run --host=0.0.0.0 --port=8080
```

`FROM` - из какого образа будет собраз образ.

`RUN` - дает запустить команды на этом образе. линуксовые.

## Сборка Docker-образа

Для сборки Docker-образа выполните следующую команду:

```bash
docker build . -t kligann/hellodocker
```

В этой команде `.` означает, что Docker будет использовать текущую директорию в качестве контекста сборки, а `-t` задает имя и тег для создаваемого образа.

## Загрузка Docker-образа в Docker Hub

Если вы хотите загрузить Docker-образ в Docker Hub, выполните следующую команду:

```bash
docker push kligann/hellodocker
```