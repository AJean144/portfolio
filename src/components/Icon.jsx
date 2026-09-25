const paths = {
  download: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  arrow: "M5 12h14m0 0-5-5m5 5-5 5",
  linkedin: "M6.5 10v8M6.5 6.5v.01M10.5 18v-8m0 3.5c0-2 1.2-3.5 3-3.5s3 1.2 3 3.5V18",
  github: "M9 19c-4 1.3-4-2-5.5-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.8 2.8 5.8 3.1 5.8 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
};

export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
