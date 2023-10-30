const Book = require('../modelos_de_datos/libro');

const libroController = {
  getAllLibros: async (req, res) => {
    try {
      const libros = await libro.find();
      res.json(libros);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  crearLibro: async (req, res) => {
    const { titulo, autor, precio } = req.body;
    const nuevoLibro = new libro({ titulo, autor, precio /* Otros campos del libro */ });

    try {
      const saveLibro = await nuevoLibro.save();
      res.status(201).json(savedBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateLibro: async (req, res) => {
    const libroId = req.params.id;
    const { titulo, autor, precio /* Otros campos a actualizar */ } = req.body;

    try {
      const updatLibro = await libro.findByIdAndUpdate(
          libroId,
          { titulo, autor, precio /* Otros campos a actualizar */ },
        { new: true }
      );
      res.json(updatLibro);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteLibro: async (req, res) => {
    const libroId = req.params.id;
    try {
      const deletLibro = await libro.findByIdAndDelete(libroId);
      res.json(deletLibro);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
};

module.exports = libroController;
