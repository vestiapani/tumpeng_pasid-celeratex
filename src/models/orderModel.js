const pool = require("../config/database");

const OrderModel = {
  getAll: () => pool.query("SELECT * FROM orders ORDER BY id ASC"),
  getById: (id) => pool.query("SELECT * FROM orders WHERE id = $1", [id]),
  create: (data) => {
    const {
      menu_id,
      nama_pelanggan,
      no_whatsapp,
      jumlah_pesanan,
      catatan_custom,
      tanggal_pengiriman,
      jam_pengiriman,
      alamat_pengiriman,
      total_harga,
      status_pesanan,
    } = data;
    return pool.query(
      `INSERT INTO orders (menu_id, nama_pelanggan, no_whatsapp, jumlah_pesanan, catatan_custom, tanggal_pengiriman, jam_pengiriman, alamat_pengiriman, total_harga, status_pesanan) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        menu_id,
        nama_pelanggan,
        no_whatsapp,
        jumlah_pesanan,
        catatan_custom,
        tanggal_pengiriman,
        jam_pengiriman,
        alamat_pengiriman,
        total_harga,
        status_pesanan,
      ],
    );
  },
  update: (id, data) => {
    const {
      menu_id,
      nama_pelanggan,
      no_whatsapp,
      jumlah_pesanan,
      catatan_custom,
      tanggal_pengiriman,
      jam_pengiriman,
      alamat_pengiriman,
      total_harga,
      status_pesanan,
    } = data;
    return pool.query(
      `UPDATE orders SET menu_id = $1, nama_pelanggan = $2, no_whatsapp = $3, jumlah_pesanan = $4, catatan_custom = $5, 
             tanggal_pengiriman = $6, jam_pengiriman = $7, alamat_pengiriman = $8, total_harga = $9, status_pesanan = $10 
             WHERE id = $11 RETURNING *`,
      [
        menu_id,
        nama_pelanggan,
        no_whatsapp,
        jumlah_pesanan,
        catatan_custom,
        tanggal_pengiriman,
        jam_pengiriman,
        alamat_pengiriman,
        total_harga,
        status_pesanan,
        id,
      ],
    );
  },
  delete: (id) =>
    pool.query("DELETE FROM orders WHERE id = $1 RETURNING *", [id]),
};

module.exports = OrderModel;
