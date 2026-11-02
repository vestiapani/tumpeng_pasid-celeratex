const pool = require("../config/database");

const MenuModel = {
  getAll: () => pool.query("SELECT * FROM menus ORDER BY id ASC"),
  getById: (id) => pool.query("SELECT * FROM menus WHERE id = $1", [id]),
  create: (data) => {
    const {
      nama_menu,
      kategori,
      deskripsi,
      porsi,
      bisa_custom,
      harga,
      status_tersedia,
    } = data;
    return pool.query(
      `INSERT INTO menus (nama_menu, kategori, deskripsi, porsi, bisa_custom, harga, status_tersedia) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        nama_menu,
        kategori,
        deskripsi,
        porsi,
        bisa_custom,
        harga,
        status_tersedia,
      ],
    );
  },
  update: (id, data) => {
    const {
      nama_menu,
      kategori,
      deskripsi,
      porsi,
      bisa_custom,
      harga,
      status_tersedia,
    } = data;
    return pool.query(
      `UPDATE menus SET nama_menu = $1, kategori = $2, deskripsi = $3, porsi = $4, 
             bisa_custom = $5, harga = $6, status_tersedia = $7 WHERE id = $8 RETURNING *`,
      [
        nama_menu,
        kategori,
        deskripsi,
        porsi,
        bisa_custom,
        harga,
        status_tersedia,
        id,
      ],
    );
  },
  delete: (id) =>
    pool.query("DELETE FROM menus WHERE id = $1 RETURNING *", [id]),
};

module.exports = MenuModel;
