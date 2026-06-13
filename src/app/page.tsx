import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGalaxy from "@/components/SkillsGalaxy";
import FeaturedWorkWrapper from "@/components/FeaturedWorkWrapper";
import Journey from "@/components/Journey";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsGalaxy />
        <FeaturedWorkWrapper />
        <Journey />
        <Vision />
        <Contact />
      </main>
    </>
  );
}
