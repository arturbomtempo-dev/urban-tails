# Projeto: Urban Tails – API de Cadastro de Animais

Este repositório contém o desenvolvimento da **Urban Tails**, uma API fictícia criada para representar um sistema de gerenciamento de animais em um Pet Shop.  
O objetivo principal é ensinar de forma prática os conceitos de arquitetura MVC, boas práticas com Express, documentação com Swagger e validação de dados com Zod.

---

## 🐾 Sobre o Projeto

A Urban Tails simula o dia a dia de um sistema utilizado por pet shops para gerenciar o cadastro de animais.  
Com ele, é possível realizar operações como criar, atualizar, listar e remover registros de animais, garantindo a validação adequada dos dados enviados, além de uma estrutura organizada e documentação acessível via Swagger.

---

## 📋 Requisitos da API

A API possui apenas **uma entidade principal**, representando os animais. Cada animal deve conter os seguintes dados:

-   `id` (string): identificador único do animal (UUID gerado automaticamente)
-   `name` (string): nome do animal
-   `age` (number): idade do animal em anos
-   `species` (string): espécie do animal (ex: dog, cat, rabbit)
-   `breed` (string): raça do animal (livre)
-   `weight` (number): peso do animal em kg
-   `gender` (string): sexo do animal (ex: male, female, unknown)
-   `vaccinated` (boolean): indica se o animal está vacinado
-   `ownerName` (string): nome do responsável pelo animal
-   `admissionDate` (string): data de entrada no sistema (formato ISO)

> ⚠️ Todos os campos são obrigatórios no cadastro e devem ser validados com Zod.

---

## 🔧 Funcionalidades Implementadas

-   [x] Cadastro de animais (Create)
-   [x] Consulta de todos os animais ou por ID (Read)
-   [x] Atualização parcial dos dados de um animal (Update - PATCH)
-   [x] Remoção de registros (Delete)
-   [x] Validação completa dos dados com [Zod](https://zod.dev/)
-   [x] Uso de [UUID](https://www.npmjs.com/package/uuid) para identificação única
-   [x] Documentação completa da API com [Swagger](https://swagger.io/)
-   [x] Estrutura de código organizada no padrão MVC (Model, View, Controller)

---

## 💻 Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento deste projeto:

-   [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem de programação utilizada para implementar a API.
-   [Node.js](https://nodejs.org/): Ambiente de execução para JavaScript no back-end.
-   [Express.js](https://expressjs.com/pt-br/): Framework minimalista para criação de servidores e rotas.
-   [Zod](https://zod.dev/): Biblioteca de validação de esquemas utilizada para validar os dados recebidos.
-   [Swagger / Swagger UI Express](https://swagger.io/): Ferramenta de documentação interativa para APIs REST.
-   [UUID](https://www.npmjs.com/package/uuid): Geração de identificadores únicos universais.
-   [Nodemon](https://www.npmjs.com/package/nodemon): Utilitário para reinicialização automática durante o desenvolvimento.

---

Pronto para começar? Clone o repositório, instale as dependências e explore a arquitetura MVC na prática com validações e documentação integradas!
