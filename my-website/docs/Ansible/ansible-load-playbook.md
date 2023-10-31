---
sidebar_position: 7
---

# Ansible. Запуск playbook

## Установка и включение сервиса Apache на удаленном хосте с помощью Ansible плейбука

## Шаг 1: Написание плейбука

Создадим плейбук для установки Apache на удаленном хосте и запускаем его с помощью команды `ansible-navigator run`:

```yaml title="apache.yml"
---
- name: Apache server installed
  hosts: node1
  become: true
  tasks:
    - name: latest Apache version installed
      package:
        name: httpd
        state: latest

    - name: Apache enabled and running
      service:
        name: httpd
        enabled: true
        state: started
```

## Шаг 2: Запуск плейбука

Запустим наш плейбук с помощью команды `ansible-navigator run apache.yml` и проверим, установился ли пакет Apache на удаленном хосте:

```bash
ansible node1 -m shell -a "rpm -qi httpd"
```

Вывод команды будет содержать информацию о версии установленного пакета:

```bash
node1 | CHANGED | rc=0 >>
Name        : httpd
Version     : 2.4.37
Release     : 54.module_el8.8.0+1256+e1598b50
Architecture: x86_64
Install Date: Tue 04 Jul 2023 10:48:11 AM UTC
Group       : System Environment/Daemons
Size        : 4500138
License     : ASL 2.0
Signature   : RSA/SHA256, Thu 09 Feb 2023 11:17:42 AM UTC, Key ID 05b555b38483c65d
Source RPM  : httpd-2.4.37-54.module_el8.8.0+1256+e1598b50.src.rpm
Build Date  : Tue 31 Jan 2023 09:57:11 PM UTC
Build Host  : x86-02.mbox.centos.org
Relocations : (not relocatable)
Packager    : CentOS Buildsys <bugs@centos.org>
Vendor      : CentOS
URL         : <https://httpd.apache.org/>
Summary     : Apache HTTP Server
Description :
The Apache HTTP Server is a powerful, efficient, and extensible
web server.
```

## Шаг 3: Включение сервиса Apache

Добавим в плейбук задачу для включения и запуска сервиса Apache:

```yaml title="apache.yml"
- name: Apache enabled and running
  service:
    name: httpd
    enabled: true
    state: started
```

Запустим плейбук снова с помощью `ansible-navigator run apache.yml` и проверим, включен ли сервис Apache на удаленном хосте:

```bash
ansible node1 -m ansible.builtin.service_facts | grep httpd.service -A 4
```

Вывод команды будет содержать информацию о состоянии сервиса:

```json
"httpd.service": {
    "name": "httpd.service",
    "source": "systemd",
    "state": "running",
    "status": "enabled"
},
```
### Теперь установка и включение сервиса Apache на удаленном хосте выполнены с помощью Ansible плейбука.