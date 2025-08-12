const { v4: uuidv4 } = require('uuid');

const animais = [];

const findAll = () => animais;

const findById = (id) => animais.find((a) => a.id === id);

const create = (data) => {
    const novoAnimal = { id: uuidv4(), ...data };
    animais.push(novoAnimal);
    return novoAnimal;
};

const update = (id, data) => {
    const index = animais.findIndex((a) => a.id === id);

    if (index !== -1) {
        animais[index] = { ...animais[index], ...data };
        return animais[index];
    }

    return null;
};

const remove = (id) => {
    const index = animais.findIndex((a) => a.id === id);

    if (index !== -1) {
        animais.splice(index, 1);
        return true;
    }

    return false;
};

module.exports = { findAll, findById, create, update, remove };
