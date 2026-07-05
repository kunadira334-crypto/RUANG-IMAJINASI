/* ==== Ruang Belajar MI - app logic ==== */
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('statMapel').textContent = SUBJECTS.length;

/* ---- Mobile menu ---- */
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('show')));

/* ---- Render subject cards ---- */
const grid = document.getElementById('subjGrid');
function renderCards(filter) {
  grid.innerHTML = '';
  SUBJECTS.filter(s => filter === 'all' || s.rumpun === filter).forEach(s => {
    const el = document.createElement('div');
    el.className = 'card';
    el.onclick = () => openModal(s.id);
    el.innerHTML =
      '<div class="icon" style="background:' + s.soft + ';color:' + s.color + '">' + s.icon + '</div>' +
      '<span class="tag ' + s.rumpun + '">' + (s.rumpun === 'kemenag' ? 'Kemenag' : 'Diknas') + '</span>' +
      '<h3>' + s.nama + '</h3>' +
      '<p>' + s.desc + '</p>' +
      '<div class="card-foot">Buka pelajaran \u2192</div>';
    grid.appendChild(el);
  });
}
renderCards('all');

/* ---- Filters ---- */
document.getElementById('filters').addEventListener('click', e => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderCards(btn.dataset.f);
});

/* ---- Modal ---- */
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
let quizState = {};

function openModal(id) {
  const s = SUBJECTS.find(x => x.id === id);
  quizState = { subj: s, idx: 0, score: 0, answered: false };
  modal.innerHTML =
    '<div class="modal-head">' +
      '<div class="icon" style="background:' + s.soft + ';color:' + s.color + '">' + s.icon + '</div>' +
      '<div><h3>' + s.nama + '</h3><p>' + s.desc + '</p></div>' +
      '<button class="close" onclick="closeModal()">\u00d7</button>' +
    '</div>' +
    '<div class="tabs">' +
      '<button class="tab active" data-t="materi">\uD83D\uDCD6 Materi</button>' +
      '<button class="tab" data-t="ilustrasi">\uD83C\uDFAC Ilustrasi</button>' +
      '<button class="tab" data-t="kuis">\uD83E\uDDE9 Kuis</button>' +
      '<button class="tab" data-t="latihan">\u270F\uFE0F Latihan</button>' +
      '<button class="tab" data-t="sim">\uD83D\uDD2C Simulasi</button>' +
    '</div>' +
    '<div class="tab-body" id="tabBody"></div>';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.tabs').addEventListener('click', e => {
    const b = e.target.closest('.tab');
    if (!b) return;
    modal.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    b.classList.add('active');
    renderTab(b.dataset.t);
  });
  renderTab('materi');
}
function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function renderTab(t) {
  const s = quizState.subj;
  const body = document.getElementById('tabBody');
  if (t === 'materi') {
    body.innerHTML = '<div class="tab-pane active">' +
      s.materi.map(m => '<h4>' + m.h + '</h4><p>' + m.p + '</p>').join('') + '</div>';
  } else if (t === 'ilustrasi') {
    body.innerHTML = '<div class="tab-pane active">' +
      '<div class="illus"><div class="big">' + s.ilustrasi.emoji + '</div><small>' + s.ilustrasi.cap + '</small></div>' +
      '<p style="color:var(--text-2);font-size:14px">Tip: guru dapat menampilkan gambar/video nyata di sini saat mengajar. Gunakan ilustrasi untuk membantu siswa memahami konsep.</p>' +
      '</div>';
  } else if (t === 'kuis') {
    renderQuiz();
  } else if (t === 'latihan') {
    body.innerHTML = '<div class="tab-pane active">' +
      s.latihan.map((l, i) =>
        '<h4>Soal ' + (i + 1) + '</h4><p>' + l.s + '</p>' +
        '<details style="margin:4px 0 10px"><summary style="cursor:pointer;color:var(--blue);font-weight:600;font-size:14px">Lihat kunci jawaban</summary>' +
        '<p style="background:var(--green-soft);padding:10px 12px;border-radius:10px;margin-top:6px">' + l.k + '</p></details>'
      ).join('') + '</div>';
  } else if (t === 'sim') {
    renderSim();
  }
}

