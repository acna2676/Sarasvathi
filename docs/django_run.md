## プロジェクト作成

```bash
django-admin startproject app . # 「.」 をつけることで/app/app となるのを防ぐ
```

- ディレクトリ構造

```bash
.
├── app
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
    ├── wsgi.py
    ├── models.py
    └── migrations
```

## サーバー起動

```bash
python manage.py runserver localhost:8000
```

- 管理サイト
  http://localhost:8000/admin

## DB 接続

```bash
sqlite3 db.sqlite3
```

## マイグレーションファイルの作成

```bash
python manage.py makemigrations app
```

## マイグレーション実行

```bash
python manage.py migrate
```

settings.py の INSTALLED_APPS に任意の app 名を追加します。(上記の
場合は"app")

## テーブル作成

models.py と admin.py を以下の内容で作成

- models.py

```python
from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name
```

- admin.py

```python
from django.contrib import admin

from .models import Member

admin.site.register(Member)

```

※Django の Model は、「アプリケーション名\_クラス名」がデフォルトのテーブル名となります。(上記の場合は"app_member")

## マイグレーションステータス確認

```bash
python manage.py showmigrations
```
