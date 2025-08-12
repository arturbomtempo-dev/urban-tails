exports.seed = async function (knex) {
    await knex('animais').del();
    await knex('animais').insert([
        {
            nome: 'Rex',
            especie: 'Cachorro',
            idade: 3,
            adotado: false,
            raca: 'Golden Retriever',
            peso: 25.5,
            descricao: 'Cachorro dócil e brincalhão.',
        },
    ]);
};
