'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    IdCliente: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    Nif: DataTypes.INTEGER,
    date: DataTypes.INTEGER
  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
  };
  return Clientes;
};