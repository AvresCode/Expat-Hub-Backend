const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const { SALT_ROUNDS } = require("../config/constants");

const router = new Router();

//login
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, user: user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

//signup
//http --ignore-stdin POST :4000/auth/signup firstName=alan lastName=sdi email=alan@alan.com password=1234 city=lahe birthdate=1990 gender=male nationality=german education=master imageUrl=""
router.post("/signup", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    city,
    birthDate,
    gender,
    nationality,
    education,
    imageUrl,
  } = req.body;

  if (!firstName || !lastName || !email || !password || !city) {
    return res.status(400).send("Please provide all required information");
  }

  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      city,
      birthDate,
      gender,
      nationality,
      education,
      imageUrl,
      isAmbassador,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, user: newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues });
});

//http :4000/auth/users
//http --ignore-stdin :4000/auth/users
//http://localhost:4000/auth/users
router.get("/users", async (req, res, next) => {
  try {
    const user = await User.findAll();
    // const user = await User.findAll({ attributes: { exclude: ["password"] } });
    res.send(user);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
