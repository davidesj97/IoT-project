const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Unidad = db.define('unidad', {
  unidad_id: {
    type: DataTypes.STRING(45),
    primaryKey: true,
  },
  ruta: {
    type: DataTypes.STRING(45),
  }
})

module.exports = Unidad;

