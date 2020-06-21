const {onUpdateTrigger} = require('../../../../knexfile');
exports.up = function (knex, Promise) {

    return knex.schema
        .createTable('countries', function (table) {
            table.integer('id').primary();
            table.string('name', 255).unique();
            table.integer('created_at').defaultTo(knex.raw('extract(epoch from now())'));
            table.integer('updated_at').defaultTo(knex.raw('extract(epoch from now())'));
        })
        .then(() => knex.raw(onUpdateTrigger('countries')));
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTable("countries");
};
