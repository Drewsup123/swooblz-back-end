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

  production: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      directory: "./database/migrations"
    },
  }

};
