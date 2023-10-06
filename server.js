const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importa las rutas y controladores necesarios
const bookRoutes = require('./routes/books');
const userRoutes = require('./routes/users');
const cartRoutes = require('./routes/carts');

const app = express();
const PORT = 5000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/carts', cartRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    next(error);
});

// Manejo de errores para cualquier otro tipo de error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
