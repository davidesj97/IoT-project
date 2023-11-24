const {response, request} = require('express');
const Station = require('../models/station');

const getStations = async (req, res = response) => {
  const stations = await Station.findAll();

  res.json(stations);
}

const getStation = async (req = request, res = response) => {
  const { id } = req.params;
  const station = await Station.findByPk(id);

  res.json(station);
}

module.exports = {
  getStations,
  getStation
}