/* =====================================================================
 * DATASET KURIKULUM MADRASAH IBTIDAIYAH (MI)
 * Insersi Kurikulum Berbasis Cinta (KBC) + Pendekatan Deep Learning
 * (Pembelajaran Mendalam: Mindful, Meaningful, Joyful)
 * ---------------------------------------------------------------------
 * Skema topik:
 *  { id, kelas, judul, ringkas, materi:[paragraf...],
 *    kbc:{ pilar, nilai, penerapan },
 *    deep:{ mindful, meaningful, joyful },
 *    kuis:[{ q, o:[...], a }], latihan:[{ s, k }] }
 * ===================================================================== */

const KBC_PILAR = [
  { id: 1, nama: "Cinta kepada Allah & Rasul-Nya", icon: "\uD83D\uDD4C", warna: "#46A171" },
  { id: 2, nama: "Cinta kepada Ilmu",              icon: "\uD83D\uDCDA", warna: "#2783DE" },
  { id: 3, nama: "Cinta Diri & Sesama",           icon: "\uD83E\uDD1D", warna: "#D5803B" },
  { id: 4, nama: "Cinta Lingkungan",              icon: "\uD83C\uDF31", warna: "#46A171" },
  { id: 5, nama: "Cinta Tanah Air",               icon: "\uD83C\uDDEE\uD83C\uDDE9", warna: "#E56458" }
];

const DEEP_PILAR = [
  { id: "mindful",    nama: "Mindful (Berkesadaran)",  icon: "\uD83E\uDDE0", desc: "Fokus, berpikir kritis, sadar penuh saat belajar." },
  { id: "meaningful", nama: "Meaningful (Bermakna)",   icon: "\uD83D\uDCA1", desc: "Mengaitkan pelajaran dengan kehidupan nyata." },
  { id: "joyful",     nama: "Joyful (Menggembirakan)", icon: "\uD83C\uDF89", desc: "Belajar dengan gembira dan bermakna." }
];

const SUBJECTS = [];

/* ============================= KEMENAG ============================= */

