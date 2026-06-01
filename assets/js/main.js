const voicebanks = [
  {
    id: "iirai-v1",
    name: "Iirai",
    version: "V1",
    type: "CVVC",
    language: "Japanese",
    range: "G3–D4",
    status: "released",
    statusText: "Released",
    description: "The original voicebank with a soft, gentle timbre. Designed for ballads and emotional pieces.",
    link: "voicebank.html?id=iirai-v1",
    cover: "assets/img/covers/iirai_v1.png"
  },
  {
    id: "iirai-v2",
    name: "Akane Iirai",
    version: "V2",
    type: "CVVC",
    language: "Japanese",
    range: "F3–E4",
    status: "released",
    statusText: "Released",
    description: "Refined version with expanded range and smoother transitions. Better for dynamic arrangements.",
    link: "voicebank.html?id=iirai-v2",
    cover: "assets/img/covers/iirai_v2.PNG"
  },
  {
    id: "takismana",
    name: "Takismana",
    version: "V1",
    type: "CVVC",
    language: "Japanese",
    range: "E3–F4",
    status: "released",
    statusText: "Released",
    description: "Refined version with expanded range and smoother transitions. Better for dynamic arrangements.",
    link: "voicebank.html?id=takismana",
    cover: "assets/img/covers/takismana.png"
  },
  {
    id: "eugene",
    name: "Eugene",
    version: "V1",
    type: "CVVC",
    language: "English/Japanese",
    range: "A2–C4",
    status: "upcoming",
    statusText: "Upcoming",
    description: "Bilingual voicebank with a warm, masculine tone. Release scheduled for late 2026.",
    link: "voicebank.html?id=eugene",
    cover: "assets/img/covers/eugene.png"
  }
];

function renderVoicebanks() {
  const grid = document.getElementById("voicebank-grid");
  if (!grid) return;

  grid.innerHTML = voicebanks.map(v => `
    <a href="${v.link}" class="voicebank-card">
      <div style="margin-bottom:1rem; text-align:center;">
        <img src="${v.cover}" alt="${v.name} cover" style="max-width:100%; height:auto; border:1px solid #1a1a1a; aspect-ratio:1;">
      </div>
      <div class="card-header">
        <h2>${v.name}</h2>
        <span class="version">${v.version}</span>
        <span class="status-badge status-${v.status}">${v.statusText}</span>
      </div>
      <div class="card-meta">
        <span>Type: ${v.type}</span>
        <span>Language: ${v.language}</span>
        <span>Range: ${v.range}</span>
      </div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderVoicebanks);