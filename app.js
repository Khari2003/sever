const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser')
const UserRouter = require('./router/userRouter')
const PostRouter = require('./router/postRouter')
const checkLogin = require('./public/js/checkLogin')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/home',checkLogin,(req,res)=>{
    // res.cookie('test','khai',{ expires:new Date(Date.now()+9000)})
    // console.log(req.cookies)
    res.sendFile(path.join(__dirname,'./home.html'))
})
app.get('/user/:id/changePass',checkLogin, (req,res)=>{
    res.sendFile(path.join(__dirname,'./changePass.html'))
})
app.get('/find',checkLogin, (req,res)=>{
    res.sendFile(path.join(__dirname,'./find.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'./login.html'))
})

app.use(express.urlencoded({extended:false}))

app.use('/user', UserRouter)
app.use('/post', PostRouter)

app.listen('4000')