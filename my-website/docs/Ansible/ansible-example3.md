---
sidebar_position: 11
---

# Ansible. Пример №3

## Управление файлом конфигурации Apache и перезапуск службы с помощью Ansible

## Шаг 1: Создание плейбука

Откройте вкладку редактора и создайте файл `httpd_conf.yml`. Внутри файла добавьте следующее содержимое:

```yaml title="httpd_conf.yml"
---
- name: manage httpd.conf
  hosts: web
  become: true
  tasks:
  - name: Copy Apache configuration file
    copy:
      src: httpd.conf
      dest: /etc/httpd/conf/
    notify:
      - restart_apache
  handlers:
    - name: restart_apache
      service:
        name: httpd
        state: restarted
```

В этом плейбуке мы используем модуль `copy` для копирования файла конфигурации Apache `httpd.conf` на все хосты внутри группы `web`. Затем мы используем инструкцию `notify` для вызова обработчика `restart_apache`, когда файл был изменен. Обработчик использует модуль `service` для перезапуска службы Apache.

## Шаг 2: Копирование файла httpd.conf с удаленного хоста

Скопируйте файл `httpd.conf` с удаленного хоста `node1` на локальную машину с помощью команды `scp node1:/etc/httpd/conf/httpd.conf /home/rhel/ansible-files/files/.`. Это необходимо для того, чтобы использовать его в качестве источника при копировании на удаленные хосты в плейбуке.

## Шаг 3: Запуск плейбука

Запустите плейбук с помощью команды `ansible-navigator run httpd_conf.yml`. Когда плейбук выполнится успешно, проверьте, что файл `httpd.conf` был скопирован на удаленные хосты и служба Apache была перезапущена.

:::tip
Таким образом, мы успешно использовали Ansible для управления файлом конфигурации Apache и перезапуска службы на удаленных хостах.
:::