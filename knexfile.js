// Update with your config settings.
const localPgConnection = {
  host: 'localhost', // address to find the db server
  database: 'chat',
  user: 'Drew',
  password: 'pass',
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/dev.sqlite3"
    },
    useNullAsDefault: true
  },
  staging: {
    client: 'postgresql',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./database/migrations",
    }
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "./database/migrations"
    },
    useNullAsDefault : true,
    ssl : true,
  }

};
