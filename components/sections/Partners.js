import Image from "next/image";
import { PARTNERS } from "@/lib/data";

function Mark({ p }) {
  if (p.logo) return <Image src={p.logo} alt={p.name} width={180} height={60} className="partner__img" />;
  return <span className="partner__word"><b>{p.name}</b>{p.sub && <small>{p.sub}</small>}</span>;
}

export default function Partners() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section className="partners" aria-label="Partners">
      <p className="partners__title">Trusted by partners across India</p>
      <div className="partners__mask">
        <ul className="partners__track">
          {loop.map((p, i) => <li key={`${p.name}-${i}`} className="partner" aria-hidden={i >= PARTNERS.length ? "true" : undefined}><Mark p={p} /></li>)}
        </ul>
      </div>
    </section>
  );
}
