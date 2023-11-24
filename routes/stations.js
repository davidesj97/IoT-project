const {Router} = require('express');
const { getStations, getStation } = require('../http/stations');

const router = Router();

router.get('/', getStations)
router.get('/:id', getStation)


module.exports = router;