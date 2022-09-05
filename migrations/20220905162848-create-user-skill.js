"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userSkills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      skillId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      canTeach: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      wantsToLearn: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("userSkills");
  },
};
