import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

export default function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <NavBar />
        <Hero />

        <Resume />
        {/* <Portfolio /> */}
        {/* <Contact /> */}
      </div>
    </Router>
  );
}
