// Source of truth: Andell_Jean-Jacques_FDE_Resume.pdf. Every claim here must match it.

export const links = {
  email: "mailto:ajeanjacques42@gmail.com",
  emailText: "ajeanjacques42@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajean144",
  github: "https://github.com/AJean144",
  resume: "/Andell_Jean-Jacques_Resume.pdf",
};

export const process = [
  { step: "Discovery", text: "Sit with the owner or exec. Find the real operational bottleneck, not the stated one." },
  { step: "Scope", text: "Turn it into an engineering problem with edges, risks, and milestones." },
  { step: "Statement of work", text: "Write it down and price it. Change orders are part of the plan, not a fight." },
  { step: "Build", text: "Ship in milestones. Production code, typed, tested, accessible." },
  { step: "Handoff", text: "Docs and training so their team runs it. Then own what breaks." },
];

export const work = [
  {
    figure: "$2,000+",
    figureNote: "average order on the product line",
    title: "3D furniture configurator",
    client: "Rooms to Go · ModularOne",
    body: "Customers build modular layouts, swap fabrics, and rotate the sofa before they buy. I built the rendering pipeline in THREE.js and Next.js: lighting, camera, fabric texture mapping, model loading, and live pricing.",
    constraint: "Stable frame rates on desktop and mobile.",
    tone: "orange",
  },
  {
    figure: "$2M+",
    figureNote: "in contributions through Stripe",
    title: "Campaign management platform",
    client: "Politech · Civic tech",
    body: "React/Redux platform for voter outreach, fundraising, and volunteer coordination.",
    constraint: "Held election-day traffic at ~15x normal load. No downtime.",
    tone: "red",
  },
  {
    figure: "~60%",
    figureNote: "faster application responses",
    title: "Payments and performance",
    client: "Everly Health · Consumer healthcare",
    body: "Led the frontend team. Shipped 15 payment features including Apple Pay and Google Pay, and killed N+1 queries with eager loading and indexing.",
    constraint: "High-traffic healthcare checkout. No room for flaky validation.",
    tone: "sky",
    image: "everly",
  },
  {
    figure: "Azure",
    figureNote: "court case management, end to end",
    title: "Municipal court platform",
    client: "RapidFire · Court services provider",
    body: "Case management with a plate lookup API and a branded pipeline that generates client-facing PDFs.",
    constraint: "Public-sector records. Documents have to be right.",
    tone: "grove",
  },
  {
    figure: "RAG + MCP",
    figureNote: "production AI systems",
    title: "Queryable domain knowledge",
    client: "RapidFire · Professional services & healthcare",
    body: "RAG pipelines on vector databases and LLM APIs, custom MCP servers, and code quality gates for AI-written code.",
    constraint: "Same typing, naming, and a11y bar for human and model-authored code.",
    tone: "sun",
  },
  {
    figure: "~4h → ~1h",
    figureNote: "recurring task time",
    title: "Replacing manual data entry",
    client: "RapidFire · Small-business clients",
    body: "Custom automation for the work nobody should be doing by hand.",
    constraint: "Built for owners, not engineers.",
    tone: "accent",
  },
];

export const manifest = [
  { dates: "Jan 2024 – Now", company: "RapidFire Agency", role: "Founder & Principal Engineer", sector: "Consultancy", note: "Discovery through handoff. Data platforms, court systems, RAG, automation." },
  { dates: "2025 – Now", company: "G2i", role: "Software Engineer (Contract)", sector: "AI", note: "AI projects for a leading frontier lab. Details under NDA." },
  { dates: "Oct 2025 – Apr 2026", company: "Rooms to Go", role: "Senior Software Engineer (Contract)", sector: "Retail", note: "Led the THREE.js + Next.js 3D configurator." },
  { dates: "May 2024 – Apr 2025", company: "TRAILS", role: "Senior Software Engineer", sector: "EdTech", note: "Next.js, Strapi, Postgres for thousands of schools. Onboarding 3 weeks → 2." },
  { dates: "Jan 2021 – Feb 2024", company: "Everly Health", role: "Senior Software Engineer & Team Lead", sector: "Healthcare", note: "Led frontend. 15 payment features. ~60% faster responses." },
  { dates: "Sep 2019 – Jan 2021", company: "Politech", role: "Senior Front-End Engineer", sector: "Civic tech", note: "$2M+ through Stripe. 15x election-day load, no downtime." },
  { dates: "Sep 2017 – Sep 2019", company: "Differential Consulting", role: "Senior Software Engineer", sector: "Consulting", note: "3D visualization tools in React, GraphQL, Rails, THREE.js." },
];

export const skills = [
  { name: "Applied AI", items: ["RAG pipelines", "Chroma", "OpenAI & Anthropic APIs", "Custom MCP servers", "LLM-as-judge evals", "Claude Code, Cursor", "AI code quality gates"] },
  { name: "Backend & Data", items: ["Node.js, Express", "Ruby on Rails", "Python", "C# / .NET Core", "PostgreSQL, MySQL", "Redis, Sidekiq", "REST, GraphQL"] },
  { name: "Frontend", items: ["React", "Next.js App Router", "TypeScript", "THREE.js", "Design systems", "Core Web Vitals", "Accessibility"] },
  { name: "Cloud", items: ["AWS (EC2, S3, Lambda)", "Azure", "Vercel, Render", "Cloudflare Workers", "Docker", "CI/CD"] },
  { name: "Client-facing", items: ["Discovery with execs", "Statements of work", "Scope & change orders", "Technical docs", "Team mentoring"] },
];

