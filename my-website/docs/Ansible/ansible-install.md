---
sidebar_position: 2
---

# Ansible. Установка

## Установка Ansible

Для установки Ansible необходимо выполнить следующие шаги:

1. Установить Python3 и pip (если они еще не установлены) в вашей системе.
2. Добавить переменную `$PATH` в файл `~/.bashrc` или `~/.bash_profile`, чтобы можно было запускать Ansible из любого места в командной строке. Для этого выполните следующую команду:

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bashrc
```

или

```bash
echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile
```

1. Проверить изменения, выполните следующую команду:

```bash
source ~/.bash_profile
echo $PATH
```

1. Установить Ansible, используя pip3:

```bash
pip3 install ansible
```

или

```bash
python3 -m pip install --user ansible
```

1. После установки Ansible можно проверить его версию с помощью команды:

```bash
ansible --version
```
:::tip Готово!
Теперь Ansible готов к использованию, и вы можете начать автоматизировать различные задачи, связанные с управлением конфигурацией и развертыванием приложений.
:::