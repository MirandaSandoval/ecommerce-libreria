const Cart = require('../modelos_de_datos/carrito');

exports.getUserCarrito = async (req, res) => {
    const usuarioId = req.params.usuarioId;
    try {
        const carrito = await carrito.findOne({ usuarioId });
        res.json(carrito);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

    exports.addToCarrito = async (req, res) => {
        const usuarioId = req.params.usuarioId;
        const { libroId, cantidad } = req.body;

        try {
            const carrito = await carrito.findOneAndUpdate(
                { usuarioId },
                { $addToSet: { libros: { libroId, cantidad } } },
                { new: true, upsert: true }
            );
            res.json(carrito);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    };

exports.borrardeCarrito = async (req, res) => {
        const usuarioId = req.params.usuarioId;
        const libroId = req.params.libroId;

        try {
            const carrito = await carrito.findOneAndUpdate(
                { usuarioId },
                { $pull: { libros: { libroId } } },
                { new: true }
            );
            res.json(carrito);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

