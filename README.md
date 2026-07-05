# 📚 Ruang Belajar MI — Full-Stack

Media pembelajaran **Madrasah Ibtidaiyah (Kelas 1–6)** untuk **semua mata pelajaran** Kemenag & Diknas, dengan **insersi Kurikulum Berbasis Cinta (KBC)** dan pendekatan **Deep Learning** (Mindful, Meaningful, Joyful) pada setiap topik.

Aplikasi ini **full-stack sungguhan** (server + database), tapi juga **bisa dipakai sebagai web statis** (mis. GitHub Pages) berkat fallback otomatis ke `localStorage`. Jadi “bisa semua”.

---

## ✨ Fitur

- **11 mata pelajaran**: Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab (Kemenag) + Matematika, Bahasa Indonesia, IPAS, Pendidikan Pancasila, Bahasa Inggris, PJOK, Seni Budaya (Diknas).
- **Filter rumpun (Kemenag/Diknas) & kelas (1–6)**.
- Setiap topik berisi: **Materi**, **Insersi KBC** (5 pilar cinta), **Aktivitas Deep Learning**, **Kuis interaktif** (nilai otomatis), dan **Latihan** + kunci jawaban.
- **Generator Modul Ajar & LKPD** — bisa dicetak / disimpan PDF.
- **Penyimpanan nilai siswa** ke database (mode server) atau browser (mode statis).

---

## 🚀 Cara Menjalankan (Full-Stack)

> Butuh **Node.js versi 22.5 atau lebih baru** (memakai database bawaan `node:sqlite`, **tanpa perlu `npm install`**).

```bash
node server.js
```

Lalu buka **http://localhost:3000**

Database `data.db` (SQLite) dibuat otomatis untuk menyimpan nilai kuis.

### REST API

| Method | Endpoint | Fungsi |
|--------|----------|--------|
| GET | `/api/meta` | Info + pilar KBC & Deep Learning |
| GET | `/api/subjects?rumpun=&kelas=` | Daftar mata pelajaran |
| GET | `/api/subjects/:id?kelas=` | Detail mapel + topik |
| POST | `/api/results` | Simpan nilai kuis |
| GET | `/api/results?student=` | Riwayat nilai |
| GET | `/api/stats` | Rekap nilai per siswa |

---

## 🌐 Cara Pakai Tanpa Server (Statis / GitHub Pages)

Aplikasi otomatis mendeteksi bila backend tidak ada, lalu memakai `public/data.js` + `localStorage`.

1. Upload isi folder **`public/`** ke repositori GitHub.
2. Aktifkan **Settings → Pages** → pilih branch → folder `/root` (atau `/public`).
3. Buka URL GitHub Pages-mu. Nilai kuis tersimpan di browser.

> Atau cukup buka `public/index.html` langsung di browser.

---

## 📁 Struktur

```
ruang-belajar-mi/
├─ server.js              # Server + REST API + SQLite (node:sqlite)
├─ content/kurikulum.js   # Dataset semua mapel + KBC + Deep Learning
├─ public/
│  ├─ index.html
│  ├─ styles.css
│  ├─ app.js              # Logika UI
│  ├─ api.js              # Klien API + fallback localStorage
│  └─ data.js             # Salinan dataset untuk mode statis
├─ package.json
├─ README.md
├─ LICENSE                # MIT
└─ .gitignore
```

---

## 📖 Tentang Pendekatan

**Kurikulum Berbasis Cinta (KBC)** — Kemenag — menyisipkan 5 pilar cinta ke seluruh mapel: (1) Cinta kepada Allah & Rasul-Nya, (2) Cinta kepada Ilmu, (3) Cinta Diri & Sesama, (4) Cinta Lingkungan, (5) Cinta Tanah Air.

**Deep Learning / Pembelajaran Mendalam** — Kemendikdasmen — tiga prinsip: **Mindful** (berkesadaran), **Meaningful** (bermakna), **Joyful** (menggembirakan).

> Catatan: Konten adalah bahan ajar pendamping yang disusun mandiri, **bukan salinan buku teks berhak cipta**. Guru bebas menambah/menyunting topik di `content/kurikulum.js` (dan `public/data.js`).

---

© 2026 — Ruang Belajar MI. Lisensi MIT.
