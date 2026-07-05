/* =====================================================================
 * API client Ruang Belajar MI
 * Otomatis memakai backend REST bila tersedia; jika tidak (mis. dibuka
 * langsung dari file / GitHub Pages), otomatis fallback ke data.js +
 * localStorage. Jadi aplikasi "bisa semua": full-stack ATAU statis.
 * ===================================================================== */

const API = (() => {
  let mode = "unknown"; // 'server' | 'static'

  async function detect() {
    if (mode !== "unknown") return mode;
    try {
      const r = await fetch("/api/meta", { method: "GET" });
      if (r.ok) { mode = "server"; return mode; }
    } catch (e) { /* offline / statis */ }
    mode = "static";
    return mode;
  }

  function localData() {
    // KURIKULUM disediakan oleh data.js (window.KURIKULUM)
    return window.KURIKULUM;
  }

  async function getMeta() {
    if (await detect() === "server") {
      return (await fetch("/api/meta")).json();
    }
    const k = localData();
    return { info: k.info, kbcPilar: k.kbcPilar, deepPilar: k.deepPilar };
  }

  async function getSubjects({ rumpun, kelas } = {}) {
    if (await detect() === "server") {
      const q = new URLSearchParams();
      if (rumpun) q.set("rumpun", rumpun);
      if (kelas) q.set("kelas", kelas);
      const r = await fetch("/api/subjects?" + q.toString());
      return (await r.json()).subjects;
    }
    let list = localData().subjects.map((s) => ({
      id: s.id, nama: s.nama, rumpun: s.rumpun, icon: s.icon,
      warna: s.warna, soft: s.soft, deskripsi: s.deskripsi,
      jumlahTopik: s.topik.length,
      kelasTersedia: [...new Set(s.topik.map((t) => t.kelas))].sort((a, b) => a - b)
    }));
    if (rumpun) list = list.filter((s) => s.rumpun === rumpun);
    if (kelas) list = list.filter((s) => s.kelasTersedia.includes(Number(kelas)));
    return list;
  }

  async function getSubject(id, { kelas } = {}) {
    if (await detect() === "server") {
      const q = kelas ? "?kelas=" + kelas : "";
      const r = await fetch("/api/subjects/" + id + q);
      return r.json();
    }
    const subj = localData().subjects.find((s) => s.id === id);
    if (!subj) return null;
    const copy = { ...subj };
    if (kelas) copy.topik = subj.topik.filter((t) => t.kelas === Number(kelas));
    return copy;
  }

  async function saveResult(payload) {
    if (await detect() === "server") {
      const r = await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      return r.json();
    }
    // fallback localStorage
    const key = "rbmi_results";
    const arr = JSON.parse(localStorage.getItem(key) || "[]");
    arr.unshift({ ...payload, id: Date.now(), created_at: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(arr.slice(0, 200)));
    return { ok: true, offline: true };
  }

  async function getResults(student) {
    if (await detect() === "server") {
      const q = student ? "?student=" + encodeURIComponent(student) : "";
      const r = await fetch("/api/results" + q);
      return (await r.json()).results;
    }
    let arr = JSON.parse(localStorage.getItem("rbmi_results") || "[]");
    if (student) arr = arr.filter((x) => x.student === student);
    return arr;
  }

  async function getMode() { return detect(); }

  return { getMeta, getSubjects, getSubject, saveResult, getResults, getMode };
})();
