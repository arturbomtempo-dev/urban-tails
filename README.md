<div  align="center" id="about">
    <h1 align="center">
        Chapter Backend – Repositório de Apoio
    </h1>
    <p align="center">
        Este é um projeto de API RESTful desenvolvido para simular o sistema de cadastro de animais de um pet shop fictício chamado Urban Tails. O objetivo principal é fornecer um exemplo prático e didático para os alunos da minha mentoria no projeto Journey Backend, realizado em parceria entre o WebTech e a LEVTY. A aplicação foi construída com foco no ensino de conceitos essenciais de desenvolvimento backend, como a arquitetura MVC, validação de dados com Zod, rotas RESTful, tratamento de erros, uso de UUID e documentação com Swagger.
    </p>
    <img 
        src="./resources/banner.png"
        alt="Banner image"
    />
</div>
<br>
<div align="center">
    <a href="https://github.com/arturbomtempo-dev/urban-tails" target="_blank">
        <img src="https://img.shields.io/badge/feito_com-Node.js-43853D" alt="Made with Node.js">
    </a>
    <a href="https://github.com/arturbomtempo-dev/urban-tails" target="_blank">
        <img src="https://img.shields.io/badge/npm-v11.3.0-blue" alt="NPM version">
    </a>
    <a href="https://github.com/arturbomtempo-dev/urban-tails" target="_blank">
        <img src="https://img.shields.io/badge/status-completo-green" alt="Status: Completed">
    </a>
    <a href="https://github.com/arturbomtempo-dev/urban-tails/blob/main/LICENSE.md" target="_blank">
        <img src="https://img.shields.io/badge/license-MIT-red" alt="MIT License">
    </a>
</div>

---

<div id="table-of-contents"></div>

## 📋 Tabela de conteúdos

-   [Sobre](#about)
-   [Tabela de conteúdos](#table-of-contents)
-   [O que você encontrará neste repositório](#features)
-   [Configuração e Execução da Aplicação](#setup-and-run-the-application)
-   [Tecnologias](#technologies)
-   [Autor](#author)
-   [Licença](#license)

<div id="features"></div>

## 📝 Funcionalidades

-   [x] Cadastro de animais no sistema
-   [x] Consulta de todos os animais ou de um animal específico por ID
-   [x] Atualização parcial dos dados de um animal
-   [x] Remoção de registros de animais
-   [x] Documentação da API gerada com Swagger (OpenAPI)

<div id="setup-and-run-the-application"></div>

## 📁 Configuração e Execução da Aplicação

### ⚙️ Pré-requisitos

Antes de começar, você precisa ter as seguintes ferramentas instaladas na sua máquina: [Git](https://git-scm.com) e [Node.js](https://nodejs.org/).

Também é recomendável utilizar um editor de código como o [Visual Studio Code](https://code.visualstudio.com/).

### 🚀 Como Rodar a Aplicação Localmente

```bash
# Clone este repositório
$ git clone https://github.com/arturbomtempo-dev/urban-tails.git

# Acesse a pasta do projeto
$ cd {nome_da_pasta}

# Execute o arquivo principal
$ node server.js
```

> Obs.: Certifique-se de que o arquivo server.js esteja configurado corretamente como o ponto de entrada do seu projeto. Se o nome do arquivo for diferente, ajuste o comando de execução conforme necessário.

Após a execução, o servidor será iniciado — geralmente na porta `3000`.

Acesse a aplicação no navegador através do endereço:

```plaintext
http://localhost:3000
```

<div id="technologies"></div>

## 💻 Tecnologias

As seguintes tecnologias foram utilizadas ao longo do desenvolvimento deste projeto:

-   [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript): Linguagem de programação utilizada para construir toda a lógica da aplicação no lado do servidor.
-   [Node.js](https://nodejs.org/): Ambiente de execução JavaScript no lado do servidor, utilizado para rodar a API de forma eficiente.
-   [Express.js](https://expressjs.com/pt-br/): Framework web minimalista para Node.js, que facilita a criação de rotas e o controle da aplicação.
-   [Zod](https://zod.dev/): Biblioteca de validação de dados TypeScript-first utilizada para garantir a integridade e a consistência dos dados recebidos pela API.
-   [Swagger (OpenAPI)](https://swagger.io/specification/): Ferramenta utilizada para gerar a documentação interativa da API, facilitando testes e integração com outros sistemas.

<div id="author"></div>

## 👨🏻‍💻 Autor

---

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/96635074?v=4" width=115><br><sub>Artur Bomtempo</sub>](https://arturbomtempo.dev/) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------: |

Desenvolvido por Artur Bomtempo 👋🏻. Entre em contato:

[![Gmail Badge](https://img.shields.io/badge/-arturbcolen@gmail.com-D14836?style=flat-square&logo=Gmail&logoColor=white&link=mailto:arturbcolen@gmail.com)](mailto:arturbcolen@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/-Artur%20Bomtempo-0A66C2?style=flat-square&logo=LinkedIn&logoColor=white&link=https://www.linkedin.com/in/artur-bomtempo/)](https://www.linkedin.com/in/artur-bomtempo/)
[![Instagram Badge](https://img.shields.io/badge/-@arturbomtempo.dev-E4405F?style=flat-square&logo=Instagram&logoColor=white&link=https://www.instagram.com/arturbomtempo.dev/)](https://www.instagram.com/arturbomtempo.dev/)

<div id="license"></div>

## 📜 Licença

Copyright (c) 2025 Artur Bomtempo Colen

Por meio deste, é concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e dos arquivos de documentação associados (o "Software"), para tratar
no Software sem restrição, incluindo, sem limitação, os direitos
de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e permitir que pessoas a quem o Software seja fornecido o façam, sujeito às seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas
as cópias ou porções substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER NATUREZA, EXPRESSA OU
IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
ADEQUAÇÃO A UM FIM ESPECÍFICO E NÃO INFRAÇÃO. EM NENHUM CASO OS
AUTORES OU TITULARES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRAS
RESPONSABILIDADES, SEJA EM UMA AÇÃO DE CONTRATO, AGRAVO OU DE OUTRA FORMA, DECORRENTES DE,
OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
SOFTWARE.
