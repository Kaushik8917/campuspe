import Link from "next/link";
import { Icon } from "./Icons";

/**
 * Wordmark placeholder. To use the exported Figma logo, put it at /public/assets/logo.png
 * and replace the inner markup with <Image src="/assets/logo.png" ... />.
 */
export default function Logo({ tagline = false, size = 34 }) {
  return (
    <Link href="/" className="logo" aria-label="CampusPe home">
      <span className="logo__mark" style={{ fontSize: size }}>
        <Icon name="cap" size={Math.round(size * 0.5)} strokeWidth={2.4} className="logo__cap" />
        <span>CampusPe</span>
      </span>
      {tagline && <span className="logo__tag">Connecting Students, Institutions &amp; Companies</span>}
    </Link>
  );
}
