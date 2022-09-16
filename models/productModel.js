const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/MiniProject')

const ProductSchema = mongoose.Schema({
    class: String,
    name: String,
    price: Number,
    amount: Number,
},{collection: 'product'})

const ProductModel = mongoose.model('product',ProductSchema)

module.exports = ProductModel

// ProductModel.create({
//     class: "ao",
//     name: "polo",
//     price: 100000,
//     amount: 5,
// },{
//     class: "ao",
//     name: "shorthands",
//     price: 100000,
//     amount: 5,
// },{
//     class: "ao",
//     name: "vest",
//     price: 100000,
//     amount: 5,
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })