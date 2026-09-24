import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

//==========Images=============//
import CROP01 from "../assets/image/crop_01.png";

const products = [
    {
        id: "01",
        category: "PLANT NUTRITION",
        name: "MOTIVE",
        subtitle: "Agriculture Product",
        description:
            "A precision agricultural solution developed to support healthier crop development, improved plant performance and consistent field results.",
        benefits: [
            "Supports healthy crop growth",
            "Improves plant performance",
            "Designed for modern agriculture",
        ],
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=90",
        productImage: CROP01,
    },
    {
        id: "02",
        category: "CROP PROTECTION",
        name: "CROPSHIELD",
        subtitle: "Advanced Crop Protection",
        description:
            "A targeted crop protection solution created to support crop health and reliable performance throughout demanding growing conditions.",
        benefits: [
            "Supports crop protection",
            "Reliable field performance",
            "Designed for demanding conditions",
        ],
        image:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=2200&q=90",
        productImage:
            CROP01,
    },
    {
        id: "03",
        category: "BIOLOGICAL SOLUTIONS",
        name: "BIOVANCE",
        subtitle: "Biological Crop Solution",
        description:
            "A biological agricultural solution developed around natural plant processes and long-term crop vitality.",
        benefits: [
            "Supports natural plant processes",
            "Promotes crop vitality",
            "Biology-focused formulation",
        ],
        image:
            "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=2200&q=90",
        productImage:
            CROP01,
    },
    {
        id: "04",
        category: "SOIL HEALTH",
        name: "FIELDCORE",
        subtitle: "Soil Performance Solution",
        description:
            "A soil-focused solution designed to support better growing conditions and sustainable agricultural performance.",
        benefits: [
            "Supports soil vitality",
            "Encourages better growing conditions",
            "Built for sustainable agriculture",
        ],
        image:
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=2200&q=90",
        productImage:
            CROP01,
    },
];

