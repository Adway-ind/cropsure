import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Leaf,
    ShieldCheck,
    Sprout,
} from "lucide-react";

const slides = [
    {
        id: 1,
        eyebrow: "AGRICULTURAL INNOVATION",
        title: ["Better Crops.", "Better Future."],
        description:
            "Agricultural solutions designed for healthier growth, stronger crops and a more sustainable future.",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90",
        cardTitle: "Growing with",
        cardHighlight: "purpose.",
        cardIcon: Sprout,
        items: ["Crop Protection", "Sustainable Growth"],
    },

    {
        id: 2,
        eyebrow: "CROP PROTECTION",
        title: ["Protect What", "You Grow."],
        description:
            "Thoughtful crop protection solutions that help growers maintain healthier plants from field to harvest.",
        image:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=2400&q=90",
        cardTitle: "Protecting every",
        cardHighlight: "harvest.",
        cardIcon: ShieldCheck,
        items: ["Plant Health", "Reliable Protection"],
    },

    {
        id: 3,
        eyebrow: "SMART AGRICULTURE",
        title: ["Innovation for", "Every Harvest."],
        description:
            "Modern agricultural thinking that connects science, sustainability and practical solutions for growers.",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2400&q=90",
        cardTitle: "Innovation that",
        cardHighlight: "moves forward.",
        cardIcon: Leaf,
        items: ["Agri Science", "Future Ready"],
    },
];

