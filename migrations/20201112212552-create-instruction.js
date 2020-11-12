'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specification: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      recipeId: {
        allowNull: false,
        references: { model: "Recipes" },
        type: Sequelize.INTEGER,
      },
      listOrder: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Instructions');
  }
};