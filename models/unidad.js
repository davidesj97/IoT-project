const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Unidad = db.define('unidad', {
  unidad_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  ruta: {
    type: DataTypes.STRING,
  }
})

module.exports = Unidad;

