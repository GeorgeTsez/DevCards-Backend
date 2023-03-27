const {Card, Deck, User} = require("../models/models")
const connection = require("../connection");
const mongoose = require('mongoose')
const testData = require('../data/testdata')


const seed = (data) => {
  connection
    .then(() => {
      Promise.all([Card.insertMany(data.cards), Deck.insertMany(data.decks), User.insertMany(data.users)])
        .then(([cardsFromDb, decksFromDb, usersFromDb]) => {
          Promise.all([
            ...cardsFromDb.map((card, index) => {
              if (index < 7)
                return Deck.updateOne(
                  { _id: decksFromDb[0]._id },
                  { $addToSet: { cards: card._id } }
                );
              if (index === 7)
                return Deck.updateOne(
                  { _id: decksFromDb[1]._id },
                  { $addToSet: { cards: card._id } }
                );
              if (index === 8)
                return Deck.updateOne(
                  { _id: decksFromDb[3]._id },
                  { $addToSet: { cards: card._id } }
                );
              if (index > 8)
                return Deck.updateOne(
                  { _id: decksFromDb[4]._id },
                  { $addToSet: { cards: card._id } }
                );
            }),
            User.updateOne({_id: usersFromDb[0]}, 
              {$addToSet: { user_decks: [...decksFromDb.map((deck) => {return deck._id})]} 
            })
          ]).then((resp) => {
          });
        })
        .catch((err) => {
          console.log(err);
          mongoose.connection.close();
        });
    }) 
  .catch((err) => {
    console.log(err);
  });
}

module.exports = seed