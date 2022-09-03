const UserModel = require('../models/userModel')

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