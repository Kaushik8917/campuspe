"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar({ solid = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`nav ${scrolled || solid ? "nav--solid" : ""}`}>
      <div className="nav__bar">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => <Link key={l.label} href={l.href} className="nav__link">{l.label}</Link>)}
        </nav>
        <div className="nav__actions">
          <Button href="/login" variant="ghost" size="sm" className="nav__login">Login</Button>
          <Button href="/signup" size="sm" pill>Sign Up</Button>
        </div>
        <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      <div id="mobile-menu" className={`nav__drawer ${open ? "is-open" : ""}`} hidden={!open}>
        {NAV_LINKS.map((l) => <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <div className="nav__drawer-cta">
          <Button href="/login" variant="outline" block onClick={() => setOpen(false)}>Login</Button>
          <Button href="/signup" block onClick={() => setOpen(false)}>Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
