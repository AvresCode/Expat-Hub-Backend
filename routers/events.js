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

module.exports = router;
