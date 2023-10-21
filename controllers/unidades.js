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

const postUsuarios = async (req, res = response) => {
  const body = req.body;

  try {

    const usuario = new Unidad(body);
    await usuario.save();
    res.status(201).json(usuario)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en el server',
    })
  }

  
}

const putUsuarios = async (req = request, res = response) => {

  const id = req.params.id;
  const { body } = req;

  try {

    const unidad = await Unidad.findByPk(id);
    if(!unidad) {
      return res.status(404).json({
        message: "No existe el usuario con el id " + id,
      })
    }

    await unidad.update(body);

    res.json(unidad);

  } catch (error) {
    
  }

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

