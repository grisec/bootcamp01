'use strict';
module.exports = (sequelize, DataTypes) => {
  var registrarPremios = sequelize.define('registrarPremios', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    valorAproximado: DataTypes.DECIMAL,
    patrocinador: DataTypes.INTEGER,
    estado: DataTypes.INTEGER
  }, {});
  registrarPremios.associate = function(models) {
    // associations can be defined here
  };
  return registrarPremios;
};