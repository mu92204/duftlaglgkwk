import { DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DB_HOST } from "../constants/env.js";

export const config = {
  database: {
    database: DB_NAME,
    host: DB_HOST,
    password: DB_PASSWORD,
    port: DB_PORT,
    user: DB_USER,
    },
};