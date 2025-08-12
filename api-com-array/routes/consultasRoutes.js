const express = require('express');
const router = express.Router();
const controller = require('../controllers/consultasController');

/**
 * @swagger
 * tags:
 *   name: Consultas
 *   description: Gerenciamento de consultas veterinárias
 */

/**
 * @swagger
 * /consultas:
 *   get:
 *     summary: Lista todas as consultas cadastradas
 *     description: Retorna um array contendo todas as consultas registradas no sistema.
 *     tags: [Consultas]
 *     responses:
 *       200:
 *         description: Lista de consultas retornada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   animalId:
 *                     type: string
 *                   data:
 *                     type: string
 *                   descricao:
 *                     type: string
 *                   veterinario:
 *                     type: string
 */
router.get('/', controller.getConsultas);

/**
 * @swagger
 * /consultas:
 *   post:
 *     summary: Cria uma nova consulta veterinária
 *     description: Cria um registro de consulta associado a um animal existente. O campo `animalId` deve corresponder a um animal previamente cadastrado.
 *     tags: [Consultas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [animalId, data, descricao, veterinario]
 *             properties:
 *               animalId:
 *                 type: string
 *                 format: uuid
 *                 description: ID do animal ao qual a consulta está associada.
 *               data:
 *                 type: string
 *                 example: "2025-08-12"
 *                 description: Data da consulta no formato YYYY-MM-DD.
 *               descricao:
 *                 type: string
 *                 example: "Exame de rotina para verificar saúde geral."
 *               veterinario:
 *                 type: string
 *                 example: "Dr. João Silva"
 *     responses:
 *       201:
 *         description: Consulta criada com sucesso.
 *       400:
 *         description: Dados inválidos fornecidos no corpo da requisição.
 *       404:
 *         description: Animal não encontrado para associar à consulta.
 */
router.post('/', controller.createConsulta);

/**
 * @swagger
 * /consultas/{id}:
 *   put:
 *     summary: Atualiza uma consulta existente
 *     description: Modifica os dados de uma consulta previamente cadastrada, vinculada a um animal existente.
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da consulta a ser atualizada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [animalId, data, descricao, veterinario]
 *             properties:
 *               animalId:
 *                 type: string
 *                 format: uuid
 *               data:
 *                 type: string
 *                 example: "2025-08-15"
 *               descricao:
 *                 type: string
 *                 example: "Consulta de retorno para avaliação pós-cirúrgica."
 *               veterinario:
 *                 type: string
 *                 example: "Dra. Maria Oliveira"
 *     responses:
 *       200:
 *         description: Consulta atualizada com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       404:
 *         description: Consulta ou animal associado não encontrado.
 */
router.put('/:id', controller.updateConsulta);

/**
 * @swagger
 * /consultas/{id}:
 *   delete:
 *     summary: Remove uma consulta pelo ID
 *     description: Exclui uma consulta específica do sistema com base no seu ID.
 *     tags: [Consultas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da consulta a ser removida.
 *     responses:
 *       204:
 *         description: Consulta removida com sucesso (sem conteúdo no corpo da resposta).
 *       404:
 *         description: Consulta não encontrada.
 */
router.delete('/:id', controller.deleteConsulta);

module.exports = router;
