'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: DataTypes.STRING
  }, {});
  Recipes.associate = function(models) {
    // associations can be defined here
  };
  return Recipes;
};