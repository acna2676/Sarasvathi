## nginx インストール手順

- インストール

```bash
pip install ansible --user
```

- ロールの作成

```bash
ansible-galaxy init nginx
```

- 文法チェック

```bash
ansible-playbook -i inventory playbook.yml --syntax-check
```

- プレイブックの適用

```bash
ansible-playbook -i inventory playbook.yml
```
