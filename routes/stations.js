const {Router} = require('express');
const { getStations } = require('../http/stations');

const router = Router();

router.get('/', getStations)


module.exports = router;