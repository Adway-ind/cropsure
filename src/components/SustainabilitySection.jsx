import { motion } from "framer-motion";
import {
    Leaf,
    Droplets,
    Sprout,
} from "lucide-react";
import CROPBG from "../assets/image/crop_bg.svg"

const sustainabilityPoints = [
    {
        icon: Leaf,
        title: "Responsible Crop Solutions",
        description:
            "Agricultural solutions designed to support healthier crops while encouraging responsible and efficient resource use.",
    },
    {
        icon: Droplets,
        title: "Resource Efficiency",
        description:
            "Focused approaches that help improve water, nutrient and input efficiency across different growing conditions.",
    },
    {
        icon: Sprout,
        title: "Soil & Biological Health",
        description:
            "Supporting healthier soil systems, beneficial biology and long-term agricultural productivity.",
    },
];

const SustainabilitySection = () => {
    return (
        <section className="relative overflow-hidden bg-[#0B4A32]">

            {/* =====================================================
                AGRICULTURAL BACKGROUND
            ===================================================== */}
            <div className="absolute inset-0">

                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90"
                    alt=""
                    className="
                        h-full
                        w-full
                        object-cover
                        opacity-30
                    "
                />

                {/* Main green overlay */}
                <div className="absolute inset-0 bg-[#0B4A32]/55" />

                {/* Left / right tonal balance */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A32]/80 via-[#0B4A32]/45 to-[#0B4A32]/70" />

                {/* Bottom depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#063523]/50 via-transparent to-[#0B4A32]/20" />

            </div>


            {/* =====================================================
                CROP SVG DECORATION
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-80px]
                    top-1/2
                    z-[1]
                    -translate-y-1/2
                    opacity-[0.12]
                    lg:right-[-20px]
                "
            >
                <img
                    src={[CROPBG]}
                    alt=""
                    className="
                        h-[620px]
                        w-auto
                        object-contain
                        lg:h-[780px]
                        xl:h-[900px]
                    "
                />
            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1440px]
                    px-6
                    py-24
                    lg:px-10
                    lg:py-32
                "
            >

                {/* =================================================
                    INTRO
                ================================================= */}
                <div className="max-w-[900px]">

                    {/* EYEBROW */}
                    <div className="mb-5 flex items-center gap-3">

                        <span className="h-px w-8 bg-[#E9EF9B]" />

                        <span className="text-[9px] font-semibold tracking-[0.22em] text-[#E9EF9B]">
                            05 / SUSTAINABLE STEWARDSHIP
                        </span>

                    </div>


                    {/* TITLE */}
                    <h2
                        className="
                            text-[clamp(3rem,5.5vw,5.8rem)]
                            font-normal
                            leading-[0.9]
                            tracking-[-0.065em]
                            text-white
                        "
                    >
                        Growing today.{" "}
                        <span className="font-serif italic text-[#E9EF9B]">
                            Protecting tomorrow.
                        </span>
                    </h2>


                    {/* DESCRIPTION */}
                    <p
                        className="
                            mt-7
                            max-w-[720px]
                            text-[14px]
                            leading-[1.8]
                            text-white/75
                            sm:text-[15px]
                        "
                    >
                        Responsible agricultural solutions that support
                        healthier crops, better resource use and a more
                        sustainable future for modern agriculture.
                    </p>

                </div>


                {/* =================================================
                    THREE SUSTAINABILITY PILLARS
                ================================================= */}
                <div
                    className="
                        mt-16
                        grid
                        gap-4
                        lg:mt-20
                        lg:grid-cols-3
                    "
                >

                    {sustainabilityPoints.map((item, index) => {

                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut",
                                }}
                                className="
                                    group
                                    relative
                                    min-h-[220px]
                                    overflow-hidden
                                    rounded-[8px]
                                    border
                                    border-white/20
                                    bg-[#063F2B]/75
                                    p-6
                                    backdrop-blur-[6px]
                                    transition-all
                                    duration-300
                                    hover:border-[#E9EF9B]/50
                                    hover:bg-[#074A32]/90
                                "
                            >

                                {/* CARD NUMBER */}
                                <span
                                    className="
                                        absolute
                                        right-5
                                        top-5
                                        text-[9px]
                                        font-medium
                                        tracking-[0.18em]
                                        text-white/35
                                    "
                                >
                                    0{index + 1}
                                </span>


                                {/* ICON */}
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-[6px]
                                        border
                                        border-[#E9EF9B]/40
                                        bg-[#E9EF9B]/15
                                        text-[#E9EF9B]
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#E9EF9B]
                                        group-hover:text-[#174D32]
                                    "
                                >
                                    <Icon
                                        size={18}
                                        strokeWidth={1.7}
                                    />
                                </div>


                                {/* CARD TITLE */}
                                <h3
                                    className="
                                        mt-7
                                        text-[18px]
                                        font-semibold
                                        tracking-[-0.025em]
                                        text-white
                                    "
                                >
                                    {item.title}
                                </h3>


                                {/* CARD DESCRIPTION */}
                                <p
                                    className="
                                        mt-3
                                        max-w-[340px]
                                        text-[12px]
                                        leading-[1.75]
                                        text-white/65
                                    "
                                >
                                    {item.description}
                                </p>


                                {/* HOVER ACCENT */}
                                <div
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-[2px]
                                        w-0
                                        bg-[#E9EF9B]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                            </motion.article>
                        );
                    })}

                </div>


                {/* =================================================
                    BOTTOM INFORMATION
                ================================================= */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        justify-between
                        gap-3
                        border-t
                        border-white/20
                        pt-5
                        sm:flex-row
                        sm:items-center
                    "
                >

                    <p className="text-[9px] tracking-[0.18em] text-white/45">
                        SOIL HEALTH • RESOURCE EFFICIENCY • CROP PERFORMANCE
                    </p>

                    <p className="text-[9px] tracking-[0.18em] text-white/40">
                        CROPSURE / 05
                    </p>

                </div>

            </div>

        </section>
    );
};

export default SustainabilitySection;