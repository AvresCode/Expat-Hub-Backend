const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Event = require("../models").event;
const Comment = require("../models").comment;
const Image = require("../models").image;
const authMiddleware = require("../auth/middleware");

//get comments
//http :4000/comments
//http --ignore-stdin :4000/comments
//http://localhost:4000/comments
router.get("/", authMiddleware, async (request, response, next) => {
  try {
    const comment = await Comment.findAll();
    response.send(comment);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// post a new comment
//   get token : http --ignore-stdin POST :4000/auth/login email="neda@neda.com" password="neda"
//http --ignore-stdin POST :4000/comments/2 text=great  authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjg4NzM4NywiZXhwIjoxNjYyODk0NTg3fQ.pmpJartOJpqlbHp4wZzqe6Ij_SXcXkFFqSKsfZQOShM"

router.post("/:eventId", authMiddleware, async (req, res, next) => {
  try {
    const { text } = req.body;
    const { eventId } = req.params;
    const userId = req.user.id;
    if (!text) {
      return res.status(400).send("missing information");
    } else {
      const newComment = await Comment.create({ text, eventId, userId });
      res.send({ newComment, message: "Comment added!" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update a comment
//http --ignore-stdin PATCH :4000/comments/2/5 text=amazing authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjg4NzM4NywiZXhwIjoxNjYyODk0NTg3fQ.pmpJartOJpqlbHp4wZzqe6Ij_SXcXkFFqSKsfZQOShM"
router.patch("/:eventId/:commentId", authMiddleware, async (req, res, next) => {
  try {
    const { eventId, commentId } = req.params;
    const { text } = req.body;
    const userId = req.user.id;
    const commentToUpdate = await Comment.findByPk(commentId);

    if (!commentToUpdate) {
      res.status(404).send("User not found");
    }

    const updated = await commentToUpdate.update({ text, userId, eventId });

    res.send(updated);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
