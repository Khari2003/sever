const ProductModel = require('../models/productModel')

module.exports.getFind = async function (req, res){
    try {

        if (req.query.high || req.query.low) {
            const priceFindOj = {}
            if(req.query.high) {
                priceFindOj['$lte']=req.query.high
            }
            if(req.query.low) {
                priceFindOj['$gte']=req.query.low
            }
            const data = await ProductModel.find({
                price:priceFindOj
            })
            res.json(data)
        } else {
            const data = await ProductModel.find({name: req.query.name});
            res.json(data)
        }
    } catch (error) {
        res.json(error)
    }
} 
module.exports.getFindColor = async function (req, res){
    try {
        const colorArr = req.query.color.split(',')
        const data = await ProductModel.find({color:{$in: colorArr}})
        res.json(data)
    } catch (error) {
        console.log(error)
    }
}