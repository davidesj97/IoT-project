const {Router} = require('express');
const { getRecords } = require('../http/records');

const router = Router();

router.get('/', getRecords)

module.exports = router;