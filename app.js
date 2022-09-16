const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser')
const UserRouter = require('./router/userRouter')
const PostRouter = require('./router/postRouter')
const IndexRouter = require('./router/indexRouter')
const ProductRouter = require('./router/productRouter')

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:false}))

app.use('/user', UserRouter)
app.use('/post', PostRouter)
app.use('/', IndexRouter)
app.use('/product', ProductRouter)

app.listen('4000')