const User = require('../models/User');

const userController = {
    registerUser: async (req, res) => {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });

        try {
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email, password });
            if (!user) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = userController;
