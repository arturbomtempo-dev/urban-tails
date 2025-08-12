const db = require('../db/db');
const { AppError } = require('../utils/errorHandler');

async function findAll() {
    try {
        return await db('consultas').select('*').orderBy('id', 'asc');
    } catch (error) {
        throw new AppError(500, 'Erro ao buscar consultas', [error.message]);
    }
}

async function findById(id) {
    try {
        return await db('consultas').where({ id }).first();
    } catch (error) {
        throw new AppError(500, 'Erro ao buscar consulta', [error.message]);
    }
}

async function create(data) {
    try {
        const [consulta] = await db('consultas').insert(data).returning('*');
        return consulta;
    } catch (error) {
        throw new AppError(500, 'Erro ao criar consulta', [error.message]);
    }
}

async function update(id, data) {
    try {
        const [consulta] = await db('consultas').update(data).where({ id }).returning('*');
        return consulta || null;
    } catch (error) {
        throw new AppError(500, 'Erro ao atualizar consulta', [error.message]);
    }
}

async function remove(id) {
    try {
        const deleted = await db('consultas').where({ id }).del();
        return deleted > 0;
    } catch (error) {
        throw new AppError(500, 'Erro ao deletar consulta', [error.message]);
    }
}

module.exports = { findAll, findById, create, update, remove };
