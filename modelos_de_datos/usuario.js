const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

// Define el modelo de base de datos
const usuarioSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
//Para que se loguee solo un usuario con una direccion de correo electronico
usuarioSchema.plugin(unique, { message: 'Este {PATH} ya esta ocupado.' });

const Usuario = module.exports = mongoose.model('usuario', usuarioSchema);