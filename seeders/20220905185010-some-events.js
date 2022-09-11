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
          date: "2022-09-08 20:00:00",
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
          title: "After Summer Lunch",
          description:
            "I hope you had a great summer and enjoyed some time off! Let's meet up for a relaxed Saturday lunch to share nice food and summer memories:) This place looks very trendy and offers a special 3-course menu to share. Looking forward to seeing you there! ",
          date: "2022-09-20 19:00:00",
          city: "Amsterdam",
          address: "Valkenburgerstraat 223D 1068 Gv, 1011 MJ Amsterdam ",
          spots: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1657299156538-e08595d224ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 1,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Film Noir (English subs)",
          description:
            "Let's watch this excellent movie together! A Korean erotically smoldering flick according to a review in 'De Volkskrant'. ",
          date: "2022-09-13 18:00:00",
          city: "The Hague",
          address: "Filmhuis Den Haag, Spui 191, The Hague",
          spots: 15,
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662884004/test_upload/wdyhazkfjlvgo7lfesv5.jpg",
          userId: 5,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Luxury Winetasting with Matching Fingerfoods",
          description:
            "Bouzy is known for its high-quality wines with matching delicious foods. Get yourself to Bouzy and enjoy a luxury winetasting and the company of fellow expats and global minds. Get to know each other and have a nice evening. ",
          date: "2022-09-07 19:00:00",
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

        {
          title: "Delf historical center walking",
          description:
            "Would you like to discover Delft and all the things worth knowing about the city? Why not joining our group in the upcoming event? You will discover the most beautiful historic sights and hidden gems of Delft!",
          date: "2022-09-16 14:00:00",
          city: "Delf",
          address: "Kerkstraat 3, Delft",
          spots: 12,
          imageUrl:
            "https://images.unsplash.com/photo-1595442770112-a6bb516b043b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          userId: 3,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Biking tour",
          description:
            "Discover Utrecht by bike during this bike tour. Accompanied by a guide, you cycle from the starting point next to Central Station into the center. ",
          date: "2022-09-17 12:00:00",
          city: "Utrecht",
          address: "Central station, Utrecht",
          spots: 6,
          imageUrl:
            "https://images.unsplash.com/photo-1630910315693-99da9cf76efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1269&q=80",
          userId: 5,
          categoryId: 3,
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
