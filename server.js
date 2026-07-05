/* =====================================================================
 * Ruang Belajar MI - Full-stack server
 * Node.js (built-in http) + node:sqlite  ->  ZERO dependency (Node 22+)
 * Menyajikan REST API + file statis di folder /public
 * Jalankan: node server.js   lalu buka http://localhost:3000
 * ===================================================================== */

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const { DatabaseSync } = require("node:sqlite");
const KURIKULUM = require("./content/kurikulum.js");

const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, "data.db");
const PUBLIC_DIR = path.join(__dirname, "public");

/* ----------------------------- Database ----------------------------- */
const db = new DatabaseSync(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    kelas INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
  );
  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student TEXT NOT NULL,
    kelas INTEGER,
    subject_id TEXT NOT NULL,
    subject_name TEXT,
    topic_id TEXT NOT NULL,
    topic_title TEXT,
    score INTEGER NOT NULL,
    total INTEGER NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  );
`);

/* ----------------------------- Helpers ----------------------------- */
function sendJson(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = "";
    req.on("data", (c) => (data += c));
    req.on("end", () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch { resolve({}); }
    });
  });
}

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".png": "image/png"
};

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(PUBLIC_DIR, path.normalize(urlPath));
  if (!filePath.startsWith(PUBLIC_DIR)) { res.writeHead(403); return res.end("Forbidden"); }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // fallback ke index.html (SPA-friendly)
      fs.readFile(path.join(PUBLIC_DIR, "index.html"), (e2, home) => {
        if (e2) { res.writeHead(404); return res.end("Not found"); }
        res.writeHead(200, { "Content-Type": MIME[".html"] });
        res.end(home);
      });
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(content);
  });
}

/* ----------------------------- Routes ----------------------------- */
async function handleApi(req, res, url) {
  const p = url.pathname;

  // Metadata: info, pilar KBC, pilar Deep Learning
  if (p === "/api/meta" && req.method === "GET") {
    return sendJson(res, 200, {
      info: KURIKULUM.info,
      kbcPilar: KURIKULUM.kbcPilar,
      deepPilar: KURIKULUM.deepPilar
    });
  }

  // Daftar mapel (ringkas) + filter opsional ?rumpun= & ?kelas=
  if (p === "/api/subjects" && req.method === "GET") {
    const rumpun = url.searchParams.get("rumpun");
    const kelas = url.searchParams.get("kelas");
    let list = KURIKULUM.subjects.map((s) => ({
      id: s.id, nama: s.nama, rumpun: s.rumpun, icon: s.icon,
      warna: s.warna, soft: s.soft, deskripsi: s.deskripsi,
      jumlahTopik: s.topik.length,
      kelasTersedia: [...new Set(s.topik.map((t) => t.kelas))].sort((a, b) => a - b)
    }));
    if (rumpun) list = list.filter((s) => s.rumpun === rumpun);
    if (kelas) list = list.filter((s) => s.kelasTersedia.includes(Number(kelas)));
    return sendJson(res, 200, { subjects: list });
  }

  // Detail satu mapel (lengkap dengan topik) + filter ?kelas=
  const mDetail = p.match(/^\/api\/subjects\/([\w-]+)$/);
  if (mDetail && req.method === "GET") {
    const subj = KURIKULUM.subjects.find((s) => s.id === mDetail[1]);
    if (!subj) return sendJson(res, 404, { error: "Mapel tidak ditemukan" });
    const kelas = url.searchParams.get("kelas");
    const copy = { ...subj };
    if (kelas) copy.topik = subj.topik.filter((t) => t.kelas === Number(kelas));
    return sendJson(res, 200, copy);
  }

  // Simpan hasil kuis
  if (p === "/api/results" && req.method === "POST") {
    const b = await readBody(req);
    if (!b.student || !b.subject_id || !b.topic_id) {
      return sendJson(res, 400, { error: "student, subject_id, topic_id wajib diisi" });
    }
    const stmt = db.prepare(`INSERT INTO results
      (student, kelas, subject_id, subject_name, topic_id, topic_title, score, total)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`);
    const info = stmt.run(
      String(b.student), b.kelas ? Number(b.kelas) : null,
      String(b.subject_id), b.subject_name || null,
      String(b.topic_id), b.topic_title || null,
      Number(b.score) || 0, Number(b.total) || 0
    );
    return sendJson(res, 201, { ok: true, id: info.lastInsertRowid });
  }

  // Riwayat hasil kuis (opsional ?student=)
  if (p === "/api/results" && req.method === "GET") {
    const student = url.searchParams.get("student");
    let rows;
    if (student) {
      rows = db.prepare("SELECT * FROM results WHERE student = ? ORDER BY id DESC LIMIT 200").all(student);
    } else {
      rows = db.prepare("SELECT * FROM results ORDER BY id DESC LIMIT 200").all();
    }
    return sendJson(res, 200, { results: rows });
  }

  // Rekap nilai per siswa (dashboard guru)
  if (p === "/api/stats" && req.method === "GET") {
    const rows = db.prepare(`SELECT student, kelas,
        COUNT(*) AS jumlah_kuis,
        SUM(score) AS total_benar,
        SUM(total) AS total_soal
      FROM results GROUP BY student, kelas ORDER BY student`).all();
    return sendJson(res, 200, { stats: rows });
  }

  return sendJson(res, 404, { error: "Endpoint tidak ditemukan" });
}

/* ----------------------------- Server ----------------------------- */
const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    return res.end();
  }
  const url = new URL(req.url, "http://" + req.headers.host);
  if (url.pathname.startsWith("/api/")) {
    try { return await handleApi(req, res, url); }
    catch (e) { return sendJson(res, 500, { error: String(e && e.message || e) }); }
  }
  return serveStatic(req, res);
});

server.listen(PORT, () => {
  const total = KURIKULUM.subjects.reduce((n, s) => n + s.topik.length, 0);
  console.log(`\u2728 Ruang Belajar MI berjalan di http://localhost:${PORT}`);
  console.log(`   ${KURIKULUM.subjects.length} mata pelajaran, ${total} topik siap dipelajari.`);
});
