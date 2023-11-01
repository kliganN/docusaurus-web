---
sidebar_position: 19
---

# Ansible. Структура файлов и Roles

Вот пример структуры каталогов и файлов для роли в Ansible:

```bash
my-role/
  README.md
  tasks/
    main.yml
  templates/
    my-config.j2
  files/
    my-file.txt
  vars/
    main.yml
  defaults/
    main.yml
  meta/
    main.yml
  handlers/
    main.yml
```

- `README.md`: файл, содержащий описание роли.
- `tasks/main.yml`: файл с задачами, которые должна выполнить роль.
- `templates/my-config.j2`: файл шаблона, используемый для создания конфигурационных файлов.
- `files/my-file.txt`: файл, который должен быть скопирован на удаленный хост.
- `vars/main.yml`: файл с переменными, используемыми в роли.
- `defaults/main.yml`: файл с настройками по умолчанию для переменных.
- `meta/main.yml`: файл с метаданными роли, такими как имя, автор и зависимости.
- `handlers/main.yml`: файл с обработчиками, которые могут быть вызваны в ответ на определенные события.

Пример содержимого файлов:


```yaml title="tasks/main.yml"
---
- name: Install required packages
  apt:
    name:
      - nginx
      - git
    state: present

- name: Copy config file
  template:
    src: my-config.j2
    dest: /etc/my-config.conf

- name: Start service
  service:
    name: nginx
    state: started
```


```yaml title="templates/my-config.j2"
http {
    server {
        listen {{ http_port }};
        root {{ document_root }};
    }
}
```


```yaml title="vars/main.yml"
---
http_port: 80
document_root: /var/www/html
```


```yaml title="defaults/main.yml"
---
http_port: 80
document_root: /var/www/html
```


```yaml title="meta/main.yml"
---
galaxy_info:
  author: Your Name
  description: My awesome role
  license: MIT
  min_ansible_version: 2.10
  platforms:
    - name: Debian
      versions:
        - buster
    - name: Ubuntu
      versions:
        - bionic
        - focal
  galaxy_tags:
    - webserver
    - nginx
dependencies:
  - role: some-other-role
  - role: yet-another-role
    vars:
      some_var: true
```