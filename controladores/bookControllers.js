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
    const { titulo, autor,ISBN, precio, edicion } = req.body;
      const newBook = new Book({ titulo, autor, ISBN, precio, edicion});

    try {
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  actualizaBook: async (req, res) => {
    const bookId = req.params.id;
      const { titulo, autor, ISBN, precio, edicion } = req.body;

    try {
      const actualizaBook = await Book.findByIdAndUpdate(bookId,
          { titulo, autor, ISBN, precio, edicion }, { new: true });
      res.json(actualizaBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  eliminaBook: async (req, res) => {
    const bookId = req.params.id;
    try {
      const eliminaBook = await Book.findByIdAndDelete(bookId);
      res.json(eliminaBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = bookController;
