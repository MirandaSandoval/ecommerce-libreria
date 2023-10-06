const Cart = require('../models/Cart');

const cartController = {
    getUserCart: async (req, res) => {
        const userId = req.params.userId;
        try {
            const cart = await Cart.findOne({ userId });
            res.json(cart);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    addToCart: async (req, res) => {
        const userId = req.params.userId;
        const { bookId, quantity } = req.body;

        try {
            const cart = await Cart.findOneAndUpdate(
                { userId },
                { $addToSet: { books: { bookId, quantity } } },
                { new: true, upsert: true }
            );
            res.json(cart);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    removeFromCart: async (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;

        try {
            const cart = await Cart.findOneAndUpdate(
                { userId },
                { $pull: { books: { bookId } } },
                { new: true }
            );
            res.json(cart);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

module.exports = cartController;
