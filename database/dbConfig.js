const knex = require("knex");
const config = require("../knexfile");
const dbEnv = process.env.DB_ENV || "development";
console.log(dbEnv);
module.exports = knex(config[dbEnv]);