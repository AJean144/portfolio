import { useEffect, useRef, useState } from "react";
import { community, credits, intro, links, manifest, process, skills, work } from "./content";
import { complete, run } from "./terminal";

const APPS = {
  notes: { title: "Notes", x: 40, y: 290, w: 480, h: 360 },
  brickout: { title: "Brick out", x: 440, y: 250, w: 420, h: 400 },
  terminal: { title: "Terminal", x: 620, y: 310, w: 560, h: 340 },
};

function Win({ id, z, onFocus, onClose, children }) {
  const a = APPS[id];
  const [p, setP] = useState(() => ({ x: Math.max(8, Math.min(a.x, window.innerWidth - a.w - 8)), y: Math.min(a.y, Math.max(48, window.innerHeight - a.h - 70)) }));
  const drag = (e) => {
    if (e.target.closest("button")) return;
    const el = e.currentTarget;
    const dx = e.clientX - p.x;
    const dy = e.clientY - p.y;
    const move = (ev) => setP({ x: ev.clientX - dx, y: Math.max(44, ev.clientY - dy) });
    el.setPointerCapture(e.pointerId);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", () => el.removeEventListener("pointermove", move), { once: true });
  };
  return (
    <section className={`win win-${id}`} aria-label={a.title} style={{ left: p.x, top: p.y, width: a.w, height: a.h, zIndex: z }} onPointerDown={onFocus}>
      <header onPointerDown={drag}>
        <button className="win-close" aria-label={`Close ${a.title}`} onClick={onClose} />
        <h2>{a.title}</h2>
      </header>
      <div className="win-body">{children}</div>
    </section>
  );
}

const pages = {
  About: (
    <>
      <p className="lede">{intro}</p>
      <dl>
        <dt>Email</dt><dd><a href={links.email}>{links.emailText}</a></dd>
        <dt>LinkedIn</dt><dd><a href={links.linkedin}>linkedin.com/in/ajean144</a></dd>
        <dt>GitHub</dt><dd><a href={links.github}>github.com/AJean144</a></dd>
        <dt>Résumé</dt><dd><a href={links.resume} download>Download the PDF</a></dd>
      </dl>
    </>
  ),
  Work: <dl>{work.map((w) => <div key={w.title}><dt>{w.figure}</dt><dd><b>{w.title}</b> · {w.client}<br />{w.body}</dd></div>)}</dl>,
  Experience: <dl>{manifest.map((m) => <div key={m.company}><dt>{m.dates}</dt><dd><b>{m.company}</b> · {m.role}<br />{m.note}</dd></div>)}</dl>,
  Skills: <dl>{skills.map((s) => <div key={s.name}><dt>{s.name}</dt><dd>{s.items.join(", ")}</dd></div>)}</dl>,
  "How I work": <dl>{process.map((p) => <div key={p.step}><dt>{p.step}</dt><dd>{p.text}</dd></div>)}</dl>,
  Community: <dl>{community.map((c) => <div key={c.name}><dt>{c.name}</dt><dd><b>{c.role}</b><br />{c.text}</dd></div>)}</dl>,
  Credits: <dl>{credits.map(([what, who, href, license = "CC BY 4.0"]) => <div key={href}><dt>{who}</dt><dd><a href={href} target="_blank" rel="noreferrer">{what}</a> · {license}</dd></div>)}</dl>,
};

function Notes() {
  const [page, setPage] = useState("About");
  return (
    <div className="notes">
      <nav aria-label="Notes">
        {Object.keys(pages).map((p) => <button key={p} aria-current={p === page} onClick={() => setPage(p)}>{p}</button>)}
      </nav>
      <article>
        <h3>{page}</h3>
        {pages[page]}
      </article>
    </div>
  );
}

function Terminal({ onOpen, onExit }) {
  const [lines, setLines] = useState(() => ["Studio OS terminal. Type help, or try cat about.txt. Tab completes.", "guest@studio ~ $ neofetch", run("neofetch").out]);
  const [value, setValue] = useState("");
  const history = useRef([]);
  const at = useRef(0);
  const end = useRef(null);
  useEffect(() => { end.current.scrollIntoView({ block: "nearest" }); }, [lines]);

  const onKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setValue(complete(value));
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      at.current = Math.max(0, Math.min(history.current.length, at.current + (e.key === "ArrowUp" ? -1 : 1)));
      setValue(history.current[at.current] ?? "");
    } else if (e.key === "Enter") {
      if (value.trim()) history.current.push(value);
      at.current = history.current.length;
      const r = run(value, history.current);
      setLines((l) => (r.clear ? [] : [...l, `guest@studio ~ $ ${value}`, ...(r.out ? [r.out] : [])]));
      setValue("");
      if (r.open) onOpen(r.open);
      if (r.exit) onExit();
    }
  };

  return (
    <label className="term">
      <pre aria-live="polite">{lines.join("\n")}</pre>
      <span className="prompt">
        guest@studio ~ $
        <input aria-label="Terminal input" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown} autoFocus={window.matchMedia("(pointer: fine)").matches} autoCapitalize="off" autoCorrect="off" spellCheck={false} />
      </span>
      <span ref={end} />
    </label>
  );
}

