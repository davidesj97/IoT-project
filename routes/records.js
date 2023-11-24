const {Router} = require('express');
const { getRecords, getRecordsByUnitId, getRecordsByStationId } = require('../http/records');

const router = Router();

router.get('/', getRecords);
router.get('/unidad/:id', getRecordsByUnitId);
router.get('/estacion/:id', getRecordsByStationId);

module.exports = router;