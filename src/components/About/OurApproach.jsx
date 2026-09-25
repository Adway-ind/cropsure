import { motion } from "framer-motion";
import {
    Microscope,
    FlaskConical,
    Sprout,
    ArrowUpRight,
} from "lucide-react";

import CROP from "../src/assets/image/Crop_bg.svg";

const approachSteps = [
    {
        number: "01",
        title: "Understand",
        icon: Microscope,
        description:
            "We begin by understanding crops, soil, growing conditions and the challenges faced in the field.",
    },
    {
        number: "02",
        title: "Develop",
        icon: FlaskConical,
        description:
            "Agricultural knowledge and innovation come together to develop practical solutions around specific field needs.",
    },
    {
        number: "03",
        title: "Validate",
        icon: Sprout,
        description:
            "Solutions are evaluated with a focus on practical application, crop performance and real-world conditions.",
    },
    {
        number: "04",
        title: "Improve",
        icon: ArrowUpRight,
        description:
            "Continuous learning and field understanding help us refine solutions and move agriculture forward.",
    },
];

const OurApproach = () => {
    return (
        <section
            id="approach"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-[#174D32]
            "
        >
            {/* =====================================================
                CROP BACKGROUND
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-10px]
                    left-[-80px]
                    z-0
                    select-none
                    opacity-[0.32]
                "
            >
                <img
                    src={CROP}
                    alt=""
                    className="
                        h-[430px]
                        w-auto
                        hidden
                        sm:flex
                        object-contain
                        sm:h-[500px]
                        md:h-[560px]
                        lg:h-[620px]
                        xl:h-[680px]
                    "
                />
            </div>
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-10px]
                    right-[-80px]
                    z-0
                    select-none
                    opacity-[0.32]
                "
            >
                <img
                    src={CROP}
                    alt=""
                    className="
                    scale-x-[-1]
                        h-[430px]
                        w-auto
                        hidden
                        sm:flex
                        object-contain
                        sm:h-[500px]
                        md:h-[560px]
                        lg:h-[620px]
                        xl:h-[680px]
                    "
                />
            </div>

            {/* =====================================================
                SOFT RIGHT GLOW
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-1/2
                    z-0
                    h-[550px]
                    w-[550px]
                    -translate-y-1/2
                    rounded-full
                    bg-[#E9EF9B]/[0.025]
                    blur-[130px]
                "
            />

            {/* =====================================================
                LARGE BACKGROUND NUMBER
            ===================================================== */}
            {/* <div
                className="
                    pointer-events-none
                    absolute
                    right-[-50px]
                    top-[-100px]
                    z-0
                    select-none
                    font-serif
                    text-[360px]
                    leading-none
                    tracking-[-0.1em]
                    text-white/[0.025]
                    lg:text-[480px]
                "
            >
                03
            </div> */}

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1440px]
                    px-6
                    py-24
                    sm:px-8
                    lg:px-10
                    lg:py-28
                    xl:py-32
                "
            >

                {/* =================================================
                    HEADER
                ================================================= */}
                <div className="text-center">

                    {/* Label */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                h-px
                                w-7
                                bg-[#E9EF9B]
                            "
                        />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                tracking-[0.22em]
                                text-[#E9EF9B]
                                sm:text-[10px]
                            "
                        >
                            03 / OUR APPROACH
                        </span>

                        <span
                            className="
                                h-px
                                w-7
                                bg-[#E9EF9B]
                            "
                        />
                    </motion.div>


                    {/* Heading */}
                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            mx-auto
                            mt-6
                            max-w-[950px]
                            text-[clamp(2.2rem,5.5vw,6rem)]
                            font-normal
                            leading-[0.9]
                            tracking-[-0.07em]
                            text-white
                        "
                    >
                        From understanding
                        <br />

                        to{" "}
                        <span
                            className="
                                font-serif
                                italic
                                text-[#E9EF9B]
                            "
                        >
                            meaningful solutions.
                        </span>
                    </motion.h2>


                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.25,
                        }}
                        className="
                            mx-auto
                            mt-7
                            max-w-[650px]
                            text-[12px]
                            leading-[1.65]
                            text-white/55
                            sm:text-[13px]
                            md:text-[14px]
                        "
                    >
                        Our approach connects agricultural science with
                        practical field understanding. Every stage is guided
                        by the needs of crops, growers and changing
                        agricultural conditions.
                    </motion.p>

                </div>


                {/* =================================================
    PROCESS GRID
================================================= */}

                <div className="relative mt-14 lg:mt-16">

                    <div
                        className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
        "
                    >
                        {approachSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                        group
                        relative
                        min-h-[310px]
                        overflow-hidden
                        border
                        border-white/15
                        bg-[#123E28]/45
                        px-6
                        py-7
                        transition-all
                        duration-500
                        hover:border-[#E9EF9B]/40
                        hover:bg-[#123E28]/70
                        sm:px-7
                        lg:min-h-[330px]
                        lg:px-8
                        xl:px-9
                    "
                                >

                                    {/* =================================================
                        VERY SUBTLE HOVER GLOW
                    ================================================= */}
                                    <div
                                        className="
                            pointer-events-none
                            absolute
                            -bottom-20
                            -right-20
                            h-40
                            w-40
                            rounded-full
                            bg-[#E9EF9B]/[0.04]
                            opacity-0
                            blur-3xl
                            transition-opacity
                            duration-500
                            group-hover:opacity-100
                        "
                                    />

                                    {/* =================================================
                        TOP
                    ================================================= */}
                                    <div
                                        className="
                            relative
                            z-10
                            flex
                            items-center
                            justify-between
                        "
                                    >
                                        <span
                                            className="
                                font-serif
                                text-[20px]
                                tracking-[-0.04em]
                                text-[#E9EF9B]
                            "
                                        >
                                            {step.number}
                                        </span>

                                        <div
                                            className="
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                border
                                border-white/15
                                bg-white/[0.025]
                                text-white/45
                                transition-all
                                duration-300
                                group-hover:border-[#E9EF9B]/50
                                group-hover:bg-[#E9EF9B]
                                group-hover:text-[#174D32]
                            "
                                        >
                                            <Icon
                                                size={15}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                    </div>


                                    {/* =================================================
                        TITLE
                    ================================================= */}
                                    <div className="relative z-10 mt-16">

                                        <h3
                                            className="
                                text-[22px]
                                font-medium
                                tracking-[-0.04em]
                                text-white
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                sm:text-[24px]
                            "
                                        >
                                            {step.title}
                                        </h3>

                                        <div
                                            className="
                                mt-4
                                h-px
                                w-8
                                bg-[#E9EF9B]/60
                                transition-all
                                duration-300
                                group-hover:w-14
                            "
                                        />

                                    </div>


                                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}
                                    <p
                                        className="
                            relative
                            z-10
                            mt-5
                            max-w-[270px]
                            text-[11px]
                            leading-[1.8]
                            text-white/55
                            sm:text-[12px]
                        "
                                    >
                                        {step.description}
                                    </p>


                                    {/* =================================================
                        BOTTOM STEP INDICATOR
                    ================================================= */}
                                    <div
                                        className="
                            absolute
                            bottom-5
                            right-6
                            text-[8px]
                            font-medium
                            tracking-[0.15em]
                            text-white/15
                            transition-colors
                            duration-300
                            group-hover:text-[#E9EF9B]/40
                            sm:right-7
                            lg:right-8
                        "
                                    >
                                        0{index + 1} / 04
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>

                </div>


                {/* =================================================
                    BOTTOM INFORMATION
                ================================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="
                        relative
                        mt-7
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/10
                        pt-5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <span
                        className="
                            text-[7px]
                            tracking-[0.2em]
                            text-white/25
                            sm:text-[8px]
                        "
                    >
                        RESEARCH → DEVELOPMENT → FIELD
                    </span>

                    <span
                        className="
                            text-[7px]
                            tracking-[0.18em]
                            text-white/20
                            sm:text-[8px]
                        "
                    >
                        CROPSURE / 03
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default OurApproach;