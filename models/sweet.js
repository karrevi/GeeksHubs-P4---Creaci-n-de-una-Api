'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sweet = sequelize.define('Sweet', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER,
    unidad: DataTypes.INTEGER
  }, {});
  Sweet.associate = function(models) {
    // associations can be defined here
  };
  return Sweet;
};