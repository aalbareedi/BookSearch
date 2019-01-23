const db = require("../models");
const axios = require("axios");
// https://www.googleapis.com/books/v1/volumes?q=weight&printType=books&key=AIzaSyAxnTPgeERGv-ATrD-BSBLWQUc1apLv_rA
const GOOGLE_BOOKS_API =
  "https://www.googleapis.com/books/v1/volumes?&printType=books";
// const mongoose = require("mongoose");

// This file empties the Books collection and inserts the books below
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/readingDatabase"
// );

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getGoogleApiBooks: function(req, res) {
    axios
      .get(GOOGLE_BOOKS_API, { params: req.query })
      .then(data => res.json(data.data.items))
      .catch(err => {
        console.log("WE have an error!");
        console.log(err);
        res.status(450).json(err);
      });
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
