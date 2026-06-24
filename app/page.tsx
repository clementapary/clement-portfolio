import AboutPage from "./about/page";
import HeroSection from "./components/HeroSection";
import ContactPage from "./contact/page";
import ExperincePage from "./experinces/page";
import ProjectPage from "./projects/page";
import ServicePage from "./services/page";
import SkillPage from "./skills/page";

export default function Home() {
  return (
    <div className="grid gap-4">
      <HeroSection />
      <section className="scroll-mt-28" id="about">
        <AboutPage />
      </section>
      <section className="scroll-mt-28" id="services">
        <ServicePage />
      </section>
      <section className="scroll-mt-28" id="skills">
        <SkillPage />
      </section>
      <section className="scroll-mt-28" id="projects">
        <ProjectPage />
      </section>
      <section className="scroll-mt-28" id="experinces">
        <ExperincePage />
      </section>
      <section className="scroll-mt-28" id="contact">
        <ContactPage />
      </section>
    </div>
  );
}
