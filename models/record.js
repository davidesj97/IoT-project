const { DataTypes } = require('sequelize');
const db = require('../database/connection');
const Unit = require('./unidad'); // Importa el modelo de la tabla 'units'
const Station = require('./station'); // Importa el modelo de la tabla 'stations'

const Record = db.define('registro', {
  registro_id: {
    type: DataTypes.STRING(45),
    primaryKey: true
  },
  fecha_llegada: {
    type: DataTypes.DATE,
  },
  unidad: {
    type: DataTypes.STRING(45),
    references: {
      model: Unit,
      key: 'unidad_id'
    }
  },
  estacion: {
    type: DataTypes.STRING(45),
    references: {
      model: Station,
      key: 'estacion_id'
    }
  }
})

module.exports = Record;