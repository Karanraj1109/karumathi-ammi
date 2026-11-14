PANDUAN SINGKAT UNDANGAN KARUMATHI
==================================

ISI FOLDER
  index.html   = kerangka halaman        (JANGAN DIEDIT)
  style.css    = tampilan / warna / huruf (JANGAN DIEDIT)
  script.js    = mesin animasi dan tombol (JANGAN DIEDIT)
  data.js      = ISI UNDANGAN             (INI YANG DIEDIT)
  foto/        = taruh foto nenek di sini

YANG DIGANTI (semua di data.js)
  1. salam, nama, namaTamil, singkat, hubungan
  2. foto             -> contoh: foto: "foto/nenek.jpg"
  3. lahir dan wafat  -> format TAHUN-BULAN-TANGGAL (contoh 1940-05-03)
  4. tanggalISO       -> tanggal dan jam acara
  5. tempat dan maps  -> alamat dan link Google Maps
  6. akhir            -> upacara penutup
  7. kontak           -> nama dan nomor WhatsApp
  8. keluarga         -> nama keluarga di bagian bawah

CARA MENGHAPUS BAGIAN
  - Upacara penutup  : ganti seluruh blok "akhir: { ... }," jadi   akhir: null,
  - Narahubung       : tulis   kontak: [],
  - Nama Tamil       : tulis   namaTamil: "",
  - Kalimat wafat    : tulis   wafatKet: "",
  - Satu orang kontak: hapus satu barisnya saja

ATURAN PENTING
  - Jangan hapus tanda petik " " dan koma di ujung baris
  - Angka (hariKe) tanpa tanda petik
  - Setelah edit: Ctrl+S, lalu refresh (F5) index.html di browser
  - Kalau tampilan jadi kosong/rusak, biasanya ada tanda petik atau koma
    yang terhapus di data.js. Tekan Ctrl+Z untuk mengembalikan.
