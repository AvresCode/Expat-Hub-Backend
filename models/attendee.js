"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class attendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      attendee.belongsToMany(models.user, { foreignKey: "userId" });
      attendee.belongsToMany(models.event, { foreignKey: "eventId" });
    }
  }
  attendee.init(
    {},
    {
      sequelize,
      modelName: "attendee",
    }
  );
  return attendee;
};
