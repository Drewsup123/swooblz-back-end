// const knex = require("knex");
// const config = require("../knexfile");
// const dbEnv = process.env.DB_ENV || "development";
// console.log(dbEnv);
// module.exports = knex(config[dbEnv]);
const dbEnv = process.env.DB_ENV || 'development';
const config = require('../knexfile.js')[dbEnv];
module.exports = require('knex')(config);