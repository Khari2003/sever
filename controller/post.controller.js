const PostModel = require('../models/postModel')
const UserModel = require('../models/userModel')

module.exports.getIndex = async function (req, res) {
    try {
        const data = await PostModel.find(
            req.query
        )
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.getUser = async function (req,res){
    try {
        const data = await UserModel.findOne({username: req.query.username})
        if(data){
            const user = await PostModel.find({author: data._id})
            res.json(user)
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports.getNext = async function (req,res){
    try {
        const data = await PostModel.find(
            req.query
        )
        .skip(req.query.skip)
        .limit(req.query.limit)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.getID = async function (req,res){
    try {
        const data = await PostModel.findOne({
            _id:req.params.id
        })
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.postIndex = async function (req,res){
    try {
        const data = await PostModel.create({
            title:req.body.title,
            content:req.body.content,
            author:req.body.author
        })
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.deleteID = async function (req,res){
    try {
        const data = await PostModel.deleteOne({
            _id:req.params.id
        })
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.putID = async function (req,res){
    try {
        const data = await PostModel.updateOne({_id:req.params.id},req.body)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}