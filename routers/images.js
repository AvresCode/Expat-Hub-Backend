const { Router } = require("express");
const router = new Router();
const Image = require("../models").image;
const authMiddleware = require("../auth/middleware");

//get all images
//http :4000/images
//http --ignore-stdin :4000/images
//http://localhost:4000/images
router.get("/", async (request, response, next) => {
  try {
    const image = await Image.findAll();
    response.send(image);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
