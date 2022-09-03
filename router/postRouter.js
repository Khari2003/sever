const express = require('express')
const router = express.Router()
const controller = require('../controller/post.controller')

router.post('/',controller.postIndex)
router.delete('/:id', controller.deleteID)
router.put('/:id', controller.putID)
router.get('/', controller.getIndex)
router.get('/user',controller.getUser)
router.get('/next', controller.getNext)
router.get('/:id', controller.getID)

module.exports = router