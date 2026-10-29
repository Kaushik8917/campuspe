import Link from "next/link";
import { Icon } from "./Icons";

/**
 * Reusable CTA. Pass `href` for navigation (internal, hash or external) or `onClick` for actions.
 * variant: primary | outline | ghost | white      size: default | lg | sm | xs | chip
 */
export default function Button({ href, onClick, variant = "primary", size, pill, block, icon, iconPosition = "end", circle, className = "", children, type = "button", ...rest }) {
  const cls = ["btn", `btn--${variant}`, size && `btn--${size}`, pill && "btn--pill", block && "btn--block", circle && "btn--circ", className].filter(Boolean).join(" ");
  const iconEl = icon ? <Icon name={icon} size={16} className={icon === "arrow" ? "arrow" : undefined} /> : null;
  const content = (
    <>
      {iconPosition === "start" && iconEl}
      <span>{children}</span>
      {iconPosition === "end" && iconEl}
      {circle && <span className="btn-circle"><Icon name={circle} size={16} /></span>}
    </>
  );
  if (href) {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a href={href} onClick={onClick} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{content}</a>
    ) : (
      <Link href={href} onClick={onClick} className={cls} {...rest}>{content}</Link>
    );
  }
  return <button type={type} onClick={onClick} className={cls} {...rest}>{content}</button>;
}
