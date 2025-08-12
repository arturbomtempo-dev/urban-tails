const repository = require('../repositories/animaisRepository');
const { animalSchema } = require('../utils/animalValidation');
const { AppError } = require('../utils/errorHandler');

const getAnimais = (req, res, next) => {
    try {
        const animais = repository.findAll();
        res.status(200).json(animais);
    } catch {
        throw new AppError(500, 'Erro ao listar animais.');
    }
};

const createAnimal = (req, res, next) => {
    try {
        const data = animalSchema.parse(req.body);
        const animal = repository.create(data);

        res.status(201).json(animal);
    } catch (error) {
        throw new AppError(400, error.message);
    }
};

const updateAnimal = (req, res, next) => {
    const { id } = req.params;
    try {
        const data = animalSchema.parse(req.body);
        const updated = repository.update(id, data);

        if (!updated) {
            throw new AppError(404, 'Animal não encontrado.');
        }

        res.status(200).json(updated);
    } catch (error) {
        throw new AppError(400, error.message);
    }
};

const deleteAnimal = (req, res, next) => {
    const { id } = req.params;

    try {
        const deleted = repository.remove(id);

        if (!deleted) {
            throw new AppError(404, 'Animal não encontrado.');
        }

        res.status(204).send();
    } catch {
        throw new AppError(500, 'Erro ao deletar animal.');
    }
};

module.exports = { getAnimais, createAnimal, updateAnimal, deleteAnimal };
