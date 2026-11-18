/**
 * =========================================================================
 * AMIR GIRGIS MOFID — PORTFOLIO APPLICATION LOGIC
 * =========================================================================
 * Orchestrates:
 * 1. Data rendering from content.js
 * 2. Dark / Light theme toggle & persistence
 * 3. Mobile menu drawer
 * 4. Desktop smooth custom cursor
 * 5. Scroll-triggered reveal animations (IntersectionObserver)
 * 6. Animated number counters (strictly for confirmed facts: 11 clients, 60+ students)
 * 7. Horizontal timeline navigation
 * 8. 3D card tilt effects
 * 9. Photo fallback handling (initials "AG")
 * 10. Contact form mailto generator & clipboard copy
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) {
    console.error('Portfolio content data not found in window.PORTFOLIO_CONTENT.');
    return;
  }

  // --- 1. RENDER ALL CONTENT FROM CONTENT.JS ---
  initDataRendering(content);

  // --- 2. THEME CONTROLLER ---
  initTheme();

  // --- 3. NAVIGATION & MOBILE DRAWER ---
  initNavigation();

  // --- 4. DESKTOP CUSTOM CURSOR ---
  initCustomCursor();

  // --- 5. SCROLL REVEALS & ACTIVE LINK TRACKING ---
  initScrollEffects();

  // --- 6. ANIMATED COUNTERS ---
  initCounters();

  // --- 7. HORIZONTAL TIMELINE CONTROLS ---
  initTimelineControls();

  // --- 8. 3D CARD TILT EFFECT ---
  initCardTilt();

  // --- 9. PHOTO FALLBACK INITIALS ---
  initPhotoFallbacks();

  // --- 10. CV DOWNLOAD HANDLING (SUBPATH/ROOT RESILIENT) ---
  initCvDownloadHandling();

  // --- 11. CONTACT FORM MAILTO & COPY ---
  initContactForm(content);
});

/**
 * Render all sections dynamically from content.js
 */
function initDataRendering(data) {
  // Update document title and meta description
  if (data.meta) {
    document.title = data.meta.siteTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', data.meta.metaDescription);
  }

  // Render Hero
  renderHero(data.hero, data.meta, data.contact);

  // Render About
  renderAbout(data.about, data.meta);

  // Render Experience
  renderExperience(data.experience);

  // Render Projects
  renderProjects(data.projects);

  // Render Achievements
  renderAchievements(data.achievements);

  // Render Volunteering
  renderVolunteering(data.volunteering);

  // Render Skills
  renderSkills(data.skills);

  // Render Education
  renderEducation(data.education);

  // Render Contact Info
  renderContact(data.contact, data.contactSection);

  // Render Footer
  renderFooter(data.footer, data.meta);
}

/**
 * 1. Render Hero Section
 */
