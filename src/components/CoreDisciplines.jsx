import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShieldCheck,
    Droplets,
    FlaskConical,
    Sprout,
    Wheat,
    ArrowUpRight,
} from "lucide-react";

import CROP from "../assets/image/crop_bg.svg";
import CROP2 from "../assets/image/crop_bg.svg";


const disciplines = [
    {
        number: "01",
        title: "Crop Protection",
        description:
            "Advanced fungal, pest & weed suppression with zero-compromise environmental stewardship.",
        icon: ShieldCheck,
        image:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1600&q=90",
        tag: "PLANT DEFENCE",
    },
    {
        number: "02",
        title: "Plant Nutrition",
        description:
            "Macronutrient & chelated micronutrient solutions calibrated for maximum cellular uptake.",
        icon: Droplets,
        image:
            "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1600&q=90",
        tag: "PLANT PERFORMANCE",
    },
    {
        number: "03",
        title: "Bio Solutions",
        description:
            "Microbial inoculants and natural botanical plant stimulants enhancing natural immunity.",
        icon: FlaskConical,
        image:
            "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1600&q=90",
        tag: "BIOLOGICAL SCIENCE",
    },
    {
        number: "04",
        title: "Soil Health",
        description:
            "Microbiome regeneration and mineral replenishment for enduring soil biological vitality.",
        icon: Sprout,
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=90",
        tag: "SOIL PERFORMANCE",
    },
    {
        number: "05",
        title: "Specialty Solutions",
        description:
            "Customized drought-defense and salinity buffering formulas for demanding climates.",
        icon: Wheat,
        image:
            "https://images.unsplash.com/photo-1523742811118-6a6a0e2d6f8b?auto=format&fit=crop&w=1600&q=90",
        tag: "SPECIALTY AGRICULTURE",
    },
];


