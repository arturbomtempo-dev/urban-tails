exports.up = async function (knex) {
    await knex.schema.createTable('animais', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.enu('especie', ['Cachorro', 'Gato']).notNullable();
        table.integer('idade').notNullable();
        table.boolean('adotado').notNullable();
        table.string('raca').notNullable();
        table.float('peso').notNullable();
        table.text('descricao').notNullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('animais');
};
