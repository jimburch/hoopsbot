require("dotenv").config();
const pg = require("pg");

const NODE_ENV = process.env.NODE_ENV;
const DB_URL = process.env.DB_URL;

module.exports = {
  development: {
    client: "pg",
    connection: DB_URL,
  },

  staging: {
    client: "pg",
    connection: DB_URL,
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
      extension: "js",
    },
  },

  production: {
    client: "pg",
    connection: DB_URL,
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
      extension: "js",
    },
  },
};
