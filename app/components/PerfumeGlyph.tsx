export default function PerfumeGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="50" y="8" width="20" height="14" rx="3" fill="currentColor" opacity="0.9" />
      <rect x="55" y="2" width="10" height="8" rx="2" fill="currentColor" opacity="0.6" />
      <path
        d="M38 30h44l6 14v96a10 10 0 0 1-10 10H42a10 10 0 0 1-10-10V44l6-14Z"
        fill="currentColor"
        opacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M32 66h56" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M38 30h44l6 14H32l6-14Z" fill="currentColor" opacity="0.25" />
    </svg>
  );
}
