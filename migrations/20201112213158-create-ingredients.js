'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ingredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.NUMERIC(5,2)
      },
      measurementUnitId: {
        type: Sequelize.INTEGER,
        references: {model: 'MeasurementUnits'}
      },
      foodStuff: {
        type: Sequelize.STRING(500)
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {model: 'Recipes'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ingredients');
  }
};