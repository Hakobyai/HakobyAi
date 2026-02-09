import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";

import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import LiveDemo from "@/components/LiveDemo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RetellWidgetLoader from "@/components/RetellWidgetLoader";

export default function Home() {
  const demoEnabled = process.env.ENABLE_DEMO !== "false";

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />

        <HowItWorks />
        <Testimonials />
        {demoEnabled && <LiveDemo />}
        <CTA />
      </main>
      <Footer />
      {demoEnabled && <RetellWidgetLoader />}
    </>
  );
}
