const { z } = require('zod');

const animalSchema = z.object({
    nome: z.string().min(1, 'Nome não pode ser vazio.'),
    especie: z.enum(['Cachorro', 'Gato']),
    idade: z.number().int().nonnegative(),
    adotado: z.boolean(),
    raca: z.string().min(1, 'Raça é obrigatória.'),
    peso: z.number().positive('Peso deve ser maior que zero.'),
    descricao: z.string().min(5, 'Descrição deve ter pelo menos 5 caracteres.'),
});

module.exports = { animalSchema };
