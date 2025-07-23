const repository = require('../repositories/animaisRepository');
const { animalSchema } = require('../utils/animalValidation');

class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = 'ApiError';
        this.statusCode = statusCode;
    }
}

const getAnimais = (req, res, next) => {
    try {
        const animais = repository.findAll();
        res.status(200).json(animais);
    } catch (error) {
        next(new ApiError('Erro ao listar animais.'));
    }
};

const createAnimal = (req, res, next) => {
    try {
        const data = animalSchema.parse(req.body);
        const animal = repository.create(data);
        res.status(201).json(animal);
    } catch (error) {
        next(new ApiError(error.message, 400));
    }
};

const updateAnimal = (req, res, next) => {
    const { id } = req.params;
    try {
        const data = animalSchema.parse(req.body);
        const updated = repository.update(id, data);
        if (!updated) return next(new ApiError('Animal não encontrado.', 404));
        res.status(200).json(updated);
    } catch (error) {
        next(new ApiError(error.message, 400));
    }
};

const deleteAnimal = (req, res, next) => {
    const { id } = req.params;
    try {
        const deleted = repository.remove(id);
        if (!deleted) return next(new ApiError('Animal não encontrado.', 404));
        res.status(204).send();
    } catch (error) {
        next(new ApiError('Erro ao deletar animal.'));
    }
};

module.exports = { getAnimais, createAnimal, updateAnimal, deleteAnimal };
