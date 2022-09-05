'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userSkill.init({
    userId: DataTypes.INTEGER,
    skillId: DataTypes.INTEGER,
    canTeach: DataTypes.STRING,
    wantsToLearn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userSkill',
  });
  return userSkill;
};