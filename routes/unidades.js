
const {Router} = require('express');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios, getUsuario } = require('../controllers/unidades');

const router = Router();

router.get('/', getUsuarios)

router.get('/:id', getUsuario)

router.post('/', postUsuarios)

router.put('/:id', putUsuarios)

router.delete('/', deleteUsuarios)

module.exports = router;