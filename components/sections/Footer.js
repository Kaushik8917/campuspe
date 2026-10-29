import Link from "next/link";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { Icon, Social } from "@/components/ui/Icons";
import { FOOTER_COLS } from "@/lib/data";

const SOCIALS = [["linkedin", "LinkedIn", "https://www.linkedin.com"], ["instagram", "Instagram", "https://www.instagram.com"], ["twitter", "X (Twitter)", "https://x.com"], ["facebook", "Facebook", "https://www.facebook.com"], ["whatsapp", "WhatsApp", "https://wa.me/916362606464"], ["youtube", "YouTube", "https://www.youtube.com"]];

export default function Footer() {
  return (
    <footer className="foot section">
      <div className="foot__glow" aria-hidden="true" />
      <div className="container">
        <div className="banner">
          <div className="banner__copy"><h2>Ready for what’s next?</h2><p>Discover colleges, find opportunities, list your institution, or start hiring with CampusPe.</p></div>
          <div className="banner__cta">
            <Button href="/explore-colleges" size="xs" icon="arrow">Explore Colleges</Button>
            <Button href="/find-opportunities" size="xs" icon="arrow">Find Opportunities</Button>
            <Button href="/list-your-college" size="xs" variant="white" icon="arrow">List Your College</Button>
            <Button href="/post-a-job" size="xs" variant="white" icon="arrow">Post a Job</Button>
          </div>
        </div>

        <div className="foot__grid">
          <div className="foot__brand">
            <Logo tagline size={44} />
            <p className="foot__p1">From choosing a college to finding your next opportunity.</p>
            <p className="foot__p2">CampusPe connects students, colleges and employers in one place.</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} className="foot__col" aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>{col.links.map(([l, h]) => <li key={l}><Link href={h}>{l}</Link></li>)}</ul>
              {col.title === "Legal & Policies" && <Link href="/policies" className="foot__all">View all policies <Icon name="arrow" size={12} /></Link>}
            </nav>
          ))}
          <p className="foot__note">Separate user, institution and employer terms can live inside the full Policies page.</p>
        </div>

        <div className="foot__contact">
          <div className="foot__contact-l">
            <a href="mailto:contactus@campuspe.com"><span className="ic"><Icon name="mail" size={14} /></span>contactus@campuspe.com</a>
            <a href="tel:+916362606464"><span className="ic"><Icon name="phone" size={14} /></span>+91 6362606464</a>
          </div>
          <span className="foot__aud"><span className="dot dot--green" />Students · Colleges · Employers</span>
        </div>

        <div className="foot__legal">
          <p>© 2026 CampusPe Technologies Pvt. Ltd. <Link href="/privacy-policy">Privacy</Link> · <Link href="/terms-and-conditions">Terms</Link> · <Link href="/grievance-redressal">Grievance</Link></p>
          <div className="foot__social">{SOCIALS.map(([k, l, h]) => <a key={k} href={h} target="_blank" rel="noopener noreferrer" aria-label={l}><Social name={k} /></a>)}</div>
        </div>
      </div>
    </footer>
  );
}