const ProductSection = () => {
    const [active, setActive] = useState(0);

    const product = products[active];

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % products.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    const nextProduct = () => {
        setActive((prev) => (prev + 1) % products.length);
    };

    const previousProduct = () => {
        setActive(
            (prev) => (prev - 1 + products.length) % products.length
        );
    };

    return (
        <section className="overflow-hidden bg-[#F5F7EF]">

            {/* =====================================================
                SECTION INTRO
            ===================================================== */}
            <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-24 lg:px-10 lg:pb-16 lg:pt-28">

                <div className="text-center">

                    {/* LABEL */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#174D32]" />

                        <span className="text-[9px] font-semibold tracking-[0.24em] text-[#174D32]">
                            03 / OUR PRODUCTS
                        </span>

                        <span className="h-px w-8 bg-[#174D32]" />
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            text-[clamp(3rem,5.5vw,5.8rem)]
                            font-normal
                            leading-[0.9]
                            tracking-[-0.065em]
                            text-[#172019]
                        "
                    >
                        Solutions for{" "}
                        <span className="font-serif italic text-[#4F8F45]">
                            every field.
                        </span>
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="mx-auto mt-6 max-w-[580px] text-[13px] leading-[1.8] text-[#172019]/45 sm:text-[14px]">
                        Purpose-built agricultural solutions designed around
                        crop performance, plant health and sustainable growth.
                    </p>

                </div>
            </div>


            {/* =====================================================
                PRODUCT SHOWCASE
            ===================================================== */}
            <div className="relative min-h-[680px] overflow-hidden lg:min-h-[720px]">

                {/* -------------------------------------------------
                    BACKGROUND
                ------------------------------------------------- */}
                <AnimatePresence mode="sync">

                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0"
                    >

                        <img
                            src={product.image}
                            alt=""
                            className="h-full w-full object-cover"
                        />

                        {/* DARK AGRICULTURAL TONE */}
                        <div className="absolute inset-0 bg-[#174D32]/25" />

                        {/* LEFT READABILITY */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#07170E]/80 via-[#07170E]/30 to-transparent" />

                        {/* BOTTOM DEPTH */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07170E]/70 via-transparent to-[#07170E]/10" />

                    </motion.div>

                </AnimatePresence>


                {/* -------------------------------------------------
                    SUBTLE GRID / TECHNICAL DETAIL
                ------------------------------------------------- */}
                <div
                    className="
                        pointer-events-none
                        absolute inset-0
                        opacity-[0.06]
                        [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                        [background-size:80px_80px]
                    "
                />


                {/* =================================================
                    MAIN CONTENT
                ================================================= */}
                <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] items-center px-6 py-20 lg:min-h-[720px] lg:px-10">

                    <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">


                        {/* =================================================
                            LEFT PRODUCT INFORMATION
                        ================================================= */}
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={`${product.id}-left`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeInOut",
                                }}
                                className="
                                    order-2
                                    max-w-[370px]
                                    lg:order-1
                                "
                            >

                                {/* CATEGORY */}
                                <div className="mb-5 flex items-center gap-3">

                                    <span className="h-px w-8 bg-[#E9EF9B]" />

                                    <span className="text-[9px] font-semibold tracking-[0.22em] text-[#E9EF9B]">
                                        {product.category}
                                    </span>

                                </div>


                                {/* PRODUCT NAME */}
                                <h3
                                    className="
                                        text-[clamp(3.5rem,6vw,6.5rem)]
                                        font-normal
                                        leading-[0.8]
                                        tracking-[-0.07em]
                                        text-white
                                    "
                                >
                                    {product.name}
                                </h3>


                                {/* SUBTITLE */}
                                <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/45">
                                    {product.subtitle}
                                </p>


                                {/* DESCRIPTION */}
                                <p className="mt-7 max-w-[340px] text-[13px] leading-[1.85] text-white/60">
                                    {product.description}
                                </p>


                                {/* BENEFITS */}
                                <div className="mt-8 border-t border-white/15 pt-6">

                                    <div className="space-y-3">

                                        {product.benefits.map(
                                            (benefit, index) => (
                                                <div
                                                    key={benefit}
                                                    className="flex items-center gap-3"
                                                >

                                                    <span className="text-[9px] font-medium text-[#E9EF9B]">
                                                        0{index + 1}
                                                    </span>

                                                    <span className="text-[11px] text-white/65">
                                                        {benefit}
                                                    </span>

                                                </div>
                                            )
                                        )}

                                    </div>

                                </div>


                                {/* CTA */}
                                <button
                                    type="button"
                                    className="
                                        group
                                        mt-8
                                        flex
                                        h-11
                                        items-center
                                        gap-3
                                        rounded-full
                                        bg-[#E9EF9B]
                                        px-5
                                        text-[10px]
                                        font-semibold
                                        text-[#172019]
                                        transition-all
                                        duration-300
                                        hover:bg-white
                                    "
                                >
                                    <span>View Product</span>

                                    <ArrowUpRight
                                        size={14}
                                        strokeWidth={2}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />

                                </button>

                            </motion.div>

                        </AnimatePresence>


                        {/* =================================================
                            CENTER PRODUCT
                        ================================================= */}
                        <div
                            className="
                                order-1
                                flex
                                h-[390px]
                                items-center
                                justify-center
                                lg:order-2
                                lg:h-[590px]
                            "
                        >

                            <AnimatePresence mode="wait">

                                <motion.div
                                    key={`${product.id}-product`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 0.55,
                                        ease: "easeInOut",
                                    }}
                                    className="relative flex h-full w-full items-center justify-center"
                                >

                                    {/* PRODUCT LIGHT */}
                                    <div
                                        className="
                                            absolute
                                            h-[200px]
                                            w-[200px]
                                            rounded-full
                                            bg-[#E9EF9B]/20
                                            blur-[80px]
                                        "
                                    />

                                    {/* GROUND SHADOW */}
                                    <div
                                        className="
                                            absolute
                                            bottom-[12%]
                                            h-8
                                            w-[180px]
                                            rounded-[50%]
                                            bg-black/35
                                            blur-xl
                                        "
                                    />

                                    {/* PRODUCT */}
                                    <motion.img
                                        src={product.productImage}
                                        alt={product.name}
                                        initial={{
                                            opacity: 0,
                                            x: 100,
                                            scale: 0.96,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="
        relative
        z-10
        max-h-[380px]
        max-w-[250px]
        object-contain
        drop-shadow-[0_28px_35px_rgba(0,0,0,0.38)]
        sm:max-h-[420px]
        sm:max-w-[280px]
    "
                                    />

                                </motion.div>

                            </AnimatePresence>

                        </div>


                        {/* =================================================
                            RIGHT INFORMATION
                        ================================================= */}
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={`${product.id}-right`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.45,
                                    ease: "easeInOut",
                                }}
                                className="
                                    order-3
                                    ml-auto
                                    hidden
                                    w-full
                                    max-w-[260px]
                                    lg:block
                                "
                            >

                                <div className="border-l border-white/20 pl-7">

                                    <p className="text-[9px] tracking-[0.22em] text-white/40">
                                        PRODUCT INFORMATION
                                    </p>


                                    <div className="mt-8 space-y-7">

                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                                                Product
                                            </p>

                                            <p className="mt-2 text-[14px] text-white">
                                                {product.name}
                                            </p>
                                        </div>


                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                                                Category
                                            </p>

                                            <p className="mt-2 text-[12px] leading-5 text-white/70">
                                                {product.category}
                                            </p>
                                        </div>


                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                                                Product Code
                                            </p>

                                            <p className="mt-2 font-mono text-[12px] text-[#E9EF9B]">
                                                CS / {product.id}
                                            </p>
                                        </div>


                                        <div>
                                            <p className="text-[8px] uppercase tracking-[0.18em] text-white/30">
                                                Focus
                                            </p>

                                            <p className="mt-2 text-[12px] leading-5 text-white/70">
                                                Crop performance
                                                <br />
                                                Plant health
                                                <br />
                                                Field efficiency
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </motion.div>

                        </AnimatePresence>

                    </div>

                </div>


                {/* =================================================
                    SLIDER CONTROLS
                ================================================= */}
                <div className="absolute bottom-7 left-0 right-0 z-20">

                    <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 lg:px-10">

                        {/* COUNTER */}
                        <div className="flex items-center gap-3">

                            <span className="text-[11px] font-semibold text-white">
                                {product.id}
                            </span>

                            <span className="text-[9px] text-white/30">
                                /
                            </span>

                            <span className="text-[9px] text-white/35">
                                0{products.length}
                            </span>

                        </div>


                        {/* PROGRESS */}
                        <div className="hidden flex-1 items-center justify-center gap-2 px-10 sm:flex">

                            {products.map((item, index) => (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    aria-label={`Show ${item.name}`}
                                    className="group h-5"
                                >
                                    <span
                                        className={`
                                            block
                                            h-[2px]
                                            transition-all
                                            duration-500
                                            ${index === active
                                                ? "w-16 bg-[#E9EF9B]"
                                                : "w-7 bg-white/25 group-hover:bg-white/50"
                                            }
                                        `}
                                    />
                                </button>
                            ))}

                        </div>


                        {/* ARROWS */}
                        <div className="flex items-center gap-2">

                            <button
                                type="button"
                                onClick={previousProduct}
                                aria-label="Previous product"
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/5
                                    text-white
                                    backdrop-blur-sm
                                    transition-all
                                    duration-300
                                    hover:bg-white/15
                                "
                            >
                                <ChevronLeft
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </button>


                            <button
                                type="button"
                                onClick={nextProduct}
                                aria-label="Next product"
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/5
                                    text-white
                                    backdrop-blur-sm
                                    transition-all
                                    duration-300
                                    hover:bg-white/15
                                "
                            >
                                <ChevronRight
                                    size={16}
                                    strokeWidth={1.8}
                                />
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* =====================================================
                BOTTOM DETAIL
            ===================================================== */}
            <div className="mx-auto max-w-[1440px] px-6 py-7 lg:px-10">

                <div className="flex flex-col justify-between gap-3 border-t border-[#172019]/10 pt-5 sm:flex-row sm:items-center">

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/35">
                        CROP PERFORMANCE • PLANT HEALTH • FIELD RESULTS
                    </p>

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/25">
                        CROPSURE / PRODUCTS
                    </p>

                </div>

            </div>

        </section>
    );
};

export default ProductSection;