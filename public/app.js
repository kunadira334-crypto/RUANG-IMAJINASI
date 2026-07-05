/* =====================================================================
 * Ruang Belajar MI - front-end logic
 * ===================================================================== */

const state = { rumpun: "all", kelas: "all", docType: "modul" };
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", async () => {
  await renderMeta();
  await renderSubjects();
  wireFilters();
  wireNav();
  wireModul();
  wireNilai();
  const mode = await API.getMode();
  const badge = document.getElementById("modeBadge");
  if (mode === "server") { badge.textContent = "Tersambung ke server (database)"; badge.classList.add("server"); }
  else { badge.textContent = "Mode statis (tersimpan di browser)"; badge.classList.add("static"); }
});

/* ---------- Meta: pilar KBC & Deep Learning + hero stats ---------- */
async function renderMeta() {
  const meta = await API.getMeta();
  const subjects = await API.getSubjects();
  const totalTopik = subjects.reduce((n, s) => n + s.jumlahTopik, 0);

  document.getElementById("heroStats").innerHTML = `
    <div class="stat"><b>${subjects.length}</b><span>Mata Pelajaran</span></div>
    <div class="stat"><b>${totalTopik}</b><span>Topik Belajar</span></div>
    <div class="stat"><b>5</b><span>Pilar Cinta (KBC)</span></div>
    <div class="stat"><b>3</b><span>Prinsip Deep Learning</span></div>`;

  document.getElementById("kbcList").innerHTML = meta.kbcPilar.map((p) => `
    <div class="pilar"><span class="p-ic">${p.icon}</span>
      <div><div class="p-nm">${esc(p.nama)}</div></div></div>`).join("");

  document.getElementById("deepList").innerHTML = meta.deepPilar.map((p) => `
    <div class="pilar"><span class="p-ic">${p.icon}</span>
      <div><div class="p-nm">${esc(p.nama)}</div><div class="p-ds">${esc(p.desc)}</div></div></div>`).join("");
}

/* ---------- Subject grid ---------- */
async function renderSubjects() {
  const grid = document.getElementById("subjectGrid");
  const opts = {};
  if (state.rumpun !== "all") opts.rumpun = state.rumpun;
  if (state.kelas !== "all") opts.kelas = state.kelas;
  const subjects = await API.getSubjects(opts);
  if (!subjects.length) { grid.innerHTML = `<p class="muted">Tidak ada mapel untuk filter ini.</p>`; return; }
  grid.innerHTML = subjects.map((s) => `
    <div class="subject-card" data-id="${s.id}">
      <div class="s-ic" style="background:${s.soft}">${s.icon}</div>
      <h3>${esc(s.nama)}</h3>
      <div class="s-desc">${esc(s.deskripsi)}</div>
      <div class="s-meta">
        <span class="tag ${s.rumpun}">${s.rumpun === "kemenag" ? "Kemenag" : "Diknas"}</span>
        <span class="tag">${s.jumlahTopik} topik</span>
        <span class="tag">Kelas ${s.kelasTersedia.join(", ")}</span>
      </div>
    </div>`).join("");
  grid.querySelectorAll(".subject-card").forEach((c) =>
    c.addEventListener("click", () => openSubject(c.dataset.id)));
}

/* ---------- Filters ---------- */
function wireFilters() {
  document.querySelectorAll("#rumpunFilter .chip").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll("#rumpunFilter .chip").forEach((x) => x.classList.remove("active"));
      b.classList.add("active"); state.rumpun = b.dataset.rumpun; renderSubjects();
    }));
  document.querySelectorAll("#kelasFilter .chip").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll("#kelasFilter .chip").forEach((x) => x.classList.remove("active"));
      b.classList.add("active"); state.kelas = b.dataset.kelas; renderSubjects();
    }));
}

