const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

const { addMeme, fetchMemes } = require("./controllers");

const DB_URI =
  "mongodb+srv://mujtaba:mujtaba@cluster0.fefvl.mongodb.net/test?retryWrites=true&w=majority";

// connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// connecting to database
MongoClient.connect(DB_URI, options, (err, client) => {
  if (err) {
    console.log(`${err.message}`);
    console.error(err);
  } else {
    console.log(`Connected to database.`);
    const db = client.db(process.env.DB_NAME);

    router.post("/memes", (req, res) => addMeme(req, res, db));

    router.get("/memes", (req, res) => fetchMemes(req, res, db));
  }
});

module.exports = router;
