const { fetchUserById } = require("../models/user-models");

exports.getUser = (req, res, next) => {
  fetchUserById()
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};