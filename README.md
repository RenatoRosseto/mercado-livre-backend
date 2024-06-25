# Mercado Livre BFF API

Este projeto é um BFF (Backend for Frontend) construído com Node.js, Express e TypeScript, que fornece uma API para buscar e detalhar produtos do Mercado Livre.

[Meli Docs](https://developers.mercadolivre.com.br/pt_br)

## Scripts

#### Como baixar e iniciar o projeto

```bash
# Clonar o repositório
$ git clone https://github.com/RenatoRosseto/mercado-livre-backend.git

# Entrar no diretório
$ cd mercado-livre-backend

# Instalar as dependências
$ yarn install

# Iniciar o projeto
# O servidor será iniciado e estará disponível em http://localhost:3333.
$ yarn start
```

#### Build

```bash
# Build do projeto
$ yarn build
```

#### Testes

```bash
# Rodar os testes do projeto
$ yarn test
```

## Endpoints

### 1. Buscar Produtos

**Endpoint:** `/api/products?search=:query`

**Método:** GET

**Descrição:** Retorna uma lista de produtos com base na consulta da busca.

**Exemplo de Resposta:**

```json
{
  "query": "iphone",
  "categories": ["Celulares e Telefones", "Celulares e Smartphones"],
  "products": [
    {
      "id": "MLB3840418716",
      "title": "Apple iPhone 14 (128 Gb) - Estelar - Distribuidor Autorizado",
      "price": {
        "currency": "BRL",
        "amount": 4300,
        "decimals": 0
      },
      "picture_url": "http://http2.mlstatic.com/D_918579-MLM51559384401_092022-I.jpg",
      "condition": "new",
      "free_shipping": true
    },
    {
      "id": "MLB3394562837",
      "title": "Apple iPhone 14 (128 Gb) - Azul - Distribuidor Autorizado",
      "price": {
        "currency": "BRL",
        "amount": 4300,
        "decimals": 20
      },
      "picture_url": "http://http2.mlstatic.com/D_864844-MLM51559388062_092022-I.jpg",
      "condition": "new",
      "free_shipping": true
    }
  ]
}
```

### 2. Buscar Detalhes do Produto

**Endpoint:** `/api/productDetails/:id`

**Método:** GET

**Descrição:** Retorna os detalhes de um produto com base no ID do produto.

**Exemplo de Resposta:**

```json
{
  "categories": ["Celulares e Telefones", "Celulares e Smartphones"],
  "product": {
    "id": "MLB3394562837",
    "title": "Apple iPhone 14 (128 Gb) - Azul - Distribuidor Autorizado",
    "price": {
      "currency": "BRL",
      "amount": 4300,
      "decimals": 20
    },
    "picture_url": "http://http2.mlstatic.com/D_864844-MLM51559388062_092022-O.jpg",
    "condition": "new",
    "free_shipping": true,
    "description": "O iPhone 14  tem o sistema de câmera dupla mais impressionante em um iPhone, para fazer fotos espetaculares em pouca e muita luz...."
  }
}
```
