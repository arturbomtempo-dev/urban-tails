const repository = require('../repositories/consultasRepository');
const animaisRepository = require('../repositories/animaisRepository');
const { consultaSchema } = require('../utils/consultaValidation');
const { AppError } = require('../utils/errorHandler');

const getConsultas = (req, res, next) => {
    try {
        const consultas = repository.findAll();
        res.status(200).json(consultas);
    } catch {
        throw new AppError(500, 'Erro ao listar consultas.');
    }
};

const createConsulta = (req, res, next) => {
    try {
        const data = consultaSchema.parse(req.body);
        const animalExiste = animaisRepository.findById(data.animalId);

        if (!animalExiste) {
            throw new AppError(404, 'Animal não encontrado para associar à consulta.');
        }

        const consulta = repository.create(data);

        res.status(201).json(consulta);
    } catch (error) {
        throw new AppError(400, error.message);
    }
};

const updateConsulta = (req, res, next) => {
    const { id } = req.params;

    try {
        const data = consultaSchema.parse(req.body);
        const animalExiste = animaisRepository.findById(data.animalId);

        if (!animalExiste) {
            throw new AppError(404, 'Animal não encontrado para associar à consulta.');
        }

        const updated = repository.update(id, data);

        if (!updated) {
            throw new AppError(404, 'Consulta não encontrada.');
        }

        res.status(200).json(updated);
    } catch (error) {
        throw new AppError(400, error.message);
    }
};

const deleteConsulta = (req, res, next) => {
    const { id } = req.params;

    try {
        const deleted = repository.remove(id);

        if (!deleted) {
            throw new AppError(404, 'Consulta não encontrada.');
        }

        res.status(204).send();
    } catch {
        throw new AppError(500, 'Erro ao deletar consulta.');
    }
};

module.exports = { getConsultas, createConsulta, updateConsulta, deleteConsulta };
