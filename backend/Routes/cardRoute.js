const express = require('express')
const router = express.Router()
const { getAllCard, getCard, createCard, deleteCard, updateCard } = require('../Controllers/cardController');

router.get('/', getAllCard)
router.get('/:id', getCard)
router.post('/new', createCard)
router.delete('/:id', deleteCard)
router.patch('/:id', updateCard)

module.exports = router