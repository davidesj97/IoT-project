const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_URI, {
  dialect: 'postgres',
  protocol: 'postgres'
});

module.exports = db;