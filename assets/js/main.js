const voicebanks = [
  {
    id: "iirai-v1", name: "イーライ (Iirai)", version: "Original", type: "Japanese CVVC", language: "Japanese", range: "Legacy — see original Wiki", status: "released", statusText: "Legacy / Archived",
    description: "The original イーライ voicebank preserved as a historical release. It remains available for reproducibility and reference.",
    link: "voicebank.html?id=iirai-v1", cover: "assets/img/covers/iirai_ver1.png", website: "https://github.com/ELIASADAMS/Iirai", wikiUrl: "https://utau.fandom.com/wiki/%E3%82%A4%E3%83%BC%E3%83%A9%E3%82%A4", wikiLabel: "Original イーライ Wiki",
    wiki: { overview: "The original version of Iirai. Akane Iirai is the updated revision and should be used for the current technical specification.", features: ["Original Japanese CVVC voicebank", "Historical version preserved for reproducibility", "Original イーライ / 怪人ハサミ identity", "Legacy artwork and documentation retained"], usage: "Use this release when reproducing older projects or studying the original Iirai voicebank. For the current revision, use Akane Iirai.", recordingNotes: "Historical technical details should be taken from the original release materials and Wiki rather than the Akane Iirai manual.", license: "See the original release documentation and repository terms." },
    gallery: ["assets/img/covers/iirai_ver1.png"]
  },
  {
    id: "iirai-v2", name: "茜音イーライ (Akane Iirai)", version: "Updated", type: "Japanese CVVC", language: "Japanese", range: "G#3–D3", status: "released", statusText: "Released",
    description: "Updated version of the original イーライ with improved phoneme clarity, three pitches, and a clearer, more confident upper range while retaining the warm bass-leaning core.",
    link: "voicebank.html?id=iirai-v2", cover: "assets/img/covers/iirai_v2.png", website: "https://github.com/ELIASADAMS/Iirai", wikiUrl: "https://utau.fandom.com/wiki/%E3%82%A4%E3%83%BC%E3%83%A9%E3%82%A4", wikiLabel: "Iirai Wiki / Original Reference",
    wiki: { overview: "茜音イーライ is the updated version of the original イーライ. The current manual describes improved phoneme clarity, a warm bass-leaning core, and a clear upper range suited to expressive phrasing.", features: ["Three pitches: A3 / F3 / C3", "Improved phoneme clarity compared with the first iteration", "Warm bass-leaning core with clearer upper range", "Consonant clarity, high end and bass"], usage: "Designed for expressive Japanese singing, including fast rambling lines, chant-like passages and subtle glitched ad-libs. Recommended: TIPS, Moresampler, WORLDLINE-R and wavtool4vcv.", recordingNotes: "Romaji-encoded, CVVC aliased. Optimum tempo: 70–120 BPM.", license: "Free for non-commercial voicebank use; contact the creator for commercial use. Character merchandise and logos require permission from creator and illustrator." },
    gallery: ["assets/img/covers/iirai_v2.png", "assets/img/covers/iirai_ver1.png"]
  },
  {
    id: "eugene", name: "友人 (Eugene)", version: "Current", type: "Japanese CVVC", language: "Japanese", range: "G#3–D3", status: "released", statusText: "Released",
    description: "A warm, intimate Japanese CVVC voicebank with a slightly uncanny edge, created from preserved fragments, reconstructed phonemes, and extensive post-production.",
    link: "voicebank.html?id=eugene", cover: "assets/img/covers/eugene.png", website: "https://github.com/ELIASADAMS/eugene-utau", wikiUrl: "https://utau.fandom.com/wiki/%E5%8F%8B%E4%BA%BA", wikiLabel: "友人 Wiki",
    wiki: { overview: "友人 (Eugene) is a Japanese CVVC UTAU voicebank for UTAU and OpenUtau. Its voice has a warm, intimate tone with a slightly uncanny edge and a lived-in quality shaped by preservation and reconstruction.", features: ["Three pitches: C3 / G3 / C4", "Romaji-encoded, CVVC aliased", "Consonant clarity, high end and bass", "Optimum BPM: 70–120"], usage: "Especially suited to melancholic songs, slow emotional lines, lyrical arrangements, dark pop, industrial and experimental material. Recommended: TIPS, Moresampler, WORLDLINE-R and wavtool4vcv.", recordingNotes: "Built from preserved fragments, reconstructed phonemes and extensive post-production. Moresampler expression controls are documented in the Eugene manual/specification.", license: "See the canonical TERMS.md in the Eugene repository." },
    gallery: ["assets/img/covers/eugene.png"]
  },
  {
    id: "takismana", name: "タキスマナ (Takismana)", version: "V1", type: "Voicebank", language: "Japanese", range: "Metadata pending", status: "upcoming", statusText: "Metadata Pending",
    description: "Takismana is part of the eli_lab voicebank collection. Technical and licensing metadata will be added from authoritative documentation.",
    link: "voicebank.html?id=takismana", cover: "assets/img/covers/takismana.png", website: null, wikiUrl: null, wikiLabel: "Documentation pending",
    wiki: { overview: "This entry is intentionally incomplete until the authoritative Takismana manual and release metadata are added.", features: ["Metadata pending", "Documentation pending", "Release information pending"], usage: "Pending authoritative technical documentation.", recordingNotes: "Do not infer recording format, range or sample rate from the current draft site.", license: "Pending authoritative terms." },
    gallery: ["assets/img/covers/takismana.png"]
  }
];

