const { DataTypes } = require('sequelize');

const sequilize = require('../server');

const Book = sequilize.define('Book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT,
});

module.exports = Book;
