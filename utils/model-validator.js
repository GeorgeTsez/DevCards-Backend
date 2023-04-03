const mongoose = require("mongoose");

const modelValidator = (Model, data) => {
  const check = new Model(data);
  const err = check.validateSync();
  if (err) {
    return false;
  } else {
    return true;
  }
};

module.exports = { modelValidator };
