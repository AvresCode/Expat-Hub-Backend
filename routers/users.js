const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Event = require("../models").event;

//http :4000/users
//http --ignore-stdin :4000/users
//http://localhost:4000/users

router.get("/", async (req, res, next) => {
  try {
    const user = await User.findAll({
      include: { model: Event },
      attributes: { exclude: ["password"] },
    });

    res.send(user);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
