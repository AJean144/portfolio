# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers and technical recruiters at AI companies and frontier labs evaluating Andell for Forward Deployed Engineer roles. They arrive from a resume, LinkedIn, or referral link, usually on a laptop between other candidates, and decide in under a minute whether to read further.

Secondary: owners and executives considering RapidFire Agency for a consulting engagement. They are often non-technical and want to know "can this person fix my operational problem and own it after launch."

## Product Purpose

A personal site at andelljean.me that makes Andell's resume legible and credible fast: who he is, what he has shipped, and how to reach him. Success is a recruiter reaching out or downloading the resume, and a prospective client starting a conversation.

## Positioning

A full-stack engineer with 12+ years who starts with the client's business problem and ends with a deployed system: discovery, scoping, SOW, delivery, handoff. Comfortable as the only engineer in the room with a non-technical owner, and owns what breaks after launch. Builds production AI systems (RAG, custom MCP servers, agentic workflows) and ships real 3D (THREE.js configurators).

## Operating Context

Visitors cross-reference the site with the PDF resume and LinkedIn. The site must agree with the resume exactly: titles, dates, and numbers.

## Capabilities and Constraints

- Stack: Vite, React 18, one hand-written stylesheet (src/index.css), three.js via @react-three/fiber (lazy-loaded), self-hosted @fontsource fonts. Single page.
- 3D: a custom, lightweight scene built in code. The old 15MB desktop-PC GLTF is retired.
- Contact is a mailto and links. No backend.
- Several engagements are under NDA (G2i frontier-lab work, a RapidFire data platform client). Never name those clients or invent details.

## Brand Commitments

- Visual feel the user chose: warm and human. Leans into mentorship, community, and client-facing work while staying credible for hiring.
- Voice: plain, direct, specific. Numbers over adjectives. No hype.

## Evidence on Hand

Source of truth: `~/Downloads/Andell_Jean-Jacques_FDE_Resume.pdf` (Aug 2026).

- Contact: Orlando, FL · (407) 765-5182 · ajeanjacques42@gmail.com · linkedin.com/in/ajean144 · github.com/AJean144 · andelljean.me
- Roles: RapidFire Agency (Founder & Principal Engineer, Jan 2024–Present), G2i (Contract, 2025–Present), Rooms to Go (Senior SWE Contract, Oct 2025–Apr 2026), TRAILS (Senior SWE, May 2024–Apr 2025), Everly Health (Senior SWE & Team Lead, Jan 2021–Feb 2024), Politech (Senior Front-End, Sep 2019–Jan 2021), Differential Consulting (Senior SWE, Sep 2017–Sep 2019).
- Hard numbers: $2M+ Stripe contributions (Politech), 15x election-day load with no downtime, ~60% faster response times (Everly), 15 payment features incl. Apple Pay / Google Pay, $2,000+ average order on the configurator line, 4 hours → ~1 hour task time, onboarding 3 weeks → 2, dev cycle time roughly halved.
- Community: "Each One Teach One" mentorship (2019–Present), Speaker & Technology Lead at The Citrus Club Technology Focus Group (Jan 2025–Present).
- Education: Software Engineering Certificate, The Iron Yard, 2015.
- Assets: headshot `src/assets/andell.jpg` (200x200 from LinkedIn; full-res wanted), Everly Health site screenshot `src/assets/everly.webp`, resume PDF shipped at `public/Andell_Jean-Jacques_Resume.pdf`.
- Absent: no testimonials, no full-res headshot, no screenshots of Rooms to Go, TRAILS, or the court platform. Do not fabricate any.

## Product Principles

1. Resume parity: every claim on the site appears on the resume.
2. Proof before adjectives: lead with shipped outcomes and numbers.
3. Hiring first, clients second: the recruiter path is the default; the client path is one clear step away.
4. Fast and accessible on a phone: the 3D is a garnish, never a gate.
