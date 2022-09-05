"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false },
      spots: { type: DataTypes.INTEGER, allowNull: false },
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
