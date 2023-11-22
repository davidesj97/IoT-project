const {response, request} = require('express');
const Station = require('../models/station');

const getStations = async (req, res = response) => {
  const stations = await Station.findAll();

  res.json(stations);
}

module.exports = {
  getStations
}