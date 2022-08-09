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
    client: "postgres",
    connection: {
      database: "vas",
      user: "oshing",
      password: "oshin123"
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
