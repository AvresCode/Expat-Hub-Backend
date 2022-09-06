"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.user, { foreignKey: "userId" });
      comment.belongsTo(models.event, { foreignKey: "eventId" });
    }
  }
  image.init(
    {
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "image",
    }
  );
  return image;
};
