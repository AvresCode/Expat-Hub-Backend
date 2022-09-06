"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          text: "I enjoyed the event! ",
          userId: 7,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Amazing!",
          userId: 5,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I will be joining again!",
          userId: 6,
          eventId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Nice to meet you all!",
          userId: 3,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {});
  },
};
