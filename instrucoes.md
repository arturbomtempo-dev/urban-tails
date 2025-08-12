# Instruções para Migrar o Projeto para Knex com Docker e PostgreSQL

Este documento contém um passo a passo completo para migrar seu projeto que usa arrays para persistência temporária, para usar um banco de dados PostgreSQL com Knex.js e Docker. Siga as etapas na ordem indicada para garantir que o projeto funcione corretamente.

---

## 1. Preparar o ambiente

### 1.1 Instalar dependências necessárias no seu projeto

No terminal, dentro da pasta do seu projeto, execute:

```bash
npm install knex pg dotenv
npm install --save-dev nodemon
```

-   `knex`: Query builder para banco SQL
-   `pg`: Driver PostgreSQL para Node.js
-   `dotenv`: Para carregar variáveis de ambiente
-   `nodemon`: Para desenvolvimento (opcional, mas recomendado)

---

## 2. Criar o arquivo `.env`

Na raiz do projeto, crie um arquivo `.env` com as seguintes variáveis (ajuste conforme preferir):

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=petshop_db
NODE_ENV=development
```

---

## 3. Criar o arquivo `docker-compose.yml`

Na raiz do projeto, crie o arquivo `docker-compose.yml` para subir o banco PostgreSQL:

```yaml
version: '1'
services:
    postgres:
        container_name: postgres-database
        image: postgres:17
        restart: unless-stopped
        ports:
            - '5432:5432'
        environment:
            POSTGRES_USER: ${POSTGRES_USER}
            POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
            POSTGRES_DB: ${POSTGRES_DB}
        volumes:
            - pg-data:/var/lib/postgresql/data

volumes:
    pg-data:
```

---

## 4. Criar o arquivo `knexfile.js`

Na raiz do projeto, crie o arquivo `knexfile.js` para configurar o Knex:

```js
require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
    ci: {
        client: 'pg',
        connection: {
            host: 'postgres',
            port: 5432,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        },
        migrations: {
            directory: './db/migrations',
        },
        seeds: {
            directory: './db/seeds',
        },
    },
};
```

---

## 5. Criar a pasta e o arquivo de conexão `db/db.js`

-   Crie a pasta `db` na raiz do projeto.
-   Dentro de `db`, crie o arquivo `db.js` com o seguinte conteúdo:

```js
const knexConfig = require('../knexfile');
const knex = require('knex');

const nodeEnv = process.env.NODE_ENV || 'development';
const config = knexConfig[nodeEnv];

const db = knex(config);

