import { process, skills } from "../content";

export function Process() {
  return (
    <section className="process" aria-labelledby="process-title">
      <div className="process-intro">
        <h2 id="process-title">From the business problem to the deployed system</h2>
        <p>
          I run a solo consultancy, RapidFire Agency, and I’m most useful as the only engineer in the room with a non-technical owner or exec. I build production AI: RAG pipelines, custom MCP servers, and agentic workflows. I also contract through G2i on AI projects for a leading frontier lab.
        </p>
      </div>
      <ol className="steps">
        {process.map((p) => (
          <li key={p.step}>
            <h3>{p.step}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Skills() {
  return (
    <section className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">What’s in the crate</h2>
      <div className="skill-cols">
        {skills.map((s) => (
          <div key={s.name} className="skill-col">
            <h3>{s.name}</h3>
            <ul>
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Community() {
  return (
    <section className="community" aria-labelledby="community-title">
      <h2 id="community-title">Each one, teach one</h2>
      <div className="community-grid">
        <div>
          <h3>“Each One Teach One” <span>Founder & Mentor · 2019 – now</span></h3>
          <p>A mentorship program for underrepresented engineers entering tech: structured technical training and career guidance in the Orlando community.</p>
        </div>
        <div>
          <h3>The Citrus Club <span>Speaker & Technology Lead · 2025 – now</span></h3>
          <p>Recurring sessions on AI-assisted development and modern architecture for a mostly non-engineering audience. Technical trade-offs, in business terms.</p>
        </div>
      </div>
    </section>
  );
}
