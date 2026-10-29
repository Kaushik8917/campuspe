"use client";
import { useEffect, useRef, useState } from "react";
import Chip from "@/components/ui/Chip";
import Eyebrow from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { PIPELINE } from "@/lib/data";

const MAX = 10 * 1024 * 1024;
const OK_EXT = ["pdf", "doc", "docx"];

export default function ResumeUpload() {
  const input = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [drag, setDrag] = useState(false);
  const [stage, setStage] = useState(0); // 0 idle .. 4 all steps done
  const timers = useRef([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function accept(f) {
    if (!f) return;
    const ext = f.name.split(".").pop().toLowerCase();
    if (!OK_EXT.includes(ext)) return setError("Unsupported file. Please upload a PDF, DOC or DOCX.");
    if (f.size > MAX) return setError("File is larger than 10MB. Please upload a smaller file.");
    setError(""); setFile(f); setStage(0);
    timers.current.forEach(clearTimeout);
    timers.current = [1, 2, 3, 4].map((s) => setTimeout(() => setStage(s), s * 700));
  }
  function reset() { timers.current.forEach(clearTimeout); setFile(null); setStage(0); setError(""); if (input.current) input.current.value = ""; }
  const kb = (n) => (n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`);

  return (
    <section id="upload" className="up section" aria-labelledby="up-title">
      <div className="up__grid" aria-hidden="true" />
      <div className="blob blob--lav up__b1" aria-hidden="true" />
      <div className="blob blob--sky up__b2" aria-hidden="true" />
      <div className="container up__inner">
        <header className="up__head">
          <Reveal><span className="eyebrow eyebrow--split"><span className="eyebrow__dot" aria-hidden="true" /><b>TRY IT LIVE</b><i>v2.4 AI Engine</i></span></Reveal>
          <Reveal delay={60}><h2 id="up-title" className="up__h2">Upload your resume.<br /><em>Find jobs that fit.</em></h2></Reveal>
          <Reveal delay={120}><p className="up__lead">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p></Reveal>
        </header>

        <Reveal className="up__stage">
          <div className="up__aura" aria-hidden="true" />
          <div className="float2 float2--l"><span className="float2__ic float2__ic--lime"><Icon name="zap" size={13} fill="currentColor" /></span><span><b>98% Match Rate</b><small>AI semantic rank</small></span></div>
          <div className="float2 float2--r"><span className="float2__ic float2__ic--orange"><Icon name="lock" size={13} /></span><span><b>ATS Compliant</b><small>Standardized parser</small></span></div>

          <div className="up__card">
            <div
              className={`drop ${drag ? "is-drag" : ""} ${file ? "has-file" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
              onDragLeave={() => setDrag(false)}
              onDrop={(e) => { e.preventDefault(); setDrag(false); accept(e.dataTransfer.files?.[0]); }}
            >
              <i className="corner corner--tl" /><i className="corner corner--tr" /><i className="corner corner--bl" /><i className="corner corner--br" />
              {!file ? (
                <>
                  <h3 className="drop__title">Upload your resume</h3>
                  <p className="drop__sub">PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.</p>
                  <input ref={input} id="resume-input" type="file" className="sr-only" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={(e) => accept(e.target.files?.[0])} />
                  <label htmlFor="resume-input" className="drop__btn" tabIndex={0} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), input.current?.click())}>
                    Upload resume <Icon name="up" size={16} />
                  </label>
                  <p className="drop__hint">or drag and drop your file here</p>
                  <div className="drop__fmt"><Chip tone="outline" small>PDF</Chip><Chip tone="outline" small>DOC</Chip><Chip tone="outline" small>DOCX</Chip></div>
                  <p className="drop__err" role="alert">{error}</p>
                </>
              ) : (
                <div className="drop__file" aria-live="polite">
                  <span className="drop__fileic"><Icon name="file" size={26} /></span>
                  <h3 className="drop__title drop__title--sm">{file.name}</h3>
                  <p className="drop__sub">{kb(file.size)} · {stage < 4 ? "Analyzing your resume…" : "Analysis complete — your matches are ready."}</p>
                  <div className="bar" aria-hidden="true"><span style={{ width: `${stage * 25}%` }} /></div>
                  <div className="drop__actions">
                    <button className="drop__link" onClick={reset}>Replace file</button>
                    {stage === 4 && <a className="drop__btn drop__btn--sm" href="#jobs">View matches <Icon name="arrow" size={14} /></a>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <ul className="pipe" aria-label="How your resume is processed">
          {PIPELINE.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 80} className={`pipe__item pipe__item--${p.tone} ${stage > i ? "is-done" : ""}`}>
              <span className="pipe__ic"><Icon name="check" size={16} strokeWidth={2.4} /></span>
              <span className="pipe__txt"><b>{p.title}</b><small>{p.dot && <span className="dot dot--green" />}{p.sub}</small></span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
