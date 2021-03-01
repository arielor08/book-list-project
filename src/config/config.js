const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDatabase: process.env.DB_DATABASE,
  dbHost: process.env.DB_HOST,
};
