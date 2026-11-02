# Backend REST API – Website Digital & E-Commerce UMKM Desa

**Studi Kasus: Usaha Catering & Nasi Tumpeng (Kota Padang Sidempuan)**

Repository ini berisi project **Backend REST API** menggunakan **Express.js** dan **PostgreSQL** untuk memenuhi tugas modul *Backend Development*. Sistem ini dirancang untuk membantu digitalisasi operasional UMKM kuliner desa, khususnya usaha catering dan nasi tumpeng di Kota Padang Sidempuan.

---

## 📋 Informasi Pengumpulan

| Informasi | Detail |
|---|---|
| **Nama Proyek** | Tumpeng Pasid |
| **Nama Kelompok** | CelerateX |
| **Assignment** | Celerates Mini Project |
| **Module** | Backend Development |
| **Mentor Trainer** | Ahmad Thomthomi Barosimi |
| **Database Diagram** | [Lihat Skema Database (dbdiagram.io)](https://dbdiagram.io/d/CelerateX_Mini-Project-6ae80c5b8bf38111a8016821) |

---

## 📖 Deskripsi Studi Kasus

### Analisa Masalah

Di lingkungan desa di wilayah Kota Padang Sidempuan, pengelolaan operasional UMKM kuliner, khususnya usaha catering dan nasi tumpeng, umumnya masih dilakukan secara konvensional.

Proses pemesanan paket catering atau nasi tumpeng oleh pelanggan masih mengandalkan pesan WhatsApp, panggilan telepon, atau datang langsung ke lokasi usaha. Cara tersebut sering menimbulkan berbagai kendala, seperti:

- Kesalahan pencatatan detail pesanan, terutama untuk *custom* porsi dan variasi lauk.
- Jadwal pengiriman yang berpotensi bentrok.
- Keterlambatan konfirmasi pembayaran uang muka (DP) maupun pelunasan.
- Kesulitan dalam menyusun rekapitulasi laporan penjualan harian dan bulanan secara manual.

### Kebutuhan Solusi

Diperlukan sistem informasi berbasis website digital dan *e-commerce* untuk UMKM desa yang membantu pengelola usaha dalam mengelola katalog menu, jadwal pengiriman, serta data pemesanan dan pembayaran secara terpusat.

Data disimpan menggunakan database **PostgreSQL** dan dikelola melalui **REST API Express.js** dengan fitur CRUD (*Create, Read, Update, Delete*) sehingga data operasional menjadi lebih terstruktur, mudah diakses, dan diperbarui.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Keterangan |
|---|---|
| **Runtime Environment** | Node.js |
| **Backend Framework** | Express.js |
| **Database** | PostgreSQL (Cloud Hosting via Neon) |
| **Database Driver** | `pg` (node-postgres) |
| **Environment Management** | `dotenv` |
| **API Testing** | Postman |

---

## 🗄️ Desain Database (PostgreSQL)

Desain ERD (*Entity Relationship Diagram*) atau skema relasi tabel dapat diakses secara publik melalui tautan berikut:

🔗 **[Lihat Database Diagram – dbdiagram.io](https://dbdiagram.io/d/CelerateX_Mini-Project-6ae80c5b8bf38111a8016821)**

Database terdiri dari **3 tabel utama**. Kode DDL (*Data Definition Language*) dan DML (*Data Manipulation Language*) lengkap tersedia pada file [`database.sql`](./database.sql).

1. **`menus`** – Menyimpan katalog paket catering dan nasi tumpeng, deskripsi, porsi, opsi *custom*, harga, dan status ketersediaan.
2. **`orders`** – Menyimpan data pemesanan pelanggan, relasi ke menu (`menu_id`), catatan *custom* pesanan, jadwal pengiriman (tanggal dan jam), alamat, total harga, serta status pesanan.
3. **`payments`** – Menyimpan riwayat transaksi pembayaran pelanggan (`order_id`), jenis pembayaran (DP / Pelunasan), metode pembayaran, nominal, dan status verifikasi pembayaran.

---

## 📂 Struktur Folder Project

```
CelerateX-Mini_Project/
│
├── docs/
│   └── screenshots/              # Dokumentasi hasil pengujian API di Postman
│
├── src/
│   ├── config/
│   │   └── database.js           # Konfigurasi koneksi Pool PostgreSQL
│   │
│   ├── controllers/
│   │   ├── menuController.js     # Logika request & response untuk tabel menus
│   │   ├── orderController.js    # Logika request & response untuk tabel orders
│   │   └── paymentController.js  # Logika request & response untuk tabel payments
│   │
│   ├── models/
│   │   ├── menuModel.js          # Query SQL CRUD untuk tabel menus
│   │   ├── orderModel.js         # Query SQL CRUD untuk tabel orders
│   │   └── paymentModel.js       # Query SQL CRUD untuk tabel payments
│   │
│   ├── routes/
│   │   ├── menuRoutes.js         # Routing endpoint /api/menus
│   │   ├── orderRoutes.js        # Routing endpoint /api/orders
│   │   └── paymentRoutes.js      # Routing endpoint /api/payments
│   │
│   └── app.js                    # Entry point utama aplikasi Express.js
│
├── .gitignore                    # Mengabaikan node_modules dan file .env
├── database.sql                  # Skema tabel (DDL) dan data awal (DML)
├── package.json                  # Konfigurasi project dan dependencies
└── README.md                     # Dokumentasi project
```

---

## 🚀 Daftar Endpoint REST API

API menyediakan operasi CRUD (*Create, Read, Update, Delete*) untuk tiga resource utama, yaitu Menu, Pesanan, dan Pembayaran.

### 1. Endpoint Menu (`/api/menus`)

| Metode | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/menus` | Mengambil seluruh daftar menu catering dan tumpeng. |
| `GET` | `/api/menus/:id` | Mengambil detail data menu berdasarkan ID. |
| `POST` | `/api/menus` | Menambahkan data menu baru ke database. |
| `PUT` | `/api/menus/:id` | Memperbarui data menu berdasarkan ID. |
| `DELETE` | `/api/menus/:id` | Menghapus data menu berdasarkan ID. |

### 2. Endpoint Pesanan (`/api/orders`)

| Metode | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/orders` | Mengambil seluruh data pesanan pelanggan. |
| `GET` | `/api/orders/:id` | Mengambil detail pesanan berdasarkan ID. |
| `POST` | `/api/orders` | Membuat data pesanan baru. |
| `PUT` | `/api/orders/:id` | Memperbarui status atau detail pesanan berdasarkan ID. |
| `DELETE` | `/api/orders/:id` | Menghapus data pesanan berdasarkan ID. |

### 3. Endpoint Pembayaran (`/api/payments`)

| Metode | Endpoint | Deskripsi |
|---|---|---|
| `GET` | `/api/payments` | Mengambil seluruh data transaksi pembayaran. |
| `GET` | `/api/payments/:id` | Mengambil detail pembayaran berdasarkan ID. |
| `POST` | `/api/payments` | Mencatat pembayaran baru (DP / Pelunasan). |
| `PUT` | `/api/payments/:id` | Memperbarui status pembayaran berdasarkan ID. |
| `DELETE` | `/api/payments/:id` | Menghapus data pembayaran berdasarkan ID. |

---

## ⚙️ Cara Menjalankan Project

### 1. Clone Repository

Clone repository dari GitHub, kemudian masuk ke direktori project.

```
git clone <link-repository-github-kamu>
cd CelerateX-Mini_Project
```

### 2. Install Dependencies

Install seluruh dependencies yang dibutuhkan menggunakan NPM.

```
npm install
```

### 3. Konfigurasi Environment Variable

Buat file `.env` di direktori utama project, kemudian sesuaikan konfigurasi berikut dengan kredensial database PostgreSQL Anda.

```
PORT=3000
DATABASE_URL=postgresql://username:password@host/dbname?sslmode=require
```

**Catatan:** Ganti `username`, `password`, `host`, dan `dbname` sesuai dengan konfigurasi database PostgreSQL yang digunakan.

### 4. Import Database SQL

Jalankan seluruh query yang terdapat pada file `database.sql` melalui PostgreSQL atau SQL Editor pada layanan Neon.

Pastikan seluruh tabel berhasil dibuat dan database telah terisi dengan data awal.

### 5. Jalankan Server

Jalankan aplikasi backend menggunakan perintah berikut:

```
node src/app.js
```

Jika berhasil, server akan berjalan pada alamat:

```
http://localhost:3000
```

---

## 🧪 Pengujian API

Pengujian endpoint REST API dilakukan menggunakan **Postman** untuk memastikan setiap operasi CRUD berjalan sesuai dengan fungsinya.

Dokumentasi hasil pengujian API dapat dilihat pada folder berikut:

```
docs/screenshots/
```

Folder tersebut berisi screenshot hasil pengujian endpoint Menu, Pesanan, dan Pembayaran.