const { getUser, getUsers } = require("../controllers/users-controllers");

const usersRouter = require("express").Router();

usersRouter.route("/").get(getUsers);

usersRouter.route("/:user_id").get(getUser);

module.exports = usersRouter;
