"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "city",
      { type: Sequelize.STRING, allowNull: false },
      {}
    );
    await queryInterface.addColumn(
      "users",
      "birthDate",
      { type: Sequelize.DATE },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "city", {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "birthDate", {});
  },
};
