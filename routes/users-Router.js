const { getUser }= require("../controllers/users-controllers")

const usersRouter = require("express").Router();

usersRouter.route("/:user_id").get(getUser);



module.exports = usersRouter