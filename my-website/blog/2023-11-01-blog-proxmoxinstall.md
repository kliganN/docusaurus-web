---
title: Установка домашнего медиа сервера на Proxmox
description: Install proxmox home server.
authors:
  - name: Vladimir Gordeev
    title: SubNetwork administrator
    url: https://github.com/kliganN
    email: kligann@subnetwork.ru
    image_url: https://avatars.githubusercontent.com/u/84453321?v=4
tags: [proxmox, linux]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---






**Самое первое, что мы делаем, это - разворачиваем VM с базовой системой Linux Ubuntu или Debian. В моей заметке я выбрал Debian, он мне нравится больше всех.**

Для установки и настройки Samba на сервере с Ubuntu или Debian выполните следующие шаги:

1. Установите Samba с помощью следующей команды:

```bash
sudo apt-get update
sudo apt-get install samba
```

1. Создайте пользователей Samba и установите им пароли:

```bash
sudo smbpasswd -a username
```

Здесь `username` - это имя пользователя, которое вы хотите добавить.

1. Отредактируйте файл конфигурации Samba `/etc/samba/smb.conf`, добавив следующий блок конфигурации в конец файла:

```bash
[jellyfin-media]
   path = /path/to/jellyfin-media
   browseable = yes
   read only = no
   guest ok = yes
   guest only = yes
```

Здесь `jellyfin-media` - это имя вашей сетевой папки, `/path/to/jellyfin-media` - это путь к физической папке на сервере, которую вы хотите сделать доступной по сети, `username` - это имя пользователя Samba, которому вы разрешаете доступ к сетевой папке.

1. Перезапустите Samba, чтобы применить настройки:

```bash
sudo service smbd restart
```

Теперь вы можете подключиться к сетевой папке `jellyfin-media` с любого компьютера в сети, используя имя сервера и имя пользователя Samba, которому был разрешен доступ. Например, в Windows вы можете открыть проводник и ввести в адресной строке `\\\\servername\\jellyfin-media`, а затем ввести имя пользователя и пароль для доступа к папке.

**Не забывайте давай права на директории `chmod 777 .`**  

Для установки Docker и запуска контейнеров Jellyfin и qBittorrent внутри виртуальной машины Debian и доступа к папке `/jellyfin-media` вам нужно выполнить следующие шаги:

1. Установите Docker внутри виртуальной машины Debian, следуя инструкциям на официальном сайте Docker: [https://docs.docker.com/engine/install/debian/](https://docs.docker.com/engine/install/debian/) ↗
2. Запустите контейнер Jellyfin с помощью Docker и привяжите папку `/jellyfin-media`

Т.к у нас у уже есть расшаренная папка /jellyfin-media, создадим внутри нее директории для обеих контейнеров. 

1. **jellyconfig**
2. **torrent**

Еще создадим папку Movies для фильмов **Jellyfin**

Во всех директориях делаем chmod `777 .` 

Теперь перейдем в `/jellyfin-media/jellyconfig` и создадим `docker-compose.yml`

```yaml
version: '3.5'
services:
  jellyfin:
    image: jellyfin/jellyfin
    container_name: jellyfin
    user: 1000:1000
    network_mode: 'host'
    volumes:
      - /home/vmware/jellyfin-media/jellyconfig:/config
      - /home/vmware/jellyfin-media/jellyconfig/cache:/cache
      - /home/vmware/jellyfin-media/Movies:/media
    restart: 'unless-stopped'
    extra_hosts:
      - "host.docker.internal:host-gateway"

```

Запускаем контейнер командой:

```bash
docker compose up -d
```

1. Запустите контейнер qBittorrent с помощью Docker и привяжите папку `/jellyfin-media`

Переходим в директорию /jellyfin-media/torrent и так же создаем docker-compose.yml

```yaml
version: "2.1"
services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Moscow
      - WEBUI_PORT=8090
    volumes:
      - /home/vmware/jellyfin-media/torrent/appdata/config:/config
      - /home/vmware/jellyfin-media/Movies:/downloads
    ports:
      - 8090:8090
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped
```

Запускаем команду:

```bash
docker-compose up -d
```

Здесь `/jellyfin-media` - это путь к физической папке на сервере, которую вы хотите использовать для хранения медиафайлов, а `/media` и `/downloads` - это пути к медиафайлам внутри контейнеров Jellyfin и qBittorrent соответственно.

1. Проверьте, что контейнеры Jellyfin и qBittorrent запущены и правильно сконфигурированы, следуя инструкциям на официальных сайтах проектов:
- Jellyfin:  ↗

[Container | Jellyfin](https://jellyfin.org/docs/general/installation/container)

- qBittorrent:  ↗

[Docker](https://hub.docker.com/r/linuxserver/qbittorrent)

Теперь вы можете добавлять медиафайлы в папку `/jellyfin-media` на сервере, которые будут автоматически распознаваться и добавляться в библиотеку Jellyfin, а также загружать торрент-файлы в папку `/jellyfin-media` на сервере, которые будут автоматически обрабатываться qBittorrent.
---
