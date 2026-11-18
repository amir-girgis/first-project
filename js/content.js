/**
 * ============================================================
 *  CONTENT.JS — Amir Girgis Mofid "Sunset Pop" Portfolio
 *  Single source of truth for ALL page text and data.
 *  Edit this file to update content; never touch layout files.
 * ============================================================
 *
 *  ⚠️  TWO PLACEHOLDERS REQUIRE MANUAL EDITING BEFORE LAUNCH:
 *
 *  1. TEAM_SIZE  (search for [TEAM_SIZE])
 *     ➜  Replace with the actual team headcount at Market Sphere X.
 *        e.g. change "<!-- EDIT: team size, e.g. 8 --> [TEAM_SIZE]"
 *             to "8 Members" (or whatever the real number is).
 *
 *  2. TECHSKILLS_DATES  (search for [TECHSKILLS_DATES])
 *     ➜  Replace with the exact dates of TechSkills Forum 2026.
 *        e.g. change "<!-- EDIT: exact dates of TechSkills Forum 2026 --> [TECHSKILLS_DATES]"
 *             to "March 14–16, 2026" (or whatever the real dates are).
 *
 * ============================================================
 */

const CONTENT = {

  /* ──────────────────────────────────────────────────────────
   *  META — SEO, Open Graph, Twitter Card, JSON-LD
   * ────────────────────────────────────────────────────────── */
  meta: {
    title: "Amir Girgis Mofid — Software Developer, Digital Marketer & Founder",
    description:
      "Portfolio of Amir Girgis Mofid: Software Development Student (C# / ASP.NET Core), Digital Marketer, AI Automation specialist and Founder of Market Sphere X Agency.",
    ogImage: "/assets/og-image.jpg",
    twitterCard: "summary_large_image",
    twitterSite: "@amirgirgis",
    twitterCreator: "@amirgirgis",

    /**
     * schema.org/Person — full JSON-LD object.
     * Inject as <script type="application/ld+json"> in <head>.
     */
    jsonLdPerson: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Amir Girgis Mofid",
      "url": "https://amirgirgis.dev",
      "image": "https://amirgirgis.dev/assets/amir.jpg",
      "jobTitle": "Software Development Student & Founder",
      "description":
        "Software Development Student specialising in C# and ASP.NET Core, Digital Marketer, AI Automation specialist, and Founder of Market Sphere X Agency.",
      "email": "amirgargas28@gmail.com",
      "telephone": "+20 122 364 6440",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Giza",
        "addressCountry": "EG"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "EVA International School of Applied Technology"
      },
      "sameAs": [
        "https://linkedin.com/in/amir-girgis-9392aa340",
        "https://github.com/amir-girgis"
      ],
      "knowsAbout": [
        "C#",
        "ASP.NET Core",
        "Web Development",
        "Digital Marketing",
        "AI Automation",
        "Brand Identity",
        "Entrepreneurship"
      ],
      "award": [
        "1st Place — Digital Marketing Competition, INNOVET III 2026",
        "Winner — \"Discovering\" Challenge, TechSkills Forum 2026"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Founder & Team Leader",
        "occupationLocation": {
          "@type": "Country",
          "name": "Egypt"
        }
      }
    }
  },

  /* ──────────────────────────────────────────────────────────
   *  NAV
   * ────────────────────────────────────────────────────────── */
  nav: {
    links: [
      "About",
      "Experience",
      "Projects",
      "Achievements",
      "Volunteering",
      "Skills",
      "Education",
      "Contact"
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  HERO
   * ────────────────────────────────────────────────────────── */
  hero: {
    greeting: "Hey, I'm",
    nameFirst: "Amir",
    nameLast: "Girgis Mofid",
    headline:
      "Software Development Student (C# / ASP.NET Core) | Digital Marketing & AI Automation | Founder, Market Sphere X",
    subtext:
      "Builder at the intersection of code, marketing and leadership — building things that matter.",
    cta: [
      { label: "VIEW WORK",    href: "#projects" },
      { label: "DOWNLOAD CV",  href: "/Amir_Girgis_CV.pdf" },
      { label: "CONTACT ME",   href: "#contact" }
    ],
    floatingChips: [
      "C# / ASP.NET CORE",
      "DIGITAL MARKETING",
      "FOUNDER, MARKET SPHERE X",
      "AI AUTOMATION",
      "WEB DEVELOPMENT"
    ],
    rotatingBadgeText: "AVAILABLE FOR OPPORTUNITIES • FOUNDER • DEVELOPER •",
    marqueeKeywords: [
      "C#",
      "ASP.NET CORE",
      "DIGITAL MARKETING",
      "AI AUTOMATION",
      "WEB DEVELOPMENT",
      "LEADERSHIP",
      "ENTREPRENEURSHIP",
      "BRAND IDENTITY",
      "CREATIVE DIRECTION"
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  ABOUT
   * ────────────────────────────────────────────────────────── */
  about: {
    eyebrow: "01 — ABOUT",
    bigStatement:
      "I'm a software developer who thinks like a digital marketer, builds with AI automation, and leads as a founder — an entrepreneur who turns bold ideas into real products that move people.",
    highlightedWords: [
      "software developer",
      "digital marketer",
      "AI automation",
      "founder"
    ],
    bento: [
      { type: "stat",     value: "60+",       label: "Students Mentored" },
      { type: "stat",     value: "11",        label: "Clients Served" },
      { type: "award",    value: "1st Place", label: "INNOVET III 2026" },
      { type: "award",    value: "Winner",    label: "TechSkills Forum 2026" },
      { type: "location", city: "Giza, Egypt", clockLabel: "CAIRO" },
      {
        type:  "focus",
        label: "Current Focus",
        items: [
          "C# & ASP.NET Core",
          "AI Automation Pipelines",
          "Brand Strategy",
          "Scaling Market Sphere X"
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  EXPERIENCE
   * ────────────────────────────────────────────────────────── */
  experience: {
    eyebrow: "03 — EXPERIENCE",
    items: [
      {
        role:        "Founder & Team Leader",
        org:         "Market Sphere X Agency",
        period:      "March 2024 – Present",
        type:        "work",
        description:
          "Leads a cross-functional team covering web development, graphic design, video production, photography, AI automation, business development and sales. Delivers websites, branding, social media strategy and AI workflow automation for clients, primarily real estate companies in Egypt.",
        highlights: [
          "Team Size: <!-- EDIT: team size, e.g. 8 --> [TEAM_SIZE]",
          "11 Clients",
          "Web Dev · Branding · AI Automation · Social Media Strategy"
        ]
      },
      {
        role:        "School Ambassador · PHP Team Leader · Peer Assistant · Student Professional Mentor",
        org:         "EVA International School of Applied Technology",
        period:      "Ongoing",
        type:        "education-work",
        description:
          "Supports 60+ students in technical and professional development. Leads PHP team, assists peers and mentors fellow students in coding and career readiness.",
        highlights: [
          "60+ Students Mentored",
          "Technical & Professional Development"
        ]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  PROJECTS
   * ────────────────────────────────────────────────────────── */
  projects: {
    eyebrow: "04 — PROJECTS",
    items: [
      {
        number:      "01",
        category:    "AI & AUTOMATION",
        title:       "AI Lead Qualification Platform",
        description:
          "An end-to-end pipeline integrating Claude AI, Make, Airtable and Telegram via webhooks. Automatically scores and routes inbound leads, syncs CRM data, and generates tailored proposals and emails — with one human approval step.",
        tags:        ["Claude AI", "Make", "Airtable", "Telegram", "Webhooks", "REST APIs"],
        gradient:    "blue-magenta"
      },
      {
        number:      "02",
        category:    "BRAND & MARKETING",
        title:       "SAKAN — Your Life, Your Way.",
        description:
          "Student-focused platform CONCEPT combining accommodation discovery and booking, study management, personal finance management, daily life organization, and a proposed AI assistant — for students living away from their families. My role: concept and value proposition, audience analysis, digital marketing strategy, brand identity, social media campaigns (Instagram posts, stories, reels), digital presence and final presentation. Won 1st Place at INNOVET III.",
        tags:        [
          "Brand Identity",
          "Digital Marketing",
          "Social Media",
          "Concept Strategy",
          "Audience Analysis",
          "Campaign Planning"
        ],
        gradient:    "magenta-orange",
        award:       "1st Place — INNOVET III"
      },
      {
        number:      "03",
        category:    "COMING SOON",
        title:       "More Projects Coming Soon",
        description: "New work in progress. Check back soon.",
        tags:        [],
        gradient:    "neutral",
        placeholder: true
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  ACHIEVEMENTS
   * ────────────────────────────────────────────────────────── */
  achievements: {
    eyebrow: "05 — ACHIEVEMENTS",
    items: [
      {
        rank:       "1ST PLACE",
        title:      "Digital Marketing Competition",
        event:      "INNOVET III – TVET ReAImagined Innovation Summit",
        date:       "November 9, 2026",
        organizers:
          "Organized by Egypt's Ministry of Education and Technical Education with GIZ, the European Union and the Swiss Agency for Development and Cooperation.",
        team:       ["Amir Girgis", "Keroles Ayman", "Ahmed Adel", "Mina Sameh"],
        spotlight:  true
      },
      {
        rank:      "WINNER",
        title:     "\"Discovering\" Challenge",
        event:     "TechSkills Forum 2026 — Mediterranean TVET Forum (inaugural edition), New Administrative Capital, Egypt",
        date:      "<!-- EDIT: exact dates of TechSkills Forum 2026 --> [TECHSKILLS_DATES] — EDIT THIS PLACEHOLDER",
        note:      "Represented Egypt on an international team from Mediterranean countries.",
        spotlight: false
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  VOLUNTEERING
   * ────────────────────────────────────────────────────────── */
  volunteering: {
    eyebrow: "06 — VOLUNTEERING",
    items: [
      {
        role:        "Volunteer — Digital Marketing Team",
        org:         "Global Entrepreneurship Festival (GEF) 2026",
        location:    "Cairo, Egypt",
        dates:       "November 6–8, 2026",
        description:
          "Supported investors in the Deals Room: explained projects, scheduled meetings, took notes, translated English–Arabic, helped assess each project's strengths and risks, and recorded in the event form whether a project reached a deal.",
        certificate: "Official Volunteer Certificate received."
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  SKILLS
   * ────────────────────────────────────────────────────────── */
  skills: {
    eyebrow: "07 — SKILLS",
    groups: [
      {
        label: "Backend",
        items: ["C#", "ASP.NET Core", "Web API", "MVC", "Entity Framework Core", "LINQ", "SQL Server"]
      },
      {
        label: "AI & Automation",
        items: ["Claude", "ChatGPT", "Prompt Engineering", "Make", "REST APIs", "Webhooks"]
      },
      {
        label: "Frontend & Design",
        items: ["HTML", "CSS", "Figma"]
      },
      {
        label: "Tools",
        items: ["Git", "GitHub", "Visual Studio"]
      },
      {
        label: "Digital Marketing",
        items: [
          "Strategy",
          "Market Research",
          "Target Audience Analysis",
          "Social Media Marketing",
          "Content Strategy",
          "Campaign Planning",
          "SEO"
        ]
      },
      {
        label: "Brand & Creative",
        items: ["Brand Identity", "Creative Direction", "Visual Communication"]
      },
      {
        label: "Professional",
        items: ["Team Leadership", "Collaboration", "Presentation", "Problem Solving"]
      }
    ]
  },

  /* ──────────────────────────────────────────────────────────
   *  EDUCATION
   * ────────────────────────────────────────────────────────── */
  education: {
    eyebrow:     "08 — EDUCATION",
    degree:      "Technical Diploma in Software Development",
    institution: "EVA International School of Applied Technology",
    expected:    "Expected 2027",
    note:        "Studying through a USAID-supported scholarship."
  },

  /* ──────────────────────────────────────────────────────────
   *  CONTACT
   * ────────────────────────────────────────────────────────── */
  contact: {
    eyebrow:  "09 — CONTACT",
    headline: "LET'S BUILD SOMETHING IMPACTFUL",
    subtext:  "Open to collaborations, projects and conversations.",
    links: [
      {
        label:   "Email",
        href:    "mailto:amirgargas28@gmail.com",
        display: "amirgargas28@gmail.com"
      },
      {
        label:   "LinkedIn",
        href:    "https://linkedin.com/in/amir-girgis-9392aa340",
        display: "linkedin.com/in/amir-girgis"
      },
      {
        label:   "GitHub",
        href:    "https://github.com/amir-girgis",
        display: "github.com/amir-girgis"
      }
    ],
    phone:      "+20 122 364 6440",
    formAction: "mailto:amirgargas28@gmail.com"
  },

  /* ──────────────────────────────────────────────────────────
   *  FOOTER
   * ────────────────────────────────────────────────────────── */
  footer: {
    name:       "AMIR GIRGIS MOFID",
    clockLabel: "CAIRO",
    backToTop:  "BACK TO TOP",
    copyright:  "© 2026 Amir Girgis Mofid. All rights reserved."
  }

};
