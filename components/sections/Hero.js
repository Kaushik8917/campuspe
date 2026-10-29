"use client";
import { useRef } from "react";
import Button from "@/components/ui/Button";
import { Icon, Sparkle, WhatsApp } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { useWaitlist } from "@/components/WaitlistProvider";
import { ROLE_CARDS } from "@/lib/data";

function CardArt({ kind }) {
  if (kind === "campus")
    return (
      <svg className="rcard__art rcard__art--campus" viewBox="0 0 290 176" aria-hidden="true">
        <g fill="#ffd7a8"><path d="M20 175V70L145 40l125 30v105z" /><rect x="125" y="88" width="12" height="87" /><rect x="153" y="88" width="12" height="87" /></g>
        <g fill="#ffe9cf"><rect x="48" y="98" width="19" height="29" /><rect x="87" y="98" width="19" height="29" /><rect x="184" y="98" width="19" height="29" /><rect x="223" y="98" width="19" height="29" /><rect x="137" y="56" width="16" height="16" /></g>
      </svg>
    );
  if (kind === "resume")
    return (
      <svg className="rcard__art rcard__art--resume" viewBox="0 0 120 150" aria-hidden="true">
        <rect x="6" y="4" width="96" height="124" rx="8" fill="#fff" stroke="#c4b5fd" strokeWidth="2" />
        <rect x="20" y="22" width="30" height="7" rx="3" fill="#fdba74" /><rect x="20" y="38" width="62" height="5" rx="2.5" fill="#86b79a" /><rect x="20" y="49" width="62" height="5" rx="2.5" fill="#86b79a" />
        <rect x="20" y="60" width="48" height="5" rx="2.5" fill="#86b79a" /><rect x="20" y="78" width="30" height="7" rx="3" fill="#c4b5fd" /><rect x="20" y="94" width="62" height="5" rx="2.5" fill="#86b79a" />
        <circle cx="84" cy="100" r="18" fill="#fff" stroke="#a78bfa" strokeWidth="3" /><circle cx="84" cy="100" r="11" fill="#d9f6ef" /><path d="m97 113 14 14" stroke="#a78bfa" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  return (
    <svg className="rcard__art rcard__art--towers" viewBox="0 0 208 197" aria-hidden="true">
      <rect x="0" y="70" width="110" height="127" rx="6" fill="#dbeafe" /><rect x="110" y="20" width="98" height="177" rx="6" fill="#bfdbfe" />
      <g stroke="#fff" strokeWidth="3" opacity=".8"><path d="M118 60h82M118 90h82M118 120h82M118 150h82" /></g>
      <rect x="51" y="62" width="64" height="42" rx="7" fill="#fff" opacity=".8" /><text x="83" y="92" textAnchor="middle" fontSize="24" fontWeight="700" fill="#e57701" fontFamily="Inter, sans-serif">{"</>"}</text>
    </svg>
  );
}

function RoleCard({ card, delay }) {
  const { openWaitlist } = useWaitlist();
  const isWait = card.action === "waitlist";
  return (
    <Reveal as="article" delay={delay} className={`rcard rcard--${card.id}`}>
      <CardArt kind={card.art} />
      <div className="rcard__head">
        <span className="rcard__icon"><Icon name={card.icon} size={24} /></span>
        <span className={`rcard__badge rcard__badge--${card.badgeTone}`}>{card.badge}</span>
      </div>
      <div className="rcard__body">
        <h3 className="rcard__title">{card.title}</h3>
        <p className="rcard__desc">{card.desc}</p>
        <ul className="rcard__list">
          {card.features.map((f) => (
            <li key={f}><span className={`tick ${card.tick === "red" ? "tick--red" : ""}`}><Icon name="check" size={10} strokeWidth={3.2} /></span>{f}</li>
          ))}
        </ul>
      </div>
      {isWait
        ? <Button block icon={card.ctaIcon} onClick={() => openWaitlist(card.id)}>{card.cta}</Button>
        : <Button block icon={card.ctaIcon} href={card.action}>{card.cta}</Button>}
    </Reveal>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const raf = useRef(0);

  function onMove(e) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
      el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
    });
  }
  function onLeave() {
    const el = ref.current; if (!el) return;
    el.style.setProperty("--mx", 0); el.style.setProperty("--my", 0);
  }

  return (
    <section className="hero section" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} aria-labelledby="hero-title">
      <div className="blob blob--lav hero__blob1" aria-hidden="true" />
      <div className="blob blob--sky hero__blob2" aria-hidden="true" />
      <div className="hero__spot" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__floats" aria-hidden="false">
          <div className="float float--wa">
            <span className="float__row"><WhatsApp size={16} /> <b>WhatsApp Alert</b></span>
            <strong>Get notified on whatsapp</strong>
            <span>You’ll get all important updates on your whatsapp</span>
          </div>
          <div className="float float--resume">
            <span className="float__row float__row--purple"><Icon name="zap" size={13} fill="currentColor" /> Resume Builder</span>
            <strong>Build Your Resume</strong>
            <span>Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired</span>
          </div>
          <div className="float float--match">
            <span className="avatars"><i style={{ background: "#3b82f6" }}>AK</i><i style={{ background: "#4f46e5" }}>PR</i><i style={{ background: "#06b6d4" }}>SN</i></span>
            <span className="float__text"><b><span className="dot dot--green" /> 🔥 142 students matched today</b><small>Just now • IIT, BITS, VIT</small></span>
          </div>
          <div className="float float--recruiter">
            <span className="float__icon">💼</span>
            <span className="float__text"><b><em>Radiant Info</em> shortlisted 8 interns</b><small><span className="dot dot--green" /> Verified recruiter • 2 days ago</small></span>
          </div>
        </div>

        <div className="hero__head">
          <Reveal><span className="hero__badge"><Icon name="monitor" size={18} /> AI-Powered Campus Assistant</span></Reveal>
          <Reveal delay={80}><h1 id="hero-title" className="hero__title">Connect <span className="g1">10X</span><span className="g2"> Faster.</span></h1></Reveal>
          <Reveal delay={140}><p className="hero__sub">One platform connecting students, colleges &amp; employers — faster.</p></Reveal>
          <Reveal delay={200}>
            <p className="hero__ask"><Sparkle size={16} className="sp sp--l" /><Sparkle size={9} className="sp sp--s" /><span>What are you looking for?</span><Sparkle size={9} className="sp sp--s" /><Sparkle size={16} className="sp sp--r" /></p>
          </Reveal>
        </div>

        <div className="hero__cards">
          {ROLE_CARDS.map((c, i) => <RoleCard key={c.id} card={c} delay={120 + i * 90} />)}
        </div>
      </div>
    </section>
  );
}
