const { DataTypes } = require('sequelize');

const sequilize = require('../server');

const BookAuthor = sequilize.define('BookAuthor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


module.exports = BookAuthor;