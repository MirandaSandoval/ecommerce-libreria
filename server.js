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
const authRoutes = require('./rutas/autenticacion');
const bookRoutes = require('./rutas/libros');
const cartRoutes = require('./rutas/carritos');
const orderRoutes = require('./rutas/pedidos');

// Middleware para manejar rutas
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
