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
    client: 'sqlite3',
    useNullAsDefault : true,
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
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
    connection: {
      database: 'db_connection',
    },
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
