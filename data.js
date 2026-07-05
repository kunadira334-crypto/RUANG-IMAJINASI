/* ==== Data mata pelajaran MI (Kemenag & Diknas) ==== */
const SUBJECTS = [
  /* ---------- KEMENAG ---------- */
  {
    id: "quran", nama: "Al-Qur'an Hadits", rumpun: "kemenag",
    icon: "\uD83D\uDcD6", color: "var(--green)", soft: "var(--green-soft)",
    desc: "Membaca, memahami, dan menghafal ayat serta hadits pilihan.",
    materi: [
      { h: "Apa itu Al-Qur'an & Hadits?", p: "Al-Qur'an adalah kitab suci umat Islam yang diturunkan kepada Nabi Muhammad SAW. Hadits adalah perkataan, perbuatan, dan ketetapan Nabi yang menjadi pedoman hidup." },
      { h: "Adab Membaca Al-Qur'an", p: "Berwudhu terlebih dahulu, membaca ta'awudz dan basmalah, membaca dengan tartil (perlahan dan jelas), serta menjaga sikap sopan." },
      { h: "Contoh Surat Pendek", p: "Surat Al-Fatihah, An-Nas, Al-Falaq, dan Al-Ikhlas adalah surat pendek yang sering dibaca dalam shalat dan mudah dihafal siswa MI." }
    ],
    ilustrasi: { emoji: "\uD83D\uDcD7", cap: "Ilustrasi mushaf Al-Qur'an & tajwid dasar" },
    kuis: [
      { q: "Kitab suci umat Islam adalah ...", o: ["Taurat", "Al-Qur'an", "Injil", "Zabur"], a: 1 },
      { q: "Sebelum membaca Al-Qur'an sebaiknya kita ...", o: ["Berlari", "Berwudhu", "Tidur", "Bermain"], a: 1 },
      { q: "Surat pertama dalam Al-Qur'an adalah ...", o: ["An-Nas", "Al-Ikhlas", "Al-Fatihah", "Al-Falaq"], a: 2 }
    ],
    latihan: [
      { s: "Sebutkan 3 adab membaca Al-Qur'an!", k: "Berwudhu, membaca ta'awudz & basmalah, membaca dengan tartil." },
      { s: "Apa arti membaca dengan tartil?", k: "Membaca dengan perlahan, jelas, dan sesuai tajwid." },
      { s: "Sebutkan 2 contoh surat pendek!", k: "Contoh: An-Nas, Al-Ikhlas, Al-Falaq, Al-Fatihah." }
    ],
    sim: { type: "counter", label: "Penghitung Hafalan Ayat", unit: "ayat" }
  },
  {
    id: "akidah", nama: "Akidah Akhlak", rumpun: "kemenag",
    icon: "\uD83D\uDD4C", color: "var(--green)", soft: "var(--green-soft)",
    desc: "Mengenal keimanan dan membiasakan akhlak terpuji sehari-hari.",
    materi: [
      { h: "Rukun Iman", p: "Rukun iman ada 6: iman kepada Allah, malaikat, kitab, rasul, hari akhir, dan qada & qadar." },
      { h: "Akhlak Terpuji", p: "Contoh akhlak terpuji: jujur, sopan, sabar, tolong-menolong, dan menghormati orang tua serta guru." },
      { h: "Akhlak Tercela", p: "Contoh akhlak tercela yang harus dijauhi: berbohong, sombong, dan suka mengganggu teman." }
    ],
    ilustrasi: { emoji: "\uD83E\uDD1D", cap: "Ilustrasi perilaku terpuji: tolong-menolong" },
    kuis: [
      { q: "Jumlah rukun iman ada ...", o: ["5", "6", "4", "3"], a: 1 },
      { q: "Berikut yang termasuk akhlak terpuji adalah ...", o: ["Sombong", "Jujur", "Berbohong", "Malas"], a: 1 },
      { q: "Kepada orang tua kita harus ...", o: ["Melawan", "Menghormati", "Mengabaikan", "Membentak"], a: 1 }
    ],
    latihan: [
      { s: "Sebutkan rukun iman yang pertama!", k: "Iman kepada Allah SWT." },
      { s: "Berikan 2 contoh akhlak terpuji di sekolah!", k: "Contoh: jujur saat ujian, menolong teman, menghormati guru." }
    ],
    sim: { type: "counter", label: "Penghitung Kebaikan Hari Ini", unit: "kebaikan" }
  },
  {
    id: "fikih", nama: "Fikih", rumpun: "kemenag",
    icon: "\uD83E\uDD32", color: "var(--green)", soft: "var(--green-soft)",
    desc: "Belajar tata cara ibadah seperti wudhu dan shalat.",
    materi: [
      { h: "Bersuci (Thaharah)", p: "Sebelum shalat kita harus bersuci dari hadas dengan berwudhu. Wudhu membersihkan anggota badan tertentu dengan air suci." },
      { h: "Urutan Wudhu", p: "Niat, membasuh wajah, membasuh kedua tangan sampai siku, mengusap kepala, membasuh kedua kaki sampai mata kaki, lalu tertib." },
      { h: "Shalat Lima Waktu", p: "Shalat wajib ada 5: Subuh, Dzuhur, Ashar, Maghrib, dan Isya." }
    ],
    ilustrasi: { emoji: "\uD83D\uDCA7", cap: "Ilustrasi langkah-langkah berwudhu" },
    kuis: [
      { q: "Membersihkan diri sebelum shalat disebut ...", o: ["Wudhu", "Makan", "Tidur", "Belajar"], a: 0 },
      { q: "Jumlah shalat wajib sehari semalam ada ...", o: ["3", "4", "5", "6"], a: 2 },
      { q: "Shalat yang dikerjakan pagi hari adalah ...", o: ["Isya", "Subuh", "Ashar", "Maghrib"], a: 1 }
    ],
    latihan: [
      { s: "Sebutkan urutan wudhu secara singkat!", k: "Niat, wajah, tangan sampai siku, mengusap kepala, kaki sampai mata kaki, tertib." },
      { s: "Sebutkan nama 5 shalat wajib!", k: "Subuh, Dzuhur, Ashar, Maghrib, Isya." }
    ],
    sim: { type: "counter", label: "Penghitung Rakaat Shalat", unit: "rakaat" }
  },
  {
    id: "ski", nama: "SKI (Sejarah Kebudayaan Islam)", rumpun: "kemenag",
    icon: "\uD83D\uDD4B", color: "var(--green)", soft: "var(--green-soft)",
    desc: "Mengenal kisah Nabi dan sejarah perkembangan Islam.",
    materi: [
      { h: "Nabi Muhammad SAW", p: "Nabi Muhammad SAW lahir di kota Mekah. Beliau dikenal jujur dan dapat dipercaya sehingga digelari Al-Amin." },
      { h: "Hijrah ke Madinah", p: "Nabi dan para sahabat berpindah (hijrah) dari Mekah ke Madinah untuk menyebarkan Islam dengan lebih aman." }
    ],
    ilustrasi: { emoji: "\uD83C\uDF0C", cap: "Ilustrasi peta perjalanan hijrah Mekah\u2013Madinah" },
    kuis: [
      { q: "Nabi Muhammad SAW lahir di kota ...", o: ["Madinah", "Mekah", "Kairo", "Bagdad"], a: 1 },
      { q: "Gelar Nabi karena jujur & dapat dipercaya adalah ...", o: ["Al-Amin", "Al-Faruq", "Al-Kabir", "Al-Aziz"], a: 0 }
    ],
    latihan: [
      { s: "Apa arti gelar Al-Amin?", k: "Orang yang dapat dipercaya." },
      { s: "Nabi hijrah dari kota mana ke kota mana?", k: "Dari Mekah ke Madinah." }
    ],
    sim: { type: "counter", label: "Penghitung Tokoh yang Dipelajari", unit: "tokoh" }
  },
  {
    id: "arab", nama: "Bahasa Arab", rumpun: "kemenag",
    icon: "\uD83D\uDD24", color: "var(--green)", soft: "var(--green-soft)",
    desc: "Mengenal kosakata dan huruf hijaiyah dasar.",
    materi: [
      { h: "Huruf Hijaiyah", p: "Huruf Arab disebut huruf hijaiyah, jumlahnya 28 huruf, dimulai dari alif (\u0627) sampai ya (\u064A)." },
      { h: "Kosakata Sehari-hari", p: "Contoh: \u0643\u0650\u062A\u064E\u0627\u0628 (kitaab = buku), \u0642\u064E\u0644\u064E\u0645 (qalam = pena), \u0645\u064E\u062F\u0652\u0631\u064E\u0633\u064E\u0629 (madrasah = sekolah)." }
    ],
    ilustrasi: { emoji: "\uD83D\uDCDD", cap: "Ilustrasi kartu huruf hijaiyah" },
    kuis: [
      { q: "Huruf hijaiyah berjumlah ...", o: ["26", "28", "30", "24"], a: 1 },
      { q: "Arti kata \u0643\u0650\u062A\u064E\u0627\u0628 (kitaab) adalah ...", o: ["Pena", "Buku", "Sekolah", "Meja"], a: 1 }
    ],
    latihan: [
      { s: "Sebutkan huruf hijaiyah pertama dan terakhir!", k: "Pertama alif (\u0627), terakhir ya (\u064A)." },
      { s: "Apa arti \u0642\u064E\u0644\u064E\u0645 (qalam)?", k: "Pena." }
    ],
    sim: { type: "counter", label: "Penghitung Kosakata Baru", unit: "kata" }
  },

  /* ---------- DIKNAS ---------- */
  {
    id: "mtk", nama: "Matematika", rumpun: "diknas",
    icon: "\uD83D\uDD22", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Berhitung, bilangan, bangun datar, dan pemecahan masalah.",
    materi: [
      { h: "Penjumlahan Bersusun", p: "Untuk menjumlahkan bilangan besar, susun ke bawah sesuai nilai tempat (satuan, puluhan, ratusan), lalu jumlahkan dari kanan." },
      { h: "Bangun Datar", p: "Bangun datar contohnya persegi, persegi panjang, segitiga, dan lingkaran. Masing-masing punya jumlah sisi berbeda." },
      { h: "Perkalian Dasar", p: "Perkalian adalah penjumlahan berulang. Contoh: 3 \u00d7 4 = 4 + 4 + 4 = 12." }
    ],
    ilustrasi: { emoji: "\uD83D\uDCD0", cap: "Ilustrasi bangun datar & garis bilangan" },
    kuis: [
      { q: "Hasil dari 125 + 340 adalah ...", o: ["455", "465", "475", "445"], a: 1 },
      { q: "Bangun datar dengan 3 sisi adalah ...", o: ["Persegi", "Segitiga", "Lingkaran", "Persegi panjang"], a: 1 },
      { q: "Hasil dari 3 \u00d7 4 adalah ...", o: ["7", "12", "9", "34"], a: 1 },
      { q: "Bilangan setelah 199 adalah ...", o: ["200", "198", "210", "100"], a: 0 }
    ],
    latihan: [
      { s: "256 + 118 = ....", k: "374" },
      { s: "Sebutkan 4 contoh bangun datar!", k: "Persegi, persegi panjang, segitiga, lingkaran." },
      { s: "5 \u00d7 6 = ....", k: "30" }
    ],
    sim: { type: "adder", label: "Alat Peraga Penjumlahan" }
  },
  {
    id: "bindo", nama: "Bahasa Indonesia", rumpun: "diknas",
    icon: "\uD83D\uDCD8", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Membaca, menulis, kosakata, dan menyimak cerita.",
    materi: [
      { h: "Huruf Kapital", p: "Huruf kapital dipakai di awal kalimat dan pada nama orang, tempat, hari, serta bulan." },
      { h: "Kalimat & Tanda Baca", p: "Kalimat berita diakhiri titik (.), kalimat tanya diakhiri tanda tanya (?), kalimat seru diakhiri tanda seru (!)." },
      { h: "Menyusun Cerita", p: "Cerita yang baik memiliki awal, tengah (masalah), dan akhir (penyelesaian)." }
    ],
    ilustrasi: { emoji: "\uD83D\uDCDA", cap: "Ilustrasi buku cerita bergambar" },
    kuis: [
      { q: "Huruf kapital dipakai pada ... kalimat.", o: ["Akhir", "Awal", "Tengah", "Semua"], a: 1 },
      { q: "Kalimat tanya diakhiri tanda ...", o: ["Titik", "Tanda tanya", "Tanda seru", "Koma"], a: 1 },
      { q: "Nama hari ditulis dengan huruf ... di depannya.", o: ["Kecil", "Kapital", "Miring", "Tebal"], a: 1 }
    ],
    latihan: [
      { s: "Perbaiki: 'hari ini saya pergi ke jakarta.'", k: "Hari ini saya pergi ke Jakarta." },
      { s: "Tanda baca untuk kalimat perintah/seru adalah ...", k: "Tanda seru (!)." }
    ],
    sim: { type: "counter", label: "Penghitung Kata dalam Kalimat", unit: "kata" }
  },
  {
    id: "ipas", nama: "IPAS (IPA & IPS)", rumpun: "diknas",
    icon: "\uD83C\uDF0D", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Alam sekitar, makhluk hidup, lingkungan, dan masyarakat.",
    materi: [
      { h: "Ciri Makhluk Hidup", p: "Makhluk hidup bernapas, bergerak, makan, tumbuh, dan berkembang biak." },
      { h: "Bagian Tumbuhan", p: "Tumbuhan terdiri dari akar, batang, daun, bunga, dan buah. Daun berperan membuat makanan lewat fotosintesis." },
      { h: "Lingkungan & Masyarakat", p: "Kita hidup di lingkungan bersama keluarga dan tetangga. Menjaga kebersihan dan gotong royong itu penting." }
    ],
    ilustrasi: { emoji: "\uD83C\uDF31", cap: "Ilustrasi bagian-bagian tumbuhan" },
    kuis: [
      { q: "Berikut ciri makhluk hidup, kecuali ...", o: ["Bernapas", "Bergerak", "Berkarat", "Tumbuh"], a: 2 },
      { q: "Bagian tumbuhan yang membuat makanan adalah ...", o: ["Akar", "Daun", "Batang", "Bunga"], a: 1 },
      { q: "Bekerja sama membersihkan lingkungan disebut ...", o: ["Gotong royong", "Bertengkar", "Malas", "Sendiri"], a: 0 }
    ],
    latihan: [
      { s: "Sebutkan 3 ciri makhluk hidup!", k: "Contoh: bernapas, bergerak, makan, tumbuh, berkembang biak." },
      { s: "Apa fungsi akar pada tumbuhan?", k: "Menyerap air & unsur hara serta menguatkan tumbuhan." }
    ],
    sim: { type: "counter", label: "Penghitung Jenis Makhluk Hidup", unit: "jenis" }
  },
  {
    id: "ppkn", nama: "Pendidikan Pancasila", rumpun: "diknas",
    icon: "\uD83C\uDDEE\uD83C\uDDE9", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Pancasila, aturan, kerukunan, dan hidup bermasyarakat.",
    materi: [
      { h: "Pancasila", p: "Pancasila adalah dasar negara Indonesia yang terdiri dari 5 sila, dilambangkan oleh burung Garuda." },
      { h: "Sila-sila Pancasila", p: "Sila ke-1 Ketuhanan, ke-2 Kemanusiaan, ke-3 Persatuan, ke-4 Kerakyatan/Musyawarah, ke-5 Keadilan sosial." },
      { h: "Hidup Rukun", p: "Kita harus saling menghormati perbedaan agama, suku, dan pendapat agar hidup rukun dan damai." }
    ],
    ilustrasi: { emoji: "\uD83E\uDD85", cap: "Ilustrasi lambang Garuda Pancasila" },
    kuis: [
      { q: "Jumlah sila dalam Pancasila ada ...", o: ["3", "4", "5", "6"], a: 2 },
      { q: "Lambang negara Indonesia adalah ...", o: ["Harimau", "Garuda", "Elang", "Merpati"], a: 1 },
      { q: "Sila ketiga Pancasila berbunyi tentang ...", o: ["Ketuhanan", "Persatuan", "Keadilan", "Kerakyatan"], a: 1 }
    ],
    latihan: [
      { s: "Sebutkan bunyi sila pertama Pancasila!", k: "Ketuhanan Yang Maha Esa." },
      { s: "Mengapa kita harus hidup rukun?", k: "Agar tercipta kedamaian, persatuan, dan saling menghormati." }
    ],
    sim: { type: "counter", label: "Penghitung Sikap Baik di Kelas", unit: "sikap" }
  },
  {
    id: "bing", nama: "Bahasa Inggris", rumpun: "diknas",
    icon: "\uD83C\uDDEC\uD83C\uDDE7", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Kosakata dasar, angka, warna, dan sapaan sederhana.",
    materi: [
      { h: "Greetings (Sapaan)", p: "Good morning (selamat pagi), Good afternoon (selamat siang), Thank you (terima kasih), Goodbye (selamat tinggal)." },
      { h: "Numbers (Angka)", p: "One (1), two (2), three (3), four (4), five (5), six (6), seven (7)." },
      { h: "Colors (Warna)", p: "Red (merah), blue (biru), green (hijau), yellow (kuning), black (hitam), white (putih)." }
    ],
    ilustrasi: { emoji: "\uD83C\uDFA8", cap: "Ilustrasi kartu warna & angka bahasa Inggris" },
    kuis: [
      { q: "'Selamat pagi' dalam bahasa Inggris adalah ...", o: ["Good night", "Good morning", "Goodbye", "Good afternoon"], a: 1 },
      { q: "Angka 'five' artinya ...", o: ["3", "4", "5", "6"], a: 2 },
      { q: "Warna 'red' artinya ...", o: ["Biru", "Merah", "Hijau", "Kuning"], a: 1 }
    ],
    latihan: [
      { s: "Terjemahkan: 'Terima kasih'.", k: "Thank you." },
      { s: "Sebutkan angka 1\u20133 dalam bahasa Inggris!", k: "One, two, three." }
    ],
    sim: { type: "counter", label: "Vocabulary Counter", unit: "words" }
  },
  {
    id: "pjok", nama: "PJOK", rumpun: "diknas",
    icon: "\u26BD", color: "var(--blue)", soft: "var(--blue-soft)",
    desc: "Gerak dasar, olahraga, dan pola hidup sehat.",
    materi: [
      { h: "Gerak Dasar", p: "Gerak dasar meliputi berjalan, berlari, melompat, dan melempar. Lakukan pemanasan sebelum berolahraga." },
      { h: "Hidup Sehat", p: "Menjaga kesehatan dengan makan bergizi, olahraga teratur, cukup tidur, dan menjaga kebersihan diri." }
    ],
    ilustrasi: { emoji: "\uD83C\uDFC3", cap: "Ilustrasi gerak dasar lari & lompat" },
    kuis: [
      { q: "Sebelum berolahraga sebaiknya melakukan ...", o: ["Tidur", "Pemanasan", "Makan banyak", "Diam"], a: 1 },
      { q: "Berikut termasuk gerak dasar, kecuali ...", o: ["Berlari", "Melompat", "Menulis", "Melempar"], a: 2 }
    ],
    latihan: [
      { s: "Sebutkan 3 gerak dasar!", k: "Berjalan, berlari, melompat, melempar (pilih 3)." },
      { s: "Sebutkan 2 cara menjaga tubuh tetap sehat!", k: "Makan bergizi, olahraga teratur, cukup tidur, jaga kebersihan." }
    ],
    sim: { type: "counter", label: "Penghitung Lompatan", unit: "lompatan" }
  }
];
