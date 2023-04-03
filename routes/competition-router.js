const { startCompetition } = require("../controllers/competition-controller");

const competitionRouter = require("express").Router();

competitionRouter.route("/").get(startCompetition);

module.exports = competitionRouter;
