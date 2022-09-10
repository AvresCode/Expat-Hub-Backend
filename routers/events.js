const { Router } = require("express");
const router = new Router();
const User = require("../models").user;
const Event = require("../models").event;
const Attendee = require("../models").attendee;
const authMiddleware = require("../auth/middleware");

//get all the events for HomePage
//http :/4000/events
//http --ignore-stdin :4000/events
//http://localhost:4000/events

router.get("/", async (req, res, next) => {
  try {
    const eventResponse = await Event.findAll({
      include: [
        {
          model: User,
          as: "going",
          through: { attributes: ["userId", "eventId", "status"] },
        },
      ],
    });
    console.log("eventResponse", eventResponse);
    res.send(eventResponse);
  } catch (e) {
    console.log("all events router error", e.message);
    next(e);
  }
});

//

//get details page for an event
//http :/4000/event/:id
//http --ignore-stdin :4000/events
//http://localhost:4000/events/:id (hardcode the id when trying)

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const eventDetailsResponse = await Event.findByPk(id, {
      include: { model: User, as: "going" },
    });
    console.log("detail Response", eventDetailsResponse);
    res.send(eventDetailsResponse);
  } catch (e) {
    console.log("detail router error", e.message);
    next(e);
  }
});

//   get token : http --ignore-stdin POST :4000/auth/login email="neda@neda.com" password="neda"
// http --ignore-stdin PATCH :4000/events/4 status=false authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjYzODg3NCwiZXhwIjoxNjYyNjQ2MDc0fQ.kQqnVyykAvw5OY-2_rTq-aJ-7qhnlqK-EScAURikKxA"
// Get the userId from authMiddleware
// http PATCH :4000/events/1  status=false
router.patch("/:eventId", authMiddleware, async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const userId = req.user.id;
    const { status } = req.body;
    if (status === undefined) {
      res.status(400).send("Please provide status");
      return;
    }
    const attendee = await Attendee.findOne({
      where: { eventId: eventId, userId: userId },
    });
    if (attendee) {
      attendee.update({ status });
      return res
        .status(200)
        .send({ message: "Status updated", attendee: attendee });
    } else {
      const newAttendee = await Attendee.create({ userId, eventId, status });
      return res
        .status(200)
        .send({ message: "Status updated", attendee: newAttendee });
    }
  } catch (e) {
    console.log("patch response", e.message);
    next(e);
  }
});

// isAmbassador can create an event
//   get token : http --ignore-stdin POST :4000/auth/login email="neda@neda.com" password="neda"
//http --ignore-stdin POST :4000/events/addEvent title=dinner description=eatout date=2022-09-10T09:46:20.503Z city=delft address=calandplein spots=10 imageUrl=foto2 categoryId=2 authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjcxNjAyNiwiZXhwIjoxNjYyNzIzMjI2fQ.06RFFFYs13Y8PtjJzmEhP4Il7xaLsuQWmB8pPq1qojw"
router.post("/addEvent", authMiddleware, async (req, res, next) => {
  try {
    const {
      title,
      description,
      date,
      city,
      address,
      spots,
      imageUrl,
      categoryId,
    } = req.body;

    const userId = req.user.id;

    if (
      !title ||
      !description ||
      !date ||
      !city ||
      !address ||
      !spots ||
      !imageUrl ||
      !categoryId
    ) {
      return res.status(400).send("missing information");
    } else {
      const newEvent = await Event.create({
        title,
        description,
        date,
        city,
        address,
        spots,
        imageUrl,
        categoryId,
        userId,
      });

      res.send({ newEvent, message: "Event added successfully!" });
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//delete the event
//http DELETE :4000/events/7 authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjc5NTM0OCwiZXhwIjoxNjYyODAyNTQ4fQ.4VJh1FGRenY7_V1meOrrQq0RBcCM2Fy_IHZmi33Ny0g"
router.delete("/:eventId", authMiddleware, async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const eventToDelete = await Event.findByPk(eventId);
    await eventToDelete.destroy();

    res.status(200).send("Event deleted successfully");
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//edit the event
// try from the terminal without auth
//   get token : http --ignore-stdin POST :4000/auth/login email="neda@neda.com" password="neda"
// http --ignore-stdin PATCH :4000/events/2/edit title=salsadance description=party date=2022-09-10T09:46:20.503Z city=delft address=calandplein spots=10 imageUrl=foto2 categoryId=2 authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2Mjc5NTM0OCwiZXhwIjoxNjYyODAyNTQ4fQ.4VJh1FGRenY7_V1meOrrQq0RBcCM2Fy_IHZmi33Ny0g"
router.patch("/:eventId/edit", authMiddleware, async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const userId = req.user.id;

    const {
      title,
      description,
      date,
      city,
      address,
      spots,
      imageUrl,
      categoryId,
    } = req.body;

    const event = await Event.findByPk(eventId);
    await event.update({
      title,
      description,
      date,
      city,
      address,
      spots,
      imageUrl,
      categoryId,
      userId,
    });

    return res
      .status(200)
      .send({ event, message: "Event edited successfully!" });
  } catch (e) {
    console.log("event edit error:", e.message);
    next(e);
  }
});

module.exports = router;
