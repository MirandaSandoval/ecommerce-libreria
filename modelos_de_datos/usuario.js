const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const validacionNombre = [
    validate({
        validator: 'isLength',
        arguments: [0, 40],
        message: 'El nombre no debe exceder {ARGS[1]} caracteres.'
    })
];

const validacionEmail = [
    validate({
        validator: 'isLength',
        arguments: [0, 40],
        message: 'Email no debe exceder {ARGS[1]} caracteres.'
    }),
    validate({
        validator: 'isEmail',
        message: 'Email debe ser valido.'
    })
];

// Define el modelo de base de datos
const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Se solicita el nombre.'],
        validate: validacionNombre
    },
    email: {
        type: String,
        required: [true, 'Se solicita el email.'],
        unique: true,
        validate: validacionEmail
    }
});
//Para que se loguee solo un usuario con una direccion de correo electronico
UsuarioSchema.plugin(unique, { message: 'Este {PATH} ya esta ocupado.' });

const Usuario = module.exports = mongoose.model('user', UsuarioSchema);