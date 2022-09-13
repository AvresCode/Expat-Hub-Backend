const { Router } = require("express");
const router = new Router();
const Category = require("../models").category;
const Event = require("../models").event;

//http :4000/categories
//http --ignore-stdin :4000/categories
//http://localhost:4000/categories

router.get("/", async (req, res, next) => {
  try {
    const category = await Category.findAll({
      include: { model: Event },
    });

    res.send(category);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//http :/4000/categories/:id
//http --ignore-stdin :4000/categories
//http://localhost:4000/categories/:id

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Category.findByPk(id, { include: { model: Event } });

    console.log("category detail Response", response);
    res.send(response);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
