
exports.up = function(knex) {
    return knex.schema.createTable("genres", tbl => {
        tbl.uuid('id').notNullable().primary();
        tbl.string("name");
        tbl.string("description");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("genres");
};
