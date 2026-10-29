import { Icon } from "./Icons";
export default function Chip({ tone = "gray", icon, dot, small, children, className = "" }) {
  return (
    <span className={`chip chip--${tone} ${small ? "chip--sm" : ""} ${className}`}>
      {dot && <span className={`dot dot--${dot}`} aria-hidden="true" />}
      {icon && <Icon name={icon} size={13} />}
      {children}
    </span>
  );
}
