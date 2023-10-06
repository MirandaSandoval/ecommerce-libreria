const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Ruta para obtener el carrito de un usuario por su ID
router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  try {
    const cart = await Cart.findOne({ userId });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para agregar un libro al carrito de un usuario
router.post('/user/:userId/add', async (req, res) => {
  const userId = req.params.userId;
  const { bookId, quantity } = req.body;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $addToSet: { books: { bookId, quantity } } },
      { new: true, upsert: true }
    );
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Ruta para eliminar un libro del carrito de un usuario
router.delete('/user/:userId/remove/:bookId', async (req, res) => {
  const userId = req.params.userId;
  const bookId = req.params.bookId;
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId },
      { $pull: { books: { bookId } } },
      { new: true }
    );
    res.json(cart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
