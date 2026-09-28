import { Component, Suspense, lazy } from "react";
import portrait from "../assets/andell.jpg";
import { links, varieties } from "../content";
import Icon from "./Icon";

const Fruit = lazy(() => import("./Fruit"));

// No WebGL (old devices, locked-down browsers)? Show the flat fruit, never a blank page.
class FruitBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Medallion() {
  return (
    <figure className="medallion">
      <svg viewBox="0 0 200 240" aria-hidden="true">
        <defs>
          <path id="ring" d="M100,20 a80,100 0 1,1 -0.1,0" />
        </defs>
        <ellipse cx="100" cy="120" rx="96" ry="116" className="medallion-rim" />
        <ellipse cx="100" cy="120" rx="66" ry="86" className="medallion-inner" />
        <text className="medallion-text">
          <textPath href="#ring" startOffset="2%">GROWER · ANDELL JEAN-JACQUES · ORLANDO, FLA ·</textPath>
        </text>
      </svg>
      <img src={portrait} alt="Andell Jean-Jacques, smiling, in glasses and a mustard jacket" width="200" height="200" />
    </figure>
  );
}

export default function Hero({ variety, setVariety }) {
  const current = varieties.find((v) => v.id === variety);
  const flat = <div className="fruit-fallback" style={{ "--peel": current.peel }} aria-hidden="true" />;
  return (
    <header className="hero" id="top">
      <div className="sunburst" aria-hidden="true" />
      <nav className="nav" aria-label="Main">
        <a href="#top" className="nav-mark">AJJ <span>Brand</span></a>
        <ul>
          <li><a href="#work">Work</a></li>
          <li><a href="#manifest">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href={links.resume} className="nav-tab" download>Resume <Icon name="download" /></a></li>
        </ul>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <h1 className="brand">
            <span className="brand-script">Andell</span>
            <span className="brand-slab">Jean-Jacques</span>
          </h1>
          <p className="ribbon"><span>Applied AI Engineer</span></p>
          <p className="hero-lede">
            Full-stack AI systems. I start with your business problem and end with a deployed system, then I own what breaks after launch.
          </p>
          <p className="hero-fine">12+ years · Healthcare, edtech, fintech, civic&nbsp;tech, retail · Orlando, Fla.</p>
          <div className="hero-actions">
            <a className="btn btn-sun" href={links.resume} download><Icon name="download" /> Download resume</a>
            <a className="btn btn-line" href={links.email}><Icon name="mail" /> Email me</a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="stage-art">
            <div className="sun" aria-hidden="true" />
            <FruitBoundary fallback={flat}>
              <Suspense fallback={flat}>
                <Fruit peel={current.peel} />
              </Suspense>
            </FruitBoundary>
            <Medallion />
          </div>
          <fieldset className="varieties">
            <legend>Pick a variety</legend>
            <p className="varieties-note">Drag to turn it. Same live material swap I built for Rooms to Go.</p>
            {varieties.map((v) => (
              <label key={v.id} className="variety">
                <input type="radio" name="variety" value={v.id} checked={variety === v.id} onChange={() => setVariety(v.id)} />
                <span className="swatch" style={{ background: v.peel }} />
                {v.name}
              </label>
            ))}
          </fieldset>
        </div>
      </div>
    </header>
  );
}
