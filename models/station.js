const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Estacion = db.define('station', {
  estacion_id: {
    type: DataTypes.STRING(45),
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
  }
})

module.exports = Estacion;