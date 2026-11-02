const OrderModel = require("../models/orderModel");

const OrderController = {
  getAllOrders: async (req, res) => {
    try {
      const result = await OrderModel.getAll();
      res
        .status(200)
        .json({
          message: "Berhasil mengambil semua data pesanan",
          data: result.rows,
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const result = await OrderModel.getById(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pesanan tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Berhasil mengambil detail pesanan",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createOrder: async (req, res) => {
    try {
      const result = await OrderModel.create(req.body);
      res
        .status(201)
        .json({
          message: "Pesanan berhasil ditambahkan",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updateOrder: async (req, res) => {
    try {
      const result = await OrderModel.update(req.params.id, req.body);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pesanan tidak ditemukan" });
      res
        .status(200)
        .json({ message: "Pesanan berhasil diperbarui", data: result.rows[0] });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      const result = await OrderModel.delete(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pesanan tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Pesanan berhasil dihapus",
          deleted_data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = OrderController;
