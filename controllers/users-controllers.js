const { fetchUserById } = require("../models/user-models");

exports.getUser = (req, res, next) => {
  const id = req.params.user_id
  fetchUserById(id)
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      next(err);
    });
};