const CoreDisciplines = () => {
    const [active, setActive] = useState(0);

    const current = disciplines[active];

    return (
        <section className="relative overflow-hidden bg-[#174D32]">

            {/* =====================================================
                CROP SVG BACKGROUND
            ===================================================== */}
            {/* LEFT CROP */}
            <div
                className="
        pointer-events-none
        absolute
        left-[-140px]
        top-1/2
        z-0
        -translate-y-1/2
        select-none
        opacity-[0.11]
    "
            >
                <img
                    src={CROP}
                    alt=""
                    className="
            h-[600px]
            w-auto
            object-contain
            sm:h-[700px]
            md:h-[780px]
            lg:h-[850px]
            xl:h-[950px]
        "
                />
            </div>

            {/* RIGHT CROP — MIRRORED */}
            <div
                className="
        pointer-events-none
        absolute
        right-[-120px]
        top-1/2
        z-0
        -translate-y-1/2
        select-none
        opacity-[0.11]
    "
            >
                <img
                    src={CROP2}
                    alt=""
                    className="
            h-[600px]
            w-auto
            object-contain
            scale-x-[-1]
            sm:h-[700px]
            md:h-[780px]
            lg:h-[850px]
            xl:h-[950px]
        "
                />
            </div>


            {/* =====================================================
                ADDITIONAL SOFT CROP GLOW
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[5%]
                    top-1/2
                    z-0
                    h-[500px]
                    w-[500px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#E9EF9B]/[0.025]
                    blur-[100px]
                "
            />


            {/* =====================================================
                BACKGROUND NUMBER
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    z-0
                    select-none
                    text-[260px]
                    font-medium
                    leading-none
                    tracking-[-0.1em]
                    text-white/[0.025]
                "
            >
                05
            </div>


            {/* =====================================================
                MAIN CONTENT
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
                    TOP HEADER
                ================================================= */}
                <div className="mx-auto max-w-[850px] text-center">

                    {/* Section Label */}
                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-7 bg-[#E9EF9B]" />

                        <span
                            className="
                                text-[10px]
                                font-semibold
                                tracking-[0.22em]
                                text-[#E9EF9B]
                            "
                        >
                            02 / OUR CORE DISCIPLINES
                        </span>

                        <span className="h-px w-7 bg-[#E9EF9B]" />

                    </div>


                    {/* Heading */}
                    <h2
                        className="
                            whitespace-normal
                            text-[clamp(2.5rem,3.5vw,5.8rem)]
                            font-normal
                            leading-[0.9]
                            tracking-[-0.065em]
                            text-white
                        "
                    >
                        Built around
                        <span
                            className="
                                ml-3
                                font-serif
                                italic
                                text-[#E9EF9B]
                            "
                        >
                            better agriculture.
                        </span>
                    </h2>


                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[620px]
                            text-[14px]
                            leading-[1.8]
                            text-white/50
                            sm:text-[15px]
                        "
                    >
                        Practical and innovative solutions designed around
                        the needs of crops, growers and modern sustainable
                        agriculture.
                    </p>

                </div>


                {/* =================================================
                    MAIN EXPERIENCE
                ================================================= */}
                <div
                    className="
                        mt-16
                        grid
                        min-h-[620px]
                        grid-cols-1
                        overflow-hidden
                        border
                        border-white/10
                        lg:grid-cols-[1.05fr_0.95fr]
                    "
                >

                    {/* =================================================
                        IMAGE AREA
                    ================================================= */}
                    <div
                        className="
                            relative
                            min-h-[500px]
                            overflow-hidden
                            lg:min-h-[620px]
                        "
                    >

                        <AnimatePresence mode="wait">

                            <motion.img
                                key={current.image}
                                src={current.image}
                                alt={current.title}
                                initial={{
                                    opacity: 0,
                                    scale: 1.05,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                "
                            />

                        </AnimatePresence>


                        {/* Image Overlay */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#071C10]/80
                                via-[#071C10]/10
                                to-transparent
                            "
                        />


                        {/* Top Label */}
                        <div
                            className="
                                absolute
                                left-6
                                top-6
                                flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-white/20
                                bg-black/10
                                px-4
                                py-2
                                backdrop-blur-md
                                sm:left-8
                                sm:top-8
                            "
                        >
                            <span
                                className="
                                    h-[6px]
                                    w-[6px]
                                    rounded-full
                                    bg-[#E9EF9B]
                                "
                            />

                            <span
                                className="
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.16em]
                                    text-white
                                "
                            >
                                CROPSURE / FIELD SYSTEM
                            </span>

                        </div>


                        {/* Large Number */}
                        <div
                            className="
                                absolute
                                bottom-5
                                left-6
                                sm:bottom-7
                                sm:left-8
                            "
                        >
                            <span
                                className="
                                    font-serif
                                    text-[120px]
                                    leading-none
                                    tracking-[-0.08em]
                                    text-white/10
                                    sm:text-[160px]
                                "
                            >
                                {current.number}
                            </span>
                        </div>


                        {/* Image Information */}
                        <div
                            className="
                                absolute
                                bottom-7
                                left-6
                                right-6
                                sm:bottom-9
                                sm:left-8
                                sm:right-8
                            "
                        >

                            <div
                                className="
                                    flex
                                    items-end
                                    justify-between
                                    gap-5
                                "
                            >

                                <div>

                                    <p
                                        className="
                                            text-[9px]
                                            font-semibold
                                            tracking-[0.2em]
                                            text-[#E9EF9B]
                                        "
                                    >
                                        {current.tag}
                                    </p>

                                    <h3
                                        className="
                                            mt-2
                                            text-[clamp(2rem,4vw,3.8rem)]
                                            font-medium
                                            leading-[0.92]
                                            tracking-[-0.05em]
                                            text-white
                                        "
                                    >
                                        {current.title}
                                    </h3>

                                </div>


                                <div
                                    className="
                                        hidden
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/25
                                        bg-white/10
                                        text-white
                                        backdrop-blur-md
                                        sm:flex
                                    "
                                >
                                    <ArrowUpRight size={17} />
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        DISCIPLINE LIST
                    ================================================= */}
                    <div className="flex flex-col justify-center bg-[#123E28]">

                        <div className="px-6 py-10 sm:px-10 lg:px-12">

                            {/* Small Heading */}
                            <div
                                className="
                                    mb-7
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <span
                                    className="
                                        text-[9px]
                                        font-semibold
                                        tracking-[0.2em]
                                        text-white/35
                                    "
                                >
                                    AREAS OF EXPERTISE
                                </span>

                                <span
                                    className="
                                        text-[9px]
                                        font-medium
                                        tracking-[0.15em]
                                        text-white/25
                                    "
                                >
                                    {String(active + 1).padStart(2, "0")} / 05
                                </span>

                            </div>


                            {/* List */}
                            <div className="border-t border-white/10">

                                {disciplines.map((discipline, index) => {

                                    const Icon = discipline.icon;
                                    const isActive = index === active;

                                    return (
                                        <button
                                            key={discipline.number}
                                            type="button"
                                            onMouseEnter={() => setActive(index)}
                                            onClick={() => setActive(index)}
                                            className="
                                                group
                                                block
                                                w-full
                                                border-b
                                                border-white/10
                                                text-left
                                            "
                                        >

                                            <div
                                                className={`
                                                    relative
                                                    flex
                                                    items-center
                                                    gap-4
                                                    py-5
                                                    transition-all
                                                    duration-300
                                                    sm:py-6
                                                    ${isActive
                                                        ? "text-white"
                                                        : "text-white/45"
                                                    }
                                                `}
                                            >

                                                {/* Active Line */}
                                                <span
                                                    className={`
                                                        absolute
                                                        left-0
                                                        top-0
                                                        h-full
                                                        w-[2px]
                                                        bg-[#E9EF9B]
                                                        transition-all
                                                        duration-300
                                                        ${isActive
                                                            ? "opacity-100"
                                                            : "opacity-0"
                                                        }
                                                    `}
                                                />


                                                {/* Number */}
                                                <span
                                                    className={`
                                                        w-8
                                                        shrink-0
                                                        pl-2
                                                        font-serif
                                                        text-[18px]
                                                        tracking-[-0.04em]
                                                        transition-colors
                                                        duration-300
                                                        ${isActive
                                                            ? "text-[#E9EF9B]"
                                                            : "text-white/20"
                                                        }
                                                    `}
                                                >
                                                    {discipline.number}
                                                </span>


                                                {/* Icon */}
                                                <span
                                                    className={`
                                                        flex
                                                        h-9
                                                        w-9
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-[6px]
                                                        transition-all
                                                        duration-300
                                                        ${isActive
                                                            ? "bg-[#E9EF9B] text-[#174D32]"
                                                            : "bg-white/[0.06] text-white/30"
                                                        }
                                                    `}
                                                >
                                                    <Icon
                                                        size={15}
                                                        strokeWidth={1.7}
                                                    />
                                                </span>


                                                {/* Title */}
                                                <span
                                                    className={`
                                                        flex-1
                                                        text-[15px]
                                                        font-medium
                                                        tracking-[-0.02em]
                                                        transition-all
                                                        duration-300
                                                        sm:text-[17px]
                                                        ${isActive
                                                            ? "translate-x-1 text-white"
                                                            : ""
                                                        }
                                                    `}
                                                >
                                                    {discipline.title}
                                                </span>


                                                {/* Arrow */}
                                                <ArrowUpRight
                                                    size={16}
                                                    className={`
                                                        shrink-0
                                                        transition-all
                                                        duration-300
                                                        ${isActive
                                                            ? "translate-x-0 text-[#E9EF9B] opacity-100"
                                                            : "-translate-x-2 opacity-0"
                                                        }
                                                    `}
                                                />

                                            </div>


                                            {/* Active Description */}
                                            <AnimatePresence initial={false}>

                                                {isActive && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.3,
                                                        }}
                                                    >

                                                        <p
                                                            className="
                                                                max-w-[430px]
                                                                pb-6
                                                                pl-[78px]
                                                                pr-5
                                                                text-[11px]
                                                                leading-[1.7]
                                                                text-white/40
                                                            "
                                                        >
                                                            {
                                                                discipline.description
                                                            }
                                                        </p>

                                                    </motion.div>
                                                )}

                                            </AnimatePresence>

                                        </button>
                                    );
                                })}

                            </div>


                            {/* Bottom */}
                            <div
                                className="
                                    mt-8
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                <span
                                    className="
                                        text-[8px]
                                        tracking-[0.18em]
                                        text-white/25
                                    "
                                >
                                    RESEARCH → DEVELOPMENT → FIELD
                                </span>

                                <a
                                    href="/solutions"
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-[10px]
                                        font-semibold
                                        text-[#E9EF9B]
                                    "
                                >
                                    Explore disciplines

                                    <ArrowUpRight
                                        size={13}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM STATEMENT
                ================================================= */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        justify-between
                        gap-4
                        border-t
                        border-white/10
                        pt-6
                        sm:flex-row
                        sm:items-center
                    "
                >

                    <p
                        className="
                            text-[9px]
                            tracking-[0.18em]
                            text-white/25
                        "
                    >
                        SCIENCE • AGRONOMY • PERFORMANCE • SUSTAINABILITY
                    </p>

                    <p
                        className="
                            text-[9px]
                            tracking-[0.18em]
                            text-white/20
                        "
                    >
                        CROPSURE / 02
                    </p>

                </div>

            </div>

        </section>
    );
};

export default CoreDisciplines;