import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

/** Shared layout for "For Colleges" and "For Employers": left copy + right stack of cards. */
export default function FeatureStack({ id, eyebrow, title, lead, cta, ctaHref, cards, variant }) {
  return (
    <section id={id} className={`fs fs--${variant} section`} aria-labelledby={`${id}-title`}>
      <div className="blob blob--sky fs__b1" aria-hidden="true" />
      <div className="blob blob--lav fs__b2" aria-hidden="true" />
      <div className="container fs__grid">
        <div className="fs__copy">
          <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
          <Reveal delay={60}><h2 id={`${id}-title`} className="h2 fs__h2">{title}</h2></Reveal>
          <Reveal delay={120}><p className="lead fs__lead">{lead}</p></Reveal>
          <Reveal delay={160}><Button href={ctaHref} pill size="lg" icon="arrow">{cta}</Button></Reveal>
        </div>
        <ul className="fs__cards">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 80} className="fcard">
              <div className="fcard__main">
                <div className="fcard__kicker"><span className="fcard__n">{c.n}</span>{c.kicker && <span>{c.kicker}</span>}</div>
                <h3 className="fcard__title">{c.title}</h3>
                <p className="fcard__body">{c.body}</p>
              </div>
              <div className="fcard__chips">
                {c.chips.map((ch) => <Chip key={ch.text} tone={ch.tone} icon={ch.icon} dot={ch.dot} small={ch.small}>{ch.text}</Chip>)}
                {c.note && <small className="fcard__note">{c.note}</small>}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
