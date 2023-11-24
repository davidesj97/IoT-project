
const {Router} = require('express');
const { getUnidades, getUnidad } = require('../http/unidades');

const router = Router();

router.get('/', getUnidades)
router.get('/:id', getUnidad)


module.exports = router;