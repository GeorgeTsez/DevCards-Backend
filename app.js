const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const options = { useNewUrlParser: true, useUnifiedTopology: true };


app.get('/', (req, res) => {})

const PORT = 9090;

app.listen(PORT, () => {
    console.log('Listening on', PORT);
})