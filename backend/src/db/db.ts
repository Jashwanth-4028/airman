import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "skynet_epr",
  password: "Jash@2005",
  port: 5432
});