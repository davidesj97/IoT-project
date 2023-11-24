const {response, request} = require('express');
const Record = require('../models/record');

const getRecords = async (req, res = response) => {
  const records = await Record.findAll();

  res.json(records);
}

const getRecordsByUnitId = async (req = request, res = response) => {
  const {id} = req.params;
  const record = await Record.findAll({
    where: {
      unidad: id
    }
  })

  res.json(record);
}

const getRecordsByStationId = async (req = request, res = response) => {
  const {id} = req.params;
  const record = await Record.findAll({
    where: {
      estacion: id
    }
  })

  res.json(record);
}

module.exports = {
  getRecords,
  getRecordsByUnitId,
  getRecordsByStationId
}