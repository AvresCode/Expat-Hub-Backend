"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("events", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("events", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("comments", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("comments", "eventId", {
      type: Sequelize.INTEGER,
      references: {
        model: "events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("images", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("images", "eventId", {
      type: Sequelize.INTEGER,
      references: {
        model: "events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("attendees", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("attendees", "eventId", {
      type: Sequelize.INTEGER,
      references: {
        model: "events",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("events", "userId");
    await queryInterface.removeColumn("events", "categoryId");
    await queryInterface.removeColumn("comments", "userId");
    await queryInterface.removeColumn("comments", "eventId");
    await queryInterface.removeColumn("images", "userId");
    await queryInterface.removeColumn("images", "eventId");
    await queryInterface.removeColumn("attendees", "userId");
    await queryInterface.removeColumn("attendees", "eventId");
  },
};
