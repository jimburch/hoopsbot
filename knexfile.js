require("dotenv").config();
const pg = require("pg");

const { NODE_ENV } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DB_URL,
  },

  staging: {
    client: "pg",
    connection: process.env.DB_URL,
    ssl: NODE_ENV !== "development" && {
      sslmode: "require",
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DB_URL,
    ssl: NODE_ENV !== "development" && {
      sslmode: "require",
      rejectUnauthorized: false,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      extension: "ts",
    },
  },
};