export const intro =
  "Andell Jean-Jacques is an Applied AI Engineer in Orlando. He builds full-stack AI systems: RAG pipelines, custom MCP servers, and THREE.js 3D. 12+ years across healthcare, edtech, fintech, civic tech, and retail.";

// 3D models. CC-BY ones must stay credited on the site; Poly Haven (CC0) is credited as thanks.
export const credits = [
  ["Ultra-Wide Monitor", "Dumb Yet Creative", "https://sketchfab.com/3d-models/ultra-wide-monitor-f7445b4b5d84412aa58ed7379483267c"],
  ["Mechanical keyboard", "FelikinRuslan", "https://sketchfab.com/3d-models/mechanical-keyboard-1ba4055c33674567b51b783701ed05ce"],
  ["Podcast Microphone", "thezaynegrogan", "https://sketchfab.com/3d-models/podcast-microphone-5cf2389b7f264931a1833684804e9798"],
  ["Coffee Mug", "Ole Gunnar Isager", "https://sketchfab.com/3d-models/coffee-mug-school-project-5f5ccee1514c440887c072fae8e0d699"],
  ["Prop Globe", "Rosbergen Designs", "https://sketchfab.com/3d-models/prop-globe-acbc64addc98410582d1f631dd9b6d5f"],
  ["Antique Trophy Goblets", "Mad_Lobster_Workshop", "https://sketchfab.com/3d-models/antique-trophy-goblets-07b46238d3d34842af48ad817f38f341"],
  ["Floor Lamp", "bilgehan.korkmaz", "https://sketchfab.com/3d-models/floor-lamp-33eb258d9873435690254cfbb0ea46ec"],
  ["Gears", "Cécile Amstad", "https://sketchfab.com/3d-models/gears-2426c5d9478142789e08f0c0e170dc53"],
  ["Gaming Laptop", "Vivien Deroche", "https://sketchfab.com/3d-models/gaming-laptop-4e72a2078b3c4a75a821ab09830693fe"],
  ["Chair, plant, sofa, books, case, frame, sky, wood", "Poly Haven", "https://polyhaven.com", "CC0"],
];

export const community = [
  { name: "“Each One Teach One”", role: "Founder & Mentor · 2019 – now", text: "A mentorship program for underrepresented engineers entering tech: structured technical training and career guidance in the Orlando community." },
  { name: "The Citrus Club", role: "Speaker & Technology Lead · 2025 – now", text: "Recurring sessions on AI-assisted development and modern architecture for a mostly non-engineering audience. Technical trade-offs, in business terms." },
];

const job = manifest[0];
const piece = (i) => ({ title: work[i].title, figure: work[i].figure, note: work[i].figureNote, client: work[i].client, body: work[i].body, extra: work[i].constraint });

// Everything you can click in the room. pos is the object's centre in metres; Room.jsx builds the object there.
export const hotspots = [
  { id: "about", chip: "About", kicker: "On the wall · Portrait", title: "Andell Jean-Jacques", client: "Applied AI Engineer · Orlando", body: intro, links: [{ label: "LinkedIn", href: links.linkedin }, { label: "Email", href: links.email }], pos: [0.4, 1.55, 0.06], hit: [0.5, 0.6, 0.1], dot: 0.36 },
  { id: "rapidfire", chip: "RapidFire", kicker: "Top shelf · Globe", title: job.company, client: `${job.role} · ${job.dates}`, body: "A solo consultancy. Most useful as the only engineer in the room with a non-technical owner or exec.", extra: job.note, pos: [1.35, 2.31, 0.17] },
  { id: "automation", chip: "Automation", kicker: "Top shelf · Gears", ...piece(5), pos: [1.9, 2.29, 0.17] },
  { id: "ai", chip: "RAG + MCP", kicker: "Top shelf · The glowing one", ...piece(4), pos: [2.45, 2.27, 0.17] },
  { id: "configurator", chip: "3D configurator", kicker: "Top shelf · A very small sofa", ...piece(0), pos: [3.0, 2.24, 0.17], hit: [0.4, 0.2, 0.25], dot: 0.17 },
  { id: "courts", chip: "Courts", kicker: "Low shelf · Law books", ...piece(3), pos: [1.75, 1.74, 0.17] },
  { id: "campaigns", chip: "Campaigns", kicker: "Low shelf · Trophies", ...piece(1), pos: [2.2, 1.68, 0.17], dot: 0.12 },
  { id: "payments", chip: "Payments", kicker: "Low shelf · Health kit", ...piece(2), pos: [2.65, 1.7, 0.17], dot: 0.14 },
  { id: "resume", chip: "Résumé", kicker: "On the desk · Notepad", title: "Résumé", body: "The full history, as a PDF.", links: [{ label: "Download résumé", href: links.resume, download: true }], pos: [1.75, 0.82, 0.78], hit: [0.25, 0.08, 0.28], dot: 0.1 },
  { id: "github", chip: "GitHub", kicker: "On the desk · Laptop", title: "GitHub", body: "The code lives here.", links: [{ label: "github.com/AJean144", href: links.github }], pos: [3.0, 0.92, 0.62], hit: [0.4, 0.3, 0.3] },
  { id: "computer", chip: "Computer", pos: [2.2, 1.18, 0.44], hit: [1.3, 0.44, 0.06], dot: 0.34 },
];
