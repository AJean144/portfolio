// Source of truth: Andell_Jean-Jacques_FDE_Resume.pdf. Every claim here must match it.

export const links = {
  email: "mailto:ajeanjacques42@gmail.com",
  emailText: "ajeanjacques42@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajean144",
  github: "https://github.com/AJean144",
  resume: "/Andell_Jean-Jacques_Resume.pdf",
};

export const varieties = [
  { id: "valencia", name: "Valencia", peel: "#f28c28", accent: "#f28c28", onDark: "#f7a650" },
  { id: "honeybell", name: "Honeybell", peel: "#e2531f", accent: "#ef6a36", onDark: "#f79a6a" },
  { id: "ruby", name: "Ruby Red", peel: "#f09a6e", accent: "#f4a07a", onDark: "#f8b596" },
  { id: "lime", name: "Key Lime", peel: "#8cbf3f", accent: "#a9d05a", onDark: "#a9d05a" },
];

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
