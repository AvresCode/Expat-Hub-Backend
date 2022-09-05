"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  item.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "item",
    }
  );
  return item;
};
