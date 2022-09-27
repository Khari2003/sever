const router = require('express').Router();
const checkLogin = require('../middleWare/checkLogin')
const checkRole = require('../middleWare/checkRole')
const path = require('path')

router.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname, '../view/signup.html'))
})
router.get('/findProduct', checkLogin ,(req,res)=>{
    res.sendFile(path.join(__dirname, '../view/findProduct.html'))
})
router.get('/home',checkLogin,(req,res)=>{
    // res.cookie('test','khai',{ expires:new Date(Date.now()+9000)})
    // console.log(req.cookies)
    res.sendFile(path.join(__dirname,'../view/home.html'))
})
router.get('/user/:id/changePass',checkLogin, (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/changePass.html'))
})
router.get('/user/:id/updateInfo',checkLogin, (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/changeInfo.html'))
})
router.get('/find',checkLogin,checkRole, (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/find.html'))
})
router.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'../view/login.html'))
})

module.exports = router