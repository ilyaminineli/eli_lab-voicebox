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
    cover: "assets/img/covers/iirai_v1.png",

    wiki: {
      overview: "Iirai V1 is a CVVC-based Japanese voicebank focused on expressive, emotional singing. Ideal for ballads, mid-tempo pop, and soft electronic tracks.",
      features: [
        "Soft, gentle timbre",
        "Natural vibrato control",
        "Optimized for mid-range melodies",
        "Light dynamic range for smooth phrasing"
      ],
      usage: "Best for lyrical, emotional performances. Avoid extreme staccato or very aggressive genres.",
      recordingNotes: "Recorded at 44.1kHz, 16-bit. Multiple dynamics included for gentle articulation.",
      license: "Freeware for personal and commercial use with attribution."
    },

    gallery: [
      "assets/img/covers/iirai_v1.png"
    ]
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
    cover: "assets/img/covers/iirai_v2.png",

    wiki: {
      overview: "Akane Iirai V2 improves on V1 with smoother phoneme transitions, a wider practical range, and more dynamic control.",
      features: [
        "Smoother legato and transitions",
        "Extended upper range",
        "Improved pitch envelope tuning",
        "Additional phoneme variations"
      ],
      usage: "Suitable for dynamic pop, rock, and electronic arrangements with more articulation.",
      recordingNotes: "Recorded at 48kHz, 24-bit. Additional dynamics and phoneme splits added.",
      license: "Freeware for personal and commercial use with attribution."
    },
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
    cover: "assets/img/covers/takismana.png",

    wiki: {
      overview: "Takismana is a darker, more intense voicebank designed for rock, metal, and hard electronic styles.",
      features: [
        "Sharp attack and strong consonants",
        "Darker timbre with edgy resonance",
        "CVVC structure for natural flow",
        "Optimized for high-energy performances"
      ],
      usage: "Best for rock, metal, industrial, and aggressive electronic genres. Less suitable for soft ballads.",
      recordingNotes: "Recorded at 48kHz, 24-bit. Extra emphasis on consonant clarity and dynamic contrast.",
      license: "Freeware for personal and commercial use with attribution."
    },

    gallery: [
      "assets/img/covers/takismana.png"
    ]
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
    cover: "assets/img/covers/eugene.png",

    wiki: {
      overview: "Eugene is a bilingual CVVC voicebank planned for late 2026, designed for both English and Japanese vocal synthesis with a warm, masculine tone.",
      features: [
        "Bilingual phoneme set (EN + JP)",
        "Warm, natural timbre",
        "Optimized for mid-low range",
        "Balanced dynamics for versatile use"
      ],
      usage: "Suitable for pop, ballads, and singer-songwriter styles in both languages.",
      recordingNotes: "In progress. Target: 48kHz, 24-bit, with multiple dynamics and phoneme variations.",
      license: "Planned freeware with attribution; final terms to be announced."
    },

    gallery: [
      "assets/img/covers/eugene.png"
    ]
  }
];

// Render gallery on voicebanks.html and index (if grid exists)
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

// Render detail + wiki + gallery + poll on voicebank.html
function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const vbId = params.get("id");
  const vb = voicebanks.find(v => v.id === vbId);

  if (!vb) return;

  // Basic info
  const n = document.getElementById("vb-name");
  const v = document.getElementById("vb-version");
  const t = document.getElementById("vb-type");
  const l = document.getElementById("vb-language");
  const r = document.getElementById("vb-range");
  const s = document.getElementById("vb-status");
  const d = document.getElementById("vb-desc");

  if (n) n.textContent = vb.name;
  if (v) v.textContent = vb.version;
  if (t) t.textContent = vb.type;
  if (l) l.textContent = vb.language;
  if (r) r.textContent = vb.range;
  if (s) s.textContent = vb.statusText;
  if (d) d.textContent = vb.description;

  // Cover image (reuse cover)
  const coverImg = document.getElementById("vb-cover-img");
  if (coverImg && vb.cover) {
    coverImg.src = vb.cover;
  }

  // Wiki sections
  const overviewEl = document.getElementById("vb-overview");
  const featuresEl = document.getElementById("vb-features");
  const usageEl = document.getElementById("vb-usage");
  const recordingEl = document.getElementById("vb-recording");
  const licenseEl = document.getElementById("vb-license");
  const galleryEl = document.getElementById("vb-gallery");
  const pollEl = document.getElementById("vb-poll");

  if (overviewEl && vb.wiki) overviewEl.textContent = vb.wiki.overview;

  if (featuresEl && vb.wiki && vb.wiki.features) {
    featuresEl.innerHTML = vb.wiki.features
      .map(f => `<li>${f}</li>`)
      .join("");
  }

  if (usageEl && vb.wiki) usageEl.textContent = vb.wiki.usage;
  if (recordingEl && vb.wiki) recordingEl.textContent = vb.wiki.recordingNotes;
  if (licenseEl && vb.wiki) licenseEl.textContent = vb.wiki.license;

  // Gallery with scroll buttons
  if (galleryEl && vb.gallery && vb.gallery.length) {
    galleryEl.innerHTML = `
    <div class="vb-gallery-scroll">
      <button class="vb-gallery-btn vb-gallery-btn-left" aria-label="Previous image">‹</button>
      <div class="vb-gallery-track">
        ${vb.gallery.map(src => `
          <div class="vb-gallery-item">
            <img src="${src}" alt="${vb.name} image">
            <div class="vb-gallery-caption">${vb.name} · ${src.split("/").pop()}</div>
          </div>
        `).join("")}
      </div>
      <button class="vb-gallery-btn vb-gallery-btn-right" aria-label="Next image">›</button>
    </div>
  `;

    const track = galleryEl.querySelector(".vb-gallery-track");
    const btnLeft = galleryEl.querySelector(".vb-gallery-btn-left");
    const btnRight = galleryEl.querySelector(".vb-gallery-btn-right");

    const scrollAmount = 260;

    btnLeft.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    btnRight.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  } else if (galleryEl) {
    galleryEl.innerHTML = "<p style='color:#6b6b6b;'>No images available yet.</p>";
  }



  document.getElementById("vb-poll-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback! (This is a demo form.)");
    this.reset();
  });
}


// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderVoicebanks();

  // Only run detail rendering if we're on a voicebank page (elements exist)
  if (document.getElementById("vb-name")) {
    renderDetail();
  }
});