---
sidebar_position: 3
---

# SSH по ключу и отключением рута

# Настройка SSH-сервера на Linux

Чтобы настроить SSH-сервер на Linux, выполните следующие шаги.

## 1. Создание пользователя и добавление его в группы sudo и ssh

В Linux-терминале выполните следующие команды:

```bash
adduser user
usermod -aG sudo,ssh user
```

## 2. Генерация SSH-ключей

В Windows-терминале выполните следующую команду для генерации SSH-ключей:

```bash
ssh-keygen -t rsa -b 4096 -C "your_nickname_or_email"
```

Ключи будут сгенерированы в папке `.ssh`.

## 3. Копирование ключей на сервер

Подключитесь к серверу по SFTP и скопируйте файлы `id_rsa` и `id_rsa.pub` из папки `.ssh` в каталог `.ssh/` на сервере.

## 4. Настройка SSH-сервера

В Linux-терминале выполните следующие команды:

```bash
sudo nano /etc/ssh/sshd_config
```

Откроется файл конфигурации SSH-сервера. Настройте его следующим образом:

```bash text title="sshd_config"
Port 44541
LogLevel VERBOSE
LoginGraceTime 15s
PermitRootLogin no
MaxAuthTries 3
MaxSessions 2
PubkeyAuthentication yes
PasswordAuthentication no
ChallengeResponseAuthentication no
UsePAM yes
X11Forwarding no
PrintMotd yes
```


Здесь:

- `Port 44541` указывает на порт, на котором будет слушать SSH-сервер.
- `LogLevel VERBOSE` указывает на уровень логирования.
- `LoginGraceTime 15s` указывает на время на авторизацию.
- `PermitRootLogin no` отключает авторизацию под рутом. Для доступа как рут, нужно зайти из-под обычного пользователя и выполнить команду `su root` или `sudo -i`.
- `MaxAuthTries 3` указывает на максимальное количество попыток для входа.
- `MaxSessions 2` указывает на максимальное количество сессий для одновременного подключения.
- `PubkeyAuthentication yes` разрешает доступ по открытому ключу.
- `PasswordAuthentication no` отключает доступ по паролю.
- `ChallengeResponseAuthentication no` отключает проверку на основе вызова.
- `UsePAM yes` указывает на использование PAM (Pluggable Authentication Modules).
- `X11Forwarding no` отключает графическую отрисовку. Требуется для безопасности.
- `PrintMotd yes` разрешает вывод сообщения при подключении.

## 5. Копирование ключей на пользователя

Из-под рута выполните следующую команду, чтобы скопировать ключи в домашнюю папку пользователя:

```bash
cp -r .ssh /home/user/
```

Здесь `.ssh/` — это папка, в которой находятся ключи, а `user` — имя пользователя, на которого нужно скопировать ключи.

:::tip
После выполнения этих шагов SSH-сервер будет настроен и готов к использованию.
:::