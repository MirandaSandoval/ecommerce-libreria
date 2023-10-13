const mongoose = require('mongoose');
const unique = require('mongose-unique-validator');
const validate = require('mongoose-validator');


const bookSchema = new mongoose.Schema({

  ISBN: { type: String, required: true },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  precio: { type: Number, required: true },
  edicion: { type: Date, required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
