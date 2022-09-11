"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "attendees",
      [
        {
          userId: 2,
          eventId: 4,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 5,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 5,
          eventId: 2,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          eventId: 7,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          eventId: 4,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          eventId: 3,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          eventId: 7,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          eventId: 1,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          eventId: 1,
          status: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 1,
          eventId: 1,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 1,
          eventId: 3,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 4,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 5,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          eventId: 6,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          eventId: 3,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          userId: 8,
          eventId: 5,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          eventId: 2,
          status: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("attendees", null, {});
  },
};
