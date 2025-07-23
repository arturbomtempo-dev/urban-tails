const { z } = require('zod');

const animalSchema = z.object({
    nome: z.string({ required_error: 'Nome é obrigatório.' }).min(1, 'Nome não pode ser vazio.'),
    especie: z.enum(['Cachorro', 'Gato'], {
        required_error: 'Espécie é obrigatória.',
        invalid_type_error: 'Espécie deve ser "cachorro" ou "gato".',
    }),
    idade: z
        .number({ required_error: 'Idade é obrigatória.' })
        .int('A idade deve ser um número inteiro.')
        .nonnegative('Idade não pode ser negativa.'),
    adotado: z.boolean({ required_error: 'Campo "adotado" é obrigatório.' }),
});

module.exports = { animalSchema };
