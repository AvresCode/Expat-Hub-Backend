"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Neda",
          lastName: "Amiri",
          email: "neda@neda.com",
          password: bcrypt.hashSync("neda", 10),
          city: "The Hague",
          birthDate: "1990-07-02",
          gender: "Female",
          nationality: "Polish",
          education: "Master of biology",
          imageUrl: "../images.myPhoto",
          isAmbassador: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Eli",
          lastName: "Amiri",
          email: "eli@eli.com",
          password: bcrypt.hashSync("eli", 10),
          city: "Rotterdam",
          birthDate: "1990-07-02",
          gender: "Female",
          nationality: "Dutch",
          education: "Nutrition science",
          imageUrl: "",
          isAmbassador: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Deniz",
          lastName: "Parsi",
          email: "deni@deni.com",
          password: bcrypt.hashSync("deni", 10),
          city: "Rotterdam",
          birthDate: "1990-07-02",
          gender: "Male",
          nationality: "Persian",
          education: "Business management",
          imageUrl: "",
          isAmbassador: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Zilan",
          lastName: "Arez",
          email: "zila@zila.com",
          password: bcrypt.hashSync("zila", 10),
          city: "The Hague",
          birthDate: "1985-06-02",
          gender: "Female",
          nationality: "Indonesian",
          education: "Architecture",
          imageUrl: "",
          isAmbassador: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Mat",
          lastName: "Smith",
          email: "mat@emat.com",
          password: bcrypt.hashSync("mat", 10),
          city: "Rotterdam",
          birthDate: "1985-06-02",
          gender: "Male",
          nationality: "British",
          education: "Information Technology",
          imageUrl: "",
          isAmbassador: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Hiva",
          lastName: "Nali",
          email: "hiva@hiva.com",
          password: bcrypt.hashSync("hiva", 10),
          city: "The Hague",
          birthDate: "1985-06-02",
          gender: "Male",
          nationality: "American",
          education: "Political science",
          imageUrl: "",
          isAmbassador: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Sara",
          lastName: "Amiri",
          email: "sara@sara.com",
          password: bcrypt.hashSync("sara", 10),
          city: "Delft",
          birthDate: "1985-06-02",
          gender: "Female",
          nationality: "South African",
          education: "Psychology",
          imageUrl: "",
          isAmbassador: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          firstName: "Eliott",
          lastName: "Lyam",
          email: "eliot@eli.com",
          password: bcrypt.hashSync("eliot", 10),
          city: "Amsterdam",
          birthDate: "1985-06-02",
          gender: "Male",
          nationality: "French",
          education: "Dentistry",
          imageUrl: "",
          isAmbassador: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
