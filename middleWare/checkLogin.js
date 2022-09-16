const UserModel = require('F:/sever/models/userModel');
const jwt = require('jsonwebtoken');

function checkLogin(req, res,next){
    const cookie = req.cookies.user
    if(cookie){
        const id = jwt.verify(cookie,'khai').id
        UserModel.findOne({_id: id,token:cookie})
        .then((data)=>{
            if(data){
                next()
            }else{
                res.redirect('/login')
            }
        }).catch((err) =>{
            res.json(err)
        })
    }else{
        res.redirect('/login')
    }
}

module.exports = checkLogin