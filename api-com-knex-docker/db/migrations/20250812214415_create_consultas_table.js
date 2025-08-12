exports.up = async function (knex) {
    await knex.schema.createTable('consultas', (table) => {
        table.increments('id').primary();
        table
            .integer('animalId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('animais')
            .onDelete('CASCADE');
        table.date('data').notNullable();
        table.text('descricao').notNullable();
        table.string('veterinario').notNullable();
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('consultas');
};
