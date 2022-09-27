const router = require('express').Router();
const controller = require('../controller/product.controller')
const checkLogin = require('../middleWare/checkLogin')
const checkRole = require('../middleWare/checkRole')

router.get('/', checkLogin ,controller.getFind)
router.get('/findColor',checkLogin,checkRole, controller.getFindColor)

module.exports = router