"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          imageUrl:
            "https://images.unsplash.com/photo-1586524425669-d5c202f7ce63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1056&q=80",
          userId: 2,
          eventId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1542401520-180a59daad21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2177&q=80",
          userId: 5,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1518619745898-93e765966dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80",
          userId: 5,
          eventId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("images", null, {});
  },
};
