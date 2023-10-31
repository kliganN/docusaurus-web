---
sidebar_position: 14
---

# Ansible. Условия

Допустим, что все необходимое ПО уже установлено на серверах, и теперь его нужно запустить. Для этого нужно создать группу серверов в инвентарном файле и написать плейбук с условиями.

В первом примере плейбук запускает сервисы mysqld и httpd на разных серверах в зависимости от их имени хоста.


## Создаем группу серверов в инвентарном файле
```bash title="hosts"
[all_servers]
db.domain.com
web1.domain.com
web2.domain.com
```

### Плейбук для запуска сервисов на серверах
```yaml title="start.yml"
- name: Start services
  hosts: all_servers
  tasks:
    - service:
        name: mysqld
        state: started
      when: ansible_host == "db.domain.com"
    - service:
        name: httpd
        state: started
      when: ansible_host == "web1.domain.com" or ansible_host == "web2.domain.com"
```

Во втором примере плейбук устанавливает Nginx на разных дистрибутивах Linux с помощью условия `ansible_os_family`, которое проверяет семейство операционной системы.

### Плейбук для установки Nginx на разных дистрибутивах Linux
```yaml title="nginx-inst.yml"
- name: Install nginx
  hosts: all
  tasks:
    - name: install nginx on ubuntu
      apt:
        name: nginx
        state: present
      when: ansible_os_family == "Debian" and ansible_distribution_version == "16.04"
    - name: install nginx on centos
      yum:
        name: nginx
        state: present
      when: ansible_os_family == "RedHat" or ansible_os_family == "Suse"
```

## В третьем примере используется цикл для установки нескольких пакетов на серверы.

### Плейбук для установки пакетов
```yaml title="aptinstall.yml"
- name: install web
  hosts: all
  vars:
    packages:
    - name: nginx
      required: True
    - name: mysql
      required: True
    - name: httpd
      required: False
  tasks:
    - name: Install "{{ item.name }}" on Ubuntu
      apt:
        name: "{{ item.name }}"
        state: present
      when: item.required == True
      loop: "{{ packages }}"
```

В последнем примере используется регистрация переменных и условия `when` для проверки статуса сервиса и отправки уведомления по электронной почте, если сервис не работает.

### Плейбук для проверки статуса сервиса и отправки уведомления по электронной почте
```yaml title="checkstatus.yml"
- name: Check status of and email if its down
  hosts: localhost
  tasks:
    - command: service httpd status
      register: command_output
    - mail:
        to: Admins <sysadmin@domain.com>
        subject: Service alert
        body: "Httpd on {{ ansible_hostname }} is down"
      when: command_output.stdout.find('down') != -1
```