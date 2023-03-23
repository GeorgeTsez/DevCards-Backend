const express = require("express");
const mongoose = require("mongoose");
// const { goose } = require("./db");
const app = express();
app.use(express.json());
const options = { useNewUrlParser: true, useUnifiedTopology: true };

app.get('/', (req, res) => {
  mongoose.connect(
    "mongodb+srv://Cluster64244:bIkmux@cluster64244.fhbnizy.mongodb.net/?retryWrites=true&w=majority",
    options
  )
  .then(conn => {
    const userSchema = new mongoose.Schema({ name: String, age: Number });
    const User = mongoose.model("User", userSchema);
    const newUser = new User({ name: "Reem", age: 18 });
    newUser
      .save()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err)
  })
})

const PORT = 9090;

app.listen(PORT, () => {
    console.log('Listening on', PORT);
})