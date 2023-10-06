const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  // Otros campos relevantes para un libro
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
