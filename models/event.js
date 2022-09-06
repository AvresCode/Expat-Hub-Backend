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
      event.hasMany(models.image, { foreignKey: "eventId" });
      event.hasMany(models.comment, { foreignKey: "eventId" });
      event.belongsTo(models.user, { foreignKey: "userId" });
      event.belongsTo(models.category, { foreignKey: "categoryId" });
      event.belongsTo(models.category, { foreignKey: "categoryId" });
      event.belongsToMany(models.user, {
        as: "going",
        through: "attendees",
        foreignKey: "eventId",
      });
    }
  }
  event.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      time: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      address: { type: DataTypes.STRING, allowNull: false }, //latitude, longitude
      spots: { type: DataTypes.INTEGER, allowNull: false },
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      modelName: "event",
    }
  );
  return event;
};
