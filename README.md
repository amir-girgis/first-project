# Amir Girgis Mofid — Personal Portfolio Website

A creative, fast, responsive personal portfolio website engineered with clean HTML5, CSS3, and vanilla JavaScript. Designed for zero-dependency static deployment on GitHub Pages, Vercel, Netlify, or any static web host.

---

## 📁 File Structure

```
├── index.html              # Main semantic HTML document & SEO metadata
├── Amir_Girgis_CV.pdf      # Resume PDF for direct download
├── css/
│   └── style.css           # Design system, CSS variables, dark/light themes & animations
├── js/
│   ├── content.js          # Single source of truth: all text, links, and data
│   └── app.js              # Application logic (rendering, theme, cursor, counters, mailto)
├── assets/
│   ├── amir.jpg            # Place Amir's portrait photo here (alt: "Portrait of Amir Girgis Mofid")
│   ├── favicon.svg         # Geometric vector favicon
│   └── Amir_Girgis_CV.pdf  # Mirror CV in assets folder
└── README.md               # Documentation, local preview & deployment guide
```

---

## 🎨 Creative Design & Technical Features

- **Palette**: Navy (`#0D2B5B`), Blue (`#2563A8`), Mint accent (`#3ECF8E`), and crisp neutrals.
- **Typography**: Space Grotesk (display headings & stats) paired with Inter (body text & metadata).
- **Themes**: Cinematic Dark Mode (default) with smooth toggle to high-contrast Light Mode; persists in `localStorage` and respects system preferences.
- **Interactions**:
  - Desktop custom cursor with smooth trailing aura and interactive hover states.
  - Scroll-triggered reveal animations via `IntersectionObserver`.
  - 3D perspective card tilt on desktop.
  - Interactive horizontal timeline for Experience with smooth navigation buttons.
  - Strictly confirmed animated counters (11 Clients Served, 60+ Students Mentored).
  - Responsive mobile drawer menu with smooth hamburger animation.
  - Direct `mailto:` contact form with feedback toast and one-click email clipboard copy.
  - Graceful photo fallback displaying a monogram avatar ("AG") if `assets/amir.jpg` is pending.
  - Full `prefers-reduced-motion` compliance and keyboard accessibility.

---

## 📝 How to Edit Content

All text content, project descriptions, skills, and placeholders reside exclusively in **`js/content.js`**. You do not need to touch `index.html` or `css/style.css` to update your portfolio.

### Placeholders to Fill in `js/content.js`:
1. `[TEAM_SIZE]` — Under `experience.roles[0].metrics`: Update your team size at Market Sphere X Agency.
2. `[TECHSKILLS_DATES]` — Under `achievements.items[1].dates`: Add the exact event dates for TechSkills Forum 2026.

---

## 🚀 How to Run Locally

You can run this project locally without installing any build tools or dependencies:

### Option A: Using Python (Recommended)
```bash
# In the project directory, run:
python3 -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option B: Using Node.js / npx
```bash
npx serve .
# Or:
npx http-server .
```

### Option C: Direct File Opening
Double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🌐 How to Deploy for Free

### 1. GitHub Pages
1. Create a repository on GitHub (e.g. `portfolio` or `username.github.io`).
2. Push the files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** → **Pages**.
4. Under **Source**, select **Deploy from a branch**, choose `main` (branch) and `/ (root)` (folder), then click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/<your-repo>/`.

### 2. Vercel
1. Install Vercel CLI (`npm i -g vercel`) or go to [vercel.com](https://vercel.com).
2. Connect your GitHub repository or run `vercel` in your terminal.
3. Keep default settings (Framework preset: `Other`, Root Directory: `./`).
4. Click **Deploy**. Your portfolio will be live with free global CDN and SSL.

---

## 👤 Author
**Amir Girgis Mofid**  
- Email: amirgargas28@gmail.com  
- LinkedIn: [linkedin.com/in/amir-girgis-9392aa340](https://linkedin.com/in/amir-girgis-9392aa340)  
- GitHub: [github.com/amir-girgis](https://github.com/amir-girgis)
