---
sidebar_position: 16
---

# Docker Registry

`Docker Registry` — это место, где хранятся образы Docker. В продакшене часто используются приватные репозитории.

## Public Registry

Образы по умолчанию берутся из публичного реестра `docker.io`. Формат образа выглядит как `User/Account/image/Repository`, например, `nginx/nginx` для образа Nginx.

Также существует другой публичный репозиторий — `gcr.io/kubernetes-e2e-test-images/dnsutil`.

## Private Registry

Чтобы использовать свой частный репозиторий, необходимо сначала залогиниться с помощью команды `docker login private-registry.io`.

Чтобы развернуть свой частный репозиторий, можно запустить его, как контейнер Docker, используя команду:

```bash
docker run -d -p 5000:5000 --name registry registry:2
```

Затем можно загрузить свой собственный образ в свой репозиторий, используя команды:

```bash
docker image tag my-image localhost:5000/my-image
docker push localhost:5000/my-image
```

Образы в частном репозитории могут быть получены с другого хоста с помощью команды:

```bash
docker pull 192.168.5.100:5000/my-image
```