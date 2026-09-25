import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
    {
        number: "01",
        title: "Science",
        description:
            "Evidence-led thinking and agricultural knowledge guide the way we understand crops, fields and changing conditions.",
    },
    {
        number: "02",
        title: "Precision",
        description:
            "Solutions are shaped around specific crop requirements, field conditions and the practical realities of agriculture.",
    },
    {
        number: "03",
        title: "Responsibility",
        description:
            "We consider performance alongside responsible agricultural practices and the long-term health of the growing environment.",
    },
    {
        number: "04",
        title: "Progress",
        description:
            "Continuous learning and field experience help us improve how agricultural challenges are understood and approached.",
    },
];

const WhatGuidesUs = () => {
    return (
        <section
            id="values"
            className="
                relative
                overflow-hidden
                bg-[#F5F7EF]
            "
        >
            {/* =====================================================
                LARGE BACKGROUND NUMBER
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-50px]
                    top-[-90px]
                    select-none
                    font-serif
                    text-[320px]
                    leading-none
                    tracking-[-0.1em]
                    text-[#174D32]/[0.035]
                    sm:text-[420px]
                    lg:text-[520px]
                "
            >
                04
            </div>

            {/* =====================================================
                SUBTLE GREEN GLOW
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    left-[-180px]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#4F8F45]/[0.05]
                    blur-[120px]
                "
            />

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
                    lg:py-32
                    xl:py-36
                "
            >

                {/* =================================================
                        HEADER
                ================================================= */}

                <div className="relative">

                    {/* Section Label */}
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
                w-8
                bg-[#174D32]
            "
                        />

                        <span
                            className="
                text-[9px]
                font-semibold
                tracking-[0.24em]
                text-[#174D32]
                sm:text-[10px]
            "
                        >
                            04 / WHAT GUIDES US
                        </span>

                        <span
                            className="
                h-px
                w-8
                bg-[#174D32]
            "
                        />
                    </motion.div>


                    {/* Main Heading */}
                    <motion.div
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
                            delay: 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
            mx-auto
            mt-6
            max-w-[1250px]
            text-center
        "
                    >
                        <h2
                            className="
                text-[clamp(2.2rem,5vw,6rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.07em]
                text-[#172019]
            "
                        >
                            Principles that shape how we move agriculture{" "}
                            <span
                                className="
                    font-serif
                    italic
                    text-[#174D32]
                "
                            >
                                forward.
                            </span>
                        </h2>
                    </motion.div>

                </div>


                {/* =================================================
                    INTRO
                ================================================= */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="
        mx-auto
        mt-10
        max-w-[600px]
        text-[13px]
        leading-[1.8]
        text-[#172019]/50
        sm:text-[14px]
        lg:text-center
    "
                >
                    The way we approach agriculture is grounded in a few
                    principles that influence how we think, develop solutions
                    and respond to the realities of the field.
                </motion.p>


                {/* =================================================
                    PRINCIPLES
                ================================================= */}
                <div className="mt-16 lg:mt-20">

                    <div className="border-t border-[#174D32]/15">

                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.number}
                                initial={{
                                    opacity: 0,
                                    y: 20,
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
                                    delay: index * 0.08,
                                }}
                                className="
                                    group
                                    relative
                                    border-b
                                    border-[#174D32]/15
                                "
                            >

                                {/* =================================================
                                    ROW
                                ================================================= */}
                                <div
                                    className="
                                        relative
                                        grid
                                        grid-cols-[55px_1fr]
                                        gap-5
                                        py-8
                                        transition-all
                                        duration-500
                                        sm:grid-cols-[80px_0.8fr_1.2fr_40px]
                                        sm:items-center
                                        sm:gap-8
                                        sm:py-9
                                        lg:py-11
                                    "
                                >

                                    {/* Number */}
                                    <span
                                        className="
                                            font-serif
                                            text-[17px]
                                            tracking-[-0.04em]
                                            text-[#174D32]/50
                                            transition-colors
                                            duration-300
                                            group-hover:text-[#174D32]
                                            sm:text-[20px]
                                        "
                                    >
                                        {principle.number}
                                    </span>


                                    {/* Title */}
                                    <div>
                                        <h3
                                            className="
                                                text-[28px]
                                                font-medium
                                                capitalize
                                                tracking-[-0.05em]
                                                text-[#172019]
                                                transition-transform
                                                duration-500
                                                group-hover:translate-x-1
                                                sm:text-[34px]
                                                lg:text-[42px]
                                            "
                                        >
                                            {principle.title}
                                        </h3>

                                        {/* Accent */}
                                        <span
                                            className="
                                                mt-3
                                                block
                                                h-px
                                                w-8
                                                bg-[#174D32]
                                                transition-all
                                                duration-500
                                                group-hover:w-16
                                                sm:hidden
                                            "
                                        />
                                    </div>


                                    {/* Description */}
                                    <p
                                        className="
                                            col-span-2
                                            max-w-[520px]
                                            text-[12px]
                                            leading-[1.8]
                                            text-[#172019]/45
                                            sm:col-span-1
                                            sm:text-[13px]
                                            lg:text-[14px]
                                        "
                                    >
                                        {principle.description}
                                    </p>


                                    {/* Arrow */}
                                    <div
                                        className="
                                            absolute
                                            right-0
                                            top-1/2
                                            hidden
                                            h-10
                                            w-10
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-[#174D32]/15
                                            text-[#174D32]/40
                                            transition-all
                                            duration-300
                                            group-hover:border-[#174D32]
                                            group-hover:bg-[#174D32]
                                            group-hover:text-[#E9EF9B]
                                            sm:flex
                                        "
                                    >
                                        <ArrowUpRight
                                            size={15}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </div>

                                </div>


                                {/* =================================================
                                    HOVER ACCENT
                                ================================================= */}
                                <span
                                    className="
                                        absolute
                                        bottom-[-1px]
                                        left-0
                                        h-[2px]
                                        w-0
                                        bg-[#E9EF9B]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                            </motion.div>
                        ))}

                    </div>
                </div>


                {/* =================================================
                    BOTTOM SYSTEM BAR
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
                    }}
                    className="
                        mt-8
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-[#174D32]/10
                        pt-5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <span
                        className="
                            text-[8px]
                            tracking-[0.2em]
                            text-[#172019]/30
                        "
                    >
                        SCIENCE • PRECISION • RESPONSIBILITY • PROGRESS
                    </span>

                    <span
                        className="
                            text-[8px]
                            tracking-[0.18em]
                            text-[#172019]/25
                        "
                    >
                        CROPSURE / 04
                    </span>
                </motion.div>

            </div>
        </section>
    );
};

export default WhatGuidesUs;