const { Deck } = require("../db/models/decks");
const { User } = require("../db/models/users");

exports.fetchDecks = async () => {
  return Deck.find({});
};

exports.createSingleDeck = async (body, user_id) => {
  return Deck.create(body).then((deck) => {
    return User.findByIdAndUpdate(user_id, {
      $addToSet: { user_decks: deck._id },
    }).then(() => {
      return deck;
    });
  });
};

exports.fetchCardsByDeckId = async (deckId) => {
  const deck = await Deck.findById(deckId).populate("cards");
  if (!deck) {
    throw { status: 404, msg: "Deck not found" };
  }
  return deck.cards;
};
