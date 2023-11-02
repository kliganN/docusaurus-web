---
title: Выдает ошибку при запуске docusaurus
description: docusaurus не является..
authors:
  - name: Vladimir Gordeev
    title: SubNetwork administrator
    url: https://github.com/kliganN
    email: kligann@subnetwork.ru
    image_url: https://avatars.githubusercontent.com/u/84453321?v=4
tags: [docusaurus, npm]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# Фикс с ошибкой npm для Docusaurus

Просто вводим эти две команды и запускаем локальный сервер

```bash
npm upgrade docusaurus --latest
npm audit fix
```

Затем,
```bash
npm run start
```