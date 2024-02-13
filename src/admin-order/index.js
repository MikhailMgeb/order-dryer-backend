const express = require('express');
const router = express.Router();
const createOrder = require('./create-order');
const deleteOrder = require('./delete-order');

router.use(express.json());

router.post('/_create-order', createOrder)
router.delete('/_delete-order/:id', deleteOrder)


module.exports = router;