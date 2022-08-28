const mongoose = require('mongoose')
const UserModel = require('./userModel')
const PostModel = require('./postModel')
mongoose.connect('mongodb://localhost/MiniProject')

const CommentSchema = mongoose.Schema({
    content: String,
    idUser:{
        type:String,
        ref:'user'
    },
    idPost:{
        type:String,
        ref:'post'
    }
},{collection:'comment'})

const CommentModel = mongoose.model('comment', CommentSchema)

module.exports = CommentModel

// CommentModel.create({
//     content:'test',
//     idUser:'62f4799c4b4e45e5880147b5',
//     idPost:'62f47a68c3853c9f06e74f0a'
// }).then((data)=> {
//     console.log(data)
// }).catch((err)=> {
//     console.log(err)
// })

// CommentModel.find()
// .populate('idUser')
// .populate('idPost')
// .then((data)=> {console.log(data)})
// .catch((err)=>{console.log(err)})