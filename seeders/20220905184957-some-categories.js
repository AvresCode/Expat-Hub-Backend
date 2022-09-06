"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Leisure and entertainment",
          imageUrl:
            "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Food and drink",
          imageUrl:
            "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sport and nature",
          imageUrl:
            "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Culture and art",
          imageUrl:
            "https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
