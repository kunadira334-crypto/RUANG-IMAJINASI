# Ruang Belajar MI 📚

Media pembelajaran interaktif untuk **Madrasah Ibtidaiyah (MI)** yang mencakup mata pelajaran **Kemenag & Diknas**.

## ✨ Fitur
- **11 mata pelajaran** — PAI (Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI), Bahasa Arab, Matematika, Bahasa Indonesia, IPAS, Pendidikan Pancasila, Bahasa Inggris, PJOK
- 📖 **Materi & penjelasan** ringkas dan mudah dipahami
- 🧩 **Kuis interaktif** dengan penilaian otomatis
- 🎬 **Ilustrasi & video** pendukung
- ✏️ **Latihan soal** + kunci jawaban
- 🔬 **Simulasi interaktif**
- 🖨️ **Modul Ajar & LKPD** yang bisa disimpan (PDF) / dicetak

## 📁 Struktur proyek
```
.
├─ index.html    # Halaman utama
├─ styles.css    # Seluruh gaya tampilan
├─ data.js       # Data mata pelajaran (materi, kuis, latihan, simulasi)
├─ app.js        # Logika interaktif (kartu, modal, kuis, cetak modul/LKPD)
├─ README.md
├─ LICENSE
└─ .gitignore
```

## ▶️ Cara pakai (lokal)
Buka file `index.html` di browser mana pun. Tidak perlu internet atau instalasi.

## 🌐 Menjadikan website online (GitHub Pages)
1. Upload semua file ke sebuah repository GitHub.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/root`, lalu **Save**.
4. Tunggu 1–2 menit. Website akan tersedia di:
   `https://<username>.github.io/<nama-repo>/`

## 📝 Menyunting konten
- Menambah / mengubah materi, kuis, latihan, atau simulasi: edit `data.js`.
- Mengubah tampilan / warna: edit `styles.css`.
- Mengubah perilaku (kuis, modal, cetak): edit `app.js`.

## 📄 Lisensi
Dirilis di bawah [MIT License](LICENSE).

---
Dibuat sebagai media pembelajaran Madrasah Ibtidaiyah.
