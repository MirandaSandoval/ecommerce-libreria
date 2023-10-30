const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  precio: { type: Number, required: true },
  // Otros campos relevantes para un libro
});

const libro = mongoose.model('libro', libroSchema);

module.exports = libro;
