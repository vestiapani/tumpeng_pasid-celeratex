const PaymentModel = require("../models/paymentModel");

const PaymentController = {
  getAllPayments: async (req, res) => {
    try {
      const result = await PaymentModel.getAll();
      res
        .status(200)
        .json({
          message: "Berhasil mengambil semua data pembayaran",
          data: result.rows,
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  getPaymentById: async (req, res) => {
    try {
      const result = await PaymentModel.getById(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Berhasil mengambil detail pembayaran",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  createPayment: async (req, res) => {
    try {
      const result = await PaymentModel.create(req.body);
      res
        .status(201)
        .json({
          message: "Pembayaran berhasil ditambahkan",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  updatePayment: async (req, res) => {
    try {
      const result = await PaymentModel.update(req.params.id, req.body);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Pembayaran berhasil diperbarui",
          data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  deletePayment: async (req, res) => {
    try {
      const result = await PaymentModel.delete(req.params.id);
      if (result.rows.length === 0)
        return res.status(404).json({ message: "Pembayaran tidak ditemukan" });
      res
        .status(200)
        .json({
          message: "Pembayaran berhasil dihapus",
          deleted_data: result.rows[0],
        });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};

module.exports = PaymentController;
