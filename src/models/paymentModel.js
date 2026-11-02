const pool = require("../config/database");

const PaymentModel = {
  getAll: () => pool.query("SELECT * FROM payments ORDER BY id ASC"),
  getById: (id) => pool.query("SELECT * FROM payments WHERE id = $1", [id]),
  create: (data) => {
    const {
      order_id,
      jenis_pembayaran,
      metode_pembayaran,
      nominal_bayar,
      status_pembayaran,
    } = data;
    return pool.query(
      `INSERT INTO payments (order_id, jenis_pembayaran, metode_pembayaran, nominal_bayar, status_pembayaran) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [
        order_id,
        jenis_pembayaran,
        metode_pembayaran,
        nominal_bayar,
        status_pembayaran,
      ],
    );
  },
  update: (id, data) => {
    const {
      order_id,
      jenis_pembayaran,
      metode_pembayaran,
      nominal_bayar,
      status_pembayaran,
    } = data;
    return pool.query(
      `UPDATE payments SET order_id = $1, jenis_pembayaran = $2, metode_pembayaran = $3, 
             nominal_bayar = $4, status_pembayaran = $5 WHERE id = $6 RETURNING *`,
      [
        order_id,
        jenis_pembayaran,
        metode_pembayaran,
        nominal_bayar,
        status_pembayaran,
        id,
      ],
    );
  },
  delete: (id) =>
    pool.query("DELETE FROM payments WHERE id = $1 RETURNING *", [id]),
};

module.exports = PaymentModel;