SUBJECTS.push({
  id: "quran", nama: "Al-Qur'an Hadits", rumpun: "kemenag",
  icon: "\uD83D\uDCD6", warna: "#46A171", soft: "#E8F1EC",
  deskripsi: "Membaca, memahami, dan mengamalkan Al-Qur'an serta hadits pilihan.",
  topik: [
    { id: "q1", kelas: 1, judul: "Mengenal Huruf Hijaiyah", ringkas: "Membaca huruf hijaiyah dan harakat dasar.",
      materi: ["Huruf hijaiyah adalah huruf Arab untuk menulis Al-Qur'an, berjumlah 28 huruf dari alif (\u0627) sampai ya (\u064A).","Harakat memberi bunyi pada huruf: fathah (a), kasrah (i), dhammah (u). Contoh: \u0628\u064E ba, \u0628\u0650 bi, \u0628\u064F bu."],
      kbc: { pilar: 2, nilai: "Cinta kepada Ilmu", penerapan: "Menumbuhkan rasa senang belajar membaca Al-Qur'an sejak dini." },
      deep: { mindful: "Amati bentuk tiap huruf dengan teliti.", meaningful: "Kaitkan huruf dengan bacaan shalat sehari-hari.", joyful: "Bermain kartu huruf hijaiyah bersama teman." },
      kuis: [{ q: "Jumlah huruf hijaiyah ada ...", o: ["26","28","30","24"], a: 1 },{ q: "Huruf hijaiyah pertama adalah ...", o: ["Ya","Ba","Alif","Nun"], a: 2 },{ q: "Harakat fathah dibaca ...", o: ["i","u","a","o"], a: 2 }],
      latihan: [{ s: "Sebutkan huruf hijaiyah pertama dan terakhir!", k: "Alif (\u0627) dan ya (\u064A)." },{ s: "Bagaimana bunyi \u0628 jika diberi kasrah?", k: "Dibaca 'bi'." }] },
    { id: "q2", kelas: 2, judul: "Surat Al-Fatihah", ringkas: "Menghafal dan memahami Surat Al-Fatihah.",
      materi: ["Al-Fatihah adalah surat pertama Al-Qur'an, terdiri dari 7 ayat, dan dibaca pada setiap rakaat shalat.","Isinya pujian kepada Allah, pengakuan hanya menyembah Allah, dan doa agar ditunjukkan jalan yang lurus."],
      kbc: { pilar: 1, nilai: "Cinta kepada Allah & Rasul-Nya", penerapan: "Menghayati Al-Fatihah sebagai cara berkomunikasi dan mencintai Allah." },
      deep: { mindful: "Baca Al-Fatihah perlahan sambil merenungkan artinya.", meaningful: "Sadari doa 'jalan yang lurus' dipakai setiap hari.", joyful: "Lomba hafalan Al-Fatihah dengan tepuk semangat." },
      kuis: [{ q: "Al-Fatihah terdiri dari ... ayat.", o: ["5","6","7","10"], a: 2 },{ q: "Al-Fatihah adalah surat ke- ...", o: ["1","2","114","30"], a: 0 },{ q: "Al-Fatihah dibaca saat ...", o: ["Tidur","Shalat","Makan","Bermain"], a: 1 }],
      latihan: [{ s: "Berapa jumlah ayat Al-Fatihah?", k: "7 ayat." },{ s: "Mengapa Al-Fatihah penting dalam shalat?", k: "Karena dibaca setiap rakaat shalat." }] },
    { id: "q4", kelas: 4, judul: "Hadits tentang Kebersihan", ringkas: "Memahami hadits kebersihan sebagian dari iman.",
      materi: ["Rasulullah SAW mengajarkan 'An-nazhaafatu minal iiman' yang artinya 'kebersihan sebagian dari iman'.","Menjaga kebersihan badan, pakaian, dan lingkungan adalah wujud keimanan yang dibiasakan sejak di MI."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Menjaga kebersihan kelas dan madrasah sebagai bukti iman dan cinta lingkungan." },
      deep: { mindful: "Perhatikan bagian kelas yang perlu dibersihkan.", meaningful: "Hubungkan hadits ini dengan kebiasaan di rumah.", joyful: "Kerja bakti kelas sambil bernyanyi." },
      kuis: [{ q: "Arti 'An-nazhaafatu minal iiman' adalah ...", o: ["Sabar itu indah","Kebersihan sebagian dari iman","Ilmu itu cahaya","Jujur itu baik"], a: 1 },{ q: "Menjaga kebersihan termasuk wujud ...", o: ["Iman","Malas","Sombong","Marah"], a: 0 }],
      latihan: [{ s: "Sebutkan 2 cara menjaga kebersihan madrasah!", k: "Membuang sampah pada tempatnya, menyapu kelas, merapikan meja." },{ s: "Apa arti hadits tentang kebersihan?", k: "Kebersihan adalah sebagian dari iman." }] }
  ]
});

SUBJECTS.push({
  id: "akidah", nama: "Akidah Akhlak", rumpun: "kemenag",
  icon: "\uD83D\uDD4C", warna: "#46A171", soft: "#E8F1EC",
  deskripsi: "Menguatkan keimanan dan membiasakan akhlak terpuji.",
  topik: [
    { id: "ak1", kelas: 1, judul: "Kalimat Thayyibah: Basmalah", ringkas: "Membiasakan basmalah sebelum beraktivitas.",
      materi: ["Basmalah adalah 'Bismillaahirrahmaanirrahiim', artinya 'Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang'.","Membaca basmalah dianjurkan setiap memulai kegiatan baik agar diberkahi Allah."],
      kbc: { pilar: 1, nilai: "Cinta kepada Allah & Rasul-Nya", penerapan: "Basmalah menumbuhkan kesadaran bahwa Allah selalu hadir." },
      deep: { mindful: "Ucapkan basmalah pelan dan penuh perhatian.", meaningful: "Terapkan basmalah sebelum makan dan belajar.", joyful: "Menyanyikan lagu basmalah bersama." },
      kuis: [{ q: "Basmalah dibaca ketika ...", o: ["Selesai kegiatan","Memulai kegiatan baik","Marah","Tidur"], a: 1 },{ q: "Arti Ar-Rahman adalah ...", o: ["Maha Pengasih","Maha Kuat","Maha Melihat","Maha Kaya"], a: 0 }],
      latihan: [{ s: "Tuliskan arti basmalah!", k: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang." },{ s: "Kapan membaca basmalah?", k: "Setiap memulai kegiatan baik." }] },
    { id: "ak3", kelas: 3, judul: "Akhlak Terpuji: Jujur", ringkas: "Membiasakan sikap jujur.",
      materi: ["Jujur artinya berkata dan berbuat sesuai kenyataan. Orang jujur dipercaya dan disayangi.","Nabi Muhammad SAW teladan kejujuran, bergelar Al-Amin. Kita jujur dengan tidak berbohong dan tidak menyontek."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Kejujuran menjaga kepercayaan dan kasih sayang antarteman." },
      deep: { mindful: "Renungkan akibat baik dari berkata jujur.", meaningful: "Ceritakan pengalaman jujurmu.", joyful: "Bermain peran mengembalikan barang temuan." },
      kuis: [{ q: "Gelar Nabi karena jujur adalah ...", o: ["Al-Amin","Al-Kabir","Al-Aziz","Al-Hakim"], a: 0 },{ q: "Orang jujur akan ...", o: ["Dijauhi","Dipercaya","Dimarahi","Dihukum"], a: 1 },{ q: "Menyontek termasuk perbuatan ...", o: ["Jujur","Terpuji","Tidak jujur","Berani"], a: 2 }],
      latihan: [{ s: "Apa arti jujur?", k: "Berkata dan berbuat sesuai kenyataan." },{ s: "Contoh sikap jujur di sekolah?", k: "Tidak menyontek, mengembalikan barang, mengakui kesalahan." }] },
    { id: "ak5", kelas: 5, judul: "Menghormati Guru & Orang Tua", ringkas: "Adab kepada guru dan orang tua.",
      materi: ["Guru dan orang tua sangat berjasa. Kita wajib menghormati, menaati nasihat baiknya, dan mendoakan mereka.","Wujudnya: berbicara sopan, mendengarkan nasihat, dan membantu pekerjaan mereka."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menghormati guru & orang tua adalah wujud cinta dan bakti kepada sesama." },
      deep: { mindful: "Sadari jasa orang tua dan guru.", meaningful: "Tuliskan tiga cara berbakti hari ini.", joyful: "Membuat kartu ucapan terima kasih untuk guru." },
      kuis: [{ q: "Kepada guru kita bersikap ...", o: ["Melawan","Sopan","Cuek","Sombong"], a: 1 },{ q: "Salah satu bakti kepada orang tua ...", o: ["Membentak","Mendoakan","Mengabaikan","Berbohong"], a: 1 }],
      latihan: [{ s: "Sebutkan 2 cara menghormati guru!", k: "Berbicara sopan, mendengarkan nasihat, tidak ribut." },{ s: "Mengapa berbakti kepada orang tua?", k: "Karena mereka merawat dan mendidik kita." }] }
  ]
});

SUBJECTS.push({
  id: "fikih", nama: "Fikih", rumpun: "kemenag",
  icon: "\uD83E\uDD32", warna: "#46A171", soft: "#E8F1EC",
  deskripsi: "Belajar tata cara ibadah sesuai tuntunan.",
  topik: [
    { id: "fk1", kelas: 1, judul: "Rukun Islam", ringkas: "Mengenal lima rukun Islam.",
      materi: ["Rukun Islam ada lima: syahadat, shalat, puasa, zakat, dan haji bagi yang mampu.","Rukun Islam adalah pondasi seorang muslim; anak MI membiasakan syahadat dan shalat sejak dini."],
      kbc: { pilar: 1, nilai: "Cinta kepada Allah & Rasul-Nya", penerapan: "Menjalankan rukun Islam adalah bukti cinta dan ketaatan kepada Allah." },
      deep: { mindful: "Hafalkan lima rukun Islam berurutan dengan tenang.", meaningful: "Kaitkan shalat lima waktu dengan kegiatan harianmu.", joyful: "Bermain kartu urutan rukun Islam." },
      kuis: [{ q: "Rukun Islam berjumlah ...", o: ["3","4","5","6"], a: 2 },{ q: "Rukun Islam pertama adalah ...", o: ["Puasa","Syahadat","Zakat","Haji"], a: 1 }],
      latihan: [{ s: "Sebutkan rukun Islam kedua!", k: "Shalat." },{ s: "Sebutkan seluruh rukun Islam!", k: "Syahadat, shalat, puasa, zakat, haji." }] },
    { id: "fk2", kelas: 2, judul: "Tata Cara Wudhu", ringkas: "Urutan berwudhu yang benar.",
      materi: ["Wudhu adalah bersuci dari hadas kecil sebelum shalat dengan air suci.","Urutan: niat, membasuh wajah, tangan sampai siku, mengusap kepala, kaki sampai mata kaki, tertib."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Berwudhu dengan air secukupnya, tidak boros, sebagai cinta lingkungan." },
      deep: { mindful: "Lakukan gerakan wudhu perlahan sambil menghafal urutan.", meaningful: "Praktikkan wudhu sebelum shalat di rumah.", joyful: "Praktik wudhu bersama sambil saling mengoreksi dengan ramah." },
      kuis: [{ q: "Setelah niat, wudhu dimulai membasuh ...", o: ["Kaki","Wajah","Kepala","Telinga"], a: 1 },{ q: "Membasuh tangan sampai ...", o: ["Pergelangan","Siku","Bahu","Jari"], a: 1 }],
      latihan: [{ s: "Sebutkan urutan wudhu singkat!", k: "Niat, wajah, tangan sampai siku, mengusap kepala, kaki sampai mata kaki, tertib." },{ s: "Mengapa tidak boleh boros air?", k: "Karena boros dilarang; kita menghemat dan mencintai air." }] }
  ]
});

SUBJECTS.push({
  id: "ski", nama: "SKI (Sejarah Kebudayaan Islam)", rumpun: "kemenag",
  icon: "\uD83D\uDD4B", warna: "#46A171", soft: "#E8F1EC",
  deskripsi: "Meneladani kisah Nabi dan sejarah Islam.",
  topik: [
    { id: "sk3", kelas: 3, judul: "Kelahiran Nabi Muhammad SAW", ringkas: "Kisah kelahiran dan masa kecil Nabi.",
      materi: ["Nabi Muhammad SAW lahir di Mekah pada Tahun Gajah. Ayahnya Abdullah, ibunya Aminah.","Sejak kecil beliau jujur, penyayang, dan suka menolong sehingga sangat disayangi."],
      kbc: { pilar: 1, nilai: "Cinta kepada Allah & Rasul-Nya", penerapan: "Mencintai Rasulullah dengan meneladani akhlak mulianya." },
      deep: { mindful: "Dengarkan kisah dengan saksama lalu ceritakan ulang.", meaningful: "Tiru satu sifat Nabi hari ini.", joyful: "Membuat lini masa bergambar." },
      kuis: [{ q: "Nabi Muhammad lahir di kota ...", o: ["Madinah","Mekah","Kairo","Bagdad"], a: 1 },{ q: "Nama ibu Nabi adalah ...", o: ["Khadijah","Aminah","Fatimah","Halimah"], a: 1 }],
      latihan: [{ s: "Siapa nama ayah & ibu Nabi?", k: "Ayah Abdullah, ibu Aminah." },{ s: "Sebutkan 2 sifat Nabi sejak kecil!", k: "Jujur, penyayang, suka menolong." }] },
    { id: "sk5", kelas: 5, judul: "Hijrah ke Madinah", ringkas: "Peristiwa hijrah dan hikmahnya.",
      materi: ["Hijrah adalah perpindahan Nabi dan sahabat dari Mekah ke Madinah untuk menyebarkan Islam dengan aman.","Di Madinah, Nabi mempersaudarakan Muhajirin dan Anshar, mengajarkan persatuan dan tolong-menolong."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Meneladani persaudaraan Muhajirin-Anshar sebagai cinta sesama." },
      deep: { mindful: "Identifikasi sebab dan tujuan hijrah.", meaningful: "Hubungkan persaudaraan dengan kerukunan di kelas.", joyful: "Diskusi kelompok membuat poster persaudaraan." },
      kuis: [{ q: "Hijrah Nabi menuju ...", o: ["Thaif","Madinah","Yaman","Syam"], a: 1 },{ q: "Penduduk Madinah yang menolong disebut ...", o: ["Muhajirin","Anshar","Quraisy","Sahabat"], a: 1 }],
      latihan: [{ s: "Apa itu hijrah?", k: "Perpindahan Nabi dan sahabat dari Mekah ke Madinah." },{ s: "Apa hikmah hijrah?", k: "Persatuan, tolong-menolong, persaudaraan." }] }
  ]
});

SUBJECTS.push({
  id: "arab", nama: "Bahasa Arab", rumpun: "kemenag",
  icon: "\uD83D\uDD24", warna: "#46A171", soft: "#E8F1EC",
  deskripsi: "Mengenal kosakata dan percakapan Arab dasar.",
  topik: [
    { id: "arb1", kelas: 1, judul: "At-Ta'aruf (Perkenalan)", ringkas: "Menyapa dan memperkenalkan diri.",
      materi: ["Salam: assalaamu'alaikum, dijawab wa'alaikumussalaam.","Memperkenalkan diri: 'ismii ...' artinya 'namaku ...'. Contoh: ismii Ahmad."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Mengucap salam mempererat kasih sayang antarteman." },
      deep: { mindful: "Ucapkan salam dengan jelas dan ramah.", meaningful: "Praktikkan salam saat bertemu guru dan teman.", joyful: "Bermain perkenalan berpasangan dalam bahasa Arab." },
      kuis: [{ q: "Jawaban salam adalah ...", o: ["Shukran","Wa'alaikumussalaam","Afwan","Ma'assalaamah"], a: 1 },{ q: "'Ismii' artinya ...", o: ["Rumahku","Namaku","Bukuku","Temanku"], a: 1 }],
      latihan: [{ s: "Cara memperkenalkan nama dalam bahasa Arab?", k: "Ismii ... (namaku ...)." },{ s: "Arti assalaamu'alaikum?", k: "Semoga keselamatan atasmu." }] },
    { id: "arb3", kelas: 3, judul: "Al-Alwaan & Al-Arqaam (Warna & Angka)", ringkas: "Kosakata warna dan angka.",
      materi: ["Warna: ahmar (merah), azraq (biru), akhdhar (hijau).","Angka: waahid (1), itsnaan (2), tsalaatsah (3)."],
      kbc: { pilar: 2, nilai: "Cinta kepada Ilmu", penerapan: "Menambah kosakata dengan semangat mencintai ilmu." },
      deep: { mindful: "Sebutkan warna benda di sekitar dalam bahasa Arab.", meaningful: "Hubungkan angka Arab dengan menghitung benda nyata.", joyful: "Kuis cepat menebak warna bahasa Arab." },
      kuis: [{ q: "'Ahmar' artinya ...", o: ["Biru","Merah","Hijau","Kuning"], a: 1 },{ q: "'Tsalaatsah' berarti ...", o: ["1","2","3","4"], a: 2 }],
      latihan: [{ s: "Bahasa Arab angka 1 dan 2?", k: "Waahid (1), itsnaan (2)." },{ s: "Apa arti akhdhar?", k: "Hijau." }] }
  ]
});

/* ============================= DIKNAS ============================= */

SUBJECTS.push({
  id: "mtk", nama: "Matematika", rumpun: "diknas",
  icon: "\uD83D\uDD22", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Bilangan, operasi hitung, bangun, dan pemecahan masalah.",
  topik: [
    { id: "mt1", kelas: 1, judul: "Bilangan 1-20 & Berhitung", ringkas: "Mengenal dan mengurutkan bilangan.",
      materi: ["Bilangan digunakan untuk menghitung banyak benda. Kita belajar membaca, menulis, dan mengurutkan bilangan 1 sampai 20.","Bilangan bisa dibandingkan: lebih besar (>), lebih kecil (<), atau sama dengan (=)."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Berlatih berhitung dengan menghitung tanaman atau benda di sekitar kelas." },
      deep: { mindful: "Hitung benda satu per satu dengan cermat.", meaningful: "Hitung jumlah anggota keluarga atau buah di rumah.", joyful: "Bernyanyi lagu angka sambil menghitung jari." },
      kuis: [{ q: "Bilangan setelah 9 adalah ...", o: ["8","10","11","7"], a: 1 },{ q: "Tanda untuk 'lebih besar' adalah ...", o: ["<",">","=","+"], a: 1 },{ q: "7 ... 5", o: ["<",">","=","tidak tahu"], a: 1 }],
      latihan: [{ s: "Urutkan dari kecil: 4, 1, 3, 2", k: "1, 2, 3, 4" },{ s: "Isi: 6 ... 9", k: "6 < 9" }] },
    { id: "mt2", kelas: 2, judul: "Penjumlahan & Pengurangan", ringkas: "Operasi hitung dasar.",
      materi: ["Penjumlahan (+) menggabungkan bilangan, pengurangan (-) mengambil sebagian.","Untuk bilangan besar, gunakan cara bersusun sesuai nilai tempat (satuan, puluhan)."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Belajar berbagi: soal cerita tentang membagi makanan kepada teman." },
      deep: { mindful: "Periksa kembali hasil hitunganmu.", meaningful: "Hitung uang jajan atau kembalian belanja.", joyful: "Bermain kartu soal berhitung berkelompok." },
      kuis: [{ q: "25 + 13 = ...", o: ["38","48","35","28"], a: 0 },{ q: "40 - 15 = ...", o: ["35","25","15","20"], a: 1 },{ q: "Tanda pengurangan adalah ...", o: ["+","-","\u00d7","="], a: 1 }],
      latihan: [{ s: "34 + 21 = ....", k: "55" },{ s: "50 - 22 = ....", k: "28" }] },
    { id: "mt3", kelas: 3, judul: "Perkalian & Pembagian", ringkas: "Konsep perkalian dan pembagian.",
      materi: ["Perkalian adalah penjumlahan berulang. Contoh: 3 \u00d7 4 = 4 + 4 + 4 = 12.","Pembagian adalah kebalikan perkalian, membagi rata. Contoh: 12 : 3 = 4."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Membagi rata menumbuhkan sikap adil dan peduli kepada teman." },
      deep: { mindful: "Susun benda dalam kelompok sama banyak.", meaningful: "Bagi permen sama rata ke beberapa teman.", joyful: "Lomba cepat tepat perkalian." },
      kuis: [{ q: "6 \u00d7 4 = ...", o: ["10","24","20","18"], a: 1 },{ q: "20 : 5 = ...", o: ["4","5","15","25"], a: 0 },{ q: "3 \u00d7 4 sama dengan ...", o: ["4+4+4","3+3","4-3","3:4"], a: 0 }],
      latihan: [{ s: "7 \u00d7 6 = ....", k: "42" },{ s: "36 : 6 = ....", k: "6" }] },
    { id: "mt4", kelas: 4, judul: "Bangun Datar & Keliling", ringkas: "Mengenal bangun datar dan kelilingnya.",
      materi: ["Bangun datar: persegi, persegi panjang, segitiga, lingkaran. Tiap bangun punya jumlah sisi berbeda.","Keliling adalah jumlah panjang semua sisi. Keliling persegi = 4 \u00d7 sisi."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Mengukur keliling taman/kebun madrasah sambil menjaga kebersihannya." },
      deep: { mindful: "Amati bentuk benda di kelas dan kelompokkan.", meaningful: "Ukur keliling buku atau meja di rumah.", joyful: "Membuat kolase bangun datar dari kertas warna." },
      kuis: [{ q: "Bangun dengan 3 sisi adalah ...", o: ["Persegi","Segitiga","Lingkaran","Persegi panjang"], a: 1 },{ q: "Keliling persegi sisi 5 cm = ...", o: ["10 cm","15 cm","20 cm","25 cm"], a: 2 }],
      latihan: [{ s: "Sebutkan 4 bangun datar!", k: "Persegi, persegi panjang, segitiga, lingkaran." },{ s: "Keliling persegi sisi 8 cm?", k: "32 cm." }] },
    { id: "mt5", kelas: 5, judul: "Pecahan", ringkas: "Mengenal dan membandingkan pecahan.",
      materi: ["Pecahan menyatakan bagian dari keseluruhan, ditulis pembilang/penyebut, contoh 1/2, 3/4.","Pecahan senilai bernilai sama meski angkanya berbeda, contoh 1/2 = 2/4."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Membagi kue menjadi pecahan yang adil untuk keluarga." },
      deep: { mindful: "Gambar pecahan dengan membagi lingkaran.", meaningful: "Bagi buah atau pizza menjadi beberapa bagian.", joyful: "Permainan mencocokkan kartu pecahan senilai." },
      kuis: [{ q: "Pada 3/4, angka 4 disebut ...", o: ["Pembilang","Penyebut","Hasil","Sisa"], a: 1 },{ q: "Pecahan senilai dengan 1/2 adalah ...", o: ["1/3","2/4","3/4","1/4"], a: 1 }],
      latihan: [{ s: "Sebutkan pembilang dari 5/8!", k: "5" },{ s: "Tuliskan satu pecahan senilai dengan 1/3!", k: "2/6 (atau 3/9)." }] }
  ]
});

SUBJECTS.push({
  id: "bindo", nama: "Bahasa Indonesia", rumpun: "diknas",
  icon: "\uD83D\uDCD8", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Membaca, menulis, menyimak, dan berbicara.",
  topik: [
    { id: "bi1", kelas: 1, judul: "Huruf & Suku Kata", ringkas: "Membaca huruf dan suku kata.",
      materi: ["Huruf abjad ada 26, terdiri dari huruf vokal (a, i, u, e, o) dan konsonan.","Suku kata dibentuk dari gabungan huruf, contoh: ma-ma, bu-ku, sa-pi."],
      kbc: { pilar: 2, nilai: "Cinta kepada Ilmu", penerapan: "Menumbuhkan cinta membaca sebagai jendela ilmu." },
      deep: { mindful: "Eja suku kata dengan pelan dan jelas.", meaningful: "Baca label benda di rumah.", joyful: "Bermain menyusun kartu suku kata jadi kata." },
      kuis: [{ q: "Huruf vokal adalah ...", o: ["b, c, d","a, i, u, e, o","k, l, m","p, q, r"], a: 1 },{ q: "'buku' terdiri dari ... suku kata.", o: ["1","2","3","4"], a: 1 }],
      latihan: [{ s: "Pisahkan suku kata: 'sepeda'", k: "se-pe-da" },{ s: "Sebutkan semua huruf vokal!", k: "a, i, u, e, o" }] },
    { id: "bi3", kelas: 3, judul: "Kalimat & Tanda Baca", ringkas: "Menggunakan huruf kapital dan tanda baca.",
      materi: ["Huruf kapital dipakai di awal kalimat dan pada nama orang, tempat, hari, dan bulan.","Tanda baca: titik (.) untuk kalimat berita, tanya (?) untuk pertanyaan, seru (!) untuk perintah/seruan."],
      kbc: { pilar: 5, nilai: "Cinta Tanah Air", penerapan: "Menulis kalimat tentang keindahan Indonesia dengan ejaan yang benar." },
      deep: { mindful: "Periksa penggunaan huruf kapital pada tulisanmu.", meaningful: "Tulis kalimat tentang kegiatanmu hari ini.", joyful: "Permainan memperbaiki kalimat yang salah bersama." },
      kuis: [{ q: "Huruf kapital dipakai di ... kalimat.", o: ["Akhir","Awal","Tengah","Mana saja"], a: 1 },{ q: "Kalimat tanya diakhiri tanda ...", o: ["Titik","Tanya","Seru","Koma"], a: 1 }],
      latihan: [{ s: "Perbaiki: 'aku tinggal di bandung.'", k: "Aku tinggal di Bandung." },{ s: "Tanda baca kalimat perintah?", k: "Tanda seru (!)." }] },
    { id: "bi5", kelas: 5, judul: "Ide Pokok & Paragraf", ringkas: "Menemukan ide pokok bacaan.",
      materi: ["Paragraf adalah kumpulan kalimat yang membahas satu gagasan. Ide pokok adalah inti dari paragraf.","Ide pokok biasanya ada di kalimat utama, sering di awal atau akhir paragraf."],
      kbc: { pilar: 2, nilai: "Cinta kepada Ilmu", penerapan: "Gemar membaca untuk memahami dan menambah pengetahuan." },
      deep: { mindful: "Baca paragraf dengan teliti, tandai kalimat utama.", meaningful: "Ringkas berita yang kamu baca dengan kalimatmu sendiri.", joyful: "Diskusi menebak ide pokok cerita bergambar." },
      kuis: [{ q: "Inti dari sebuah paragraf disebut ...", o: ["Judul","Ide pokok","Tanda baca","Kesimpulan"], a: 1 },{ q: "Kalimat utama biasanya berada di ...", o: ["Tengah saja","Awal atau akhir","Judul","Catatan kaki"], a: 1 }],
      latihan: [{ s: "Apa itu ide pokok?", k: "Inti atau gagasan utama paragraf." },{ s: "Di mana letak kalimat utama umumnya?", k: "Di awal atau akhir paragraf." }] }
  ]
});

SUBJECTS.push({
  id: "ipas", nama: "IPAS (IPA & IPS)", rumpun: "diknas",
  icon: "\uD83C\uDF0D", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Alam, makhluk hidup, lingkungan, dan masyarakat.",
  topik: [
    { id: "ip3", kelas: 3, judul: "Ciri & Kebutuhan Makhluk Hidup", ringkas: "Mengenal ciri makhluk hidup.",
      materi: ["Makhluk hidup bernapas, bergerak, makan, tumbuh, dan berkembang biak.","Makhluk hidup butuh makanan, air, udara, dan tempat tinggal untuk bertahan hidup."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Merawat tanaman/hewan peliharaan sebagai wujud cinta ciptaan Allah." },
      deep: { mindful: "Amati makhluk hidup di sekitar dan catat cirinya.", meaningful: "Rawat satu tanaman selama seminggu.", joyful: "Membuat pojok tanaman kelas bersama." },
      kuis: [{ q: "Berikut ciri makhluk hidup, kecuali ...", o: ["Bernapas","Bergerak","Berkarat","Tumbuh"], a: 2 },{ q: "Makhluk hidup membutuhkan ... untuk hidup.", o: ["Makanan","Mainan","Uang","Gawai"], a: 0 }],
      latihan: [{ s: "Sebutkan 3 ciri makhluk hidup!", k: "Bernapas, bergerak, makan, tumbuh, berkembang biak." },{ s: "Sebutkan 2 kebutuhan makhluk hidup!", k: "Makanan, air, udara, tempat tinggal." }] },
    { id: "ip4", kelas: 4, judul: "Bagian Tumbuhan & Fungsinya", ringkas: "Mengenal bagian tumbuhan.",
      materi: ["Tumbuhan terdiri dari akar, batang, daun, bunga, buah, dan biji.","Akar menyerap air, batang menyalurkan air, daun membuat makanan lewat fotosintesis."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Menanam pohon di madrasah untuk menjaga lingkungan." },
      deep: { mindful: "Amati bagian tumbuhan secara langsung.", meaningful: "Kaitkan fotosintesis dengan udara bersih yang kita hirup.", joyful: "Menggambar dan memberi label bagian tumbuhan." },
      kuis: [{ q: "Bagian yang membuat makanan adalah ...", o: ["Akar","Daun","Batang","Bunga"], a: 1 },{ q: "Bagian yang menyerap air adalah ...", o: ["Daun","Akar","Bunga","Buah"], a: 1 }],
      latihan: [{ s: "Apa fungsi akar?", k: "Menyerap air dan zat hara serta menguatkan tumbuhan." },{ s: "Proses daun membuat makanan disebut?", k: "Fotosintesis." }] },
    { id: "ip5", kelas: 5, judul: "Lingkungan & Masyarakat", ringkas: "Hidup bermasyarakat dan gotong royong.",
      materi: ["Manusia hidup bersama di lingkungan: keluarga, tetangga, dan masyarakat.","Gotong royong dan menjaga kebersihan lingkungan membuat hidup nyaman dan rukun."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Aktif gotong royong sebagai wujud cinta sesama dan lingkungan." },
      deep: { mindful: "Amati kegiatan warga di sekitar rumahmu.", meaningful: "Ikut satu kegiatan kebersihan lingkungan.", joyful: "Simulasi kerja bakti kelas dengan pembagian tugas." },
      kuis: [{ q: "Bekerja sama membersihkan lingkungan disebut ...", o: ["Gotong royong","Bertengkar","Sendiri","Malas"], a: 0 },{ q: "Lingkungan terkecil tempat kita hidup adalah ...", o: ["Negara","Keluarga","Provinsi","Benua"], a: 1 }],
      latihan: [{ s: "Apa manfaat gotong royong?", k: "Pekerjaan cepat selesai, lingkungan bersih, warga rukun." },{ s: "Sebutkan 2 contoh menjaga lingkungan!", k: "Membuang sampah pada tempatnya, menanam pohon." }] }
  ]
});

SUBJECTS.push({
  id: "pancasila", nama: "Pendidikan Pancasila", rumpun: "diknas",
  icon: "\uD83C\uDDEE\uD83C\uDDE9", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Pancasila, aturan, kebinekaan, dan cinta tanah air.",
  topik: [
    { id: "pc1", kelas: 1, judul: "Aturan di Rumah & Sekolah", ringkas: "Menaati aturan sederhana.",
      materi: ["Aturan adalah hal yang harus ditaati agar tertib, contoh: datang tepat waktu, merapikan mainan.","Menaati aturan membuat hidup teratur dan nyaman bagi semua."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menaati aturan sebagai bentuk menghargai orang lain." },
      deep: { mindful: "Sebutkan aturan yang kamu taati hari ini.", meaningful: "Buat jadwal harian sederhana di rumah.", joyful: "Membuat poster aturan kelas bersama." },
      kuis: [{ q: "Menaati aturan membuat hidup ...", o: ["Kacau","Tertib","Susah","Sepi"], a: 1 },{ q: "Contoh aturan di sekolah adalah ...", o: ["Datang tepat waktu","Terlambat","Ribut","Membolos"], a: 0 }],
      latihan: [{ s: "Sebutkan 1 aturan di rumah!", k: "Contoh: merapikan tempat tidur, izin saat keluar rumah." },{ s: "Mengapa aturan harus ditaati?", k: "Agar hidup tertib dan nyaman." }] },
    { id: "pc3", kelas: 3, judul: "Simbol & Sila Pancasila", ringkas: "Mengenal Pancasila dan lambangnya.",
      materi: ["Pancasila adalah dasar negara Indonesia, terdiri dari 5 sila, dilambangkan burung Garuda.","Sila-sila: Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan (musyawarah), dan Keadilan sosial."],
      kbc: { pilar: 5, nilai: "Cinta Tanah Air", penerapan: "Mengamalkan Pancasila sebagai wujud cinta tanah air." },
      deep: { mindful: "Cocokkan tiap sila dengan simbolnya.", meaningful: "Beri contoh pengamalan sila di kehidupan sehari-hari.", joyful: "Menyanyikan lagu Garuda Pancasila." },
      kuis: [{ q: "Jumlah sila Pancasila ada ...", o: ["3","4","5","6"], a: 2 },{ q: "Lambang negara Indonesia adalah ...", o: ["Harimau","Garuda","Elang","Merpati"], a: 1 },{ q: "Sila ketiga tentang ...", o: ["Ketuhanan","Persatuan","Keadilan","Kerakyatan"], a: 1 }],
      latihan: [{ s: "Bunyi sila pertama Pancasila?", k: "Ketuhanan Yang Maha Esa." },{ s: "Apa lambang sila kedua?", k: "Rantai." }] },
    { id: "pc5", kelas: 5, judul: "Kebinekaan & Toleransi", ringkas: "Menghargai keberagaman.",
      materi: ["Indonesia beragam suku, agama, bahasa, dan budaya, disatukan semboyan Bhinneka Tunggal Ika.","Toleransi berarti saling menghormati perbedaan agar hidup rukun dan damai."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menghargai teman yang berbeda sebagai wujud kasih sayang." },
      deep: { mindful: "Kenali keberagaman teman sekelasmu.", meaningful: "Ceritakan pengalaman menghargai perbedaan.", joyful: "Pameran budaya daerah mini di kelas." },
      kuis: [{ q: "Semboyan bangsa Indonesia adalah ...", o: ["Bhinneka Tunggal Ika","Tut Wuri Handayani","Jer Basuki","Rawe-rawe rantas"], a: 0 },{ q: "Saling menghormati perbedaan disebut ...", o: ["Egois","Toleransi","Sombong","Curang"], a: 1 }],
      latihan: [{ s: "Apa arti Bhinneka Tunggal Ika?", k: "Berbeda-beda tetapi tetap satu." },{ s: "Sebutkan 1 contoh sikap toleransi!", k: "Menghormati teman yang berbeda agama saat beribadah." }] }
  ]
});

SUBJECTS.push({
  id: "bing", nama: "Bahasa Inggris", rumpun: "diknas",
  icon: "\uD83C\uDDEC\uD83C\uDDE7", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Kosakata dasar, sapaan, angka, dan warna.",
  topik: [
    { id: "bg1", kelas: 1, judul: "Greetings & Numbers", ringkas: "Sapaan dan angka bahasa Inggris.",
      materi: ["Greetings: good morning (selamat pagi), thank you (terima kasih), goodbye (selamat tinggal).","Numbers: one (1), two (2), three (3), four (4), five (5)."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menyapa dengan sopan dalam bahasa Inggris mempererat pertemanan." },
      deep: { mindful: "Ucapkan sapaan dengan pelafalan yang benar.", meaningful: "Sapa keluargamu dalam bahasa Inggris di pagi hari.", joyful: "Nyanyikan lagu 'numbers' sambil menghitung." },
      kuis: [{ q: "'Selamat pagi' dalam bahasa Inggris ...", o: ["Good night","Good morning","Goodbye","Good afternoon"], a: 1 },{ q: "'Five' artinya ...", o: ["3","4","5","6"], a: 2 }],
      latihan: [{ s: "Terjemahkan: 'Terima kasih'.", k: "Thank you." },{ s: "Sebutkan angka 1-3 dalam bahasa Inggris!", k: "One, two, three." }] },
    { id: "bg3", kelas: 3, judul: "Colors & Family", ringkas: "Warna dan anggota keluarga.",
      materi: ["Colors: red (merah), blue (biru), green (hijau), yellow (kuning).","Family: father (ayah), mother (ibu), brother (saudara laki-laki), sister (saudara perempuan)."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menyebut anggota keluarga menumbuhkan cinta kepada keluarga." },
      deep: { mindful: "Sebutkan warna benda di kelas dalam bahasa Inggris.", meaningful: "Buat pohon keluarga dengan kosakata Inggris.", joyful: "Permainan tebak warna berkelompok." },
      kuis: [{ q: "'Red' artinya ...", o: ["Biru","Merah","Hijau","Kuning"], a: 1 },{ q: "'Mother' artinya ...", o: ["Ayah","Ibu","Kakak","Adik"], a: 1 }],
      latihan: [{ s: "Terjemahkan: 'ayah'.", k: "Father." },{ s: "Apa arti 'green'?", k: "Hijau." }] }
  ]
});

SUBJECTS.push({
  id: "pjok", nama: "PJOK", rumpun: "diknas",
  icon: "\u26BD", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Gerak dasar, olahraga, dan hidup sehat.",
  topik: [
    { id: "pj1", kelas: 1, judul: "Gerak Dasar", ringkas: "Berjalan, berlari, melompat.",
      materi: ["Gerak dasar meliputi berjalan, berlari, melompat, dan melempar.","Sebelum berolahraga, lakukan pemanasan agar tubuh siap dan tidak cedera."],
      kbc: { pilar: 3, nilai: "Cinta Diri & Sesama", penerapan: "Menjaga tubuh sehat sebagai bentuk syukur dan cinta diri." },
      deep: { mindful: "Rasakan gerakan tubuh saat pemanasan.", meaningful: "Terapkan pemanasan sebelum bermain di rumah.", joyful: "Permainan lompat tali beramai-ramai." },
      kuis: [{ q: "Sebelum berolahraga sebaiknya ...", o: ["Tidur","Pemanasan","Makan banyak","Diam"], a: 1 },{ q: "Berikut gerak dasar, kecuali ...", o: ["Berlari","Melompat","Menulis","Melempar"], a: 2 }],
      latihan: [{ s: "Sebutkan 3 gerak dasar!", k: "Berjalan, berlari, melompat, melempar (pilih 3)." },{ s: "Mengapa perlu pemanasan?", k: "Agar tubuh siap dan terhindar dari cedera." }] },
    { id: "pj4", kelas: 4, judul: "Pola Hidup Sehat", ringkas: "Menjaga kesehatan tubuh.",
      materi: ["Hidup sehat: makan makanan bergizi seimbang, olahraga teratur, cukup tidur, dan menjaga kebersihan.","Cuci tangan pakai sabun dan sikat gigi teratur mencegah penyakit."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Menjaga kebersihan diri dan lingkungan agar sehat bersama." },
      deep: { mindful: "Perhatikan kebiasaan sehatmu setiap hari.", meaningful: "Susun menu makan bergizi untuk sehari.", joyful: "Permainan kuis makanan sehat vs tidak sehat." },
      kuis: [{ q: "Makanan bergizi seimbang penting untuk ...", o: ["Sakit","Kesehatan","Malas","Boros"], a: 1 },{ q: "Mencuci tangan sebaiknya pakai ...", o: ["Pasir","Sabun","Minyak","Tepung"], a: 1 }],
      latihan: [{ s: "Sebutkan 3 cara hidup sehat!", k: "Makan bergizi, olahraga, cukup tidur, jaga kebersihan." },{ s: "Mengapa harus cuci tangan pakai sabun?", k: "Agar kuman hilang dan tidak mudah sakit." }] }
  ]
});

SUBJECTS.push({
  id: "sbdp", nama: "Seni Budaya (SBdP)", rumpun: "diknas",
  icon: "\uD83C\uDFA8", warna: "#2783DE", soft: "#E5F2FC",
  deskripsi: "Menggambar, menyanyi, dan berkarya seni.",
  topik: [
    { id: "sb1", kelas: 1, judul: "Mengenal Warna & Menggambar", ringkas: "Warna dasar dan menggambar bebas.",
      materi: ["Warna dasar/primer: merah, kuning, biru. Campurannya menghasilkan warna baru, misal biru + kuning = hijau.","Menggambar melatih kreativitas. Kita bisa menggambar benda di sekitar kita."],
      kbc: { pilar: 4, nilai: "Cinta Lingkungan", penerapan: "Menggambar keindahan alam menumbuhkan rasa cinta pada lingkungan." },
      deep: { mindful: "Amati warna benda di sekitar dengan teliti.", meaningful: "Gambar pemandangan tempat tinggalmu.", joyful: "Melukis bersama dengan cat warna-warni." },
      kuis: [{ q: "Warna primer adalah ...", o: ["Merah, kuning, biru","Hijau, ungu, oranye","Hitam, putih","Coklat, abu"], a: 0 },{ q: "Biru + kuning menghasilkan ...", o: ["Ungu","Hijau","Oranye","Coklat"], a: 1 }],
      latihan: [{ s: "Sebutkan 3 warna primer!", k: "Merah, kuning, biru." },{ s: "Merah + kuning menghasilkan warna?", k: "Oranye." }] },
    { id: "sb3", kelas: 3, judul: "Lagu Daerah Nusantara", ringkas: "Mengenal lagu daerah.",
      materi: ["Indonesia kaya lagu daerah, contoh: Ampar-Ampar Pisang (Kalimantan), Apuse (Papua), Bungong Jeumpa (Aceh).","Menyanyikan lagu daerah melestarikan budaya bangsa."],
      kbc: { pilar: 5, nilai: "Cinta Tanah Air", penerapan: "Melestarikan lagu daerah sebagai wujud cinta tanah air." },
      deep: { mindful: "Dengarkan lagu daerah dan kenali asalnya.", meaningful: "Cari tahu lagu daerah dari provinsimu.", joyful: "Menyanyi lagu daerah bersama di kelas." },
      kuis: [{ q: "Lagu 'Apuse' berasal dari ...", o: ["Aceh","Papua","Bali","Jawa"], a: 1 },{ q: "Menyanyikan lagu daerah berarti ... budaya.", o: ["Merusak","Melestarikan","Melupakan","Menghapus"], a: 1 }],
      latihan: [{ s: "Sebutkan 1 lagu daerah dan asalnya!", k: "Contoh: Ampar-Ampar Pisang (Kalimantan Selatan)." },{ s: "Mengapa lagu daerah perlu dilestarikan?", k: "Agar budaya bangsa tetap terjaga." }] }
  ]
});

/* ============================= EXPORT ============================= */
const KURIKULUM = {
  info: {
    nama: "Ruang Belajar MI",
    jenjang: "Madrasah Ibtidaiyah (Kelas 1-6)",
    pendekatan: "Kurikulum Berbasis Cinta (KBC) + Deep Learning (Mindful, Meaningful, Joyful)"
  },
  kbcPilar: KBC_PILAR,
  deepPilar: DEEP_PILAR,
  subjects: SUBJECTS
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = KURIKULUM;
}
if (typeof window !== "undefined") {
  window.KURIKULUM = KURIKULUM;
}
