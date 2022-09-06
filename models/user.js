"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.event, { foreignKey: "userId" });
      user.hasMany(models.image, { foreignKey: "userId" });
      user.hasMany(models.comment, { foreignKey: "userId" });
      user.belongsToMany(models.event, {
        through: "attendees",
        foreignKey: "eventId",
      });
    }
  }
  user.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      birthDate: DataTypes.DATE,
      gender: DataTypes.STRING,
      nationality: DataTypes.STRING,
      education: DataTypes.STRING,
      imageUrl: DataTypes.TEXT,
      isAmbassador: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
