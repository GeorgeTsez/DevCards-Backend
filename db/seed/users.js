const { User } = require("../models/users");

const users = [
  {
    _id: "c90e5fc8f598188830bbf104",
    username: "Mario",
    email: "user@mushroomkingdom.org",
    user_decks: [
      "30540c7891af7f8b720efb8f",
      "3751121ee06f2ee893d629b8",
      "d5fd8b0c788e5e8bdfbe758f",
    ],
  },
];

const seedUsers = () => {
  return User.insertMany(users);
};

module.exports = { seedUsers };
