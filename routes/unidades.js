
const {Router} = require('express');
const { getUnidades } = require('../http/unidades');

const router = Router();

router.get('/', getUnidades)


module.exports = router;