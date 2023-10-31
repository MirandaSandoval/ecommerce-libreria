// models/Libro.js
const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true }
});

const libro = mongoose.model('libro', libroSchema);

module.exports = libro;
