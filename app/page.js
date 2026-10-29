import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Partners from "@/components/sections/Partners";
import OpportunityDiscovery from "@/components/sections/OpportunityDiscovery";
import ResumeUpload from "@/components/sections/ResumeUpload";
import ForColleges from "@/components/sections/ForColleges";
import ForEmployers from "@/components/sections/ForEmployers";
import AppShowcase from "@/components/sections/AppShowcase";
import DownloadApp from "@/components/sections/DownloadApp";
import SupportCta from "@/components/sections/SupportCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsStrip />
        <Partners />
        <OpportunityDiscovery />
        <ResumeUpload />
        <ForColleges />
        <ForEmployers />
        <AppShowcase />
        <DownloadApp />
        <SupportCta />
      </main>
      <Footer />
    </>
  );
}
