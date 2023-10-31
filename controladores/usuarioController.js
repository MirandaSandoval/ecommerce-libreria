// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuario = require('../modelos_de_datos/usuario');

exports.registro = async (req, res) => {
        const { username, email, contraseña } = req.body;
        const newUsuario = new usuario({ username, email, contraseña });

        try {
            const saveUsuario = await newUsuario.save();
            res.status(201).json(saveUsuario);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

exports.login = async (req, res) => {
    const { email, contraseña } = req.body;
    try {
        const usuario = await usuario.findOne({ email, contraseña });
        if (!usuario) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};