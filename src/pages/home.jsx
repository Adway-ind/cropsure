import Header from "../components/header";
import HeroSlider from "../components/HeroSlider";
import WhoWeAre from "../components/WhoWeAre";
import SolutionMarquee from "../components/SolutionMarquee";
import CoreDisciplines from "../components/CoreDisciplines";
import ProductSection from "../components/ProductSection";
import CropFocus from "../components/CropFocus";
import SustainabilitySection from "../components/SustainabilitySection";
import TeamSection from "../components/TeamSection";
import FinalCTA from "../components/FinalCTA";

const Homepage = () => {
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
        </>
    );
};

export default Homepage;