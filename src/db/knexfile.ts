import type { Knex } from "knex";
import dotenv from 'dotenv';
import path from 'path';

// Update with your config settings.

// dotenv.config({
//   path:__dirname+'../../.env'
// })

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

const config: { [key: string]: Knex.Config } = {


  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  

};

// module.exports = config;
export default config;
