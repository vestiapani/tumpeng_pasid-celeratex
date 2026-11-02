const MenuModel = require("../models/menuModel");

const MenuController = {
  getAllMenus: async (req, res) => {
    try {
      const result = await MenuModel.getAll();
      res
        .status(200)
        .json({
          message: "Berhasil mengambil semua data menu",
          data: result.rows,
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getMenuById: async (req, res) => {
    try {
      const result = await MenuModel.getById(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Menu tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Berhasil mengambil detail menu",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createMenu: async (req, res) => {
    try {
      const result = await MenuModel.create(req.body);
      res
        .status(201)
        .json({ message: "Menu berhasil ditambahkan", data: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateMenu: async (req, res) => {
    try {
      const result = await MenuModel.update(req.params.id, req.body);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Menu tidak ditemukan" });
      res
        .status(200)
        .json({ message: "Menu berhasil diperbarui", data: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteMenu: async (req, res) => {
    try {
      const result = await MenuModel.delete(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Menu tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Menu berhasil dihapus",
          deleted_data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = MenuController;