/* ---------- Nav ---------- */
function wireNav() {
  const nav = document.getElementById("nav");
  document.getElementById("hamburger").addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav-link").forEach((l) =>
    l.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((x) => x.classList.remove("active"));
      l.classList.add("active"); nav.classList.remove("open");
    }));
}

/* ---------- Subject modal ---------- */
async function openSubject(id) {
  const opts = state.kelas !== "all" ? { kelas: state.kelas } : {};
  const s = await API.getSubject(id, opts);
  if (!s) return;
  const modal = document.getElementById("modal");
  document.getElementById("modalHeader").innerHTML = `
    <div class="m-ic">${s.icon}</div>
    <h2>${esc(s.nama)}</h2>
    <div class="muted">${esc(s.deskripsi)}</div>`;

  const topik = s.topik || [];
  document.getElementById("modalBody").innerHTML = `
    <div class="tabs">
      <button class="tab active" data-tab="materi">📖 Materi</button>
      <button class="tab" data-tab="kbc">💚 KBC & Deep Learning</button>
      <button class="tab" data-tab="kuis">❓ Kuis</button>
      <button class="tab" data-tab="latihan">✏️ Latihan</button>
    </div>
    <div class="tab-panel active" id="tab-materi">${renderMateri(topik)}</div>
    <div class="tab-panel" id="tab-kbc">${renderKbc(topik)}</div>
    <div class="tab-panel" id="tab-kuis">${renderKuis(topik, s)}</div>
    <div class="tab-panel" id="tab-latihan">${renderLatihan(topik)}</div>`;

  document.querySelectorAll("#modalBody .tab").forEach((t) =>
    t.addEventListener("click", () => {
      document.querySelectorAll("#modalBody .tab").forEach((x) => x.classList.remove("active"));
      document.querySelectorAll("#modalBody .tab-panel").forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
      document.getElementById("tab-" + t.dataset.tab).classList.add("active");
    }));
  wireQuiz(s);
  modal.classList.add("open");
}

function topikHead(t) {
  return `<div class="topik-title">${esc(t.judul)}<span class="kelas-pill">Kelas ${t.kelas}</span></div>`;
}
function renderMateri(topik) {
  if (!topik.length) return `<p class="muted">Belum ada topik untuk filter kelas ini.</p>`;
  return topik.map((t) => `<div class="topik-block">${topikHead(t)}
    <div class="muted small">${esc(t.ringkas)}</div>
    ${t.materi.map((p) => `<p class="materi-p">${esc(p)}</p>`).join("")}</div>`).join("");
}
function renderKbc(topik) {
  if (!topik.length) return `<p class="muted">Belum ada topik untuk filter kelas ini.</p>`;
  return topik.map((t) => `<div class="topik-block">${topikHead(t)}
    <div class="insert-box kbc"><b>💚 Insersi KBC — ${esc(t.kbc.nilai)}</b>${esc(t.kbc.penerapan)}</div>
    <div class="insert-box deep"><b>🧠 Deep Learning</b>
      <div class="deep-row"><span class="d-k">Mindful</span><span>${esc(t.deep.mindful)}</span></div>
      <div class="deep-row"><span class="d-k">Meaningful</span><span>${esc(t.deep.meaningful)}</span></div>
      <div class="deep-row"><span class="d-k">Joyful</span><span>${esc(t.deep.joyful)}</span></div>
    </div></div>`).join("");
}
function renderKuis(topik, s) {
  if (!topik.length) return `<p class="muted">Belum ada kuis untuk filter kelas ini.</p>`;
  let html = "";
  topik.forEach((t) => {
    html += `<div class="topik-block" data-topik="${t.id}" data-topik-judul="${esc(t.judul)}">${topikHead(t)}`;
    t.kuis.forEach((q, qi) => {
      html += `<div class="quiz-q" data-qi="${qi}" data-ans="${q.a}">
        <div class="q-text">${qi + 1}. ${esc(q.q)}</div>
        ${q.o.map((op, oi) => `<button class="quiz-opt" data-oi="${oi}">${esc(op)}</button>`).join("")}
      </div>`;
    });
    html += `<div class="quiz-result" style="display:none"></div></div>`;
  });
  return html;
}
function renderLatihan(topik) {
  if (!topik.length) return `<p class="muted">Belum ada latihan untuk filter kelas ini.</p>`;
  return topik.map((t) => `<div class="topik-block">${topikHead(t)}
    ${t.latihan.map((l, i) => `<div class="latihan-item">
      <div class="l-s">${i + 1}. ${esc(l.s)}</div>
      <details><summary>Lihat kunci jawaban</summary>${esc(l.k)}</details></div>`).join("")}</div>`).join("");
}

