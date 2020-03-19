'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      allowNull:false,
      type: DataTypes.STRING
    },
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.CategoryId);
    Product.belongsToMany(models.Breads,{
      through:models.sweet,user
    });
  };
  return Product;
};