import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log(config.password);

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  port: config.db_port,
  host: config.host,
  dialect: "postgres",
  storage: ":memory:",
});
