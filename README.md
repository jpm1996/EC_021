# Projeto Gerador de Memes

# Integrantes!

- Gustavo Marins Bitencourt.
- João Paulo Martins de Oliveira.

## Bibliotecas/Módulos utilizados!

- [Axios](https://github.com/axios/axios): Cliente HTTP baseado em Promises, foi utilizado para fazer requisições;
- [Dotenv](https://github.com/motdotla/dotenv): Utilizada para orquestrar as variáveis ambiente de um projeto;
- [Mongoose](https://mongoosejs.com/): Comunicação com o banco de dados;
- [Nodemon](https://nodemon.io/): Utilizado durante o desenvolvimento da aplicação para rodar o servidor;
- [Restify](http://restify.com/): Utilizado para criação e mapeamento das rotas junto ao [restify-router](https://github.com/ukayani/restify-router);

## Como configurar o projeto!

Comece configurando o arquivo `.env` presente na raíz. Use arquivo [.env.example](.env.example) como exemplo, ele contém as configurações necessárias para o arquivo `.env`.
Dentro de [.env.example](.env.example) você encontrará as seguintes variáveis:

- PORTA: Porta na qual o servidor será executado. Caso você não utilize a porta 5000, é necessária a alteração no no arquivo [Dockerfile](Dockerfile), no campo EXPOSE;
- DB_URL: URL do banco de dados;
- DB_NAME: Nome do banco de dados;
- AUTH_URL: URL do servidor que é utilizada para autenticação das rotas de `login` e de `validateToken`.

## Como criar a imagem Docker!

Na pasta raiz do projeto, execute o comando `docker build -t {image_name} .`, sendo `{image_name}` o nome da imagem que será criada.

## Como rodar o projeto!

Para rodar o projeto execute o comando `docker run -d --name {container_name} -p {exposed_port}:{local_port} {image_name}`, nos quais:

- `d`: utilizado para não deixar o terminal alocado para a aplicação (detach);
- `container_name`: o nome do container que será criado;
- `exposed_port`: porta que o container vai expor para acessos externos; \(campo **EXPOSE** no [Dockerfile](Dockerfile))
- `local_port`: porta que a aplicação está expondo internamente no container \(campo **EXPOSE** no [Dockerfile](Dockerfile));
- `image_name`:nome da imagem gerada no passo anterior ([criação da imagem Docker](#como-criar-a-imagem-docker)).
