import { Icon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export default function StatsStrip() {
  return (
    <section className="stats" aria-label="CampusPe at a glance">
      <div className="container">
        <ul className="stats__row">
          {STATS.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 80} className="stat">
              <span className={`stat__icon stat__icon--${s.tone}`}><Icon name={s.icon} size={28} strokeWidth={1.8} /></span>
              <span className="stat__txt"><b>{s.value}</b><span>{s.label}</span></span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
