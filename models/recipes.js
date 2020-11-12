'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipes = sequelize.define('Recipes', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    }
  }, {});
  Recipes.associate = function(models) {
  Recipes.hasMany(models.Instruction, { onDelete: 'CASCADE', hooks: true, foreignKey: 'recipeId'})  
  Recipes.hasMany(models.ingredients, {foreignKey: "recipeId"})
};
  return Recipes;
};