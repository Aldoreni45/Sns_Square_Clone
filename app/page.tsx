import Hero from "../components/Hero";
import AgentsSection from "../components/AgentsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <AgentsSection />   {/* 👈 here */}
      <ContactSection />
      <Footer />
    </>
  );
}
