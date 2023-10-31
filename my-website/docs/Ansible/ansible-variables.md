---
sidebar_position: 8
---

# Ansible. Переменные

## Использование переменных в Ansible для управления конфигурацией веб-сайта на разных окружениях

## Шаг 1: Создание каталогов и файлов

Создадим два каталога в директории `ansible-files`: `group_vars` и `host_vars`. В `group_vars` создадим файл `web.yml` со следующим содержимым:

```yaml title="web.yml"
---
stage: dev
```

В `host_vars` создадим файл `node1.yml` со следующим содержимым:

```yaml title="node1.yml"
---
stage: prod
```

В директории `ansible-files/files` создадим два файла `dev_web.html` и `prod_web.html`, которые будут содержать разный контент для сайта в зависимости от окружения.

## Шаг 2: Написание плейбука

Создадим плейбук `apache.yml` для установки и настройки Apache на удаленных хостах:

```yaml title="apache.yml"
---
- name: Apache server installed
  hosts: web
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

    - name: copy web.html
      copy:
        src: "{{ stage }}_web.html"
        dest: /var/www/html/index.html
```

В задаче `copy web.html` мы используем переменную `stage`, которая определена в файлах `web.yml` и `node1.yml`. Эта переменная будет использоваться для копирования соответствующего файла `web.html` на удаленный хост.

## Шаг 3: Запуск плейбука и проверка

Запустим плейбук с помощью команды `ansible-navigator run apache.yml`. Когда плейбук выполнится успешно, проверим, что сайт работает на обоих хостах:

```bash
curl <http://node1>
<body>
<h1>This is a production webserver, take care!</h1>
</body>

curl <http://node2>
<body>
<h1>This is a development webserver, have fun!</h1>
</body>
```
Вывод команд показывает, что на `node1` используется файл `prod_web.html`, а на `node2` - `dev_web.html`. Таким образом, мы успешно использовали переменные в Ansible для управления конфигурацией веб-сайта на разных окружениях.