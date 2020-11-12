'use strict';
module.exports = (sequelize, DataTypes) => {
  const ingredients = sequelize.define('ingredients', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    recipeId: DataTypes.INTEGER
  }, {});
  ingredients.associate = function(models) {
    ingredients.belongsTo(models.Recipes, {foreignKey:"recipeId"})
    ingredients.hasOne(models.MeasurementUnit, {foreignKey: "measurementUnitId"})

  };
  return ingredients;
};