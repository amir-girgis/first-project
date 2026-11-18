/**
 * =========================================================================
 * AMIR GIRGIS MOFID — PORTFOLIO CONTENT DATA
 * =========================================================================
 * All text content, links, metadata, and editable placeholders are stored here.
 * You can edit any text or values below without modifying HTML or CSS files.
 *
 * NOTE FOR AMIR:
 * Below are two placeholders requiring your exact input when available:
 * 1. TEAM_SIZE: Team size for Market Sphere X Agency (currently set to "[TEAM_SIZE]")
 * 2. TECHSKILLS_DATES: Exact dates for TechSkills Forum 2026 (currently set to "[TECHSKILLS_DATES]")
 * =========================================================================
 */

window.PORTFOLIO_CONTENT = {
  // --- METADATA & BRANDING ---
  meta: {
    siteTitle: "Amir Girgis Mofid | Software Development & Digital Marketing",
    metaDescription: "Software Development Student (C# / ASP.NET Core) | Digital Marketing & AI Automation | Founder, Market Sphere X Agency. Builder at the intersection of code, marketing and leadership.",
    author: "Amir Girgis Mofid",
    location: "Giza, Egypt",
    avatarPath: "assets/amir.jpg",
    avatarAlt: "Portrait of Amir Girgis Mofid",
    avatarFallbackInitials: "AG",
    cvPath: "Amir_Girgis_CV.pdf",
    brandMark: "AGM"
  },

  // --- CONTACT & SOCIAL PROFILES ---
  contact: {
    email: "amirgargas28@gmail.com",
    phone: "+20 122 364 6440",
    location: "Giza, Egypt",
    linkedin: {
      url: "https://linkedin.com/in/amir-girgis-9392aa340",
      display: "linkedin.com/in/amir-girgis-9392aa340"
    },
    github: {
      url: "https://github.com/amir-girgis",
      display: "github.com/amir-girgis"
    }
  },

  // --- NAVIGATION LINKS ---
  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Volunteering", href: "#volunteering" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ],

  // --- 1. HERO SECTION ---
  hero: {
    badge: "Available for high-impact projects & collaborations",
    greeting: "Hello, I am",
    name: "Amir Girgis Mofid",
    headline: "Software Development Student (C# / ASP.NET Core) | Digital Marketing & AI Automation | Founder, Market Sphere X",
    valueStatement: "Builder at the intersection of code, marketing and leadership.",
    ctas: {
      primary: { label: "View Projects", href: "#projects" },
      secondary: { label: "Download CV", href: "Amir_Girgis_CV.pdf", isDownload: true },
      tertiary: { label: "Contact Me", href: "#contact" }
    },
    quickMetrics: [
      { value: 11, suffix: "", label: "Clients Served" },
      { value: 60, suffix: "+", label: "Students Mentored" },
      { value: 1, suffix: "st", label: "Place Winner INNOVET III" }
    ]
  },

  // --- 2. ABOUT SECTION ---
  about: {
    sectionId: "about",
    sectionNumber: "01",
    tagline: "About Me",
    title: "Bridging Engineering, Growth & Strategic Execution",
    bio: [
      "I am a software development student at EVA International School of Applied Technology, pursuing a Technical Diploma in Software Development (expected 2027) through a USAID-supported scholarship.",
      "As the Founder & Team Leader of Market Sphere X Agency since March 2024, I lead a multidisciplinary team delivering web development, brand systems, social media growth, and AI-driven workflow automations for commercial clients, primarily real estate companies in Egypt.",
      "I am passionate about entrepreneurship, modern technology, youth empowerment, and international cooperation. Whether architecting backend services in C# and ASP.NET Core, automating operational pipelines with AI, or mentoring emerging technical peers, I thrive at the convergence of technical engineering and business growth."
    ],
    highlights: [
      { label: "Scholarship", value: "USAID-Supported Technical Scholar" },
      { label: "Education", value: "EVA International School (Exp. 2027)" },
      { label: "Leadership", value: "Founder & Team Leader, Market Sphere X" },
      { label: "Location", value: "Giza, Egypt" }
    ]
  },

  // --- 3. EXPERIENCE SECTION ---
  experience: {
    sectionId: "experience",
    sectionNumber: "02",
    tagline: "Experience",
    title: "Agency Leadership & Academic Mentorship",
    intro: "Hands-on team leadership delivering commercial web and automation solutions, paired with continuous technical mentorship.",
    roles: [
      {
        id: "market-sphere-x",
        role: "Founder & Team Leader",
        organization: "Market Sphere X Agency",
        period: "March 2024 – Present",
        location: "Egypt",
        badge: "Agency Leadership",
        summary: "Leads a cross-functional team (web development, graphic design, video production, photography, AI automation, business development, sales); delivers websites, branding, social media strategy and AI workflow automation for clients, mainly real estate companies in Egypt.",
        metrics: [
          { value: 11, suffix: "", label: "Clients Delivered" },
          { value: "[TEAM_SIZE]", suffix: "", label: "Team Members", isPlaceholder: true }
        ],
        details: [
          "Leads a cross-functional team across web development, graphic design, video production, photography, AI automation, business development, and sales.",
          "Delivers end-to-end bespoke websites, brand identities, and data-driven social media growth strategies.",
          "Architects custom AI workflow automations streamlining client operations and lead processing.",
          "Focuses primarily on delivering measurable commercial value for real estate companies in Egypt.",
          "Directly managed delivery and client relationships for 11 clients."
        ],
        skills: ["Web Development", "AI Automation", "Branding", "Social Media Strategy", "Team Leadership", "Business Development"]
      },
      {
        id: "eva-mentorship",
        role: "School Ambassador, PHP Team Leader, Peer Assistant & Student Professional Mentor",
        organization: "EVA International School of Applied Technology",
        period: "Ongoing Leadership Role",
        location: "Giza, Egypt",
        badge: "Mentorship & Ambassador",
        summary: "Supports 60+ students in technical and professional development while serving as School Ambassador and PHP Team Leader.",
        metrics: [
          { value: 60, suffix: "+", label: "Students Mentored" }
        ],
        details: [
          "Actively supports 60+ students in mastering software development fundamentals and professional growth.",
          "Serves as PHP Team Leader, organizing structured code reviews, collaborative sprints, and peer debugging.",
          "Represents the school community as official School Ambassador during key technical and institutional events.",
          "Provides dedicated peer assistance and 1-on-1 technical guidance to foster student success."
        ],
        skills: ["Technical Mentorship", "PHP", "Peer Leadership", "Professional Coaching", "Student Empowerment"]
      }
    ]
  },

  // --- 4. PROJECTS SECTION ---
  projects: {
    sectionId: "projects",
    sectionNumber: "03",
    tagline: "Featured Projects",
    title: "Engineered Automations & Strategic Platforms",
    intro: "Real-world AI pipeline implementations, award-winning concept platforms, and backend engineering architectures.",
    items: [
      {
        id: "ai-lead-qualification",
        title: "AI Lead Qualification Platform",
        category: "AI & Workflow Automation",
        badge: "Autonomous Pipeline",
        description: "An automated lead pipeline integrating Claude AI, Make, Airtable and Telegram via webhooks that scores and routes inbound leads, syncs CRM data and generates proposals/emails with one human approval step.",
        keyPoints: [
          "Integrates Claude AI, Make, Airtable, and Telegram via real-time webhooks",
          "Automated scoring and dynamic routing of inbound prospective leads",
          "Synchronizes lead metadata and status directly into centralized CRM tables",
          "Drafts customized proposals and emails requiring only a single human approval step before dispatch"
        ],
        tools: ["Claude AI", "Make", "Airtable", "Telegram", "Webhooks", "CRM Sync", "Prompt Engineering"]
      },
      {
        id: "sakan-platform",
        title: "SAKAN",
        tagline: "Your Life, Your Way.",
        category: "Platform Concept & Digital Strategy",
        badge: "1st Place Winner – INNOVET III",
        description: "A student-focused platform CONCEPT for students living away from their families, combining accommodation discovery and booking, study management, personal finance management, daily life organization and a proposed AI assistant.",
        roleNote: "My Role: Concept & value proposition, audience analysis, digital marketing strategy, brand identity, social media campaigns, Instagram posts/stories/reels content, digital presence and final presentation. (Concept & Strategy only; software development of the app was not executed by me).",
        keyPoints: [
          "Developed full platform concept, value proposition, and user persona modeling for students away from family",
          "Designed complete brand identity, visual communication standards, and typography hierarchy",
          "Engineered the go-to-market digital marketing strategy and comprehensive audience analysis",
          "Crafted high-impact social media campaign creative (Instagram reels, stories, and carousels)",
          "Delivered winning championship presentation pitch securing 1st Place at INNOVET III"
        ],
        tools: ["Concept & Strategy", "Brand Identity", "Digital Marketing", "Social Media Strategy", "Audience Analysis", "INNOVET III Champion"]
      },
      {
        id: "more-projects-placeholder",
        isPlaceholder: true,
        title: "More projects coming soon",
        tagline: "Active Development",
        category: "Backend Engineering & AI Systems",
        description: "Currently engineering enterprise backend services utilizing C# / ASP.NET Core Web APIs, Entity Framework Core, and next-generation autonomous AI workflow integrations. Production repositories will be linked as they go live.",
        tools: ["C#", "ASP.NET Core", "Web API", "Entity Framework Core", "AI Automation"]
      }
    ]
  },

  // --- 5. ACHIEVEMENTS & AWARDS SECTION ---
  achievements: {
    sectionId: "achievements",
    sectionNumber: "04",
    tagline: "Achievements & Awards",
    title: "Recognitions & Competitive Milestones",
    intro: "National and international honors in digital innovation, entrepreneurship, and technical excellence.",
    items: [
      {
        id: "innovet-iii",
        isSpecialHighlight: true,
        badge: "1st Place National Champion",
        title: "1st Place – Digital Marketing Competition",
        summit: "INNOVET III – TVET ReAImagined Innovation Summit",
        date: "November 9, 2026",
        organizers: "Organized by Egypt's Ministry of Education and Technical Education with GIZ, the European Union and the Swiss Agency for Development and Cooperation.",
        teamMembers: ["Amir Girgis", "Keroles Ayman", "Ahmed Adel", "Mina Sameh"],
        description: "Awarded first place across Egypt in the premier digital marketing championship at the INNOVET III Summit, presenting the SAKAN strategic concept and digital marketing framework before leading international development partners.",
        tags: ["Ministry of Education", "GIZ", "European Union", "Swiss Agency for Development"]
      },
      {
        id: "techskills-forum",
        isSpecialHighlight: false,
        badge: "International Winner",
        title: "Winner, 'Discovering' Challenge",
        summit: "TechSkills Forum 2026 (Mediterranean TVET Forum, Inaugural Edition)",
        location: "New Administrative Capital, Egypt",
        datesPlaceholder: "[TECHSKILLS_DATES]",
        dates: "[TECHSKILLS_DATES]",
        description: "Won the 'Discovering' Challenge representing Egypt on an international team from Mediterranean countries at the inaugural Mediterranean TVET Forum, solving cross-border technical and innovation challenges.",
        tags: ["TechSkills Forum", "Mediterranean Countries", "Cross-Border Team", "Innovation Challenge"]
      }
    ]
  },

  // --- 6. VOLUNTEERING SECTION ---
  volunteering: {
    sectionId: "volunteering",
    sectionNumber: "05",
    tagline: "Volunteering",
    title: "Ecosystem Contribution & Deals Room Support",
    intro: "Actively contributing to national entrepreneurship forums, investor deal flow, and bilingual technical collaboration.",
    items: [
      {
        id: "gef-2026",
        role: "Volunteer – Digital Marketing Team & Deals Room Specialist",
        event: "Global Entrepreneurship Festival (GEF) 2026",
        location: "Cairo, Egypt",
        dates: "November 6–8, 2026",
        certificate: "Official Volunteer Certificate Received",
        description: "Served on the Digital Marketing team and supported investors in the high-stakes Deals Room during the 3-day festival.",
        responsibilities: [
          "Supported active angel and institutional investors directly within the Deals Room",
          "Explained founder projects, technical models, and business concepts to prospective investors",
          "Coordinated and scheduled investor-founder pitch meetings and maintained strategic notes",
          "Provided real-time English–Arabic translation during high-level venture discussions",
          "Assisted in analyzing project strengths, market opportunities, and commercial risk factors",
          "Logged deal statuses and recorded whether transactions reached an agreed deal in the official event form"
        ],
        tags: ["Investor Relations", "Deals Room", "Startup Evaluation", "English-Arabic Translation", "Certified Volunteer"]
      }
    ]
  },

  // --- 7. SKILLS SECTION ---
  skills: {
    sectionId: "skills",
    sectionNumber: "06",
    tagline: "Technical & Professional Toolkit",
    title: "Skills & Domain Competencies",
    intro: "Transparently categorized technical capabilities, marketing proficiencies, and leadership competencies. No arbitrary progress bars.",
    categories: [
      {
        name: "Backend",
        icon: "backend",
        skills: ["C#", "ASP.NET Core", "Web API", "MVC", "Entity Framework Core", "LINQ", "SQL Server"]
      },
      {
        name: "AI & Automation",
        icon: "ai",
        skills: ["Claude", "ChatGPT", "Prompt Engineering", "Make", "REST APIs", "Webhooks"]
      },
      {
        name: "Frontend & Design",
        icon: "frontend",
        skills: ["HTML", "CSS", "Figma"]
      },
      {
        name: "Tools",
        icon: "tools",
        skills: ["Git", "GitHub", "Visual Studio"]
      },
      {
        name: "Digital Marketing",
        icon: "marketing",
        skills: ["Strategy", "Market Research", "Target Audience Analysis", "Social Media Marketing", "Content Strategy", "Campaign Planning", "SEO"]
      },
      {
        name: "Brand & Creative",
        icon: "creative",
        skills: ["Brand Identity", "Creative Direction", "Visual Communication"]
      },
      {
        name: "Professional",
        icon: "professional",
        skills: ["Team Leadership", "Collaboration", "Presentation", "Problem Solving"]
      }
    ]
  },

  // --- 8. EDUCATION SECTION ---
  education: {
    sectionId: "education",
    sectionNumber: "07",
    tagline: "Education",
    title: "Academic Foundation",
    institution: "EVA International School of Applied Technology",
    degree: "Technical Diploma in Software Development",
    expectedGraduation: "Expected 2027",
    scholarship: "Studying through a USAID-supported scholarship",
    description: "Rigorous applied technical curriculum focused on modern software engineering methodologies, backend development, system design, and practical industry standards under international scholarship standards."
  },

  // --- 9. CONTACT SECTION ---
  contactSection: {
    sectionId: "contact",
    sectionNumber: "08",
    tagline: "Get in Touch",
    title: "Let's Build Something Impactful",
    intro: "Whether you need AI workflow automation, full-stack backend development, strategic digital marketing, or agency collaboration — feel free to reach out.",
    formNote: "Submitting this form directly opens your default mail client with pre-filled details. No backend or third-party tracking required."
  },

  // --- FOOTER ---
  footer: {
    copyright: "© 2026 Amir Girgis Mofid. Built with clean HTML, CSS & Vanilla JavaScript.",
    quote: "Builder at the intersection of code, marketing and leadership."
  }
};
