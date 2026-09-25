import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
    {
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=90",
        label: "FIELD / 05.01",
    },
    {
        image:
            "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=90",
        label: "CROP / 05.02",
    },
    {
        image:
            "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=1800&q=90",
        label: "RESEARCH / 05.03",
    },
    {
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90",
        label: "AGRICULTURE / 05.04",
    },
];

const keywords = [
    "SCIENCE",
    "FIELD",
    "BIOLOGY",
    "PRECISION",
    "CROP",
    "AGRONOMY",
    "SOIL",
    "INNOVATION",
    "GROWTH",
];

const slideVariants = {
    enter: {
        x: "100%",
        scale: 1.04,
    },
    center: {
        x: 0,
        scale: 1,
    },
    exit: {
        x: "-100%",
        scale: 1.02,
    },
};

const AgricultureReframed = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    /* -------------------------------- */
    /* AUTO SLIDER */
    /* -------------------------------- */

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    /* -------------------------------- */
    /* MANUAL SLIDE */
    /* -------------------------------- */

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    return (
        <section
            id="reframed"
            className="relative overflow-hidden bg-[#0B2F20] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36"
        >
            {/* =========================================
                BACKGROUND NUMBER
            ========================================= */}

            <div className="pointer-events-none absolute right-[-3%] top-[-5%] select-none">
                <span className="text-[30vw] font-bold leading-none tracking-[-0.1em] text-white/[0.025] sm:text-[24vw] lg:text-[22vw]">
                    05
                </span>
            </div>

            {/* =========================================
                BACKGROUND CROPSURE
            ========================================= */}

            <div className="pointer-events-none absolute bottom-[-2vw] left-1/2 hidden -translate-x-1/2 select-none whitespace-nowrap lg:block">
                <span className="text-[19vw] font-bold leading-none tracking-[-0.09em] text-white/[0.025]">
                    CROPSURE
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-[1380px]">

                {/* =========================================
                    SECTION LABEL
                ========================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex items-center justify-center gap-3"
                >
                    <span className="h-px w-7 bg-[#E9EF9B] sm:w-8" />

                    <span className="text-[8px] font-semibold tracking-[0.24em] text-[#E9EF9B] sm:text-[10px]">
                        05 / AGRICULTURE, REFRAMED
                    </span>

                    <span className="h-px w-7 bg-[#E9EF9B] sm:w-8" />
                </motion.div>

                {/* =========================================
                    MAIN HEADING
                ========================================= */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-8 max-w-[1050px] text-center sm:mt-10"
                >
                    <h2 className="text-[clamp(2.2rem,7vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
                        Agriculture isn't
                        <br />

                        <span className="text-white">
                            static.
                        </span>{" "}

                        <span className="font-serif italic text-[#E9EF9B]">
                            It evolves.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[570px] text-[12px] leading-[1.7] text-white/55 sm:mt-8 sm:text-[14px]">
                        The field is constantly changing. Our understanding,
                        technology and solutions should evolve with it.
                    </p>
                </motion.div>

                {/* =========================================
                    DESKTOP VISUAL
                ========================================= */}

                <div className="relative mx-auto mt-16 hidden max-w-[1180px] sm:mt-20 lg:mt-24 lg:block">

                    <div className="relative min-h-[590px]">

                        {/* ---------------------------------
                            LEFT TEXT
                        --------------------------------- */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="absolute left-0 top-[12%] z-20"
                        >
                            <p className="text-[10px] font-semibold tracking-[0.3em] text-white/30">
                                UNDERSTANDING
                            </p>

                            <p className="mt-3 text-[34px] font-medium leading-none tracking-[-0.05em] text-white">
                                Science
                            </p>

                            <div className="mt-5 h-px w-20 bg-[#E9EF9B]" />
                        </motion.div>

                        {/* ---------------------------------
                            LEFT CONNECTING LINE
                        --------------------------------- */}

                        <div className="absolute left-[17%] top-[22%] h-px w-[18%] bg-white/10" />

                        {/* ---------------------------------
                            IMAGE SLIDER
                        --------------------------------- */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.94,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute left-1/2 top-1/2 z-10 h-[500px] w-[560px] -translate-x-1/2 -translate-y-1/2"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* IMAGE SHAPE */}

                            <div
                                className="relative h-full w-full overflow-hidden"
                                style={{
                                    clipPath:
                                        "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
                                }}
                            >
                                <AnimatePresence
                                    initial={false}
                                    mode="sync"
                                >
                                    <motion.img
                                        key={activeSlide}
                                        src={slides[activeSlide].image}
                                        alt={slides[activeSlide].label}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            duration: 0.8,
                                            ease: [
                                                0.22,
                                                1,
                                                0.36,
                                                1,
                                            ],
                                        }}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                </AnimatePresence>

                                {/* Green overlay */}

                                <div className="pointer-events-none absolute inset-0 bg-[#174D32]/15 mix-blend-multiply" />

                                {/* Bottom gradient */}

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071C10]/65 via-transparent to-transparent" />

                                {/* Image label */}

                                <div className="absolute bottom-7 left-10 z-20">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={slides[activeSlide].label}
                                            initial={{
                                                opacity: 0,
                                                y: 8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -8,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="text-[8px] font-semibold tracking-[0.25em] text-white/70"
                                        >
                                            {slides[activeSlide].label}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* ---------------------------------
                                SLIDER PROGRESS
                            --------------------------------- */}

                            <div className="absolute bottom-[-28px] left-1/2 flex -translate-x-1/2 items-center gap-2">
                                {slides.map((slide, index) => (
                                    <button
                                        key={slide.label}
                                        type="button"
                                        aria-label={`Go to slide ${index + 1}`}
                                        onClick={() =>
                                            goToSlide(index)
                                        }
                                        className="group relative h-[3px] p-0"
                                    >
                                        <span
                                            className={`block h-[2px] transition-all duration-500 ${
                                                activeSlide === index
                                                    ? "w-9 bg-[#E9EF9B]"
                                                    : "w-3 bg-white/20 group-hover:bg-white/50"
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        {/* ---------------------------------
                            RIGHT TEXT
                        --------------------------------- */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                            }}
                            className="absolute right-0 top-[28%] z-20 text-right"
                        >
                            <p className="text-[10px] font-semibold tracking-[0.3em] text-white/30">
                                RESPONDING
                            </p>

                            <p className="mt-3 text-[34px] font-medium leading-none tracking-[-0.05em] text-[#E9EF9B]">
                                Precision
                            </p>

                            <div className="ml-auto mt-5 h-px w-20 bg-[#E9EF9B]" />
                        </motion.div>

                        {/* ---------------------------------
                            RIGHT CONNECTING LINE
                        --------------------------------- */}

                        <div className="absolute right-[17%] top-[39%] h-px w-[18%] bg-white/10" />

                        {/* ---------------------------------
                            BOTTOM WORDS
                        --------------------------------- */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                            }}
                            className="absolute bottom-[7%] left-[5%] z-20"
                        >
                            <span className="text-[9px] font-semibold tracking-[0.28em] text-white/30">
                                SOIL
                            </span>

                            <span className="mx-4 text-white/15">
                                /
                            </span>

                            <span className="text-[9px] font-semibold tracking-[0.28em] text-white/30">
                                BIOLOGY
                            </span>

                            <span className="mx-4 text-white/15">
                                /
                            </span>

                            <span className="text-[9px] font-semibold tracking-[0.28em] text-white/30">
                                GROWTH
                            </span>
                        </motion.div>
                    </div>

                    {/* =====================================
                        DESKTOP CLOSING STATEMENT
                    ===================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mt-4 flex items-end justify-between border-t border-white/10 pt-6"
                    >
                        <div>
                            <p className="text-[9px] font-semibold tracking-[0.25em] text-white/30">
                                OUR RESPONSE
                            </p>

                            <p className="mt-3 text-[25px] font-medium leading-none tracking-[-0.04em]">
                                So should the way we{" "}
                                <span className="font-serif italic text-[#E9EF9B]">
                                    solve for it.
                                </span>
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.2em] text-white/30">
                            EXPLORE
                            <ArrowUpRight size={13} />
                        </div>
                    </motion.div>
                </div>

                {/* =========================================
                    TABLET
                ========================================= */}

                <div className="relative mx-auto mt-16 hidden max-w-[720px] sm:mt-20 sm:block lg:hidden">

                    {/* Image */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 35,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.9,
                        }}
                        className="relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="relative h-[520px] overflow-hidden">

                            <AnimatePresence
                                initial={false}
                                mode="sync"
                            >
                                <motion.img
                                    key={activeSlide}
                                    src={slides[activeSlide].image}
                                    alt={slides[activeSlide].label}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.8,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-[#174D32]/15 mix-blend-multiply" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/70 via-transparent to-transparent" />

                            <div className="absolute bottom-7 left-7">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={slides[activeSlide].label}
                                        initial={{
                                            opacity: 0,
                                            y: 8,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -8,
                                        }}
                                        className="text-[9px] font-semibold tracking-[0.25em] text-white/65"
                                    >
                                        {slides[activeSlide].label}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Slider indicators */}

                        <div className="absolute bottom-[-25px] left-1/2 flex -translate-x-1/2 gap-2">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.label}
                                    type="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() =>
                                        goToSlide(index)
                                    }
                                    className={`h-[2px] transition-all duration-500 ${
                                        activeSlide === index
                                            ? "w-8 bg-[#E9EF9B]"
                                            : "w-3 bg-white/20"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Floating labels */}

                        <div className="absolute -left-3 top-10">
                            <span className="bg-[#0B2F20] px-4 py-2 text-[9px] font-semibold tracking-[0.22em] text-[#E9EF9B]">
                                SCIENCE
                            </span>
                        </div>

                        <div className="absolute -right-3 bottom-20">
                            <span className="bg-[#E9EF9B] px-4 py-2 text-[9px] font-semibold tracking-[0.22em] text-[#172019]">
                                PRECISION
                            </span>
                        </div>
                    </motion.div>

                    {/* Tablet keywords */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                        }}
                        className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3"
                    >
                        {keywords.map((word, index) => (
                            <span
                                key={word}
                                className={`text-[8px] font-semibold tracking-[0.22em] ${
                                    index === 0 || index === 3
                                        ? "text-[#E9EF9B]"
                                        : "text-white/30"
                                }`}
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>

                    {/* Tablet closing statement */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mt-12 border-l border-[#E9EF9B] pl-5"
                    >
                        <p className="text-[9px] font-semibold tracking-[0.24em] text-white/30">
                            OUR RESPONSE
                        </p>

                        <p className="mt-3 text-[28px] font-medium leading-[1.05] tracking-[-0.045em]">
                            So should the way we{" "}
                            <span className="font-serif italic text-[#E9EF9B]">
                                solve for it.
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* =========================================
                    MOBILE
                ========================================= */}

                <div className="relative mt-14 sm:hidden">

                    {/* ---------------------------------
                        IMAGE
                    --------------------------------- */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative"
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <div className="relative h-[390px] overflow-hidden">

                            <AnimatePresence
                                initial={false}
                                mode="sync"
                            >
                                <motion.img
                                    key={activeSlide}
                                    src={slides[activeSlide].image}
                                    alt={slides[activeSlide].label}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        duration: 0.75,
                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </AnimatePresence>

                            <div className="absolute inset-0 bg-[#174D32]/20 mix-blend-multiply" />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/75 via-transparent to-transparent" />

                            <div className="absolute bottom-5 left-5 z-10">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={slides[activeSlide].label}
                                        initial={{
                                            opacity: 0,
                                            y: 6,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -6,
                                        }}
                                        transition={{
                                            duration: 0.3,
                                        }}
                                        className="text-[8px] font-semibold tracking-[0.25em] text-white/65"
                                    >
                                        {slides[activeSlide].label}
                                    </motion.p>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Accent */}

                        <div className="absolute -right-1 top-7 h-20 w-1 bg-[#E9EF9B]" />

                        {/* Progress */}

                        <div className="absolute bottom-[-24px] left-1/2 flex -translate-x-1/2 gap-2">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.label}
                                    type="button"
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() =>
                                        goToSlide(index)
                                    }
                                    className={`h-[2px] transition-all duration-500 ${
                                        activeSlide === index
                                            ? "w-8 bg-[#E9EF9B]"
                                            : "w-3 bg-white/20"
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* ---------------------------------
                        MOBILE KEYWORDS
                    --------------------------------- */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                        }}
                        className="mt-14 flex flex-wrap justify-center gap-x-4 gap-y-3"
                    >
                        {keywords.map((word, index) => (
                            <span
                                key={word}
                                className={`text-[7px] font-semibold tracking-[0.2em] ${
                                    index === 0 ||
                                    index === 3 ||
                                    index === 7
                                        ? "text-[#E9EF9B]"
                                        : "text-white/30"
                                }`}
                            >
                                {word}
                            </span>
                        ))}
                    </motion.div>

                    {/* ---------------------------------
                        MOBILE CLOSING STATEMENT
                    --------------------------------- */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="mt-12 border-l border-[#E9EF9B] pl-5"
                    >
                        <p className="text-[8px] font-semibold tracking-[0.24em] text-white/30">
                            OUR RESPONSE
                        </p>

                        <p className="mt-3 max-w-[330px] text-[25px] font-medium leading-[1.05] tracking-[-0.045em]">
                            So should the way we{" "}
                            <span className="font-serif italic text-[#E9EF9B]">
                                solve for it.
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* =========================================
                    TECHNICAL FOOTER
                ========================================= */}

                <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[7px] font-medium tracking-[0.24em] text-white/25 sm:text-[8px]">
                        SCIENCE / FIELD / BIOLOGY / PRECISION
                    </span>

                    <span className="text-[7px] font-medium tracking-[0.24em] text-white/25 sm:text-[8px]">
                        CROPSURE — 05
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AgricultureReframed;