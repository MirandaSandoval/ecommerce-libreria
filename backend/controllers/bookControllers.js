const Book = require('../models/Book');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createBook: async (req, res) => {
    const { title, author, /* Otros campos del libro */ } = req.body;
    const newBook = new Book({ title, author /* Otros campos del libro */ });

    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateBook: async (req, res) => {
    const bookId = req.params.id;
    const { title, author, /* Otros campos a actualizar */ } = req.body;

    try {
      const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        { title, author /* Otros campos a actualizar */ },
        { new: true }
      );
      res.json(updatedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteBook: async (req, res) => {
    const bookId = req.params.id;
    try {
      const deletedBook = await Book.findByIdAndDelete(bookId);
      res.json(deletedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = bookController;
