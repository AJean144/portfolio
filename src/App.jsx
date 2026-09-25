import { useEffect, useState } from "react";
import { Community, Process, Skills } from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Manifest from "./components/Manifest";
import Work from "./components/Work";
import { varieties } from "./content";

export default function App() {
  const [variety, setVariety] = useState(varieties[0].id);

  // The chosen variety tints the whole page, not just the fruit.
  useEffect(() => {
    const v = varieties.find((x) => x.id === variety);
    document.documentElement.style.setProperty("--accent", v.accent);
    document.documentElement.style.setProperty("--accent-ink", v.onDark);
  }, [variety]);

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Hero variety={variety} setVariety={setVariety} />
      <main>
        <Process />
        <Work />
        <Manifest />
        <Skills />
        <Community />
      </main>
      <Contact />
    </>
  );
}