/* ---------- Quiz interaction + auto scoring + save ---------- */
function wireQuiz(subject) {
  document.querySelectorAll("#tab-kuis .topik-block").forEach((block) => {
    const questions = block.querySelectorAll(".quiz-q");
    const resultBox = block.querySelector(".quiz-result");
    let answered = 0, correct = 0;
    questions.forEach((qEl) => {
      const ans = Number(qEl.dataset.ans);
      qEl.querySelectorAll(".quiz-opt").forEach((opt) => {
        opt.addEventListener("click", () => {
          if (qEl.dataset.done) return;
          qEl.dataset.done = "1"; answered++;
          const oi = Number(opt.dataset.oi);
          if (oi === ans) { opt.classList.add("correct"); correct++; }
          else {
            opt.classList.add("wrong");
            qEl.querySelectorAll(".quiz-opt")[ans].classList.add("correct");
          }
          if (answered === questions.length) {
            const nilai = Math.round((correct / questions.length) * 100);
            resultBox.style.display = "block";
            resultBox.textContent = `Nilai: ${nilai} (${correct}/${questions.length} benar) — ${nilai >= 75 ? "Hebat! 🎉" : "Ayo semangat, coba lagi! 💪"}`;
            saveQuiz(subject, block, correct, questions.length);
          }
        });
      });
    });
  });
}

async function saveQuiz(subject, block, score, total) {
  const student = (document.getElementById("studentName").value || "").trim();
  const kelas = document.getElementById("studentKelas").value;
  if (!student) return; // hanya simpan bila nama siswa diisi
  await API.saveResult({
    student, kelas: kelas || null,
    subject_id: subject.id, subject_name: subject.nama,
    topic_id: block.dataset.topik, topic_title: block.dataset.topikJudul,
    score, total
  });
}

/* ---------- Close modal ---------- */
document.getElementById("modalClose").addEventListener("click", () =>
  document.getElementById("modal").classList.remove("open"));
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") e.target.classList.remove("open");
});

/* ---------- Modul Ajar / LKPD ---------- */
function wireModul() {
  document.querySelectorAll(".tab-mini").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".tab-mini").forEach((x) => x.classList.remove("active"));
      b.classList.add("active"); state.docType = b.dataset.doc;
    }));
  document.getElementById("genDoc").addEventListener("click", buildDoc);
  document.getElementById("printDoc").addEventListener("click", () => window.print());
}

function val(id) { return esc(document.getElementById(id).value || "..."); }

