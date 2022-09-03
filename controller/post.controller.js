const PostModel = require('../models/postModel')
const UserModel = require('../models/userModel')

module.exports.getIndex = (req, res) => {
    PostModel.find(
        req.query
    )
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.getUser = (req,res)=>{
    console.log(req.query)
    UserModel.findOne({username: req.query.username})
    .then((data)=>{
        return PostModel.find({
            author: data._id
        }).then((data)=>{res.json(data)})
        .catch((err)=>{res.json(err)})
    })
    .catch((err)=>{res.json(err)})
}
module.exports.getNext = (req,res)=>{
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
}
module.exports.getID = (req,res)=>{
    PostModel.findOne({
        _id:req.params.id
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.postIndex = (req,res)=>{
    PostModel.create({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.deleteID = (req,res)=>{
    PostModel.deleteOne({
        _id:req.params.id
    }).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
module.exports.putID =  (req,res)=>{
    PostModel.updateOne({_id:req.params.id},req.body)
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}