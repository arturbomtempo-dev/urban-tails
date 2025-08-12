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
