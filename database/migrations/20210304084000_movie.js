const { table } = require("../../config/dbConfig");

exports.up = function(knex) {
    return knex.schema.createTable("movies", tbl => {
        tbl.uuid('id').notNullable().primary();
        tbl.string("name");
        tbl.string("description");
        tbl.date("releaseDate");
        tbl.uuid('genre');
        tbl.bigInteger('duration');
        tbl.float('rating');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("movies");
};
