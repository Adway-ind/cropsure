import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FinalTransition = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#06170E]">

            {/* =====================================================
                AGRICULTURAL BACKGROUND
            ===================================================== */}
            <div className="absolute inset-0">

                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90"
                    alt="Agricultural field"
                    className="h-full w-full object-cover"
                />

                {/* Green colour tone */}
                <div className="absolute inset-0 bg-[#174D32]/15" />

                {/* Top darkening */}
                <div
                    className="
                        absolute
                        inset-x-0
                        top-0
                        h-[58%]
                        bg-gradient-to-b
                        from-[#07170E]/55
                        via-[#07170E]/25
                        to-transparent
                    "
                />

                {/* Bottom dark fade */}
                <div
                    className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-[55%]
                        bg-gradient-to-t
                        from-[#06170E]
                        via-[#06170E]/80
                        to-transparent
                    "
                />

            </div>


            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}
            <div
                className="
                    relative
                    z-20
                    flex
                    min-h-[72vh]
                    items-start
                    justify-center
                    px-6
                    pt-24
                    text-center
                    sm:pt-28
                    lg:pt-32
                "
            >

                {/* Soft content backdrop */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-[7%]
                        h-[500px]
                        w-[900px]
                        -translate-x-1/2
                        rounded-full
                        bg-[#07170E]/30
                        blur-[90px]
                    "
                />


                {/* CONTENT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 12,
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
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        relative
                        z-30
                        max-w-[1050px]
                    "
                >

                    {/* =================================================
                        EYEBROW
                    ================================================= */}
                    <div className="mb-7 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-[#E9EF9B]" />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                tracking-[0.24em]
                                text-[#E9EF9B]
                                drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]
                            "
                        >
                            06 / LET&apos;S CONNECT
                        </span>

                        <span className="h-px w-8 bg-[#E9EF9B]" />

                    </div>


                    {/* =================================================
                        MAIN HEADING
                    ================================================= */}
                    <h2
                        className="
                            text-[clamp(3.5rem,7.5vw,8rem)]
                            font-normal
                            leading-[0.82]
                            tracking-[-0.075em]
                            text-white
                            drop-shadow-[0_5px_20px_rgba(0,0,0,0.35)]
                        "
                    >
                        Let&apos;s grow{" "}
                        <span
                            className="
                                font-serif
                                italic
                                text-[#E9EF9B]
                                drop-shadow-[0_5px_18px_rgba(0,0,0,0.45)]
                            "
                        >
                            what&apos;s next.
                        </span>
                    </h2>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}
                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-[620px]
                            text-[13px]
                            font-medium
                            leading-[1.8]
                            text-white
                            drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]
                            sm:text-[14px]
                        "
                    >
                        Better crops. Better decisions. Better possibilities
                        for modern agriculture. Let&apos;s build solutions
                        that move the field forward.
                    </p>


                    {/* =================================================
                        CTA
                    ================================================= */}
                    <a
                        href="/contact"
                        className="
                            group
                            mx-auto
                            mt-9
                            flex
                            h-12
                            w-fit
                            items-center
                            gap-3
                            rounded-full
                            bg-[#E9EF9B]
                            px-7
                            text-[10px]
                            font-semibold
                            text-[#172019]
                            shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                            transition-all
                            duration-300
                            hover:bg-white
                            hover:shadow-[0_12px_35px_rgba(0,0,0,0.28)]
                        "
                    >
                        <span>Talk to CropSure</span>

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
                    </a>

                </motion.div>

            </div>


            {/* =====================================================
                LARGE CROPSURE TYPOGRAPHY
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-[100px]
                    z-10
                    overflow-hidden
                "
            >

                {/* TOP ROW */}
                <motion.div
                    className="
                        flex
                        w-max
                        whitespace-nowrap
                        mb-5
                    "
                    animate={{
                        x: ["0%", "-18%"],
                    }}
                    transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                </motion.div>


                {/* BOTTOM ROW */}
                <motion.div
                    className="
                        flex
                        w-max
                        whitespace-nowrap
                    "
                    animate={{
                        x: ["-18%", "0%"],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >

                    <span
                        className="
                            text-[clamp(5rem,2vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                    <span
                        className="
                            text-[clamp(5rem,4vw,10rem)]
                            font-normal
                            leading-[0.78]
                            tracking-[-0.065em]
                            text-white/[0.28]
                        "
                    >
                        CROPSURE&nbsp;&nbsp;&nbsp;
                    </span>

                </motion.div>

            </div>


            {/* =====================================================
                FOOTER TRANSITION
            ===================================================== */}
            {/* <div
                className="
                    relative
                    z-40
                    mx-auto
                    max-w-[1440px]
                    px-6
                    pb-8
                    lg:px-10
                "
            >

                <div className="border-t border-white/15 pt-6">

                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            gap-4
                            sm:flex-row
                            sm:items-center
                        "
                    >

                        <p
                            className="
                                text-[9px]
                                tracking-[0.2em]
                                text-white/45
                            "
                        >
                            AGRICULTURAL SCIENCE • FIELD PERFORMANCE •
                            SUSTAINABLE GROWTH
                        </p>

                        <p
                            className="
                                text-[9px]
                                tracking-[0.2em]
                                text-white/40
                            "
                        >
                            CROPSURE / 06
                        </p>

                    </div>

                </div>

            </div> */}

        </section>
    );
};

export default FinalTransition;