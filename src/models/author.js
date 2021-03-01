const { DataTypes } = require('sequelize');

const sequilize = require('../server');

const Author = sequilize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});


module.exports = Author;