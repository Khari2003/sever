const mongoose = require('mongoose')
mongoose.Types.ObjectId.isValid('your id here');
mongoose.connect('mongodb://localhost/MiniProject');
const UserSchema = mongoose.Schema({
    username:String,
    password:String,
    list:[String]
},{collection:'user'})

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel;

// UserModel.create({
//     username:'khai',
//     password:'khai'
// },{
//     username:'xuan',
//     password:'xuan'
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// UserModel.updateOne(
//     {_id:'62e7061ef3eb77c911471181'},
//     {name:"Nguyen Xuan Khai"}
// ).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// UserModel.find({$or:[{age:{$lte:18}},{age:{$gte:20}}]})
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// UserModel.find()
// .sort('name')
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// UserModel.find()
// .limit(2)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// UserModel.find()
// .skip(2)
// .limit(1)
// .then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

