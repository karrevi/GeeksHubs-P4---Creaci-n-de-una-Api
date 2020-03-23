const { Product, Category } = require('../models/index.js')
const ProductController = {
    getAll(req,res){
        Product.finAll({
            include:[Category]
        })
        .then(products=>res.send(products))
    },
    insert(req,res){
        Product.create({...req.body})
        .then(product=>res.send(product))
    }
}

module.exports=ProductController;