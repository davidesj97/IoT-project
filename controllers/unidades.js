const {response, request} = require('express');
const Unidad = require('../models/unidad');

const getUsuarios = async (req, res = response) => {

  const unidades = await Unidad.findAll();

  res.json({unidades});
}

const getUsuario = async (req = request, res = response) => {

  const { id } = req.params;

  const unidad = await Unidad.findByPk(id);

  if(unidad) {
    res.json(unidad);
  } else {
    res.status(404).json({
      message: `No existe una unidad con el id ${id}`
    })
  }

}

const postUsuarios = (req, res = response) => {
  const body = req.body;

  res.status(201).json({
    message: 'post API - controlador',
    body
  })
}

const putUsuarios = (req = request, res = response) => {

  const id = req.params.id;
  const query = req.query;

  res.json({
    message: 'post API - controlador',
    id,
    query
  })
}

const deleteUsuarios = (req, res = response) => {
  res.json('delete API - controlador')
}

module.exports = {
  getUsuarios,
  getUsuario,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
}

