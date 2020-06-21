const {onUpdateTrigger} = require('../../../../knexfile');
exports.up = function (knex, Promise) {

    return knex.schema
        .createTable('cities', function (table) {
            table.integer('id').primary();
            table.integer('country_id').notNullable();
            table.string('name', 255).notNullable();
            table.string('area', 255).defaultTo(null);
            table.string('region', 255).defaultTo(null);
            table.integer('created_at').defaultTo(knex.raw('extract(epoch from now())'));
            table.integer('updated_at').defaultTo(knex.raw('extract(epoch from now())'));
        })
        .then(() => knex.raw(onUpdateTrigger('cities')));
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable("cities");
};
