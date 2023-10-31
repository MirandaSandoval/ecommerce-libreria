// models/Carrito.js
const mongoose = require('mongoose');

const carritoItemSchema = new mongoose.Schema({
  libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'libro', required: true },
  cantidad: { type: Number, required: true }
});

const carritoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  items: [carritoItemSchema]
});

const Carrito = mongoose.model('Carrito', carritoSchema);

module.exports = Carrito;
