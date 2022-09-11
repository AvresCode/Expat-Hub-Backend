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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895521/test_upload/b9hqdbdhnjq1urgntm2v.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895581/test_upload/r9qbjpwqtlqkiuwiw5y5.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895623/test_upload/ghrqlbcqfu6uamclvebc.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662896077/test_upload/khqpv5xijhbahbsqt4dw.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895652/test_upload/rkbian1yylrtbacunova.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662896034/test_upload/mxam6xmz7hzshtx9bnx5.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895870/test_upload/xhxuelpsz7qp5xefos0b.jpg",
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
          imageUrl:
            "http://res.cloudinary.com/delvoxvyc/image/upload/v1662895836/test_upload/pbn0webuyjdgfjulrfmv.jpg",
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
