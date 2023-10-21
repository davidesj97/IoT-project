
const {Router} = require('express');
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/unidades');

const router = Router();

router.get('/', getUsuarios)

router.post('/', postUsuarios)

router.put('/:id', putUsuarios)

router.delete('/', deleteUsuarios)

module.exports = router;