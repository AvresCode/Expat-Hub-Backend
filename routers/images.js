// I do not use this router for the moment!
//
//

const { Router } = require("express");
const router = new Router();
const Image = require("../models").image;
const authMiddleware = require("../auth/middleware");

//get all images
//http :4000/images
//http --ignore-stdin :4000/images
//http://localhost:4000/images

router.get("/", async (req, res, next) => {
  try {
    const image = await Image.findAll();
    res.send(image);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

// post a new image
//   get token : http --ignore-stdin POST :4000/auth/login email="neda@neda.com" password="neda"
//http --ignore-stdin POST :4000/images/1 imageUrl="https://images.unsplash.com/photo-1641816983527-51a97eff6858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjg4NzM4NywiZXhwIjoxNjYyODk0NTg3fQ.pmpJartOJpqlbHp4wZzqe6Ij_SXcXkFFqSKsfZQOShM"

router.post("/:eventId", authMiddleware, async (req, res, next) => {
  try {
    const { imageUrl } = req.body;
    const { eventId } = req.params;
    const userId = req.user.id;
    if (!imageUrl) {
      return res.status(400).send("missing information");
    } else {
      const newImage = await Image.create({ imageUrl, eventId, userId });
      res.send({ newImage, message: "Image added!" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//update an image
//http --ignore-stdin PATCH :4000/images/4 imageUrl="https://images.unsplash.com/photo-1642009189383-56dc22a2862d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjg4NzM4NywiZXhwIjoxNjYyODk0NTg3fQ.pmpJartOJpqlbHp4wZzqe6Ij_SXcXkFFqSKsfZQOShM"
router.patch("/:imageId", authMiddleware, async (req, res, next) => {
  try {
    const { imageId } = req.params;
    const { imageUrl } = req.body;
    const imageToUpdate = await Image.findByPk(imageId);

    if (!imageToUpdate) {
      res.status(404).send("image not found");
    }

    const updated = await imageToUpdate.update({ imageUrl });

    res.send({ updated, message: "Image updated!" });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//delete image
//http --ignore-stdin DELETE :4000/images/4 authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjg4NzM4NywiZXhwIjoxNjYyODk0NTg3fQ.pmpJartOJpqlbHp4wZzqe6Ij_SXcXkFFqSKsfZQOShM"
router.delete("/:imageId", authMiddleware, async (req, res, next) => {
  try {
    const { imageId } = req.params;
    const imageToDelete = await Image.findByPk(imageId);
    await imageToDelete.destroy();

    res.send("Image deleted");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
