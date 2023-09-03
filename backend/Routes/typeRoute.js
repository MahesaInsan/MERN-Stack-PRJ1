const express = require('express');
const router = express.Router();
const { createType, getAllType, getType, deleteType, updateType } = require('../Controllers/transactionTypeController')

router.get('/', getAllType)
router.get('/:id', getType)
router.post('/new', createType)
router.patch('/:id', updateType)
router.delete('/:id', deleteType)

module.exports = router