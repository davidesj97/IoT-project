const {response, request} = require('express');

const getUsuarios = (req, res = response) => {
  res.json('get API - controlador')
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
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
}

