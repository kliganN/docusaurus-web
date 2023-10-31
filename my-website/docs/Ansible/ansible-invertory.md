---
sidebar_position: 3
---

# Ansible. Invertory файл

## Инвертарный файл Ansible

Чтобы использовать Ansible для управления удаленными хостами, необходимо создать инвертарный файл, который содержит информацию о хостах, на которых будет выполняться конфигурация.

Для создания инвертарного файла выполните следующие шаги:

1. Создайте папку для проекта и перейдите в нее:

```bash
mkdir servers
cd servers
```

1. Создайте инвертарный файл:

```bash title="invertory"
nano inventory
vm1 ansible_host=192.168.0.37 ansible_ssh_pass=pwd123z
vm2 ansible_host=192.168.0.38 ansible_ssh_pass=pwd123z

[nodes]
vm1
vm2
```

В этом примере мы создаем хосты `vm1` и `vm2` с IP-адресом `192.168.0.37`-`192.168.0.38` и паролем `pwd123z`.

1. Проверьте, что инвертарный файл работает:

```bash
ansible nodes -m ping -i inventory
```

Если все сделано правильно, то эта команда вернет ошибку:

```bash
nodes | FAILED! => {
    "msg": "to use the 'ssh' connection type with passwords or pkcs11_provider, you must install the sshpass program"
}
```

Это происходит потому, что для подключения к удаленной машине по SSH с использованием пароля необходимо установить программу `sshpass`.

1. Установите `sshpass` на контроллере:

```bash
sudo apt install sshpass
```

1. Проверьте, что инвертарный файл работает с использованием `sshpass`:

```bash
sshpass -p pwd123z ansible -m ping all -i inventory
```

Если все сделано правильно, то эта команда вернет успешный результат:

```bash
nodes | SUCCESS => {
    "ansible_facts": {
        "discovered_interpreter_python": "/usr/bin/python3"
    },
    "changed": false,
    "ping": "pong"
}
```

Теперь вы можете использовать инвертарный файл для управления удаленными хостами с помощью Ansible без использования `sshpass`.