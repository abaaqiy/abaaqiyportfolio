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

// ---------- 3. RENDER EXPERIENCE ----------
function renderExperience() {
  const list = document.getElementById("experienceTimeline");
  if (!list) return;

  list.innerHTML = EXPERIENCE.map((e) => `
    <li class="timeline-item">
      <h3 class="timeline-role">${e.role}</h3>
      <p class="timeline-meta">${e.org} · ${e.location} · ${e.period}</p>
      <ul class="timeline-points">
        ${e.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
      ${e.note ? `<p class="timeline-note">${e.note}</p>` : ""}
    </li>
  `).join("");
}

// ---------- 4. RENDER LEADERSHIP ----------
function renderLeadership() {
  const grid = document.getElementById("leadershipGrid");
  if (!grid) return;

  grid.innerHTML = LEADERSHIP.map((item) => `
    <div class="card">
      <h3>${item.role}</h3>
      <p class="org">${item.org}</p>
      <ul>
        ${item.points.map((p) => `<li>${p}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

// ---------- 5. NAVBAR SCROLL & MOBILE MENU ----------
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

// ---------- 6. ACTIVE LINK HIGHLIGHT ----------
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

// ---------- 7. DYNAMIC YEAR ----------
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// ---------- 8. APPLY SITE LINKS FROM DATA ----------
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
  renderExperience();
  renderLeadership();
  initNavbar();
  initActiveLink();
  initYear();
  applySiteLinks();
});