function renderVoicebanks() {
  const grid = document.getElementById("voicebank-grid");
  if (!grid) return;
  grid.innerHTML = voicebanks.map(v => `<a href="${v.link}" class="voicebank-card"><div style="margin-bottom:1rem;text-align:center;"><img src="${v.cover}" alt="${v.name} cover" style="max-width:100%;height:auto;border:1px solid #1a1a1a;aspect-ratio:1;object-fit:cover;"></div><div class="card-header"><h2>${v.name}</h2><span class="version">${v.version}</span><span class="status-badge status-${v.status}">${v.statusText}</span></div><div class="card-meta"><span>Type: ${v.type}</span><span>Language: ${v.language}</span><span>Range: ${v.range}</span></div><p class="card-desc">${v.description}</p></a>`).join("");
}

function renderDetail() {
  const vbId = new URLSearchParams(window.location.search).get("id");
  const vb = voicebanks.find(v => v.id === vbId);
  if (!vb) return;
  const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value || "—"; };
  set("vb-name", vb.name); set("vb-version", vb.version); set("vb-type", vb.type); set("vb-language", vb.language); set("vb-range", vb.range); set("vb-status", vb.statusText); set("vb-desc", vb.description);
  const coverImg = document.getElementById("vb-cover-img"); if (coverImg) coverImg.src = vb.cover;
  set("vb-overview", vb.wiki?.overview); set("vb-usage", vb.wiki?.usage); set("vb-recording", vb.wiki?.recordingNotes); set("vb-license", vb.wiki?.license);
  const featuresEl = document.getElementById("vb-features"); if (featuresEl) featuresEl.innerHTML = (vb.wiki?.features || []).map(f => `<li>${f}</li>`).join("");
  const downloadEl = document.getElementById("vb-download"); if (downloadEl) { downloadEl.href = vb.website ? `${vb.website}/releases` : "#"; downloadEl.textContent = vb.website ? "Open Repository / Releases" : "Documentation Pending"; }
  const wikiLink = document.getElementById("vb-wiki-link"); if (wikiLink) { wikiLink.hidden = !vb.wikiUrl; if (vb.wikiUrl) { wikiLink.href = vb.wikiUrl; wikiLink.textContent = vb.wikiLabel || "Wiki"; } }
  const galleryEl = document.getElementById("vb-gallery");
  if (galleryEl && vb.gallery?.length) {
    galleryEl.innerHTML = `<div class="vb-gallery-scroll"><button class="vb-gallery-btn vb-gallery-btn-left" aria-label="Previous image">‹</button><div class="vb-gallery-track">${vb.gallery.map(src => `<div class="vb-gallery-item"><img src="${src}" alt="${vb.name} image"><div class="vb-gallery-caption">${vb.name}</div></div>`).join("")}</div><button class="vb-gallery-btn vb-gallery-btn-right" aria-label="Next image">›</button></div>`;
    const track = galleryEl.querySelector(".vb-gallery-track"); galleryEl.querySelector(".vb-gallery-btn-left")?.addEventListener("click", () => track.scrollBy({left:-260,behavior:"smooth"})); galleryEl.querySelector(".vb-gallery-btn-right")?.addEventListener("click", () => track.scrollBy({left:260,behavior:"smooth"}));
  }
}

document.addEventListener("DOMContentLoaded", () => { renderVoicebanks(); if (document.getElementById("vb-name")) renderDetail(); });
