import everly from "../assets/everly.webp";
import { work } from "../content";

const images = { everly: { src: everly, alt: "Everlywell homepage, the consumer health platform Andell led frontend on" } };

export default function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <h2 id="work-title">Shipped, with receipts</h2>
        <p>Every number here is on my resume. Every one was measured in production.</p>
      </div>
      <div className="crates">
        {work.map((w) => (
          <article key={w.title} className={`crate tone-${w.tone}`}>
            <div className="crate-inner">
              <p className="crate-figure">
                {w.figure}
                <small>{w.figureNote}</small>
              </p>
              <div className="crate-build">
                <h3>{w.title}</h3>
                <p className="crate-client">{w.client}</p>
                <p className="crate-body">{w.body}</p>
              </div>
              <div className="crate-side">
                {w.image && (
                  <img className="crate-shot" src={images[w.image].src} alt={images[w.image].alt} loading="lazy" width="1200" height="948" />
                )}
                <p className="crate-constraint">{w.constraint}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
