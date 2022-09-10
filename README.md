
# Mettzer Article Search

O Mettzer Article Search se trata de uma aplicação onde é possível pesquisar artigos científicos fornecidos por uma [API](https://core.ac.uk/docs/#!/all/search) e favoritá-los.

## Stack e ferramentas utilizadas

**Front-end:** React, Typescript, Axios, Eslint, React Icons.


## Funcionalidades

- Pesquisar artigos científicos.
- Favoritar e desfavoritar artigos, salvos no localStorage, e filtrá-los por título.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:ecioferraz/mettzer-article-search.git
```

Entre no diretório do projeto

```bash
  cd mettzer-article-search
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```


## Variáveis de Ambiente

Para rodar o projeto localmente, você vai precisar de uma chave de acesso à API. Você pode solicitar a chave de acesso em https://core.ac.uk/services/api/.

Após receber a chave de acesso, a adicione à seguinte variável de ambiente no seu .env:

`REACT_APP_API_KEY`



## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```

Para verificar cobertura de testes, rode o seguinte comando

```bash
  npm run test:coverage
```


## Autores

- [@ecioferraz](https://www.github.com/ecioferraz)

