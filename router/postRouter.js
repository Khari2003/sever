const PostModel = require('../models/postModel')
const UserModel = require('../models/userModel')
const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
    PostModel.create({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.delete('/:id',(req,res)=>{
    PostModel.deleteOne({
        _id:req.params.id
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.put('/:id',(req,res)=>{
    PostModel.updateOne({_id:req.params.id},req.body)
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/:id',(req,res)=>{
    PostModel.findOne({
        _id:req.params.id
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/',(req,res)=>{
    PostModel.find(
        req.query
    )
    .skip(req.query.skip)
    .limit(req.query.limit)
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/user',(req,res)=>{
    console.log(req.query)
    res.json(123)
})


module.exports = router