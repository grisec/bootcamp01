'use strict';
module.exports = (sequelize, DataTypes) => {
  var patrocinadores = sequelize.define('patrocinadores', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.TEXT,
    descripcion: DataTypes.TEXT
  }, {});
  patrocinadores.associate = function(models) {
    // associations can be defined here
  };
  return patrocinadores;
};