const repository = require('../repositories/animaisRepository');
const { animalSchema } = require('../utils/animalValidation');
const { AppError } = require('../utils/errorHandler');

const getAnimais = async (req, res, next) => {
    try {
        const animais = await repository.findAll();
        res.status(200).json(animais);
    } catch (error) {
        next(error);
    }
};

const getAnimalById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const animal = await repository.findById(id);
        if (!animal) throw new AppError(404, 'Animal não encontrado');
        res.status(200).json(animal);
    } catch (error) {
        next(error);
    }
};

const createAnimal = async (req, res, next) => {
    try {
        const data = animalSchema.parse(req.body);
        const animal = await repository.create(data);
        res.status(201).json(animal);
    } catch (error) {
        next(error);
    }
};

const updateAnimal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = animalSchema.partial().parse(req.body);
        const animal = await repository.update(id, data);
        if (!animal) throw new AppError(404, 'Animal não encontrado para atualizar');
        res.status(200).json(animal);
    } catch (error) {
        next(error);
    }
};

const deleteAnimal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await repository.remove(id);
        if (!deleted) throw new AppError(404, 'Animal não encontrado para deletar');
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAnimais,
    getAnimalById,
    createAnimal,
    updateAnimal,
    deleteAnimal,
};
