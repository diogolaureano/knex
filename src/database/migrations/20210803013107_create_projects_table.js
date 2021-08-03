const { onUpdateTrigger } = require("../../../knexfile");

exports.up = async knex => knex.schema.createTable('projects', table => {
    table.increments('id')
    table.text('titles')

    //Relacionamento de tabelas
    table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

    table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('projects')))


exports.down = async knex => knex.schema.dropTable('projects')