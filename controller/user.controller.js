const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const { ifError } = require('assert')
// const pass = fs.readFileSync("../pass.txt")

module.exports.postIndex = (req,res)=>{
    UserModel.findOne({
        username: req.body.username
    }).then((data)=>{
        if(data){
            res.json({mess:"username da ton tai"})
        }
        else{
            return UserModel.create(req.body)
        }
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.getIndex = (req,res)=>{
    UserModel.find()
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.getID = (req, res)=>{
    UserModel.findOne({_id:req.params.id})
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.putID = (req, res)=>{
    UserModel.updateOne(
        {_id:req.params.id,password:req.body.password,username:req.body.username},
        {password:req.body.newpassword}
    ).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.deleteID = (req, res)=>{
    UserModel.deleteOne({_id:req.params.id})
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.postLogin = (req, res)=>{
    UserModel.findOne({
        username: req.body.username,
        password:req.body.password})
    .then((data)=>{
        if(data){
            const token = jwt.sign({id: data._id}, 'khai')
            UserModel.updateOne({_id:data._id},{token:token})
            .then((data)=>{
                res.cookie('user',token,
                {expires:new Date(Date.now()+ 24*3600*1000*7)})
                res.json(data)
            })
        }else{
            res.json({message:'dang nhap lai'})
        }
    }).catch((err)=>{
        console.log(err)
    })
}