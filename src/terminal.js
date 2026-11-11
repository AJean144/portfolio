import { intro, links, manifest, skills, work } from "./content";

export const apps = ["notes", "terminal", "brickout"];

export const files = {
  "about.txt": `${intro}\n\nWant this for your business? ${links.emailText}`,
  "links.txt": `Email     ${links.emailText}\nLinkedIn  ${links.linkedin}\nGitHub    ${links.github}\nResume    ${links.resume}`,
  "work.txt": work.map((w) => `${w.figure.padEnd(12)}${w.title} (${w.client})`).join("\n"),
  "experience.txt": manifest.map((m) => `${m.dates.padEnd(22)}${m.company}, ${m.role}`).join("\n"),
  "skills.txt": skills.map((s) => `${s.name}: ${s.items.join(", ")}`).join("\n"),
};

const names = ["help", "ls", "cat", "whoami", "pwd", "date", "echo", "neofetch", "work", "open", "history", "clear", "exit"];

const neofetch = `   .-------.     guest@studio
  /  .---.  \\    ------------
 |  |  o  |  |   OS      Studio OS
 |  |     |  |   Host    a wide monitor
  \\  '---'  /    Shell   ash
   '-------'     Uptime  since dusk
                 Role    Applied AI Engineer
                 Base    Orlando`;

// Returns { out?, open?, clear?, exit? } so the UI stays dumb.
export function run(line, history = []) {
  const [cmd, ...args] = line.trim().split(/\s+/);
  const arg = args.join(" ");
  switch (cmd) {
    case "": return {};
    case "help": return { out: `Commands: ${names.join(" ")}\nTry: neofetch, cat about.txt, open brickout, sudo make coffee` };
    case "ls": return { out: Object.keys(files).join("   ") };
    case "cat": return { out: files[arg] ?? `cat: ${arg || "which file?"}: No such file` };
    case "whoami": return { out: "guest" };
    case "pwd": return { out: "/home/andell" };
    case "date": return { out: new Date().toString() };
    case "echo": return { out: arg };
    case "neofetch": return { out: neofetch };
    case "work": return { out: files["work.txt"] };
    case "history": return { out: history.join("\n") };
    case "open": return apps.includes(arg) ? { out: `Opening ${arg}.`, open: arg } : { out: `open: pick one of ${apps.join(", ")}` };
    case "clear": return { clear: true };
    case "exit": return { exit: true };
    case "sudo": return { out: arg === "make coffee" ? "Brewing. Ready when the build is." : "guest is not in the sudoers file." };
    default: return { out: `${cmd}: command not found. Type help.` };
  }
}

// Tab completion: commands for the first word, files after cat, apps after open.
export function complete(line) {
  const parts = line.split(" ");
  const pool = parts.length === 1 ? names : parts[0] === "cat" ? Object.keys(files) : parts[0] === "open" ? apps : [];
  const hits = pool.filter((p) => p.startsWith(parts.at(-1)));
  return hits.length === 1 ? [...parts.slice(0, -1), hits[0]].join(" ") : line;
}
