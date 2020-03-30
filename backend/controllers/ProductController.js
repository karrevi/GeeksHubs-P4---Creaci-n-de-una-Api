const { Product, Category, OrderProduct } = require('../models/index.js')
const ProductController = {
    getAll(req,res){
        Product.findAll({
            include:[Category]
        })
        .then(products=>res.send(products))
        .catch(err=>{
            console.log(err)
        res.status(500).send({message:'Ha habido un problema al cargar los productos'})
        })
    },
    insert(req,res){
        Product.create({...req.body})
        .then(product=>res.send(product))
    },

    async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            await OrderProduct.destroy({
                where: {
                    ProductId: req.params.id
                }
            })
            res.send(
                'El producto ha sido eliminado'
            )
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=ProductController;