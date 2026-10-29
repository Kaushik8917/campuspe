import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Button from "@/components/ui/Button";
import { EXTRA_ROUTES } from "@/lib/data";

export const dynamicParams = false;
export function generateStaticParams() { return EXTRA_ROUTES.map((slug) => ({ slug })); }

const title = (slug) => slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ").replace(" And ", " & ");

export function generateMetadata({ params }) { return { title: `${title(params.slug)} — CampusPe` }; }

export default function PlaceholderPage({ params }) {
  const name = title(params.slug);
  return (
    <>
      <Navbar solid />
      <main id="main" className="stub">
        <div className="stub__card">
          <span className="stub__tag">Coming soon</span>
          <h1>{name}</h1>
          <p>This page isn&apos;t part of the landing-page design yet, but the link works. Replace this file with real content when it&apos;s ready.</p>
          <div className="stub__cta"><Button href="/" icon="arrow">Back to home</Button><Button href="/#upload" variant="outline">Upload your resume</Button></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
