import { links } from "../content";
import Icon from "./Icon";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-label">
        <h2>Let’s talk</h2>
        <div className="paths">
          <div>
            <h3>Hiring?</h3>
            <p>I’m looking at Forward Deployed Engineer roles. The resume has the full detail.</p>
            <a className="btn btn-sun" href={links.resume} download><Icon name="download" /> Download resume</a>
          </div>
          <div>
            <h3>Have a problem to fix?</h3>
            <p>Tell me what’s slowing your team down. RapidFire takes it from discovery to handoff.</p>
            <a className="btn btn-line" href={`${links.email}?subject=Project%20inquiry`}><Icon name="mail" /> Start a project</a>
          </div>
        </div>
        <ul className="contact-links">
          <li><a href={links.email}><Icon name="mail" /> {links.emailText}</a></li>
          <li><a href={links.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a></li>
          <li><a href={links.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a></li>
        </ul>
      </div>
      <p className="fine">Packed in Orlando, Fla. © {new Date().getFullYear()} Andell Jean-Jacques</p>
    </footer>
  );
}
