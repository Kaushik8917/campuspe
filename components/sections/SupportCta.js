import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function SupportCta() {
  return (
    <section className="support section" aria-labelledby="support-title">
      <div className="container">
        <Reveal className="support__card">
          <div className="support__glow" aria-hidden="true" />
          <h2 id="support-title">Still have questions?</h2>
          <p>Our support team is here to help you succeed. Get in touch anytime.</p>
          <div className="support__cta">
            <Button href="/contact-support" pill circle="arrowUpRight" size="lg" className="btn--circ">Contact Support</Button>
            <Button href="/schedule-a-call" variant="outline" pill circle="phoneCall" size="lg" className="btn--circ">Schedule a Call</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
