
# Auth Node API

## Executar

```bash
  sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
  git clone https://github.com/sostenesapollo/auth-node-api.git
  cd auth-node-api
  docker-compose up
```

## Funcionalidades

- Login
- Execução automática de migrations e seed ( criação de usuário para testes )
- Cadastro de Usuario
- Edição de Usuario
- Exclusão de Usuario
- Listagem de Usuario


## Adminer

- For a quick view of the database, after launching docker-compose go to [Adminer](http://localhost:8080)
- User: **root**
- Password : **123**

> Verifique os [Usuários cadastrados](http://localhost:8080/?server=db&username=root&db=auth_sys&select=user) usando o adminer.
#### Usuário exemplo (já cadastrado)
```
{ 
  "username": "root",
  "password": "root"
}
```