const slideVariants = {
    enter: {
        opacity: 0,
    },
    center: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slide = slides[current];

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 6000);

        return () => clearInterval(timer);
    }, [isPaused]);

    const Icon = slide.cardIcon;

    return (
        <section
            className="relative min-h-screen overflow-hidden bg-[#172019]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* BACKGROUND SLIDE */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={slide.id}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <motion.img
                        key={`image-${slide.id}`}
                        src={slide.image}
                        alt=""
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.08 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 7,
                            ease: "easeOut",
                        }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/35" />

                    {/* Green tint */}
                    <div className="absolute inset-0 bg-[#0b2417]/25 mix-blend-multiply" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#08150e]/90 via-[#0b2115]/65 to-transparent" />

                    {/* Bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-[#08130c]/90 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* GRID */}
            <div
                className="
          pointer-events-none absolute inset-0 opacity-[0.08]
          [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
            />

            {/* CONTENT */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] items-center px-6 pb-28 pt-32 lg:px-8">
                <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_390px]">
                    {/* LEFT */}
                    <div className="max-w-[760px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={slide.id}
                                initial="hidden"
                                animate="visible"
                                exit={{
                                    opacity: 0,
                                    y: -20,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                {/* Eyebrow */}
                                <motion.div
                                    variants={contentVariants}
                                    className="mb-7 flex items-center gap-3"
                                >
                                    <span className="h-[7px] w-[7px] rounded-full bg-[#E9EF9B] shadow-[0_0_14px_rgba(233,239,155,.8)]" />

                                    <span className="text-[10px] font-semibold tracking-[0.25em] text-white/75">
                                        {slide.eyebrow}
                                    </span>
                                </motion.div>

                                {/* Heading */}
                                <div className="overflow-hidden">
                                    {slide.title.map((line, index) => (
                                        <motion.div
                                            key={`${slide.id}-${line}-${index}`}
                                            initial={{
                                                opacity: 0,
                                                y: 55,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.75,
                                                delay: 0.12 + index * 0.1,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className={`
                        block
                        text-[clamp(3.4rem,7.5vw,7rem)]
                        font-medium
                        leading-[0.9]
                        tracking-[-0.055em]
                        ${index === slide.title.length - 1
                                                    ? "text-[#E9EF9B]"
                                                    : "text-white"
                                                }
                      `}
                                        >
                                            {line}
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Accent line */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{
                                        width: 110,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.55,
                                        duration: 0.7,
                                    }}
                                    className="mt-8 h-[2px] bg-[#E9EF9B]"
                                />

                                {/* Description */}
                                <motion.p
                                    variants={contentVariants}
                                    transition={{ delay: 0.65 }}
                                    className="
                    mt-7
                    max-w-[570px]
                    text-[15px]
                    leading-7
                    text-white/70
                    sm:text-[16px]
                  "
                                >
                                    {slide.description}
                                </motion.p>

                                {/* Buttons */}
                                <motion.div
                                    variants={contentVariants}
                                    transition={{ delay: 0.78 }}
                                    className="mt-9 flex flex-wrap items-center gap-3"
                                >
                                    <a
                                        href="/products"
                                        className="
                      group
                      flex h-12 items-center gap-3
                      rounded-full
                      bg-[#E9EF9B]
                      px-6
                      text-[12px]
                      font-semibold
                      text-[#172019]
                      transition-all duration-300
                      hover:bg-white
                      hover:shadow-[0_10px_30px_rgba(233,239,155,.2)]
                    "
                                    >
                                        <span>Explore Solutions</span>

                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </a>

                                    <a
                                        href="/about"
                                        className="
                      flex h-12 items-center gap-2
                      rounded-full
                      border border-white/20
                      bg-white/5
                      px-6
                      text-[12px]
                      font-medium
                      text-white
                      backdrop-blur-md
                      transition-all duration-300
                      hover:border-white/40
                      hover:bg-white/10
                    "
                                    >
                                        Discover CropSure
                                    </a>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT CARD */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className="hidden lg:block"
                        >
                            <motion.div
                                animate={{
                                    y: 0,
                                }}
                                className="
                rounded-[28px]
                border border-white/15
                bg-white/[0.09]
                p-7
                shadow-[0_25px_70px_rgba(0,0,0,.2)]
                backdrop-blur-xl
            "
                            >
                                {/* Icon */}
                                <div className="mb-8 flex items-center justify-between">
                                    <div
                                        className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-[#E9EF9B]
                        text-[#174D32]
                    "
                                    >
                                        <Icon size={21} strokeWidth={1.7} />
                                    </div>

                                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/40">
                                        CROP SURE
                                    </span>
                                </div>

                                <h3 className="text-[30px] font-medium leading-[1.05] tracking-[-0.04em] text-white">
                                    {slide.cardTitle}
                                    <br />
                                    <span className="text-[#E9EF9B]">
                                        {slide.cardHighlight}
                                    </span>
                                </h3>

                                <div className="mt-8 border-t border-white/10 pt-5">
                                    {slide.items.map((item, index) => (
                                        <div
                                            key={item}
                                            className={`flex items-center justify-between py-3 ${index !== slide.items.length - 1
                                                    ? "border-b border-white/10"
                                                    : ""
                                                }`}
                                        >
                                            <span className="text-[12px] text-white/65">
                                                {item}
                                            </span>

                                            <ArrowRight
                                                size={14}
                                                className="text-[#E9EF9B]"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* BOTTOM CONTROLS */}
            <div className="absolute bottom-7 left-0 z-20 w-full px-6 lg:px-8">
                <div className="mx-auto flex max-w-[1320px] items-end justify-between">
                    {/* Slide number + progress */}
                    <div className="flex items-center gap-5">
                        <div className="flex items-baseline gap-1 text-white">
                            <span className="text-[18px] font-medium">
                                {String(current + 1).padStart(2, "0")}
                            </span>

                            <span className="text-[11px] text-white/40">
                                / {String(slides.length).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="hidden gap-1.5 sm:flex">
                            {slides.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setCurrent(index)}
                                    className="group py-2"
                                    aria-label={`Go to slide ${index + 1}`}
                                >
                                    <span
                                        className={`
                      block h-[2px] rounded-full transition-all duration-500
                      ${current === index
                                                ? "w-12 bg-[#E9EF9B]"
                                                : "w-6 bg-white/30 group-hover:bg-white/60"
                                            }
                    `}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={prevSlide}
                            aria-label="Previous slide"
                            className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                bg-white/5
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/15
              "
                        >
                            <ChevronLeft size={17} />
                        </button>

                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                bg-white/5
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-white/15
              "
                        >
                            <ChevronRight size={17} />
                        </button>
                    </div>
                </div>
            </div>

            {/* TOP LEFT LABEL */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-medium tracking-[0.25em] text-white/35 md:flex">
                <span>AGRICULTURE</span>
                <span className="h-1 w-1 rounded-full bg-[#E9EF9B]" />
                <span>SCIENCE</span>
                <span className="h-1 w-1 rounded-full bg-[#E9EF9B]" />
                <span>SUSTAINABILITY</span>
            </div>
        </section>
    );
};

export default HeroSlider;