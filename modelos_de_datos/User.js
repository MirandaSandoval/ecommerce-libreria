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

const ageValidator = [
    // Validaciones...
];

const genderValidator = [
    // validaciones...
];

// Define el modelo de base de datos
const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'Name is required.'],
        validate: validacionNombre
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: validacionEmail
    },
    edad: {
        type: Number,
        validate: ageValidator
    },
    genero: {
        type: String,
        validate: genderValidator
    }
});
//Para que se loguee solo un usuario con una direccion de correo electronico
UserSchema.plugin(unique, { message: 'Este {PATH} ya esta ocupado.' });

const User = module.exports = mongoose.model('user', UserSchema);