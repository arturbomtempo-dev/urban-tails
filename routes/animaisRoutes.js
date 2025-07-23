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
 *     summary: Lista todos os animais
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais
 */
router.get('/', controller.getAnimais);

/**
 * @swagger
 * /animais:
 *   post:
 *     summary: Cria um novo animal
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [nome, especie, idade]
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *                 enum: [cachorro, gato]
 *               idade:
 *                 type: number
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 */
router.post('/', controller.createAnimal);

/**
 * @swagger
 * /animais/{id}:
 *   put:
 *     summary: Atualiza um animal existente
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [nome, especie, idade]
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               especie:
 *                 type: string
 *                 enum: [cachorro, gato]
 *               idade:
 *                 type: number
 *     responses:
 *       200:
 *         description: Animal atualizado com sucesso
 */
router.put('/:id', controller.updateAnimal);

/**
 * @swagger
 * /animais/{id}:
 *   delete:
 *     summary: Remove um animal pelo ID
 *     tags: [Animais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Animal deletado com sucesso
 */
router.delete('/:id', controller.deleteAnimal);

module.exports = router;
