/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  return await knex.schema.createTable("takes", (t) => {
    t.increments("id");
    t.string("take");
    t.integer("hot").defaultTo(0);
    t.integer("cold").defaultTo(0);
    t.integer("shares").defaultTo(0);
    t.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  return await knex.schema.dropTable("takes");
};