module.exports = db;
```

---

## 6. Subir o container do PostgreSQL

No terminal, execute o comando para subir o banco em Docker:

```bash
docker compose up -d
```

Verifique se o container está rodando com:

```bash
docker ps
```

---

## 7. Criar migrations para as tabelas

-   Crie a pasta `db/migrations` (se não existir).
-   Crie a migration para a tabela `animais`:

```bash
npx knex migrate:make create_animais_table
```

-   Crie a migration para a tabela `consultas`:

```bash
npx knex migrate:make create_consultas_table
```

---

## 8. Implementar as migrations

### 8.1 Migration `create_animais_table`

Edite o arquivo da migration criada para `animais` com o seguinte conteúdo:

```js
exports.up = async function (knex) {
    await knex.schema.createTable('animais', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.enu('especie', ['Cachorro', 'Gato']).notNullable();
        table.integer('idade').notNullable();
        table.boolean('adotado').notNullable();
        table.string('raca').notNullable();
        table.float('peso').notNullable();
        table.text('descricao').notNullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('animais');
};
```

---

### 8.2 Migration `create_consultas_table`

Edite o arquivo da migration criada para `consultas` com o seguinte conteúdo:

```js
exports.up = async function (knex) {
    await knex.schema.createTable('consultas', (table) => {
        table.increments('id').primary();
        table
            .integer('animalId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('animais')
            .onDelete('CASCADE');
        table.date('data').notNullable();
        table.text('descricao').notNullable();
        table.string('veterinario').notNullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('consultas');
};
```

---

## 9. Executar as migrations

Rode o comando abaixo para criar as tabelas no banco:

```bash
npx knex migrate:latest
```

---

## 10. Criar seeds iniciais (opcional)

-   Crie a pasta `db/seeds`.
-   Para criar seeds automáticos, execute:

```bash
npx knex seed:make initial_animais
npx knex seed:make initial_consultas
```

-   Edite os arquivos gerados em `db/seeds` para inserir dados iniciais, por exemplo:

```js
// db/seeds/initial_animais.js
exports.seed = async function (knex) {
    await knex('animais').del();
    await knex('animais').insert([
        {
            nome: 'Rex',
            especie: 'Cachorro',
            idade: 3,
            adotado: false,
            raca: 'Golden Retriever',
            peso: 25.5,
            descricao: 'Cachorro dócil e brincalhão.',
        },
        // ... outros animais
    ]);
};
```

---

## 11. Executar os seeds

Rode o comando para popular as tabelas:

```bash
npx knex seed:run
```

---

## 12. Ajustar os repositórios para usar Knex

-   Substitua o código que usava arrays por funções assíncronas que utilizam Knex para acessar o banco.
-   Remova o uso de UUIDs, pois o banco gerará os IDs automaticamente (campo `id` com auto incremento).
-   Exemplo para o repositório `animaisRepository.js`:

```js
const db = require('../db/db');
const { AppError } = require('../utils/errorHandler');

async function findAll() {
    try {
        return await db('animais').select('*').orderBy('id', 'asc');
    } catch (error) {
        throw new AppError(500, 'Erro ao buscar animais', [error.message]);
    }
}

async function findById(id) {
    try {
        return await db('animais').where({ id }).first();
    } catch (error) {
        throw new AppError(500, 'Erro ao buscar animal', [error.message]);
    }
}

async function create(data) {
    try {
        const [animal] = await db('animais').insert(data).returning('*');
        return animal;
    } catch (error) {
        throw new AppError(500, 'Erro ao criar animal', [error.message]);
    }
}

async function update(id, data) {
    try {
        const [animal] = await db('animais').update(data).where({ id }).returning('*');
        return animal || null;
    } catch (error) {
        throw new AppError(500, 'Erro ao atualizar animal', [error.message]);
    }
}

async function remove(id) {
    try {
        const deleted = await db('animais').where({ id }).del();
        return deleted > 0;
    } catch (error) {
        throw new AppError(500, 'Erro ao deletar animal', [error.message]);
    }
}

module.exports = { findAll, findById, create, update, remove };
```

---

## 13. Ajustar controllers para usar funções assíncronas e await

Exemplo para o controller `animaisController.js`:

```js
const repository = require('../repositories/animaisRepository');
const { animalSchema } = require('../utils/animalValidation');
const { AppError } = require('../utils/errorHandler');

const getAnimais = async (req, res, next) => {
    try {
        const animais = await repository.findAll();
        res.status(200).json(animais);
    } catch (error) {
        next(error);
    }
};

const createAnimal = async (req, res, next) => {
    try {
        const data = animalSchema.parse(req.body);
        const animal = await repository.create(data);
        res.status(201).json(animal);
    } catch (error) {
        next(error);
    }
};

// ... e assim por diante para update e delete
```

---

## 14. Testar a API

-   Use ferramentas como Postman ou Insomnia para testar as rotas e verificar se os dados estão sendo persistidos no banco.
-   Para visualizar o banco, você pode usar ferramentas como pgAdmin, DBeaver ou o próprio terminal psql.

---

## Comandos úteis

| Comando                      | Descrição                             |
| ---------------------------- | ------------------------------------- |
| `docker compose up -d`       | Sobe o container do PostgreSQL        |
| `docker compose down`        | Para e remove o container             |
| `npx knex migrate:make name` | Cria um arquivo de migration          |
| `npx knex migrate:latest`    | Executa todas as migrations pendentes |
| `npx knex seed:make name`    | Cria um arquivo de seed               |
| `npx knex seed:run`          | Executa os seeds                      |

---

Pronto! Seguindo esses passos seu projeto vai estar migrado para usar banco de dados PostgreSQL com Knex e Docker, com estrutura organizada, escalável e profissional.

Se precisar, posso ajudar também a gerar os arquivos atualizados dos repositórios, controllers e migrations para o seu projeto Petshop.
