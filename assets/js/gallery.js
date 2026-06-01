function renderGallery() {
  const grid = document.getElementById("voicebank-grid");
  if (!grid) return;

  grid.innerHTML = voicebanks.map(vb => `
    <a href="${vb.link}" class="voicebank-card">
      <div class="card-header">
        <h2>${vb.name}</h2>
        <span class="version">${vb.version}</span>
        <span class="status-badge status-${vb.status}">${vb.statusText}</span>
      </div>
      <div class="card-meta">
        <span>Type: ${vb.type}</span>
        <span>Language: ${vb.language}</span>
        <span>Range: ${vb.range}</span>
      </div>
      <p class="card-desc">${vb.description}</p>
      <span class="card-link">View details</span>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderGallery);