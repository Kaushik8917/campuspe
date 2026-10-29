export default function Eyebrow({ children, className = "" }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="eyebrow__dot" aria-hidden="true" />
      {children}
    </span>
  );
}
