"use client";
import { useEffect, useRef, useState } from "react";
import Phone, { SCREENS } from "@/components/ui/Phone";
import Reveal from "@/components/ui/Reveal";
import { SLIDE_LABELS } from "@/lib/data";

export default function AppShowcase() {
  const [active, setActive] = useState(2);
  const [paused, setPaused] = useState(false);
  const touch = useRef(0);
  const n = SCREENS.length;

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((a) => (a + 1) % n), 3800);
    return () => clearInterval(t);
  }, [paused, n]);

  const go = (i) => setActive((i + n) % n);
  const onKey = (e) => { if (e.key === "ArrowRight") go(active + 1); if (e.key === "ArrowLeft") go(active - 1); };

  return (
    <section id="app" className="app section" aria-labelledby="app-title">
      <div className="blob blob--sky app__b1" aria-hidden="true" />
      <div className="container">
        <header className="app__head">
          <Reveal><h2 id="app-title" className="app__h2">Checkout Our App Interface Look</h2></Reveal>
          <Reveal delay={80}><p className="app__lead">Experience the power of a unified campus ecosystem right in your pocket. <b>CampusPe</b> offers a tailored interface for every user: students can explore trending courses, colleges can showcase their campus life, and companies can post job vacancies directly to a pool of qualified candidates.</p></Reveal>
        </header>

        <div className="carousel" role="group" aria-roledescription="carousel" aria-label="App screens" tabIndex={0} onKeyDown={onKey}
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
          onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
          onTouchEnd={(e) => { const d = e.changedTouches[0].clientX - touch.current; if (Math.abs(d) > 40) go(active + (d < 0 ? 1 : -1)); }}>
          <div className="carousel__stage">
            {SCREENS.map((Screen, i) => {
              const off = ((i - active + n + 2) % n) - 2; // shortest circular offset, -2..2
              const d = Math.abs(off);
              const x = off === 0 ? 0 : Math.sign(off) * (292 + (d - 1) * 182);
              const sc = [1, 0.854, 0.72][d];
              return (
                <button key={i} className={`slide ${off === 0 ? "is-active" : ""}`} data-d={d} style={{ "--x": x, "--sc": sc, zIndex: 10 - d }} onClick={() => go(i)}
                  aria-label={`Show ${SLIDE_LABELS[i]} screen`} aria-current={off === 0} tabIndex={-1}>
                  <Phone><Screen /></Phone>
                </button>
              );
            })}
          </div>
          <div className="dots" role="tablist" aria-label="Choose screen">
            {SLIDE_LABELS.map((l, i) => <button key={l} role="tab" aria-selected={i === active} aria-label={l} className={`dotbtn ${i === active ? "is-on" : ""}`} onClick={() => go(i)} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
