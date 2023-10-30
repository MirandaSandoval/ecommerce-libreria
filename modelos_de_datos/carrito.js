const mongoose = require('mongoose');

const carritoSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  items: [{ libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Libro', required: true }, cantidad: Number }],
});

const carrito = mongoose.model('carrito', carritoSchema);

module.exports = carrito;
