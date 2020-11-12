'use strict';
module.exports = (sequelize, DataTypes) => {
  const MeasurementUnit = sequelize.define('MeasurementUnit', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  MeasurementUnit.associate = function(models) {
MeasurementUnit.belongsTo(models.ingredients, {foreignKey: "measurementUnitId}"} );
  return MeasurementUnit;
}};