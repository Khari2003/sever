const mongoose = require('mongoose')
const UserModel = require('./userModel')
mongoose.connect('mongodb://localhost/MiniProject')
mongoose.Types.ObjectId.isValid('your id here');

const PostSchema = mongoose.Schema({
    title:String,
    content:String,
    author:{
        type:String,
        ref:'user',
    },
},{collection:'post'})

const PostModel = mongoose.model('post', PostSchema)

module.exports = PostModel

// PostModel.create({
//     title:'test',
//     content:'test',
//     author:'62f4799c4b4e45e5880147b5'
// }).then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

// PostModel.find({like:"62f4799c4b4e45e5880147b6"})
// .populate('like')
// .then((data)=>{console.log(data[0])})
// .catch((err)=>{console.log(err)})