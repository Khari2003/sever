const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const fs = require('fs')
const { ifError } = require('assert')

module.exports.postIndex = async function (req,res){
    try {
        const data = await UserModel.findOne({
            username: req.body.username
        })
        if(data){
            res.json({mess:"username da ton tai"})
        }
        else{
            const password = await bcrypt.hash(req.body.password,10)
            await UserModel.create({
                username: req.body.username,
                password: password
            })
            res.json('success')
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports.getIndex = async function (req,res){
    try {
        const data = await UserModel.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.getID = async function (req, res){
    try {
        const data = await UserModel.findOne({_id:req.params.id})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.putID = async function (req, res){
    try {
        const data = await UserModel.updateOne(
            {_id:req.params.id,password:req.body.password,username:req.body.username},
            {password:req.body.newpassword}
        )
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.deleteID = async function (req, res){
    try {
        const data = await UserModel.deleteOne({_id:req.params.id})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.postLogin = async function (req, res){
    try {
        const data = await UserModel.findOne({
            username: req.body.username,
        })
        if(data){
            const checkPass = await bcrypt.compare(req.body.password, data.password)
            if(checkPass){ 
                const token = jwt.sign({id: data._id}, 'khai')
                await UserModel.updateOne({_id:data._id},{token:token})
                res.cookie('user',token,
                {expires:new Date(Date.now()+ 24*3600*1000*7)})
                res.json(data)
            }else{
                res.json('sai pass')
            }
        }else{
            res.json({message:'dang nhap lai'})
        }
    } catch (error) {
        console.log(error)
    }
}