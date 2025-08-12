const repository = require('../repositories/consultasRepository');
const { consultaSchema } = require('../utils/consultaValidation');
const { AppError } = require('../utils/errorHandler');

const getConsultas = async (req, res, next) => {
    try {
        const consultas = await repository.findAll();
        res.status(200).json(consultas);
    } catch (error) {
        next(error);
    }
};

const getConsultaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const consulta = await repository.findById(id);
        if (!consulta) throw new AppError(404, 'Consulta não encontrada');
        res.status(200).json(consulta);
    } catch (error) {
        next(error);
    }
};

const createConsulta = async (req, res, next) => {
    try {
        const data = consultaSchema.parse(req.body);
        const consulta = await repository.create(data);
        res.status(201).json(consulta);
    } catch (error) {
        next(error);
    }
};

const updateConsulta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = consultaSchema.partial().parse(req.body);
        const consulta = await repository.update(id, data);
        if (!consulta) throw new AppError(404, 'Consulta não encontrada para atualizar');
        res.status(200).json(consulta);
    } catch (error) {
        next(error);
    }
};

const deleteConsulta = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await repository.remove(id);
        if (!deleted) throw new AppError(404, 'Consulta não encontrada para deletar');
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getConsultas,
    getConsultaById,
    createConsulta,
    updateConsulta,
    deleteConsulta,
};
