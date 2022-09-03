const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser')
const UserRouter = require('./router/userRouter')
const PostRouter = require('./router/postRouter')

const app = express()
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res)=>{
    // res.cookie('test','khai',{ expires:new Date(Date.now()+9000)})
    console.log(req.cookies)
    res.sendFile(path.join(__dirname,'./home.html'))
})
app.get('/user/:id/changePass', (req,res)=>{
    res.sendFile(path.join(__dirname,'./changePass.html'))
})
app.get('/find', (req,res)=>{
    res.sendFile(path.join(__dirname,'./find.html'))
})

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/user', UserRouter)
app.use('/post', PostRouter)

app.listen('4000')