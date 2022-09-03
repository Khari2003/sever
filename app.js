const express = require('express');
const path = require('path');
const UserRouter = require('./router/userRouter')
const PostRouter = require('./router/postRouter')

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res)=>{
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