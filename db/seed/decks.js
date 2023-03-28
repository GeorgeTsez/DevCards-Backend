const { Deck } = require("../models/decks");

const decks = [
  {
    _id: "30540c7891af7f8b720efb8f",
    title: "JS",
    description: "fundamentals",
    cards: [
      "57725bdf60e7284b66fb3466",
      "e9b5443b704d23390e1da999",
      "6147ff219369a989c0f71235",
      "4f8f32d5b789dfdc929b9eba",
      "f9f821dbd3ae0e3e35ac9b08",
    ],
  },
  {
    _id: "3751121ee06f2ee893d629b8",
    title: "Python",
    description: "Tralala",
    cards: [
      "5bafd044562ab6c1655ffce5",
      "ee2cdcf4b669c8091b62cbf2",
      "bb629a91e12cb3ddc656193c",
    ],
  },
  {
    _id: "d5fd8b0c788e5e8bdfbe758f",
    title: "C",
    description: "weird stuff",
    cards: [],
  },
];

const seedDecks = () => {
  return Deck.insertMany(decks);
};

module.exports = { seedDecks };
