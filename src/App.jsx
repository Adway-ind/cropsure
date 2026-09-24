import Header from "../src/components/header";
import HeroSlider from "./components/HeroSlider";
import SolutionMarquee from "./components/SolutionMarquee";
import WhoWeAre from "./components/WhoWeAre";
import CoreDisciplines from "./components/CoreDisciplines";
import ProductSection from "./components/ProductSection";
import CropFocus from "./components/CropFocus";
import SustainabilitySection from "./components/SustainabilitySection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <>
      <Header />

      <main>

        <HeroSlider />

        <WhoWeAre />

        <SolutionMarquee />

        <CoreDisciplines />

        <ProductSection />

        <CropFocus />

        <SustainabilitySection />
        
        <TeamSection />

        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}

export default App;