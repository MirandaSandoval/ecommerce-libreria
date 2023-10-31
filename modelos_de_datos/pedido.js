const mongoose = require('mongoose');

const pedidoItemSchema = new mongoose.Schema({
    libroId: { type: mongoose.Schema.Types.ObjectId, ref: 'libro', required: true },
    cantidad: { type: Number, required: true }
});

const pedidoSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true },
    items: [pedidoItemSchema],
    pedidoNumber: { type: String, required: true },
    totalPedido: { type: Number, required: true }
});

const pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = pedido;
