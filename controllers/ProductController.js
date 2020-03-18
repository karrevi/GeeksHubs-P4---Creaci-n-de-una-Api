const {Product} = require('../models/index.js')
const ProductController = {
    getAll(req,res){
        Product.finAll()
        .then(products=>res.send(products))
    }
}

module.exports=ProductController;