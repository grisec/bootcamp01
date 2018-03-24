'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(60),
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      direccion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      ciudad_id: {
        type: Sequelize.INTEGER
        // allowNull: false
      },
      latitud: {
        type: Sequelize.STRING
      },
      longitud: {
        type: Sequelize.STRING
      },
      lugar: {
        type: Sequelize.STRING
        // allowNull: false
      },
      fecha_inicio: {
        type: Sequelize.DATE
        // allowNull: false
      },
      fecha_fin: {
        type: Sequelize.DATE
        // allowNull: false
      },
      hora_inicio: {
        type: Sequelize.TIME
        // allowNull: false
      },
      hora_fin: {
        type: Sequelize.TIME
        // allowNull: false
      },
      imagen_url: {
        type: Sequelize.STRING
      },
      cantidad_lugares: {
        type: Sequelize.INTEGER
        // allowNull: false
      },
      tipo_evento_id: {
        type: Sequelize.INTEGER
        // allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Eventos');
  }
};