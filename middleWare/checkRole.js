const UserModel = require('../models/userModel')

async function checkRole(req, res, next) {
    try {
        if(req.role === 'admin') {
            next()
        }else{
            res.json('khong co quuyen')
        }
    } catch (error) {
        res.json(error)
    }
}

module.exports = checkRole