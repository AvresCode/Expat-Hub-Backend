"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "attendees",
      [
        {
          userId: 2,
          eventId: 4,
        },
        {
          userId: 5,
          eventId: 2,
        },
        {
          userId: 5,
          eventId: 4,
        },
        {
          userId: 6,
          eventId: 3,
        },
        {
          userId: 3,
          eventId: 1,
        },
        {
          userId: 7,
          eventId: 1,
        },
        {
          userId: 8,
          eventId: 2,
        },
        {
          userId: 6,
          eventId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("attendees", null, {});
  },
};
