const {response, request} = require('express');
const Record = require('../models/record');

const getRecords = async (req, res = response) => {
  const records = await Record.findAll();

  res.json(records);
}

module.exports = {
  getRecords
}