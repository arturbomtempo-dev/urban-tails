const repository = require('../repositories/consultasRepository');
const animaisRepository = require('../repositories/animaisRepository');
const { consultaSchema } = require('../utils/consultaValidation');

class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
    }
}

const getConsultas = (req, res, next) => {
    try {
        const consultas = repository.findAll();
        res.status(200).json(consultas);
    } catch {
        throw new ApiError('Erro ao listar consultas.');
    }
};

const createConsulta = (req, res, next) => {
    try {
        const data = consultaSchema.parse(req.body);
        const animalExiste = animaisRepository.findById(data.animalId);

        if (!animalExiste) {
            throw new ApiError('Animal não encontrado para associar à consulta.', 404);
        }

        const consulta = repository.create(data);

        res.status(201).json(consulta);
    } catch (error) {
        throw new ApiError(error.message, 400);
    }
};

const updateConsulta = (req, res, next) => {
    const { id } = req.params;

    try {
        const data = consultaSchema.parse(req.body);
        const animalExiste = animaisRepository.findById(data.animalId);

        if (!animalExiste) {
            throw new ApiError('Animal não encontrado para associar à consulta.', 404);
        }

        const updated = repository.update(id, data);

        if (!updated) {
            throw new ApiError('Consulta não encontrada.', 404);
        }

        res.status(200).json(updated);
    } catch (error) {
        throw new ApiError(error.message, 400);
    }
};

const deleteConsulta = (req, res, next) => {
    const { id } = req.params;

    try {
        const deleted = repository.remove(id);

        if (!deleted) {
            throw new ApiError('Consulta não encontrada.', 404);
        }

        res.status(204).send();
    } catch {
        throw new ApiError('Erro ao deletar consulta.');
    }
};

module.exports = { getConsultas, createConsulta, updateConsulta, deleteConsulta };
