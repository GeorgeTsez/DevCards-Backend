const { User } = require("../db/models/users");

exports.fetchUsers = async () => {
  return User.find({});
};

exports.fetchUserById = async (id) => {
  return User.find({ _id: id });
};
