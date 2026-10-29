"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { FEED_ITEMS, FEED_TABS } from "@/lib/data";

const STEPS = [
  { n: "01", t: "Set your preferences", b: "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.", tag: "Smart Profile", tone: "indigo" },
  { n: "02", t: "Discover relevant opportunities", b: "Explore colleges and career opportunities matched to your profile, interests and goals", tag: "AI Ranked", tone: "gray" },
  { n: "03", t: "Get notified when something fits", b: "Get notified when a relevant college or new opportunity is found, so you can act early.", tag: "Instant Alerts", tone: "green" },
];

function Logo({ kind }) {
  if (kind === "google")
    return (<svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true"><path fill="#4285f4" d="M44.5 24.3c0-1.6-.1-2.8-.4-4H24v7.600h11.700c-.2 1.900-1.500 4.700-4.300 6.600l6.600 5.100c3.800-3.600 6.500-8.900 6.500-15.300z" /><path fill="#34a853" d="M24 46c5.900 0 10.800-1.900 14.400-5.300l-6.600-5.100c-1.800 1.200-4.100 2-7.800 2-5.800 0-10.600-3.800-12.400-9l-6.800 5.200C8.400 41.100 15.600 46 24 46z" /><path fill="#fbbc05" d="M11.600 28.600A13.800 13.800 0 0 1 10.800 24c0-1.600.3-3.200.8-4.600l-6.800-5.200A22 22 0 0 0 2 24c0 3.600.9 7 2.800 9.800z" /><path fill="#ea4335" d="M24 10.400c4.100 0 6.800 1.800 8.400 3.200l6.100-6C34.800 4.100 29.900 2 24 2 15.600 2 8.400 6.900 4.800 14.200l6.800 5.200c1.800-5.200 6.600-9 12.400-9z" /></svg>);
  if (kind === "notion")
    return (<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" fill="#fff" stroke="#111" strokeWidth="1.8" /><path d="M8 17V7.500l8 9.500V7" fill="none" stroke="#111" strokeWidth="2" strokeLinejoin="round" /></svg>);
  return (<svg viewBox="0 0 36 36" width="34" height="34" aria-hidden="true"><circle cx="18" cy="18" r="15.500" fill="#fff" stroke="#c0262d" strokeWidth="1.5" /><circle cx="18" cy="18" r="12" fill="none" stroke="#c0262d" strokeWidth="1" /><path d="M11 11l3.500 3 3.500-4 3.500 4 3.500-3-1 8h-12z" fill="#c0262d" /><rect x="11" y="24" width="14" height="1.500" fill="#c0262d" /></svg>);
}

export default function OpportunityDiscovery() {
  const [tab, setTab] = useState("All");
  const items = useMemo(() => (tab === "All" ? FEED_ITEMS.slice(0, 3) : FEED_ITEMS.filter((i) => i.cat === tab)), [tab]);

  return (
    <section id="jobs" className="opp section" aria-labelledby="opp-title">
      <div className="blob blob--lav opp__b1" aria-hidden="true" />
      <div className="blob blob--sky opp__b2" aria-hidden="true" />
      <div className="container opp__grid">
        <div className="opp__left">
          <Reveal><Eyebrow>01 • Opportunity Discovery</Eyebrow></Reveal>
          <Reveal delay={60}><h2 id="opp-title" className="h2 opp__h2">Stop searching.<br /><em>Start getting matched.</em></h2></Reveal>
          <Reveal delay={120}><p className="lead opp__lead">Tell CampusPe your skills, preferences and goals. We continuously monitor company career pages and job sources, find opportunities that match you, and notify you when they appear.</p></Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80} className={`step ${i === 0 ? "step--active" : ""}`}>
                <span className="step__n">{s.n}</span>
                <div className="step__body">
                  <div className="step__top"><h3>{s.t}</h3><span className={`step__tag step__tag--${s.tone}`}>{s.tag}</span></div>
                  <p>{s.b}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal><Button href="/#upload" pill size="lg" icon="arrow">Explore opportunities</Button></Reveal>
        </div>

        <div className="opp__right">
          <Reveal className="feed" aria-label="Opportunity feed preview">
            <div className="feed__head">
              <span className="feed__bolt"><Icon name="zap" size={20} fill="currentColor" /></span>
              <div className="feed__title"><h3>CampusPe Opportunity Feed</h3><p>Colleges &amp; opportunities matched to you</p></div>
              <span className="feed__count"><span className="dot dot--green" />12 new matches today</span>
            </div>
            <div className="feed__tabs" role="tablist" aria-label="Filter opportunities">
              {FEED_TABS.map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} className={`ftab ${tab === t ? "is-on" : ""}`} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
            <ul className="feed__list" role="tabpanel">
              {items.map((it) => (
                <li key={it.id} className="fitem">
                  <div className="fitem__top">
                    <span className="fitem__logo"><Logo kind={it.logo} /></span>
                    <div className="fitem__main">
                      <div className="fitem__title"><h4>{it.title}</h4><span className={`ftag ftag--${it.tagTone}`}>{it.tag}</span></div>
                      <div className="fitem__meta">
                        {it.meta.map(([ic, tx]) => <span key={tx}><Icon name={ic} size={14} />{tx}</span>)}
                        <b>{it.pay}</b>
                      </div>
                    </div>
                    <Button href="/#upload" size="chip" aria-label={`${it.cta}: ${it.title}`}>{it.cta}</Button>
                  </div>
                  <p className="fitem__blurb">{it.blurb}</p>
                </li>
              ))}
            </ul>
            <div className="feed__foot">
              <Link href="/#upload" className="feed__all">View all matched opportunities <Icon name="arrow" size={14} className="arrow" /></Link>
              <span>Curated for you <i>•</i> Updated daily</span>
            </div>
          </Reveal>
          <div className="note" aria-hidden="true">
            <svg width="64" height="54" viewBox="0 0 64 54" fill="none"><path d="M60 50C34 52 10 40 8 8" stroke="#7f3dff" strokeWidth="2" strokeLinecap="round" /><path d="M2 16 8 6l9 8" stroke="#7f3dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <p>A mix of colleges, jobs,<br />internships and gigs — all in one place.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
