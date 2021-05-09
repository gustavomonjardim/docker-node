# Desafio Docker - Full Cycle

## Passos para rodar

1. Faça o build do projeto

```shell
docker-compose build
```

2. Execute o projeto

```shell
docker-compose up
```

3. Acesse a URL: localhost:8080

Você deverá ver o título: **Full Cycle Rocks!**, seguido da lista de usuários cadastrados no banco de dados.
Cada vez que recarregar a página um novo usuário será adicionado ao banco de dados, incrementando a lista.

4. Adicionar um usuário com um nome customizado

Caso queira adicionar um usuário com um nome diferente do padrão basta passar o query parameter `name` na URL, por exemplo:

```
localhost:3000?name=João
```
