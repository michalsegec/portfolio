import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudy />
        <Process />
        <About />
      </main>
      <Contact />
    </>
  );
}
