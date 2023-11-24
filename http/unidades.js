const {response, request} = require('express');
const Unidad = require('../models/unidad');

const getUnidades = async (req, res = response) => {

  const unidades = await Unidad.findAll();

  res.json(unidades);
}

const getUnidad = async (req = request, res = response) => {
  const { id } = req.params;
  const unidad = await Unidad.findByPk(id);

  res.json(unidad);
}

module.exports = {
  getUnidades,
  getUnidad
}

