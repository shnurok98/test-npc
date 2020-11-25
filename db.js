const { Sequelize } = require("sequelize");
const { connectionString } = require("./config");

const sequelize = new Sequelize(connectionString);

module.exports = sequelize;