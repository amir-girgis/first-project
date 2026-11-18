import sys

def create_pdf(filename):
    # Minimal standard PDF 1.4 generator
    # We will format Amir Girgis Mofid's professional resume cleanly
    lines = [
        "AMIR GIRGIS MOFID",
        "Software Development Student (C# / ASP.NET Core) | Digital Marketing & AI Automation",
        "Founder, Market Sphere X Agency",
        "Location: Giza, Egypt | Email: amirgargas28@gmail.com | Phone: +20 122 364 6440",
        "LinkedIn: linkedin.com/in/amir-girgis-9392aa340 | GitHub: github.com/amir-girgis",
        "--------------------------------------------------------------------------------",
        "SUMMARY",
        "Software development student at EVA International School of Applied Technology",
        "(Technical Diploma in Software Development, expected 2027), studying through a",
        "USAID-supported scholarship. Founder & Team Leader of Market Sphere X Agency",
        "(digital marketing, branding, web development, AI automation, since March 2024).",
        "Passionate about entrepreneurship, technology, youth empowerment, and international cooperation.",
        "",
        "EXPERIENCE",
        "* Founder & Team Leader | Market Sphere X Agency (March 2024 - Present)",
        "  - Leads a cross-functional team (web development, graphic design, video production,",
        "    photography, AI automation, business development, sales).",
        "  - Delivers websites, branding, social media strategy, and AI workflow automation",
        "    for clients, mainly real estate companies in Egypt. Clients: 11.",
        "* School Ambassador, PHP Team Leader, Peer Assistant & Student Professional Mentor",
        "  EVA International School of Applied Technology",
        "  - Supports 60+ students in technical and professional development.",
        "",
        "PROJECTS",
        "* AI Lead Qualification Platform",
        "  - Pipeline integrating Claude AI, Make, Airtable, and Telegram via webhooks that scores",
        "    and routes inbound leads, syncs CRM data, and generates proposals/emails with one",
        "    human approval step.",
        "* SAKAN (Concept - 'Your Life, Your Way.')",
        "  - Student-focused platform concept combining accommodation discovery & booking, study",
        "    management, personal finance management, daily life organization, and AI assistant.",
        "  - Role: Concept, audience analysis, digital marketing strategy, brand identity, social",
        "    media campaigns, Instagram content, digital presence, and final presentation.",
        "  - Won 1st Place at INNOVET III.",
        "",
        "ACHIEVEMENTS & AWARDS",
        "* 1st Place - Digital Marketing Competition, INNOVET III (Nov 9, 2026)",
        "  - Ministry of Education and Technical Education with GIZ, EU, and SDC.",
        "  - Team: Amir Girgis, Keroles Ayman, Ahmed Adel, Mina Sameh.",
        "* Winner, 'Discovering' Challenge, TechSkills Forum 2026 (Mediterranean TVET Forum)",
        "  - Represented Egypt on an international team from Mediterranean countries.",
        "",
        "VOLUNTEERING",
        "* Volunteer, Global Entrepreneurship Festival (GEF) 2026, Cairo (Nov 6-8, 2026)",
        "  - Digital Marketing team & Deals Room support. Evaluated projects, translated EN-AR,",
        "    scheduled investor meetings, received official Volunteer Certificate.",
        "",
        "SKILLS",
        "* Backend: C#, ASP.NET Core, Web API, MVC, Entity Framework Core, LINQ, SQL Server",
        "* AI & Automation: Claude, ChatGPT, Prompt Engineering, Make, REST APIs, Webhooks",
        "* Frontend & Tools: HTML, CSS, Figma, Git, GitHub, Visual Studio",
        "* Digital Marketing & Brand: Strategy, Market Research, Target Audience Analysis,",
        "  Social Media Marketing, Content Strategy, Campaign Planning, SEO, Brand Identity",
        "* Professional: Team Leadership, Collaboration, Presentation, Problem Solving",
        "",
        "EDUCATION",
        "* Technical Diploma in Software Development | EVA International School (Expected 2027)",
        "  - USAID-supported scholarship."
    ]

    # Convert text lines into PDF content stream
    content_stream = "BT\n/F1 18 Tf\n50 780 Td\n(AMIR GIRGIS MOFID) Tj\nET\n"
    content_stream += "BT\n/F1 9 Tf\n50 762 Td\n(Software Development Student | Digital Marketing & AI Automation | Founder, Market Sphere X) Tj\nET\n"
    content_stream += "BT\n/F1 8 Tf\n50 748 Td\n(Giza, Egypt  |  amirgargas28@gmail.com  |  +20 122 364 6440  |  linkedin.com/in/amir-girgis-9392aa340  |  github.com/amir-girgis) Tj\nET\n"
    
    # Horizontal line
    content_stream += "0.5 w\n50 738 m\n550 738 l\nS\n"

    y = 722
    for line in lines[6:]:
        if not line:
            y -= 8
            continue
        is_heading = line in ["SUMMARY", "EXPERIENCE", "PROJECTS", "ACHIEVEMENTS & AWARDS", "VOLUNTEERING", "SKILLS", "EDUCATION"]
        is_subheading = line.startswith("*")
        
        escaped = line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
        if is_heading:
            y -= 6
            content_stream += f"BT\n/F1 11 Tf\n50 {y} Td\n({escaped}) Tj\nET\n"
            y -= 14
        elif is_subheading:
            y -= 3
            content_stream += f"BT\n/F1 9 Tf\n50 {y} Td\n({escaped}) Tj\nET\n"
            y -= 12
        else:
            content_stream += f"BT\n/F1 8 Tf\n60 {y} Td\n({escaped}) Tj\nET\n"
            y -= 11

    stream_bytes = content_stream.encode('latin1')
    stream_len = len(stream_bytes)

    objects = []
    
    # Obj 1: Catalog
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n")
    # Obj 2: Pages
    objects.append("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n")
    # Obj 3: Page
    objects.append("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n")
    # Obj 4: Contents
    objects.append(f"4 0 obj\n<< /Length {stream_len} >>\nstream\n{content_stream}endstream\nendobj\n")
    # Obj 5: Font
    objects.append("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n")

    # Assemble PDF
    pdf_out = "%PDF-1.4\n"
    offsets = []
    for obj in objects:
        offsets.append(len(pdf_out))
        pdf_out += obj

    xref_offset = len(pdf_out)
    pdf_out += f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n"
    for off in offsets:
        pdf_out += f"{off:010d} 00000 n \n"
    pdf_out += f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_offset}\n%%EOF"

    with open(filename, 'wb') as f:
        f.write(pdf_out.encode('latin1'))

create_pdf("Amir_Girgis_CV.pdf")
create_pdf("assets/Amir_Girgis_CV.pdf")
print("PDFs created successfully!")
