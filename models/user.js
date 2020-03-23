'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    image_path: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Product,{
      through:models.Product
    });
    };
  return User;
};