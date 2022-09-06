const User = require("./models").user;
const Event = require("./models").event;
// const Category = require("./models").category;
// const Image = require("./models").image;
// const Comment = require("./models").comment;
// const Attendee = require("./models").attendee;

//get all the events with users going to that events
const getEventsGoing = async () => {
  try {
    const events = await Event.findAll({
      raw: true,
      include: { model: User, as: "going" },
    });
    console.log(events);
  } catch (e) {
    console.log(e.message);
  }
};

getEventsGoing();

const getEventCreated = async () => {
  try {
    const events = await Event.findAll({
      raw: true,
      include: { model: User },
    });
    console.log(events);
  } catch (e) {
    console.log(e.message);
  }
};

// getEventCreated();
