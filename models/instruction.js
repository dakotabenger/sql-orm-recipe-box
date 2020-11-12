'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    specification: DataTypes.TEXT
  }, {});
  Instruction.associate = function(models) {
    // associations can be defined here
  };
  return Instruction;
};