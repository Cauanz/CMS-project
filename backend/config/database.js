const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DEV_DB_NAME, process.env.DEV_DB_USER, process.env.DEV_DB_PASSWORD, {
  host: process.env.DEV_DB_HOST,
  dialect: "postgres",
  logging: false
})

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL");
  } catch (error) {
    console.error("An error ocurred trying to connect to PostgreSQL", error);
  }
}

sequelize.sync()
  .then(() => console.log("Tables created/sync"))
    .catch((err) => console.log("Error trying to create/sync tables", err))

connectDB();

module.exports = sequelize;