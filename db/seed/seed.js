const connection = require("../../connection");
const mongoose = require("mongoose");
const testdata = require("../data/testdata/testcards.json");
const testdecks = require("../data/testdata/testdecks.json")

connection
  .then(() => {
    const cardSchema = new mongoose.Schema({ front: String, back: String });
    const deckSchema = new mongoose.Schema({title: String, description: String, cards:Object})
    const Card = mongoose.model("Card", cardSchema);
    const Deck = mongoose.model("Deck", deckSchema)
    Promise.all([ Card.insertMany(testdata), Deck.insertMany(testdecks)])
      .then(([cardsFromDb, decksFromDb]) => {
        Promise.all([cardsFromDb.map((card, index) => {
          if (index < 7) return Deck.updateOne({_id: decksFromDb[0]._id}, {$addToSet: {cards: card._id}})
          if (index === 7) return Deck.updateOne({_id: decksFromDb[1]._id}, {$addToSet: {cards: card._id}})
          if (index === 8) return Deck.updateOne({_id: decksFromDb[3]._id}, {$addToSet: {cards: card._id}})
          if (index > 8) return Deck.updateOne({_id: decksFromDb[4]._id}, {$addToSet: {cards: card._id}})
        })])
        .then((resp) => {
          mongoose.connection.close();
        })
      })
      .catch((err) => {
        console.log(err);
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.log(err);
  });

