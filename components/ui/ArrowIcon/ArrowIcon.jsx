const paths = {
  external: <><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>,
  down: <><path d="M12 5v14" /><path d="m6 13 6 6 6-6" /></>,
  up: <><path d="M12 19V5" /><path d="m6 11 6-6 6 6" /></>,
  left: <><path d="m15 18-6-6 6-6" /></>,
  right: <><path d="m9 18 6-6-6-6" /></>,
};

export default function ArrowIcon({ direction = "external", className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[direction]}
    </svg>
  );
}
