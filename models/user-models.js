const { User } = require("../db/models/users");

exports.fetchUserById = async (id) => {
  return User.find({_id: id});
};