function renderHero(hero, meta, contact) {
  const heroContainer = document.getElementById('hero-content-slot');
  if (!heroContainer) return;

  heroContainer.innerHTML = `
    <div class="hero-content">
      <div class="status-pill reveal-on-scroll">
        <span class="status-dot"></span>
        <span>${escapeHtml(hero.badge)}</span>
      </div>

      <div class="reveal-on-scroll delay-1">
        <p class="hero-greeting">${escapeHtml(hero.greeting)}</p>
        <h1 class="hero-name">
          <span class="hero-name-gradient">${escapeHtml(hero.name)}</span>
        </h1>
      </div>

      <p class="hero-headline reveal-on-scroll delay-2">
        ${escapeHtml(hero.headline)}
      </p>

      <p class="hero-value-statement reveal-on-scroll delay-2">
        "${escapeHtml(hero.valueStatement)}"
      </p>

      <div class="hero-cta-group reveal-on-scroll delay-3">
        <a href="${escapeHtml(hero.ctas.primary.href)}" class="btn btn-accent">
          <span>${escapeHtml(hero.ctas.primary.label)}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>

        <a href="${escapeHtml(hero.ctas.secondary.href)}" download="Amir_Girgis_CV.pdf" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span>${escapeHtml(hero.ctas.secondary.label)}</span>
        </a>

        <a href="${escapeHtml(hero.ctas.tertiary.href)}" class="btn btn-outline">
          <span>${escapeHtml(hero.ctas.tertiary.label)}</span>
        </a>
      </div>

      <div class="hero-stats-bar reveal-on-scroll delay-4">
        <div class="hero-stat-card">
          <span class="hero-stat-num" data-counter="11">0</span>
          <span class="hero-stat-label">Clients Delivered</span>
        </div>
        <div class="hero-stat-card">
          <span class="hero-stat-num" data-counter="60" data-suffix="+">0</span>
          <span class="hero-stat-label">Students Mentored</span>
        </div>
        <div class="hero-stat-card">
          <span class="hero-stat-num">1<span style="font-size:1.2rem; vertical-align:super;">st</span></span>
          <span class="hero-stat-label">Place – INNOVET III</span>
        </div>
      </div>
    </div>
  `;

  // Setup Hero Portrait
  const heroPortrait = document.getElementById('hero-portrait-slot');
  if (heroPortrait) {
    heroPortrait.innerHTML = `
      <div class="portrait-container reveal-on-scroll delay-2">
        <div class="portrait-glow-ring"></div>
        <div class="portrait-frame">
          <div class="avatar-fallback js-avatar-fallback">
            <div class="avatar-fallback-initials">${escapeHtml(meta.avatarFallbackInitials)}</div>
            <div class="avatar-fallback-sub">Amir Girgis</div>
          </div>
          <img 
            src="${escapeHtml(meta.avatarPath)}" 
            alt="${escapeHtml(meta.avatarAlt)}" 
            class="portrait-img js-portrait-img"
            onerror="this.style.opacity='0'; this.style.pointerEvents='none';"
          />
        </div>

        <div class="hero-floating-badge">
          <div class="badge-icon-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <div>
            <div class="badge-info-title">Market Sphere X</div>
            <div class="badge-info-sub">Founder &amp; Team Leader</div>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * 2. Render About Section
 */
function renderAbout(about, meta) {
  const container = document.getElementById('about-content-slot');
  if (!container) return;

  const bioHtml = about.bio.map(p => `<p class="about-bio-text">${escapeHtml(p)}</p>`).join('');
  const highlightsHtml = about.highlights.map(h => `
    <div class="about-highlight-card">
      <div class="highlight-label">${escapeHtml(h.label)}</div>
      <div class="highlight-value">${escapeHtml(h.value)}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="about-grid">
      <div class="about-visual reveal-on-scroll">
        <div class="about-portrait-wrapper">
          <div class="about-glow-ring"></div>
          <div class="about-portrait-frame">
            <div class="avatar-fallback js-avatar-fallback">
              <div class="avatar-fallback-initials">${escapeHtml(meta.avatarFallbackInitials)}</div>
              <div class="avatar-fallback-sub">Amir Girgis Mofid</div>
            </div>
            <img 
              src="${escapeHtml(meta.avatarPath)}" 
              alt="${escapeHtml(meta.avatarAlt)}" 
              loading="lazy" 
              class="portrait-img js-portrait-img"
              onerror="this.style.opacity='0'; this.style.pointerEvents='none';"
            />
          </div>
        </div>
      </div>

      <div class="about-content reveal-on-scroll delay-1">
        <div class="section-tagline">${escapeHtml(about.tagline)}</div>
        <h2 class="section-title">${escapeHtml(about.title)}</h2>
        ${bioHtml}
        <div class="about-highlights-grid">
          ${highlightsHtml}
        </div>
      </div>
    </div>
  `;
}

/**
 * 3. Render Experience Section
 */
function renderExperience(exp) {
  const track = document.getElementById('experience-track-slot');
  if (!track) return;

  track.innerHTML = exp.roles.map((role, idx) => {
    const detailsHtml = role.details.map(d => `<li class="experience-bullet">${escapeHtml(d)}</li>`).join('');
    const skillsHtml = role.skills.map(s => `<span class="tag">${escapeHtml(s)}</span>`).join('');
    
    let metricsHtml = '';
    if (role.metrics && role.metrics.length > 0) {
      metricsHtml = `<div class="experience-metrics-row">` + role.metrics.map(m => {
        if (m.isPlaceholder) {
          return `
            <div class="exp-metric-box">
              <span class="exp-metric-val placeholder-pill">${escapeHtml(m.value)}</span>
              <span class="exp-metric-label">${escapeHtml(m.label)}</span>
            </div>
          `;
        }
        return `
          <div class="exp-metric-box">
            <span class="exp-metric-val" data-counter="${m.value}" data-suffix="${m.suffix || ''}">0</span>
            <span class="exp-metric-label">${escapeHtml(m.label)}</span>
          </div>
        `;
      }).join('') + `</div>`;
    }

    return `
      <article class="experience-card reveal-on-scroll delay-${(idx % 3) + 1}">
        <span class="experience-badge">${escapeHtml(role.badge)}</span>
        <h3 class="experience-role">${escapeHtml(role.role)}</h3>
        <div class="experience-org">${escapeHtml(role.organization)}</div>
        <div class="experience-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${escapeHtml(role.period)}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${escapeHtml(role.location)}
          </span>
        </div>

        ${metricsHtml}

        <ul class="experience-bullets">
          ${detailsHtml}
        </ul>

        <div class="tag-cloud">
          ${skillsHtml}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 4. Render Projects Section
 */
function renderProjects(projects) {
  const container = document.getElementById('projects-grid-slot');
  if (!container) return;

  container.innerHTML = projects.items.map((item, idx) => {
    if (item.isPlaceholder) {
      const toolsHtml = item.tools.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
      return `
        <article class="project-card project-placeholder-card reveal-on-scroll delay-2">
          <div class="placeholder-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <span class="project-badge" style="margin-bottom:12px;">${escapeHtml(item.tagline)}</span>
          <h3 class="project-title" style="font-size:1.4rem;">${escapeHtml(item.title)}</h3>
          <p class="project-description" style="max-width:440px; margin: 12px 0 20px;">
            ${escapeHtml(item.description)}
          </p>
          <div class="tag-cloud" style="justify-content:center;">
            ${toolsHtml}
          </div>
        </article>
      `;
    }

    const keyPointsHtml = item.keyPoints ? item.keyPoints.map(kp => `<div class="project-point">${escapeHtml(kp)}</div>`).join('') : '';
    const toolsHtml = item.tools.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    const roleNoteHtml = item.roleNote ? `<div class="project-role-note">${escapeHtml(item.roleNote)}</div>` : '';
    const taglineHtml = item.tagline ? `<div class="project-tagline">${escapeHtml(item.tagline)}</div>` : '';

    return `
      <article class="project-card reveal-on-scroll delay-${(idx % 2) + 1}">
        <div class="project-header">
          <span class="project-category">${escapeHtml(item.category)}</span>
          <span class="project-badge">${escapeHtml(item.badge)}</span>
        </div>

        <h3 class="project-title">${escapeHtml(item.title)}</h3>
        ${taglineHtml}

        <p class="project-description">${escapeHtml(item.description)}</p>

        ${roleNoteHtml}

        ${keyPointsHtml ? `<div class="project-key-points">${keyPointsHtml}</div>` : ''}

        <div class="tag-cloud" style="margin-top:auto;">
          ${toolsHtml}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 5. Render Achievements & Awards Section
 */
function renderAchievements(achievements) {
  const container = document.getElementById('achievements-track-slot') || document.getElementById('achievements-grid-slot');
  if (!container) return;

  container.innerHTML = achievements.items.map((item, idx) => {
    const isSpecial = item.isSpecialHighlight;
    const tagsHtml = item.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
    
    let teamHtml = '';
    if (item.teamMembers && item.teamMembers.length > 0) {
      teamHtml = `
        <div class="team-list-box">
          <div class="team-list-label">Winning Team</div>
          <div class="team-names">${item.teamMembers.map(m => escapeHtml(m)).join(' • ')}</div>
        </div>
      `;
    }

    const dateOrPlaceholder = item.dates || item.date || item.datesPlaceholder;
    const isPlaceholderDate = item.datesPlaceholder && item.dates === item.datesPlaceholder;

    return `
      <article class="achievement-card ${isSpecial ? 'highlighted-award' : ''} reveal-on-scroll delay-${(idx % 2) + 1}">
        <div class="award-badge-top">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
          <span>${escapeHtml(item.badge)}</span>
        </div>

        <h3 class="award-title">${escapeHtml(item.title)}</h3>
        <div class="award-summit">${escapeHtml(item.summit)}</div>

        <div class="experience-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${isPlaceholderDate ? `<span class="placeholder-pill" style="font-size:0.9rem;">${escapeHtml(dateOrPlaceholder)}</span>` : escapeHtml(dateOrPlaceholder)}
          </span>
          ${item.location ? `
            <span class="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${escapeHtml(item.location)}
            </span>
          ` : ''}
        </div>

        ${item.organizers ? `<div class="award-organizers">${escapeHtml(item.organizers)}</div>` : ''}

        <p class="project-description">${escapeHtml(item.description)}</p>

        ${teamHtml}

        <div class="tag-cloud" style="margin-top:auto;">
          ${tagsHtml}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 6. Render Volunteering Section
 */
function renderVolunteering(volunteering) {
  const container = document.getElementById('volunteering-slot');
  if (!container) return;

  container.innerHTML = volunteering.items.map(item => {
    const respHtml = item.responsibilities.map(r => `<li class="volunteering-duty-item">${escapeHtml(r)}</li>`).join('');
    const tagsHtml = item.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');

    return `
      <article class="volunteering-card reveal-on-scroll">
        <div class="volunteering-header">
          <div class="volunteering-certificate-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${escapeHtml(item.certificate)}</span>
          </div>
          <h3 class="volunteering-role">${escapeHtml(item.role)}</h3>
          <div class="volunteering-event">${escapeHtml(item.event)}</div>
        </div>

        <div class="experience-meta">
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            ${escapeHtml(item.dates)}
          </span>
          <span class="meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${escapeHtml(item.location)}
          </span>
        </div>

        <p class="project-description">${escapeHtml(item.description)}</p>

        <ul class="volunteering-duties">
          ${respHtml}
        </ul>

        <div class="tag-cloud">
          ${tagsHtml}
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 7. Render Skills Section
 */
function renderSkills(skills) {
  const container = document.getElementById('skills-grid-slot');
  if (!container) return;

  const getCategoryIconSvg = (name) => {
    switch (name) {
      case 'Backend':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`;
      case 'AI & Automation':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 .88-.28 1.7-.76 2.36L18 11v3h-2v4h-2v3h-4v-3H8v-4H6v-3l2.76-2.64A4 4 0 0 1 8 6a4 4 0 0 1 4-4z"/><circle cx="10" cy="6" r="1"/><circle cx="14" cy="6" r="1"/></svg>`;
      case 'Frontend & Design':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
      case 'Tools':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;
      case 'Digital Marketing':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>`;
      case 'Brand & Creative':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>`;
      case 'Professional':
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
      default:
        return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
    }
  };

  container.innerHTML = skills.categories.map((cat, idx) => {
    const badgesHtml = cat.skills.map(s => `<span class="skill-badge-item">${escapeHtml(s)}</span>`).join('');
    return `
      <div class="skill-category-card reveal-on-scroll delay-${(idx % 3) + 1}">
        <div class="skill-cat-header">
          <div class="skill-cat-icon">
            ${getCategoryIconSvg(cat.name)}
          </div>
          <h3 class="skill-cat-title">${escapeHtml(cat.name)}</h3>
        </div>
        <div class="skill-badges">
          ${badgesHtml}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 8. Render Education Section
 */
function renderEducation(edu) {
  const container = document.getElementById('education-slot');
  if (!container) return;

  container.innerHTML = `
    <article class="education-card reveal-on-scroll">
      <div>
        <div class="scholarship-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>${escapeHtml(edu.scholarship)}</span>
        </div>
        <h3 class="education-degree">${escapeHtml(edu.degree)}</h3>
        <div class="education-school">${escapeHtml(edu.institution)}</div>
        <p class="project-description">${escapeHtml(edu.description)}</p>
      </div>

      <div class="education-year-box">
        <div class="year-box-label">Status</div>
        <div class="year-box-val">${escapeHtml(edu.expectedGraduation)}</div>
      </div>
    </article>
  `;
}

/**
 * 9. Render Contact Info & Direct Links
 */
function renderContact(contact, section) {
  const infoSlot = document.getElementById('contact-info-slot');
  if (!infoSlot) return;

  infoSlot.innerHTML = `
    <div class="contact-methods-list">
      <div class="contact-method-card">
        <div class="method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div>
          <div class="method-label">Email</div>
          <a href="mailto:${escapeHtml(contact.email)}" class="method-val">${escapeHtml(contact.email)}</a>
        </div>
        <button type="button" class="copy-btn" id="copy-email-btn" title="Copy Email" aria-label="Copy Email address">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        </button>
      </div>

      <div class="contact-method-card">
        <div class="method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div>
          <div class="method-label">Phone</div>
          <a href="tel:${escapeHtml(contact.phone.replace(/\s+/g, ''))}" class="method-val">${escapeHtml(contact.phone)}</a>
        </div>
      </div>

      <div class="contact-method-card">
        <div class="method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
        <div>
          <div class="method-label">LinkedIn</div>
          <a href="${escapeHtml(contact.linkedin.url)}" target="_blank" rel="noopener noreferrer" class="method-val">${escapeHtml(contact.linkedin.display)}</a>
        </div>
      </div>

      <div class="contact-method-card">
        <div class="method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </div>
        <div>
          <div class="method-label">GitHub</div>
          <a href="${escapeHtml(contact.github.url)}" target="_blank" rel="noopener noreferrer" class="method-val">${escapeHtml(contact.github.display)}</a>
        </div>
      </div>

      <div class="contact-method-card">
        <div class="method-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <div class="method-label">Location</div>
          <div class="method-val">${escapeHtml(contact.location)}</div>
        </div>
      </div>
    </div>
  `;
}

/**
 * 10. Render Footer
 */
function renderFooter(footer, meta) {
  const footerSlot = document.getElementById('footer-slot');
  if (!footerSlot) return;

  footerSlot.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="brand-badge">${escapeHtml(meta.brandMark)}</div>
        <div class="footer-logo">${escapeHtml(meta.author)}</div>
        <div class="footer-quote">"${escapeHtml(footer.quote)}"</div>
      </div>

      <div class="footer-bottom">
        <div>${escapeHtml(footer.copyright)}</div>
        <div>Designed with precision & performance in mind.</div>
      </div>
    </div>
  `;
}

/**
 * Theme toggle management
 */
function initTheme() {
  const savedTheme = localStorage.getItem('amir_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to cinematic dark
  
  applyTheme(initialTheme);

  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('amir_portfolio_theme', next);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    btn.innerHTML = theme === 'dark' 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  });
}

/**
 * Mobile drawer and smooth navigation
 */
function initNavigation() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link, .nav-link');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  function openDrawer() {
    drawer.classList.add('open');
    toggleBtn.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    toggleBtn.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  });
}

/**
 * Custom smooth desktop cursor
 */
function initCustomCursor() {
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isVisible = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!isVisible) {
      isVisible = true;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    }

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  window.addEventListener('mouseleave', () => {
    isVisible = false;
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Add hover enlargement on interactive elements
  const interactiveSelector = 'a, button, input, textarea, .project-card, .experience-card, .achievement-card, .skill-badge-item';
  document.body.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.add('cursor-hover');
    }
  });

  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactiveSelector)) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/**
 * Scroll reveal animations & Navbar active links
 */
