import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CareerJourney from "@/components/CareerJourney";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <CareerJourney />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