function Brickout() {
  const ref = useRef(null);
  const [hud, setHud] = useState({ score: 0, lives: 3 });
  useEffect(() => {
    const c = ref.current;
    const g = c.getContext("2d");
    const W = c.width, H = c.height, cols = 9, rows = 5, bw = W / cols, bh = 18, top = 24;
    const colors = ["#d9604c", "#e0a04c", "#cfd060", "#9fc060", "#6f9a4c"];
    let bricks, px = W / 2, x, y, vx, vy, score, lives, raf;
    const serve = () => { x = W / 2; y = H - 50; vx = Math.random() < 0.5 ? -2.2 : 2.2; vy = -3.2; };
    const reset = () => { bricks = Array(rows * cols).fill(true); score = 0; lives = 3; serve(); };
    const move = (e) => { const r = c.getBoundingClientRect(); px = ((e.clientX - r.left) / r.width) * W; };
    const key = (e) => { if (e.key === "ArrowLeft") px -= 28; if (e.key === "ArrowRight") px += 28; };
    const tick = () => {
      x += vx; y += vy;
      if (x < 5 || x > W - 5) vx = -vx;
      if (y < 5) vy = -vy;
      if (vy > 0 && y > H - 24 && y < H - 12 && Math.abs(x - px) < 36) { vy = -vy; vx = (x - px) / 8; }
      if (y > H) { if (--lives) serve(); else reset(); }
      const row = Math.floor((y - top) / bh), i = row * cols + Math.floor(x / bw);
      if (row >= 0 && row < rows && bricks[i]) {
        bricks[i] = false; vy = -vy; score += 10;
        if (!bricks.some(Boolean)) bricks.fill(true);
      }
      setHud((h) => (h.score === score && h.lives === lives ? h : { score, lives }));
      g.clearRect(0, 0, W, H);
      bricks.forEach((on, n) => {
        if (!on) return;
        g.fillStyle = colors[Math.floor(n / cols)];
        g.fillRect((n % cols) * bw + 2, top + Math.floor(n / cols) * bh + 2, bw - 4, bh - 6);
      });
      g.fillStyle = "#f2ede4";
      g.fillRect(px - 32, H - 18, 64, 6);
      g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill();
      raf = requestAnimationFrame(tick);
    };
    reset();
    tick();
    c.addEventListener("pointermove", move);
    window.addEventListener("keydown", key);
    return () => { cancelAnimationFrame(raf); c.removeEventListener("pointermove", move); window.removeEventListener("keydown", key); };
  }, []);
  return (
    <div className="brick">
      <canvas ref={ref} width="400" height="300" aria-label="Brick out. Move the pointer or use the arrow keys." />
      <footer><span>Score {hud.score}</span><span>Level 1</span><span>Lives {hud.lives}</span></footer>
    </div>
  );
}

export default function StudioOS({ onExit }) {
  // Open windows in stacking order; the last one is on top.
  const [open, setOpen] = useState(["notes", "terminal"]);
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(t);
  }, []);
  const show = (id) => setOpen((o) => (o.at(-1) === id ? o : [...o.filter((x) => x !== id), id]));
  const close = (id) => setOpen((o) => o.filter((x) => x !== id));
  const hour = now.getHours();
  const body = { notes: <Notes />, terminal: <Terminal onOpen={show} onExit={onExit} />, brickout: <Brickout /> };

  return (
    <div className="os" role="region" aria-label="Studio OS">
      <svg className="os-hills" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 120V70C150 20 300 90 450 60S750 10 900 50s200 30 300 0v70z" fill="#4b3a86" />
        <path d="M0 120V95c200-40 350 10 550-15s400 20 650-10v50z" fill="#2c2260" />
      </svg>
      <div className="os-bar">
        <span className="os-name"><i />Studio OS</span>
        <span className="os-app">{open.length ? APPS[open.at(-1)].title : "Desktop"}</span>
        <time>{now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}</time>
        <button onClick={onExit}>Back to the studio <kbd>Esc</kbd></button>
      </div>
      <div className="os-clock">
        <strong>{now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M/i, "")}</strong>
        <span>Good {hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"}. {now.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })}</span>
      </div>
      {Object.keys(APPS).filter((id) => open.includes(id)).map((id) => (
        <Win key={id} id={id} z={10 + open.indexOf(id)} onFocus={() => show(id)} onClose={() => close(id)}>{body[id]}</Win>
      ))}
      <nav className="os-dock" aria-label="Apps">
        {Object.keys(APPS).map((id) => <button key={id} aria-pressed={open.includes(id)} onClick={() => show(id)}>{APPS[id].title}</button>)}
      </nav>
    </div>
  );
}
