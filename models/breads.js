'use strict';
module.exports = (sequelize, DataTypes) => {
  const Breads = sequelize.define('Breads', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER
  }, {});
  Breads.associate = function(models) {
    // associations can be defined here
  };
  return Breads;
};