function initScrollEffects() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }

  // Active link scroll spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/**
 * Strictly confirmed animated counters (11 clients, 60+ students)
 */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-counter'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  if (isNaN(target)) return;

  const duration = 1400; // ms
  const startTime = performance.now();

  function updateCount(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quart
    const easeOut = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(easeOut * target);

    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = target + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}

/**
 * Horizontal timeline scroll controls for Experience and Achievements
 */
function initTimelineControls() {
  setupScrollTrack('experience-track-slot', 'timeline-prev-btn', 'timeline-next-btn');
  setupScrollTrack('achievements-track-slot', 'achievements-prev-btn', 'achievements-next-btn');
}

function setupScrollTrack(trackId, prevBtnId, nextBtnId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!track || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -440, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 440, behavior: 'smooth' });
  });
}

/**
 * 3D Card tilt effect on desktop
 */
function initCardTilt() {
  if (window.matchMedia('(hover: none) or (pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const cards = document.querySelectorAll('.project-card, .experience-card, .achievement-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/**
 * Photo fallback handler: ensures "AG" initials avatar appears if amir.jpg is not found
 */
function initPhotoFallbacks() {
  const images = document.querySelectorAll('.js-portrait-img');
  images.forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.parentElement.querySelector('.js-avatar-fallback');
      if (fallback) {
        fallback.style.display = 'flex';
      }
    });

    // In case image already completed with error or has broken src
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = 'none';
      const fallback = img.parentElement.querySelector('.js-avatar-fallback');
      if (fallback) {
        fallback.style.display = 'flex';
      }
    }
  });
}

