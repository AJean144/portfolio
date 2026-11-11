import { useEffect, useState } from "react";
import Room from "./Room";
import StudioOS from "./StudioOS";
import { hotspots } from "./content";

export default function App() {
  const [focus, setFocus] = useState(null);
  const [inOS, setInOS] = useState(false);
  const [hover, setHover] = useState(null);
  const spot = hotspots.find((h) => h.id === focus);

  const pick = (id) => {
    setInOS(id === "computer");
    setFocus(id === "computer" ? null : id);
  };

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && pick(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="stage"
      style={{ cursor: hover ? "pointer" : undefined }}
      onPointerMove={(e) => {
        e.currentTarget.style.setProperty("--mx", `${e.clientX}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY}px`);
      }}
    >
      <Room focus={focus} inOS={inOS} onPick={pick} onHover={setHover} />

      {!inOS && (
        <>
          <header className="hud">
            <h1>Andell Jean-Jacques</h1>
            <p>Applied AI Engineer. Look around the room, then go into the computer.</p>
            <nav aria-label="Things in the room">
              {hotspots.map((h) => (
                <button key={h.id} aria-pressed={h.id === focus} onClick={() => pick(h.id === focus ? null : h.id)}>{h.chip}</button>
              ))}
            </nav>
          </header>

          {hover && <div className="tip" aria-hidden="true">{hotspots.find((h) => h.id === hover).chip}</div>}

          {spot ? (
            <aside className="card" aria-live="polite">
              <button className="card-close" aria-label="Close" onClick={() => pick(null)}>×</button>
              <small>{spot.kicker}</small>
              <h2>{spot.title}</h2>
              {spot.client && <p className="card-client">{spot.client}</p>}
              {spot.figure && <p className="card-figure"><strong>{spot.figure}</strong> {spot.note}</p>}
              <p>{spot.body}</p>
              {spot.extra && <p className="card-extra">{spot.extra}</p>}
              {spot.links?.map((l) => (
                <a key={l.href} className="pill" href={l.href} download={l.download} {...(l.download || l.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noreferrer" })}>{l.label}</a>
              ))}
            </aside>
          ) : (
            <button className="pill enter" onClick={() => pick("computer")}>Go into the computer</button>
          )}
        </>
      )}

      {inOS && <StudioOS onExit={() => pick(null)} />}
    </div>
  );
}
