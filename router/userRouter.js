const UserModel = require('../models/userModel');
const express = require('express')
const router = express.Router()

router.post('/',(req,res)=>{
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
})

router.get('/',(req,res)=>{
    UserModel.find()
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.get('/:id',(req, res)=>{
    UserModel.findOne({_id:req.params.id})
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
});

router.put('/:id',(req, res)=>{
    UserModel.updateOne(
        {_id:req.params.id,password:req.body.password,username:req.body.username},
        {password:req.body.newpassword}
    ).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
})

router.delete('/:id',(req, res)=>{
    UserModel.deleteOne({_id:req.params.id})
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
});

router.get('/test',(req,res)=>{
    console.log(req.query)
    res.json(123)
})

module.exports = router