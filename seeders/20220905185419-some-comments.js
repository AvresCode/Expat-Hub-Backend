"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "comments",
      [
        {
          text: "Awesome beers!! ",
          userId: 7,
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Hi guys, nice to meet you all! ",
          userId: 5,
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Same here! ",
          userId: 7,
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Such a beautiful city!",
          userId: 5,
          eventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I will be joining again!",
          userId: 6,
          eventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Nice to meet you all!",
          userId: 3,
          eventId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Same here!",
          userId: 5,
          eventId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Thank you for this amazing event!",
          userId: 8,
          eventId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          text: "Looking forward to meet you all!",
          userId: 2,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "I will join!",
          userId: 4,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          text: "Looking forward to meet you all!",
          userId: 5,
          eventId: 5,
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
