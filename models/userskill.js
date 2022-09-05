"use strict";
const { Model } = require("sequelize");
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
  userSkill.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      skillId: { type: DataTypes.INTEGER, allowNull: false },
      canTeach: { type: DataTypes.STRING, allowNull: false },
      wantsToLearn: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "userSkill",
    }
  );
  return userSkill;
};
