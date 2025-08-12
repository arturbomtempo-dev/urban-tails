const { z } = require('zod');

const consultaSchema = z.object({
    animalId: z.string().uuid(),
    data: z.string().min(1, 'Data é obrigatória.'),
    descricao: z.string().min(5, 'Descrição deve ter pelo menos 5 caracteres.'),
    veterinario: z.string().min(3, 'Nome do veterinário deve ter pelo menos 3 caracteres.'),
});

module.exports = { consultaSchema };
