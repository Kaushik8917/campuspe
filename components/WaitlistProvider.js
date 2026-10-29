"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import { Icon } from "./ui/Icons";

const Ctx = createContext({ openWaitlist: () => {} });
export const useWaitlist = () => useContext(Ctx);

const LABELS = { college: "College", hiring: "Hiring", default: "CampusPe" };

export default function WaitlistProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("default");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const lastFocus = useRef(null);

  const openWaitlist = useCallback((r = "default") => {
    lastFocus.current = document.activeElement;
    setRole(r); setStatus("idle"); setError(""); setOpen(true);
  }, []);
  const close = useCallback(() => { setOpen(false); lastFocus.current?.focus?.(); }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; clearTimeout(t); window.removeEventListener("keydown", onKey); };
  }, [open, close]);

  async function submit(e) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) { setError("Please enter a valid email address."); setStatus("error"); return; }
    setStatus("loading"); setError("");
    try {
      const res = await fetch("/api/waitlist", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email.trim(), role }) });
      if (!res.ok) throw new Error();
      setStatus("done"); setEmail("");
    } catch {
      setStatus("error"); setError("Something went wrong. Please try again.");
    }
  }

  return (
    <Ctx.Provider value={{ openWaitlist }}>
      {children}
      {open && (
        <div className="modal" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && close()}>
          <div className="modal__card" role="dialog" aria-modal="true" aria-labelledby="wl-title">
            <button className="modal__close" onClick={close} aria-label="Close dialog"><Icon name="close" size={18} /></button>
            {status === "done" ? (
              <div className="modal__done">
                <span className="modal__tick"><Icon name="check" size={26} strokeWidth={3} /></span>
                <h2 id="wl-title">You&apos;re on the list!</h2>
                <p>We&apos;ll notify you as soon as {LABELS[role]} features go live.</p>
                <Button onClick={close} block>Done</Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <span className="modal__bell"><Icon name="bell" size={22} /></span>
                <h2 id="wl-title">Join the {LABELS[role]} waitlist</h2>
                <p>Be the first to know when this launches. No spam, ever.</p>
                <label htmlFor="wl-email" className="sr-only">Email address</label>
                <input id="wl-email" ref={inputRef} type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" value={email}
                  onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }} aria-invalid={status === "error"} aria-describedby="wl-err" />
                <p id="wl-err" className="modal__err" role="alert">{status === "error" ? error : ""}</p>
                <Button type="submit" block icon="bell" disabled={status === "loading"}>{status === "loading" ? "Joining…" : "Join Waitlist"}</Button>
              </form>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
