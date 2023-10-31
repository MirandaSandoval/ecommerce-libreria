// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Configuración de bodyParser para procesar las solicitudes POST
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/tienda-libros', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Rutas
const usuarioRoutes = require('./rutas/usuarios');
const libroRoutes = require('./rutas/libros');
const carritoRoutes = require('./rutas/carritos');
const pedidoRoutes = require('./rutas/pedidos');

// Middleware para manejar rutas
app.use('/usuarios', usuarioRoutes);
app.use('/libros', libroRoutes);
app.use('/carritos', carritoRoutes);
app.use('/pedidos', pedidoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
