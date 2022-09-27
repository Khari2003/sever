const express = require('express')
const router = express.Router()
const controller = require('../controller/user.controller')
const multer  = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        // const arr = file.originalname.split('.')
        // const ext = arr[arr.length - 1]
        const ext = path.extname(file.originalname)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.'+ext)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/', controller.postIndex)
router.post('/login', controller.postLogin)
router.get('/', controller.getIndex)
router.get('/:id', controller.getID);
router.put('/:id', controller.putID)
router.delete('/:id', controller.deleteID);
router.put('/:id/avatar',upload.array([{name:'avatar',maxCount: 2},{name:'cmt',maxCount:2},{name:'licent',maxCount:5}]),controller.putAvatar)

module.exports = router