// =========================================================
// PORTFOLIO BEHAVIOUR
// =========================================================

// ---------- 1. RENDER SKILLS ----------
function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map((group) => `
    <div class="card skill-group">
      <h3>${group.title}</h3>
      <ul class="skill-list">
        ${group.items.map((item) => `
          <li class="skill-pill">
            <span class="${item.level === "project" ? "dot-blue" : "dot-gray"}" aria-hidden="true"></span>
            ${item.name}
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

// ---------- 2. RENDER PROJECTS ----------
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((p) => {
    const thumb = p.image
      ? `<img src="${p.image}" alt="${p.title} preview" loading="lazy" />`
      : `<span>&lt; ${p.title.split(" ")[0].toLowerCase()} /&gt;</span>`;

    const liveLink = p.live
      ? `<a href="${p.live}" target="_blank" rel="noreferrer">🌐 View Project</a>`
      : `<span title="Live URL not yet available">🌐 Live — coming soon</span>`;

    const repoLink = p.repo
      ? `<a href="${p.repo}" target="_blank" rel="noreferrer">⌥ View Source Code</a>`
      : `<span title="Repo link not yet available">⌥ Source — coming soon</span>`;

    return `
      <article class="project-card">
        <div class="project-thumb">${thumb}</div>
        <div class="project-body">
          <div class="project-head">
            <h3 class="project-title">${p.title}</h3>
            <span class="project-status">${p.status}</span>
          </div>
          <p class="project-desc">${p.description}</p>
          ${p.features?.length ? `
            <ul class="project-features">
              ${p.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>` : ""}
          <div class="project-tech">
            ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-links">
            ${liveLink}
            ${repoLink}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ---------- 3. NAVBAR SCROLL & MOBILE MENU ----------
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  const onScroll = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

// ---------- 4. ACTIVE LINK HIGHLIGHT ----------
function initActiveLink() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
}

// ---------- 5. DYNAMIC YEAR ----------
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// ---------- 6. APPLY SITE LINKS FROM DATA ----------
function applySiteLinks() {
  // Every mailto: link → your email
  document.querySelectorAll('a[href^="mailto:"]').forEach((a) => {
    a.href = `mailto:${SITE.email}`;
  });

  // Every GitHub link → your GitHub
  document.querySelectorAll('a[href*="github.com"]').forEach((a) => {
    a.href = SITE.github;
  });

  // Every LinkedIn link → your LinkedIn
  document.querySelectorAll('a[href*="linkedin.com"]').forEach((a) => {
    a.href = SITE.linkedin;
  });
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  initNavbar();
  initActiveLink();
  initYear();
  applySiteLinks();
});