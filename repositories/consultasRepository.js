const { v4: uuidv4 } = require('uuid');

const consultas = [];

const findAll = () => consultas;

const findById = (id) => consultas.find((c) => c.id === id);

const create = (data) => {
    const novaConsulta = { id: uuidv4(), ...data };
    consultas.push(novaConsulta);
    return novaConsulta;
};

const update = (id, data) => {
    const index = consultas.findIndex((c) => c.id === id);

    if (index !== -1) {
        consultas[index] = { ...consultas[index], ...data };
        return consultas[index];
    }

    return null;
};

const remove = (id) => {
    const index = consultas.findIndex((c) => c.id === id);

    if (index !== -1) {
        consultas.splice(index, 1);
        return true;
    }

    return false;
};

module.exports = { findAll, findById, create, update, remove };
