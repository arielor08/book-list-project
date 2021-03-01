const { Sequelize } = require('sequelize');
const {
  dbUsername,
  dbPassword,
  dbDatabase,
  dbHost,
} = require('./config/config');

const sequilize = new Sequelize({
    username: dbUsername,
    password: dbPassword,
    database: dbDatabase,
    host: dbHost,
    dialect: 'mysql'
});

module.exports = sequilize;