"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "users",
      "city",
      { type: Sequelize.STRING, allowNull: false },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "city", {});
  },
};