/* ---- Quiz ---- */
function renderQuiz() {
  const s = quizState.subj;
  const body = document.getElementById('tabBody');
  if (quizState.idx >= s.kuis.length) {
    const total = s.kuis.length;
    const pct = Math.round(quizState.score / total * 100);
    const emoji = pct >= 80 ? '\uD83C\uDF89' : pct >= 50 ? '\uD83D\uDC4D' : '\uD83D\uDCAA';
    const msg = pct >= 80 ? 'Hebat sekali!' : pct >= 50 ? 'Bagus, terus berlatih!' : 'Jangan menyerah, coba lagi ya!';
    body.innerHTML = '<div class="tab-pane active quiz-result">' +
      '<div class="emoji">' + emoji + '</div>' +
      '<div class="score">' + quizState.score + '/' + total + '</div>' +
      '<p style="font-weight:600">' + msg + ' (' + pct + '%)</p>' +
      '<button class="btn btn-primary" onclick="restartQuiz()">\uD83D\uDD01 Ulangi Kuis</button>' +
      '</div>';
    return;
  }
  const q = s.kuis[quizState.idx];
  quizState.answered = false;
  const progress = (quizState.idx) / s.kuis.length * 100;
  body.innerHTML = '<div class="tab-pane active">' +
    '<div class="quiz-bar"><span style="width:' + progress + '%"></span></div>' +
    '<div style="font-size:13px;color:var(--text-2);margin-bottom:6px">Soal ' + (quizState.idx + 1) + ' dari ' + s.kuis.length + ' \u00b7 Skor: ' + quizState.score + '</div>' +
    '<div class="quiz-q">' + q.q + '</div>' +
    '<div class="quiz-opts" id="opts">' +
      q.o.map((o, i) => '<button class="opt" data-i="' + i + '"><span class="k">' + String.fromCharCode(65 + i) + '</span>' + o + '</button>').join('') +
    '</div>' +
    '<div class="quiz-foot"><span class="quiz-feedback" id="fb"></span><button class="btn btn-primary" id="nextBtn" style="display:none" onclick="nextQuiz()">Lanjut \u2192</button></div>' +
    '</div>';
  document.getElementById('opts').addEventListener('click', e => {
    const b = e.target.closest('.opt');
    if (!b || quizState.answered) return;
    quizState.answered = true;
    const chosen = +b.dataset.i;
    const opts = document.querySelectorAll('.opt');
    opts.forEach((o, i) => {
      if (i === q.a) o.classList.add('correct');
      if (i === chosen && chosen !== q.a) o.classList.add('wrong');
      o.style.pointerEvents = 'none';
    });
    const fb = document.getElementById('fb');
    if (chosen === q.a) { quizState.score++; fb.textContent = '\u2705 Benar!'; fb.style.color = 'var(--green)'; }
    else { fb.textContent = '\u274c Kurang tepat. Jawaban: ' + String.fromCharCode(65 + q.a); fb.style.color = 'var(--red)'; }
    document.getElementById('nextBtn').style.display = 'inline-flex';
  });
}
function nextQuiz() { quizState.idx++; renderQuiz(); }
function restartQuiz() { quizState.idx = 0; quizState.score = 0; renderQuiz(); }

/* ---- Simulation ---- */
function renderSim() {
  const s = quizState.subj;
  const body = document.getElementById('tabBody');
  const sim = s.sim;
  if (sim.type === 'adder') {
    body.innerHTML = '<div class="tab-pane active"><div class="sim">' +
      '<div style="font-weight:600;margin-bottom:6px">' + sim.label + '</div>' +
      '<p style="color:var(--text-2);font-size:14px;margin-top:0">Geser untuk mengubah angka. Lihat hasil penjumlahan &amp; kelerengnya!</p>' +
      '<div class="sim-display" id="simOut">0 + 0 = 0</div>' +
      '<div class="beads" id="beads"></div>' +
      '<div class="sliders">' +
        '<label>Angka pertama: <b id="v1l">0</b></label><input type="range" id="v1" min="0" max="10" value="0">' +
        '<label>Angka kedua: <b id="v2l">0</b></label><input type="range" id="v2" min="0" max="10" value="0">' +
      '</div></div></div>';
    const v1 = document.getElementById('v1'), v2 = document.getElementById('v2');
    function upd() {
      const a = +v1.value, b = +v2.value;
      document.getElementById('v1l').textContent = a;
      document.getElementById('v2l').textContent = b;
      document.getElementById('simOut').textContent = a + ' + ' + b + ' = ' + (a + b);
      let beads = '';
      for (let i = 0; i < a; i++) beads += '<div class="bead"></div>';
      for (let i = 0; i < b; i++) beads += '<div class="bead b"></div>';
      document.getElementById('beads').innerHTML = beads;
    }
    v1.oninput = upd; v2.oninput = upd; upd();
  } else {
    /* generic counter */
    body.innerHTML = '<div class="tab-pane active"><div class="sim">' +
      '<div style="font-weight:600;margin-bottom:6px">' + sim.label + '</div>' +
      '<p style="color:var(--text-2);font-size:14px;margin-top:0">Gunakan tombol untuk menghitung. Cocok untuk latihan menghitung bersama di kelas.</p>' +
      '<div class="sim-display" id="cnt">0 <span style="font-size:18px;color:var(--text-2)">' + sim.unit + '</span></div>' +
      '<div style="display:flex;gap:10px;justify-content:center">' +
        '<button class="btn btn-ghost" onclick="bump(-1)">\u2212</button>' +
        '<button class="btn btn-primary" onclick="bump(1)">+ Tambah</button>' +
        '<button class="btn btn-ghost" onclick="bump(0)">Reset</button>' +
      '</div></div></div>';
    window._cnt = 0;
  }
}
function bump(d) {
  if (d === 0) window._cnt = 0; else window._cnt = Math.max(0, window._cnt + d);
  const el = document.getElementById('cnt');
  const unit = quizState.subj.sim.unit;
  el.innerHTML = window._cnt + ' <span style="font-size:18px;color:var(--text-2)">' + unit + '</span>';
}

