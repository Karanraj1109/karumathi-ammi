/* ============================================================
   DATA.JS  =  SATU-SATUNYA FILE YANG PERLU KAMU EDIT
   ------------------------------------------------------------
   CARA EDIT:
   - Ganti tulisan yang ada DI DALAM tanda petik " "
   - JANGAN hapus tanda petik " ", koma (,) di ujung baris,
     atau tanda kurung { } [ ]
   - Simpan file (Ctrl+S), lalu refresh index.html di browser
============================================================ */

const CFG = {

  /* ---------- 1. SALAM PEMBUKA ---------- */
  salam: "Om Nama Sivaye",              // tulisan kecil di paling atas

  /* ---------- 2. DATA ALMARHUMAH ---------- */
  nama: "Parmespari",    // nama lengkap
  namaTamil: "", // nama huruf Tamil. Tidak mau? tulis: namaTamil: "",
  singkat: "Ibu Kami Tercinta",          // dipakai di sampul: "Mengenang ..."
  hubungan: "Ibu Kami Tercinta",    // "Untuk mengenang ..."
  foto: "foto/fotonenek.jpg",   // foto ada di folder "foto". Ganti foto: taruh file baru di folder foto, lalu ganti namanya di sini

  lahir: "1958-03-03",                // format: TAHUN-BULAN-TANGGAL
  wafat: "2026-11-05",                // format: TAHUN-BULAN-TANGGAL
  wafatKet: "Berpulang dengan tenang pada hari Kamis, 05 November 2026, pukul 07.10 WIB",
                                      // tidak mau ada kalimat ini? tulis: wafatKet: "",

  /* ---------- 3.DOA BERSAMA (DOA KARUMATHI) ---------- */
  hariKe: 16,                         // doa hari ke berapa (angka, tanpa petik)
  tanggalISO: "2026-11-20T10:00:00+07:00",
        // Cara baca: TAHUN-BULAN-TANGGAL T JAM:MENIT:DETIK +ZONA
        // Contoh jam 8 malam: 20:00:00
        // Zona: +07:00 = WIB, +08:00 = WITA / Malaysia, +09:00 = WIT
  tempat: "Jalan Setia Luhur Gang Apel No.111b",
  maps: "https://maps.app.goo.gl/oBLEv4GpupHDTA63A",
        // link Google Maps: buka lokasi di Google Maps > Bagikan > Salin link

  /* ---------- 4. UPACARA PENUTUP ---------- */
  // Tidak dipakai (null). Mau dipakai? ganti null dengan blok:
  // { tanggalISO: "2026-11-29T03:30:00+07:00", tempat: "...", ket: "..." }
  akhir: null,

  /* ---------- 5. KALIMAT-KALIMAT ---------- */
  dirindukan: "Seluruh anggota keluarga, kerabat, dan sahabat",
  catatan: "Mohon undangan ini dianggap sebagai undangan pribadi. Keluarga mengucapkan terima kasih kepada seluruh kerabat, sahabat, dan handai taulan atas kehadiran, dukungan, karangan bunga, serta doa selama masa berkabung.",

  /* ---------- 6. NARAHUBUNG (nomor WhatsApp) ---------- */
  // Satu orang = satu baris. Mau tambah? salin satu baris lalu tempel di bawahnya.
  // Mau kurangi? hapus barisnya. Tidak mau ada narahubung? kosongkan jadi:  kontak: [],
  kontak: [],

  /* ---------- 7. PENUTUP ---------- */
  keluarga: "Keluarga Besar R. Wasuren"   // tulisan kecil paling bawah
};
