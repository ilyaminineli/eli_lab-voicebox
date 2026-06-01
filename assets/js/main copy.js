const voicebanks = [
    {
        id: "iirai-v1",
        name: "Iirai",
        version: "V1",
        type: "CV",
        language: "Japanese",
        range: "G3–D4",
        status: "released",
        statusText: "Released",
        description: "The original voicebank with a soft, gentle timbre. Designed for ballads and emotional pieces.",
        link: "voicebank.html?id=iirai-v1"
    },
    {
        id: "iirai-v2",
        name: "Iirai",
        version: "V2",
        type: "VCV",
        language: "Japanese",
        range: "F3–E4",
        status: "released",
        statusText: "Released",
        description: "Refined version with expanded range and smoother transitions. Better for dynamic arrangements.",
        link: "voicebank.html?id=iirai-v2"
    },
    {
        id: "takismana",
        name: "Takismana",
        version: "V1",
        type: "CVVC",
        language: "Japanese",
        range: "E3–F4",
        status: "beta",
        statusText: "Beta",
        description: "A darker, more intense voice with sharp attack. Ideal for rock and electronic genres.",
        link: "voicebank.html?id=takismana"
    },
    {
        id: "eugene",
        name: "Eugene",
        version: "V1",
        type: "CV",
        language: "English/Japanese",
        range: "A2–C4",
        status: "upcoming",
        statusText: "Upcoming",
        description: "Bilingual voicebank with a warm, masculine tone. Release scheduled for late 2026.",
        link: "voicebank.html?id=eugene"
    }
];

function renderVoicebanks() {
    const grid = document.getElementById("voicebank-grid");
    if (!grid) return;
    grid.innerHTML = voicebanks.map(v => `
    <a href="${v.link}" class="voicebank-card">
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
      <p class="card-desc">${v.description}</p>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderVoicebanks);