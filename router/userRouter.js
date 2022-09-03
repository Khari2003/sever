const express = require('express')
const router = express.Router()
const controller = require('../controller/user.controller')

router.post('/', controller.postIndex)
router.get('/', controller.getIndex)
router.get('/:id', controller.getID);
router.put('/:id', controller.putID)
router.delete('/:id', controller.deleteID);

module.exports = router