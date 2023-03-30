const { User } = require("../db/models/users");

exports.fetchUserById = async () => {

  return User.find({_id:"c90e5fc8f598188830bbf104"});
};