function buildDoc() {
  const isModul = state.docType === "modul";
  const title = isModul ? "MODUL AJAR" : "LEMBAR KERJA PESERTA DIDIK (LKPD)";
  const kbc = val("mKbc");
  let html = `<div class="doc"><h2>${title}<br><span style="font-size:.8rem;font-weight:400">Berbasis Cinta (KBC) &amp; Deep Learning</span></h2>
    <table>
      <tr><td class="lbl">Nama Guru</td><td>${val("mGuru")}</td></tr>
      <tr><td class="lbl">Mata Pelajaran</td><td>${val("mMapel")}</td></tr>
      <tr><td class="lbl">Kelas / Semester</td><td>${val("mKelas")}</td></tr>
      <tr><td class="lbl">Materi / Topik</td><td>${val("mTopik")}</td></tr>
      <tr><td class="lbl">Alokasi Waktu</td><td>${val("mWaktu")}</td></tr>
    </table>
    <h3>A. Tujuan Pembelajaran</h3><p>${val("mTujuan")}</p>
    <h3>B. Insersi Nilai KBC</h3><p>Menyisipkan nilai <b>${kbc}</b> dalam kegiatan pembelajaran.</p>
    <h3>C. Langkah Deep Learning</h3>`;
  if (isModul) {
    html += `<table>
      <tr><td class="lbl">Mindful (Berkesadaran)</td><td>Siswa fokus mengamati dan berpikir kritis tentang ${val("mTopik")}.</td></tr>
      <tr><td class="lbl">Meaningful (Bermakna)</td><td>Mengaitkan ${val("mTopik")} dengan kehidupan nyata siswa.</td></tr>
      <tr><td class="lbl">Joyful (Menggembirakan)</td><td>Kegiatan menyenangkan (permainan/diskusi/karya) seputar ${val("mTopik")}.</td></tr>
    </table>
    <h3>D. Kegiatan Pembelajaran</h3>
    <p><b>Pendahuluan:</b> Salam, doa, apersepsi, dan menyampaikan tujuan.</p>
    <p><b>Inti:</b> Eksplorasi materi, diskusi, penerapan nilai KBC, dan aktivitas Deep Learning.</p>
    <p><b>Penutup:</b> Refleksi, penguatan, dan doa penutup.</p>
    <h3>E. Penilaian</h3><p>Sikap (observasi nilai cinta), pengetahuan (kuis), dan keterampilan (unjuk kerja).</p>`;
  } else {
    html += `<table>
      <tr><td class="lbl">Mindful</td><td>Amati dengan saksama lalu tuliskan hasil pengamatanmu.</td></tr>
      <tr><td class="lbl">Meaningful</td><td>Hubungkan materi dengan pengalamanmu sehari-hari.</td></tr>
      <tr><td class="lbl">Joyful</td><td>Kerjakan bersama teman dengan gembira.</td></tr>
    </table>
    <h3>D. Petunjuk</h3><p>1. Tulis nama dan kelasmu. 2. Kerjakan setiap kegiatan dengan teliti. 3. Tanyakan bila ada kesulitan.</p>
    <h3>E. Kegiatan Siswa</h3>
    <p>Nama: ______________________ Kelas: __________</p>
    <p>1. Amati/kerjakan tentang <b>${val("mTopik")}</b>:</p>
    <p>_______________________________________________</p>
    <p>2. Refleksi nilai <b>${kbc}</b> yang kamu rasakan:</p>
    <p>_______________________________________________</p>`;
  }
  html += `<div class="sig"><div>Guru Kelas,<br><br><br>(${val("mGuru")})</div></div></div>`;
  document.getElementById("modulPreview").innerHTML = html;
}

/* ---------- Nilai / riwayat ---------- */
function wireNilai() {
  document.getElementById("refreshResults").addEventListener("click", loadResults);
}
async function loadResults() {
  const student = (document.getElementById("studentName").value || "").trim();
  const rows = await API.getResults(student || undefined);
  const body = document.getElementById("resultsBody");
  if (!rows || !rows.length) {
    body.innerHTML = `<tr><td colspan="5" class="muted">Belum ada data nilai.</td></tr>`;
    return;
  }
  body.innerHTML = rows.map((r) => {
    const t = (r.created_at || "").replace("T", " ").slice(0, 16);
    const nilai = r.total ? Math.round((r.score / r.total) * 100) : 0;
    return `<tr><td>${esc(t)}</td><td>${esc(r.student)}</td><td>${esc(r.subject_name || r.subject_id)}</td>
      <td>${esc(r.topic_title || r.topic_id)}</td><td><b>${nilai}</b> (${r.score}/${r.total})</td></tr>`;
  }).join("");
}
