import Phone, { ScreenApps, ScreenDiscover } from "@/components/ui/Phone";
import Reveal from "@/components/ui/Reveal";

function Store({ href, kind }) {
  const play = kind === "play";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="store" aria-label={play ? "Get it on Google Play" : "Download on the App Store"}>
      {play ? (
        <svg width="26" height="28" viewBox="0 0 26 28" aria-hidden="true"><path fill="#00d3ff" d="M1 1.500v25L14 14z" /><path fill="#00f076" d="M1 1.500 18 11 14 14z" /><path fill="#ffce00" d="m18 11 6 3.500c1 .6 1 1.400 0 2L18 17l-4-3z" /><path fill="#ff3a44" d="M1 26.500 18 17l-4-3z" /></svg>
      ) : (
        <svg width="24" height="28" viewBox="0 0 24 28" aria-hidden="true"><path fill="#fff" d="M19.500 14.800c0-3 2.500-4.500 2.600-4.600-1.400-2.100-3.600-2.400-4.400-2.400-1.900-.2-3.600 1.100-4.600 1.100-.9 0-2.400-1.100-3.900-1-2 0-3.900 1.200-4.900 3-2.100 3.700-.5 9.100 1.500 12.100 1 1.500 2.200 3.100 3.700 3 1.500-.1 2.100-1 3.900-1s2.300 1 3.900.9c1.600 0 2.600-1.500 3.600-2.900 1.100-1.700 1.600-3.300 1.600-3.400-.1 0-3-1.200-3-4.800zM16.600 6c.8-1 1.400-2.400 1.200-3.800-1.200.1-2.700.8-3.500 1.800-.8.900-1.400 2.300-1.300 3.700 1.400.1 2.700-.7 3.600-1.700z" /></svg>
      )}
      <span><small>{play ? "GET IT ON" : "Download on the"}</small><b>{play ? "Google Play" : "App Store"}</b></span>
    </a>
  );
}

export default function DownloadApp() {
  return (
    <section id="download" className="dl section" aria-labelledby="dl-title">
      <div className="blob blob--lav dl__b1" aria-hidden="true" />
      <div className="blob blob--sky dl__b2" aria-hidden="true" />
      <div className="container dl__grid">
        <div className="dl__copy">
          <Reveal><h2 id="dl-title" className="dl__h2">Download App Now</h2></Reveal>
          <Reveal delay={80}><p className="dl__p">Elevate your academic journey with CampusPe, the all-in-one digital ecosystem designed to bridge the gap between education and industry. Whether you’re a student seeking your next big internship, a college looking to empower your cohort, or a company scouting for top-tier talent, CampusPe streamlines the connection. Your career doesn’t start at graduation—it starts here.</p></Reveal>
          <Reveal delay={140} className="dl__stores">
            <Store kind="play" href="https://play.google.com/store" />
            <Store kind="apple" href="https://www.apple.com/app-store/" />
          </Reveal>
        </div>
        <Reveal className="dl__art" aria-hidden="true">
          <div className="dl__phone dl__phone--back"><Phone className="phone--tilt"><ScreenApps /></Phone></div>
          <div className="dl__phone dl__phone--front"><Phone className="phone--tilt"><ScreenDiscover /></Phone></div>
        </Reveal>
      </div>
    </section>
  );
}
