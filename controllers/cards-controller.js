const {createSingleCard} = require("../models/cards-models")


exports.postSingleCard = (req, res, next) => {
    const {body} = req
    createSingleCard(body)
  
      .then((createdCard) => {
        res.status(201).send({ createdCard });
      })
      .catch((err) => {
        next(err);
      });
  };