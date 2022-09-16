const router = require('express').Router();
const controller = require('../controller/product.controller')
const checkLogin = require('../middleWare/checkLogin')

router.get('/', checkLogin ,controller.getIndex)

module.exports = router