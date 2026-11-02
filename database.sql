-- ==========================================
-- 1. DDL (Copy bagian CREATE TABLE ini untuk di-import ke dbdiagram.io)
-- ==========================================

CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    nama_menu VARCHAR(100) NOT NULL,
    kategori VARCHAR(50) NOT NULL, -- Contoh: 'Nasi Tumpeng', 'Paket Catering Box', 'Prasmanan'
    deskripsi TEXT,
    porsi INT NOT NULL,
    bisa_custom BOOLEAN DEFAULT TRUE,
    harga NUMERIC(12, 2) NOT NULL,
    status_tersedia BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    menu_id INT NOT NULL REFERENCES menus(id) ON DELETE CASCADE,
    nama_pelanggan VARCHAR(100) NOT NULL,
    no_whatsapp VARCHAR(20) NOT NULL,
    jumlah_pesanan INT NOT NULL,
    catatan_custom TEXT, -- Permintaan custom lauk/porsi dari pembeli
    tanggal_pengiriman DATE NOT NULL,
    jam_pengiriman TIME NOT NULL,
    alamat_pengiriman TEXT NOT NULL,
    total_harga NUMERIC(12, 2) NOT NULL,
    status_pesanan VARCHAR(50) DEFAULT 'Menunggu Konfirmasi', -- 'Menunggu Konfirmasi', 'Diproses Dapur', 'Dikirim', 'Selesai'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    jenis_pembayaran VARCHAR(50) NOT NULL, -- 'DP (Uang Muka)' atau 'Pelunasan'
    metode_pembayaran VARCHAR(50) NOT NULL, -- 'Transfer Bank', 'QRIS', 'Tunai'
    nominal_bayar NUMERIC(12, 2) NOT NULL,
    status_pembayaran VARCHAR(50) DEFAULT 'Belum Lunas', -- 'DP Terkonfirmasi', 'Lunas'
    tanggal_bayar TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 2. DML / Dummy Data Awal (Jalankan di pgAdmin/psql agar ada data awal)
-- ==========================================

INSERT INTO menus (nama_menu, kategori, deskripsi, porsi, bisa_custom, harga, status_tersedia)
VALUES 
('Tumpeng Nusantara Kuning Spesial', 'Nasi Tumpeng', 'Nasi kuning dengan ayam bakar, rendang, urap, perkedel, dan sambal goreng ati', 20, TRUE, 650000.00, TRUE),
('Paket Catering Syukuran Kotak', 'Paket Catering Box', 'Nasi putih, ayam gulai khas Padang Sidempuan, telur balado, sayur nangka, kerupuk', 1, TRUE, 28000.00, TRUE),
('Tumpeng Mini Tasyakuran', 'Nasi Tumpeng', 'Tumpeng porsi personal dengan ayam suwir, kering tempe, dan mie goreng', 1, FALSE, 35000.00, TRUE);

INSERT INTO orders (menu_id, nama_pelanggan, no_whatsapp, jumlah_pesanan, catatan_custom, tanggal_pengiriman, jam_pengiriman, alamat_pengiriman, total_harga, status_pesanan)
VALUES 
(1, 'Budi Santoso', '081234567890', 1, 'Ayam bakar diganti ayam goreng lengkuas, sambal dipisah', '2026-11-10', '09:00:00', 'Jl. Merdeka No. 12, Padang Sidempuan', 650000.00, 'Diproses Dapur');

INSERT INTO payments (order_id, jenis_pembayaran, metode_pembayaran, nominal_bayar, status_pembayaran)
VALUES 
(1, 'DP (Uang Muka)', 'Transfer Bank', 300000.00, 'DP Terkonfirmasi');