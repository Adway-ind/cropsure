import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#071C10]">

            {/* =====================================================
                BACKGROUND IMAGE
            ===================================================== */}
            <motion.img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90"
                alt="Agricultural landscape"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 2,
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

            {/* =====================================================
                IMAGE OVERLAY
            ===================================================== */}

            {/* Overall darkening */}
            <div
                className="
                    absolute
                    inset-0
                    bg-black/30
                "
            />

            {/* Left / center readability */}
            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#071C10]/55
                    via-[#071C10]/25
                    to-transparent
                "
            />

            {/* Bottom darkness */}
            <div
                className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[45%]
                    bg-gradient-to-t
                    from-[#071C10]/90
                    via-[#071C10]/35
                    to-transparent
                "
            />

            {/* Top subtle darkness */}
            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-[25%]
                    bg-gradient-to-b
                    from-[#071C10]/45
                    to-transparent
                "
            />


            {/* =====================================================
                SUBTLE TECHNICAL GRID
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.07]
                    [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)]
                    [background-size:100px_100px]
                "
            />


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    flex
                    min-h-screen
                    flex-col
                    items-center
                    justify-center
                    px-6
                    pb-32
                    pt-32
                    text-center
                "
            >

                {/* =================================================
                    EYEBROW
                ================================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.15,
                    }}
                    className="
                        mb-7
                        flex
                        items-center
                        gap-3
                    "
                >
                    <span
                        className="
                            h-px
                            w-8
                            bg-[#E9EF9B]
                        "
                    />

                    <span
                        className="
                            text-[9px]
                            font-semibold
                            tracking-[0.24em]
                            text-[#E9EF9B]
                            sm:text-[10px]
                        "
                    >
                        01 / ABOUT CROPSURE
                    </span>

                    <span
                        className="
                            h-px
                            w-8
                            bg-[#E9EF9B]
                        "
                    />
                </motion.div>


                {/* =================================================
                    MAIN HEADING
                ================================================= */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 35,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        max-w-[1200px]
                        text-[clamp(2.2rem,6vw,6.5rem)]
                        font-semibold
                        leading-[0.92]
                        tracking-[-0.065em]
                        text-white
                    "
                >
                    Rooted in{" "}
                    <span className="text-[#E9EF9B]">
                        science.
                    </span>

                    <br />

                    Driven by{" "}
                    <span className="text-[#E9EF9B]">
                        agriculture.
                    </span>
                </motion.h1>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mt-7
                        max-w-[650px]
                        text-[13px]
                        leading-[1.55]
                        text-white/85
                        sm:text-[14px]
                        md:text-[15px]
                    "
                >
                    CropSure connects agricultural science, field knowledge
                    and responsible innovation to create practical solutions
                    for modern agriculture.
                </motion.p>


                {/* =================================================
                    CTA
                ================================================= */}
                <motion.a
                    href="#story"
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                    }}
                    className="
                        group
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        rounded-[12px]
                        bg-[#E9EF9B]
                        px-6
                        py-3
                        text-[13px]
                        font-medium
                        text-[#172019]
                        shadow-[0_8px_30px_rgba(233,239,155,0.15)]
                        transition-all
                        duration-300
                        hover:bg-[#F1F5B5]
                        hover:shadow-[0_10px_35px_rgba(233,239,155,0.25)]
                    "
                >
                    <span>
                        Our Story
                    </span>

                    <ArrowUpRight
                        size={15}
                        strokeWidth={2}
                        className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                        "
                    />
                </motion.a>


                {/* =================================================
                    LARGE CROPSURE BACKGROUND TYPE
                ================================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1.2,
                        delay: 0.65,
                    }}
                    className="
                        pointer-events-none
                        absolute
                        bottom-[6%]
                        left-1/2
                        -translate-x-1/2
                        select-none
                        whitespace-nowrap
                    "
                >
                    <span
                        className="
                            text-[24vw]
                            font-bold
                            leading-none
                            tracking-[-0.09em]
                            text-white/[0.13]
                            sm:text-[22vw]
                            lg:text-[20vw]
                        "
                    >
                        CROPSURE
                    </span>
                </motion.div>


                {/* =================================================
                    BOTTOM INFORMATION BAR
                ================================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                    }}
                    className="
                        absolute
                        bottom-6
                        left-6
                        right-6
                        z-20
                        border-t
                        border-white/20
                        pt-4
                        sm:left-8
                        sm:right-8
                        lg:left-10
                        lg:right-10
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        {/* Left */}
                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-x-6
                                gap-y-2
                            "
                        >
                            {[
                                "SCIENCE",
                                "AGRONOMY",
                                "INNOVATION",
                                "FIELD",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                    "
                                >
                                    <span
                                        className="
                                            text-[7px]
                                            font-semibold
                                            tracking-[0.18em]
                                            text-white/55
                                            sm:text-[8px]
                                        "
                                    >
                                        {item}
                                    </span>

                                    <span
                                        className="
                                            text-[7px]
                                            text-[#E9EF9B]/60
                                        "
                                    >
                                        0{index + 1}
                                    </span>
                                </div>
                            ))}
                        </div>


                        {/* Right */}
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    text-[7px]
                                    font-semibold
                                    tracking-[0.18em]
                                    text-white/45
                                    sm:text-[8px]
                                "
                            >
                                SCROLL TO EXPLORE
                            </span>

                            <span
                                className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/20
                                    text-[#E9EF9B]
                                "
                            >
                                <ArrowDown size={12} />
                            </span>
                        </div>

                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default AboutHero;