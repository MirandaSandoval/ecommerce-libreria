const mongoose = require('mongoose');

// Define el modelo de base de datos
const usuarioSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});
//Para que se loguee solo un usuario con una direccion de correo electronico
UsuarioSchema.plugin(unique, { message: 'Este {PATH} ya esta ocupado.' });

const Usuario = module.exports = mongoose.model('usuario', usuarioSchema);