'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proveedores = sequelize.define('Proveedores', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    Nif: DataTypes.INTEGER,
    ProveId: DataTypes.INTEGER
  }, {});
  Proveedores.associate = function(models) {
    // associations can be defined here
  };
  return Proveedores;
};