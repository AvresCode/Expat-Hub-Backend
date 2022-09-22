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
        {
          imageUrl:
            "https://images.unsplash.com/photo-1600729122009-158b0524da1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80",
          userId: 5,
          eventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1599925355047-669e976bcd69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 5,
          eventId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 5,
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1510067559750-c21e29b0a703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          userId: 5,
          eventId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1546872041-03da29ccc3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 5,
          eventId: 8,
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
