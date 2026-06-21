import Featues from "./components/featues";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="space-y-4">
      {/* <AboutPage /> */}
      <HeroSection />
      <Featues />
    </div>
  );
}
