import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/About/AboutHero";
import WhoWeAre from "../components/About/WhoWeAre";
import OurApproach from "../components/About/OurApproach";
import WhatGuidesUs from "../components/About/WhatGuidesUs";
import CropSureDNA from "../components/About/CropSureDNA";
import TeamSection from "../components/TeamSection";

const AboutSection = () => {
    return (
        <>
            <Hero />

            <section
                id="about"
                className="relative overflow-hidden bg-[#F5F7EF]"
            >
            <WhoWeAre />
            </section>
            <OurApproach />
            <WhatGuidesUs />
            <CropSureDNA />
            <TeamSection />
        </>
    );
};

export default AboutSection;