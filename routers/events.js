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

// router.get("/", async (req, res, next) => {
//   try {
//     const eventResponse = await Event.findAll();
//     console.log("eventResponse", eventResponse);
//     res.send(eventResponse);
//   } catch (e) {
//     console.log("all events router error", e.message);
//     next(e);
//   }
// });

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

// router.get("/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const eventDetailsResponse = await Event.findByPk(id, {
//       include: [User],
//     });
//     console.log("detail Response", eventDetailsResponse);
//     res.send(eventDetailsResponse);
//   } catch (e) {
//     console.log("detail router error", e.message);
//     next(e);
//   }
// });

module.exports = router;
