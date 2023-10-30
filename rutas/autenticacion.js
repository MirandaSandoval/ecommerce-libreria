// rutas/usuarios.js
const express = require('express');
const router = express.Router();
const autenticacionController = require('../controladores/usuarioController');

router.post('/registro', autenticacionController.registro);
router.post('/login', autenticacionController.login);

module.exports = router;
