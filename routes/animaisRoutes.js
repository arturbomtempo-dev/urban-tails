const express = require('express');
const router = express.Router();
const controller = require('../controllers/animaisController');

/**
 * @swagger
 * tags:
 *   name: Animais
 *   description: Gerenciamento de animais do petshop
 */

/**
 * @swagger
 * /animais:
 *   get:
 *     summary: Lista todos os animais cadastrados
 *     description: Retorna um array contendo todos os animais registrados no sistema.
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   nome:
 *                     type: string
 *                   especie:
 *                     type: string
 *                   idade:
 *                     type: number
 *                   adotado:
 *                     type: boolean
 *                   raca:
 *                     type: string
 *                   peso:
 *                     type: number
 *                   descricao:
 *                     type: string
 */
router.get('/', controller.getAnimais);

/**
 * @swagger
 * /animais:
 *   post:
 *     summary: Cadastra um novo animal
 *     description: Cria um registro de animal no sistema, com informações como nome, espécie, idade e status de adoção.
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, especie, idade, adotado, raca, peso, descricao]
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Rex"
 *               especie:
 *                 type: string
 *                 enum: [Cachorro, Gato]
 *                 example: "Cachorro"
 *               idade:
 *                 type: number
 *                 example: 3
 *               adotado:
 *                 type: boolean
 *                 example: false
 *               raca:
 *                 type: string
 *                 example: "Golden Retriever"
 *               peso:
 *                 type: number
 *                 example: 25.5
 *               descricao:
 *                 type: string
 *                 example: "Cachorro dócil e brincalhão."
 *     responses:
 *       201:
 *         description: Animal criado com sucesso.
 *       400:
 *         description: Dados inválidos fornecidos no corpo da requisição.
 */
router.post('/', controller.createAnimal);

/**
 * @swagger
 * /animais/{id}:
 *   put:
 *     summary: Atualiza as informações de um animal existente
 *     description: Modifica os dados de um animal já cadastrado.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do animal a ser atualizado.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, especie, idade, adotado, raca, peso, descricao]
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Rex"
 *               especie:
 *                 type: string
 *                 enum: [Cachorro, Gato]
 *                 example: "Gato"
 *               idade:
 *                 type: number
 *                 example: 4
 *               adotado:
 *                 type: boolean
 *                 example: true
 *               raca:
 *                 type: string
 *                 example: "Siamês"
 *               peso:
 *                 type: number
 *                 example: 6.2
 *               descricao:
 *                 type: string
 *                 example: "Gato tranquilo e carinhoso."
 *     responses:
 *       200:
 *         description: Animal atualizado com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       404:
 *         description: Animal não encontrado.
 */
router.put('/:id', controller.updateAnimal);

/**
 * @swagger
 * /animais/{id}:
 *   delete:
 *     summary: Remove um animal pelo ID
 *     description: Exclui um animal específico do sistema com base no seu ID.
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do animal a ser removido.
 *     responses:
 *       204:
 *         description: Animal removido com sucesso (sem conteúdo no corpo da resposta).
 *       404:
 *         description: Animal não encontrado.
 */
router.delete('/:id', controller.deleteAnimal);

module.exports = router;
