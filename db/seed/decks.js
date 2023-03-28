const { Deck } = require("../models/decks");

const decks = [
  {
    _id: "30540c7891af7f8b720efb8f",
    title: "JS",
    description: "fundamentals",
    cards: [],
  },
  {
    _id: "3751121ee06f2ee893d629b8",
    title: "Python",
    description: "Tralala",
    cards: [],
  },
  {
    _id: "d5fd8b0c788e5e8bdfbe758f",
    title: "C",
    description: "weird stuff",
    cards: [],
  },
];

const seedDecks = async () => {
  return Deck.insertMany(decks);
};

module.exports = { seedDecks };