/* ==== Modul Ajar & LKPD print ==== */
function esc(t){ return (t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function cetakModul() {
  const g = id => document.getElementById(id).value;
  const kegiatan = g('ma_kegiatan').split('\n').filter(x => x.trim());
  const html =
    '<h1>MODUL AJAR</h1>' +
    '<div class="p-sub">' + esc(g('ma_sekolah')) + '</div>' +
    '<table>' +
      '<tr><td style="width:35%"><b>Mata Pelajaran</b></td><td>' + esc(g('ma_mapel')) + '</td></tr>' +
      '<tr><td><b>Kelas / Semester</b></td><td>' + esc(g('ma_kelas')) + '</td></tr>' +
      '<tr><td><b>Alokasi Waktu</b></td><td>' + esc(g('ma_waktu')) + '</td></tr>' +
      '<tr><td><b>Guru</b></td><td>' + esc(g('ma_guru') || '................................') + '</td></tr>' +
      '<tr><td><b>Materi / Topik</b></td><td>' + esc(g('ma_materi')) + '</td></tr>' +
    '</table>' +
    '<h3>A. Tujuan Pembelajaran</h3><p>' + esc(g('ma_tujuan')) + '</p>' +
    '<h3>B. Kegiatan Pembelajaran</h3><ol>' + kegiatan.map(k => '<li>' + esc(k) + '</li>').join('') + '</ol>' +
    '<h3>C. Penilaian</h3><div class="lines"></div>' +
    '<table style="margin-top:24px;border:none"><tr style="border:none">' +
      '<td style="border:none;text-align:center">Mengetahui,<br>Kepala Madrasah<br><br><br><br>(________________)</td>' +
      '<td style="border:none;text-align:center">Guru Kelas,<br><br><br><br><br>(' + esc(g('ma_guru') || '________________') + ')</td>' +
    '</tr></table>';
  doPrint(html);
}

function cetakLKPD() {
  const g = id => document.getElementById(id).value;
  const soal = g('lk_soal').split('\n').filter(x => x.trim());
  const kosong = parseInt(g('lk_kosong')) || 0;
  let items = soal.map((s, i) =>
    '<div style="margin-bottom:6px"><b>' + (i + 1) + '.</b> ' + esc(s) + '</div><div class="lines" style="min-height:50px"></div>'
  ).join('');
  for (let i = 0; i < kosong; i++) {
    items += '<div style="margin-bottom:6px"><b>' + (soal.length + i + 1) + '.</b> ....................................................</div><div class="lines" style="min-height:50px"></div>';
  }
  const html =
    '<h1>' + esc(g('lk_judul')) + '</h1>' +
    '<div class="p-sub">Lembar Kerja Peserta Didik (LKPD)</div>' +
    '<table>' +
      '<tr><td style="width:50%"><b>Mata Pelajaran:</b> ' + esc(g('lk_mapel')) + '</td><td><b>Kelas:</b> ' + esc(g('lk_kelas')) + '</td></tr>' +
      '<tr><td><b>Nama:</b> ..............................</td><td><b>No. Absen:</b> ............</td></tr>' +
    '</table>' +
    '<h3>Petunjuk</h3><p>' + esc(g('lk_petunjuk')) + '</p>' +
    '<h3>Soal</h3>' + items +
    '<p style="margin-top:20px;font-size:12px">Nilai: ............  Paraf Guru: ............</p>';
  doPrint(html);
}

function doPrint(html) {
  const area = document.getElementById('printArea');
  area.innerHTML = html;
  window.print();
}
