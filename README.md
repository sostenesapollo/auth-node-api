
# Auth Node API

## Run

#### Install docker and docker-compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

#### Clone and run app
```bash
  git clone https://github.com/sostenesapollo/auth-node-api.git
  cd auth-node-api
  docker-compose up
```

## Features

- Login
- Run migrations and seed ( automatically creates a test user )
- Register users
- Modify users
- Delete users
- List users


## Adminer

- For a quick view of the database, after launching docker-compose go to [Adminer](http://localhost:8080)
- User: **root**
- Password : **123**