/**
 * Resilient CV download handling across domain roots and subpaths (GitHub Pages / site previews)
 */
function initCvDownloadHandling() {
  const cvLinks = document.querySelectorAll('a[href$="Amir_Girgis_CV.pdf"]');
  cvLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const currentPath = window.location.pathname;
      // If hosted in a subfolder like /site/xyz/ or /portfolio/
      if (currentPath !== '/' && !currentPath.endsWith('/index.html')) {
        const baseDir = currentPath.endsWith('/') ? currentPath : currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
        if (baseDir && baseDir !== '/') {
          e.preventDefault();
          const targetUrl = baseDir + 'Amir_Girgis_CV.pdf';
          const dlAnchor = document.createElement('a');
          dlAnchor.href = targetUrl;
          dlAnchor.download = 'Amir_Girgis_CV.pdf';
          document.body.appendChild(dlAnchor);
          dlAnchor.click();
          document.body.removeChild(dlAnchor);
        }
      }
    });
  });
}

/**
 * Contact form mailto generator & clipboard copy
 */
function initContactForm(content) {
  const form = document.getElementById('contactForm');
  const recipientEmail = content.contact.email;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      const formattedSubject = subject ? `Portfolio Inquiry: ${subject}` : `Portfolio Inquiry from ${name || 'Visitor'}`;
      const bodyLines = [
        `Sender Name: ${name || 'Not provided'}`,
        `Sender Email: ${email || 'Not provided'}`,
        '',
        '--- Message ---',
        message
      ];

      const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
      
      // Provide instant UX feedback
      const alertBox = document.getElementById('formStatusMsg');
      if (alertBox) {
        alertBox.textContent = `Opening your email client to send message to ${recipientEmail}...`;
        alertBox.style.display = 'block';
        alertBox.style.color = 'var(--brand-mint)';
      }

      window.location.href = mailtoUrl;
    });
  }

  // Copy email button
  document.body.addEventListener('click', (e) => {
    const copyBtn = e.target.closest('#copy-email-btn');
    if (copyBtn) {
      navigator.clipboard.writeText(recipientEmail).then(() => {
        const origTitle = copyBtn.getAttribute('title');
        copyBtn.setAttribute('title', 'Copied!');
        showToast('Email address copied to clipboard!');
        setTimeout(() => copyBtn.setAttribute('title', origTitle), 2500);
      }).catch(() => {
        window.prompt('Copy email:', recipientEmail);
      });
    }
  });
}

/**
 * Toast notification utility
 */
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%) translateY(100px);
      background: var(--brand-navy);
      border: 1px solid var(--brand-mint);
      color: #FFFFFF;
      padding: 12px 24px;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 600;
      z-index: 100000;
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s;
      opacity: 0;
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 3000);
}

/**
 * Safe HTML escaping helper
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
