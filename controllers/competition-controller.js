const { io } = require("../app");

exports.startCompetition = (req, res, next) => {
  io.on("connection", (socket) => {
    console.log("a user connected");
  });
};
