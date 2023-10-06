const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Ruta para obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para crear un nuevo libro
router.post('/', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    // Otros campos del libro
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para actualizar un libro por su ID
router.put('/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un libro por su ID
router.delete('/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    res.json(deletedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
