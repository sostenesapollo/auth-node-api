
# Auth Node API

## Funcionalidades

- Login
- Cadastro de Usuario
- Edição de Usuario
- Exclusão de Usuario
- Listagem de Usuario


## Adminer

- Para visualização rapida do banco, após a inicialização do docker-compose acesse [Adminer](http://localhost:8080)
- User: **root**
- Password : **123**
## Documentação da API

#### Login


> Usuário já cadastrado, verifique em [Visualizar usuários cadastrados](http://localhost:8080/?server=db&username=root&db=auth_sys&select=user)
`{ "username": "root", "password": "root" }`

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. Nome de usuario |
| `password` | `string` | **Obrigatório**. Senha de acesso |

#### Retorna todos os Usuarios

```http
  GET /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. JWT passado via Header Bearer |


#### Retorna um Usuario

```http
  GET /user/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. JWT passado via Header Bearer |
| `id`| `string` | **Obrigatório**. UUID do Usuario

#### Cadastrar um Usuario

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. JWT passado via Header Bearer |
| `username`| `string` | **Obrigatório**. Nome de usuario
| `password`| `string` | **Obrigatório**. Senha de Acesso

#### Editar um usuario

```http
  PUT /user/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. JWT passado via Header Bearer |
| `id`| `string` | **Obrigatório**. UUID do Usuario
| `newUsername`| `string` | Novo nome de usuario
| `newPassword`| `string` | Nova senha de Acesso

#### Deletar um usuario

```http
  DELETE /user/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório**. JWT passado via Header Bearer |
| `id`| `string` | **Obrigatório**. UUID do Usuario
## Execução

```bash
  git clone https://github.com/JaoTz/AuthSys.git
  docker-compose up
```
    