# RuangMuridMI 🕌

Prototipe web app pembelajaran untuk anak **Madrasah Ibtidaiyah (MI)**, terinspirasi dari *Ruang Murid – Rumah Pendidikan*, dikhususkan untuk madrasah dengan:

- **Kurikulum Merdeka** sebagai kerangka
- **Pembelajaran Mendalam (Deep Learning)** sebagai pendekatan belajar
- **Kurikulum Berbasis Cinta (KBC)** sebagai nilai/karakter

Desain: modern, bersih, dan **ramah anak** (mobile-first untuk murid; dashboard untuk guru & wali).

## 📂 Struktur

```
ruang-murid-mi/
├─ index.html            → Halaman masuk (pilih peran)
├─ murid/
│  ├─ index.html         → Beranda murid
│  ├─ mapel.html         → Daftar mapel per kelas
│  ├─ materi.html        → Halaman materi (video + DL + KBC)
│  ├─ kuis.html          → Latihan soal interaktif
│  ├─ pojok-cinta.html   → Pembiasaan akhlak (KBC)
│  └─ profil.html        → Profil, lencana, progres
├─ guru/index.html       → Dashboard guru
├─ wali/index.html       → Dashboard orang tua/wali
├─ assets/               → styles.css, app.js, logo.svg
└─ vercel.json
```

Situs **statis** (HTML/CSS/JS murni) — tanpa proses build, ringan, cocok untuk internet terbatas.

## ▶️ Menjalankan secara lokal

Cukup buka `index.html` di browser. Atau jalankan server statis:

```bash
python3 -m http.server 3000
# buka http://localhost:3000
```

## 🚀 Upload ke GitHub

```bash
git init
git add .
git commit -m "RuangMuridMI: prototipe awal"
git branch -M main
git remote add origin https://github.com/USERNAME/ruang-murid-mi.git
git push -u origin main
```

## ▲ Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → **Add New… → Project**.
2. Pilih repo `ruang-murid-mi` dari GitHub.
3. **Framework Preset:** pilih **Other** (situs statis, tanpa build).
4. Klik **Deploy**. Selesai — setiap `git push` akan auto-deploy.

> Alternatif cepat: seret-lepas folder ini ke halaman **vercel.com/new** tanpa GitHub.

## 🎨 Catatan Desain

- Warna khas madrasah (hijau & emas), sudut membulat, bayangan lembut.
- Area **murid** mobile-first dengan navigasi bawah; area **guru/wali** desktop dengan sidebar.
- Emoji sebagai ikon agar ringan; ganti dengan ikon/ilustrasi kustom saat produksi.

## ✅ Langkah Lanjut (Produksi)

- Sambungkan ke database & login (mis. **Supabase**).
- Ubah ke **Next.js** bila butuh fitur dinamis (lihat blueprint di Notion).
- Validasi materi & nilai KBC bersama guru madrasah.
- Samakan topik dengan **Capaian Pembelajaran** Kurikulum Merdeka & **KMA Kemenag**.

---
_Prototipe untuk keperluan perancangan. Materi contoh masih dummy._
