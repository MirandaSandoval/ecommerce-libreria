// rutas/pedidos.js
const express = require('express');
const router = express.Router();
const pedidoController = require('../controladores/pedidoController');

router.post('/create', pedidoController.crearPedido);

module.exports = router;
