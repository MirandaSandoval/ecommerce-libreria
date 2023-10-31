// controllers/pedidoController.js
const Order = require('../modelos_de_datos/Pedido');

exports.crearPedido = async (req, res) => {
    // Implementa la lógica para crear un nuevo pedido
    const nroPedido = generateOrderNumber();
    const totalPedido = calculateTotalAmount(carritoItems);

    const pedido = new Order({
        usuarioId,
        items: carritoItems,
        nroPedido,
        totalPedido,
    });

    await order.save();

    return order;
};

function calculateTotalAmount(cartItems) {
    // Implementa la lógica para calcular el monto total del pedido según los elementos del carrito
    // Puedes iterar por los elementos del carrito y sumar los precios de los libros multiplicados por la cantidad
    return totalAmount;
};
function generateOrderNumber() {
    const fecha = new Date();
    const nro_Pedido = `ORD${fecha.getFullYear()}${fecha.getMonth() + 1}${fecha.getDate()}${fecha.getHours()}${fecha.getMinutes()}${fecha.getSeconds()}`;
    return nro_Pedido;
}
