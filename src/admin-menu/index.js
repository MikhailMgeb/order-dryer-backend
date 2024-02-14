const express = require('express');
const router = express.Router();
const createDish = require('./create-dish');
const deleteDish = require('./delete-dish');

router.use(express.json());

router.post('/_create-dish', createDish);
router.delete('/_delete-dish/:id', deleteDish);

module.exports = router;