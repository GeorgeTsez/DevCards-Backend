const { getUser }= require("../controllers/users-controllers")

const usersRouter = require("express").Router();

usersRouter.route("/users").get(getUsers);



module.exports = usersRouter