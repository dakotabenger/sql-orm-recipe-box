'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    }
  }, {});
  Recipe.associate = function(models) {
  Recipe.hasMany(models.Instruction, { onDelete: 'CASCADE', hooks: true, foreignKey: 'recipeId'})  
  Recipe.hasMany(models.Ingredient, { onDelete: 'CASCADE', hooks: true, foreignKey: "recipeId"})
};
  return Recipe;
};