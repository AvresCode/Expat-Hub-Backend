"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Board Game Night!",
          description:
            "On Thursdays we are organizing a Game Night! This night is meant for national and international people from inside and outside of the hostel. The purpose is to meet others, to learn about other languages, and to have fun while playing board games! ",
          date: "2022-09-10 20:00:00",
          city: "The Hague",
          address: "Cafe of The Golden Stork, Bierkade 22A, The Hague",
          spots: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          userId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Salsa Dance Try-out Sessions",
          description:
            "You are hereby welcome to join a try-out session of Salsa Beginners, Salsa Intermediate and Salsa Advance. You can attend these sessions and decide whether you want to join the course that starts the week after.",
          date: "2022-10-09 17:00:00",
          city: "Amsterdam",
          address: "Swing Latino School, Kuiperbergweg 31,  Amsterdam",
          spots: 30,
          imageUrl:
            "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 3,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Film Noir (English subs)",
          description:
            "Let's watch this excellent movie together! A Korean erotically smoldering flick according to a review in 'De Volkskrant'. ",
          date: "2022-09-11 18:00:00",
          city: "The Hague",
          address: "Filmhuis Den Haag, Spui 191, The Hague",
          spots: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
          userId: 5,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Luxury Winetasting with Matching Fingerfoods",
          description:
            "Let's watch this excellent movie together! A Korean erotically smoldering flick according to a review in 'De Volkskrant'. ",
          date: "2022-09-11 19:00:00",
          city: "The Hague",
          address: "Bouzy, Wine & Food, Denneweg 83, The Hague",
          spots: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("events", null, {});
  },
};
