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

exports.updateSingleDeck = async (body, deck_id) => {
  return Deck.findByIdAndUpdate(
    deck_id,
    { $set: body },
    { returnDocument: "after" }
  ).then((updatedDeck) => {
    return updatedDeck;
  });
};

exports.updateSingleDeckForUserPercent = async (body, deck_id) => {
  return Deck.findByIdAndUpdate(
    deck_id,
    { $push: body },
    { returnDocument: "after" }
  ).then((updatedUserPercent) => {
    return updatedUserPercent;
  });
};
