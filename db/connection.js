const mongoose = require("mongoose")
const options = { useNewUrlParser: true, useUnifiedTopology: true };

 const connection = mongoose.connect(
  "mongodb+srv://bytefish2023:VdSZnmjPkcwbJaLy@cluster74566.tybzm3n.mongodb.net/?retryWrites=true&w=majority",
  options
);


module.exports = connection