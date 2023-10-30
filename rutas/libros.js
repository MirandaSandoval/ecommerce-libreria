// routes/books.js
const express = require('express');
const router = express.Router();
const libroController = require('../controladores/libroControllers');
const { route } = require('./libros');

router.get('/', libroController.getAllBooks);
router.get('/:id', libroController.getBookById);
router.delete('/remove/:id', libroController.deleteLibro);
router.post('/add', libroController.crearLibro);

module.exports = router;




/*const express = require('express');
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
      titulo: req.body.title,
      autor: req.body.author,
      ISBN: req.body.ISBN,
      precio: req.body.precio,
      edicion: req.body.edicion
  });

  try {
    const nuevoBook = await book.save();
    res.status(201).json(nuevoBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para actualizar un libro por su ID
router.put('/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const actualizaBook = await Book.findByIdAndUpdate(bookId, req.body, { new: true });
    res.json(actualizaBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un libro por su ID
router.delete('/:id', async (req, res) => {
  const bookId = req.params.id;
  try {
    const eliminaBook = await Book.findByIdAndDelete(bookId);
    res.json(eliminaBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;*/
