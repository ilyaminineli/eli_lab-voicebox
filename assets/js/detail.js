function renderDetail() {
  const params = new URLSearchParams(window.location.search);
  const vbId = params.get("id");
  const vb = voicebanks.find(v => v.id === vbId);

  if (!vb) {
    document.getElementById("detail-container").innerHTML = "<p>Voicebank not found.</p>";
    return;
  }

  // Basic info
  document.getElementById("vb-name").textContent = vb.name;
  document.getElementById("vb-version").textContent = vb.version;
  document.getElementById("vb-type").textContent = vb.type;
  document.getElementById("vb-language").textContent = vb.language;
  document.getElementById("vb-range").textContent = vb.range;
  document.getElementById("vb-status").textContent = vb.statusText;
  document.getElementById("vb-desc").textContent = vb.description;

  // Wiki sections
  document.getElementById("vb-overview").textContent = vb.wiki.overview;

  const featuresList = document.getElementById("vb-features");
  featuresList.innerHTML = vb.wiki.features
    .map(f => `<li>${f}</li>`)
    .join("");

  document.getElementById("vb-usage").textContent = vb.wiki.usage;
  document.getElementById("vb-recording").textContent = vb.wiki.recordingNotes;
  document.getElementById("vb-license").textContent = vb.wiki.license;

  // Gallery images
  const gallery = document.getElementById("vb-gallery");
  if (vb.gallery && vb.gallery.length) {
    gallery.innerHTML = vb.gallery.map(src => `
      <figure style="margin: 1.5rem 0; text-align:center;">
        <img src="${src}" alt="${vb.name} image" style="max-width:100%; height:auto; border:1px solid #1a1a1a;">
        <figcaption style="font-size:0.8rem; color:#6b6b6b; margin-top:0.4rem;">${vb.name} · ${src.split("/").pop()}</figcaption>
      </figure>
    `).join("");
  } else {
    gallery.innerHTML = "<p style='color:#6b6b6b;'>No images available yet.</p>";
  }

  // Poll / feedback form
  const poll = document.getElementById("vb-poll");
  poll.innerHTML = `
    <h3 style="font-family:var(--font-heading); font-size:1.1rem; margin:2rem 0 1rem;">Feedback &amp; Poll</h3>
    <form id="vb-poll-form" style="max-width:500px; font-size:0.95rem; line-height:1.6;">
      <p style="margin-bottom:0.8rem;">
        How would you rate this voicebank?
      </p>
      <div style="margin-bottom:1rem;">
        <label><input type="radio" name="rating" value="5" required> Excellent</label><br>
        <label><input type="radio" name="rating" value="4"> Good</label><br>
        <label><input type="radio" name="rating" value="3"> Decent</label><br>
        <label><input type="radio" name="rating" value="2"> Weak</label><br>
        <label><input type="radio" name="rating" value="1"> Poor</label>
      </div>

      <p style="margin-bottom:0.6rem;">
        What do you mainly use it for?
      </p>
      <div style="margin-bottom:1rem;">
        <label><input type="checkbox" name="use" value="ballads"> Ballads / emotional songs</label><br>
        <label><input type="checkbox" name="use" value="pop"> Pop / mainstream</label><br>
        <label><input type="checkbox" name="use" value="rock"> Rock / metal</label><br>
        <label><input type="checkbox" name="use" value="electronic"> Electronic / experimental</label><br>
        <label><input type="checkbox" name="use" value="other"> Other</label>
      </div>

      <p style="margin-bottom:0.6rem;">
        Additional comments (optional):
      </p>
      <textarea name="comment" rows="4" style="width:100%; max-width:100%; font-family:var(--font-body); font-size:0.9rem; padding:0.4rem; border:1px solid #6b6b6b; background:#f7f4ed; color:#1a1a1a; margin-bottom:1rem;"></textarea>

      <button type="submit" class="download-btn" style="cursor:pointer;">Send feedback</button>
    </form>
  `;

  // Simple submit handler (you can later connect to a backend or form service)
  document.getElementById("vb-poll-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your feedback! (This is a demo form.)");
    this.reset();
  });
}

document.addEventListener("DOMContentLoaded", renderDetail);