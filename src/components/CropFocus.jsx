import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cropCategories = [
    {
        number: "01",
        name: "Fruits",
        description: "Citrus, Stone Fruit, Pome, Berry & Orchards",
        image:
            "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "02",
        name: "Vegetables",
        description: "Leafy Greens, Solanaceae & Cucurbits",
        image:
            "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "03",
        name: "Spices",
        description: "High-potency botanicals, herbs & aromatics",
        image:
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "04",
        name: "Plantation Crops",
        description: "Coffee, Tea, Oil Palm, Cocoa & Rubber",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "05",
        name: "Cereals",
        description: "Wheat, Maize, Rice, Barley & Sorghum",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90",
    },
    {
        number: "06",
        name: "Commercial Crops",
        description: "Cotton, Sugarcane, Soybeans & Oilseeds",
        image:
            "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=1400&q=90",
    },
];

const CropFocus = () => {
    return (
        <section className="overflow-hidden bg-[#F5F7EF]">

            {/* =====================================================
                INTRO
            ===================================================== */}
            <div className="mx-auto max-w-[1440px] px-6 pb-14 pt-24 lg:px-10 lg:pb-20 lg:pt-32">

                <div className="mx-auto max-w-[900px] text-center">

                    {/* EYEBROW */}
                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-[#174D32]" />

                        <span className="text-[9px] font-semibold tracking-[0.22em] text-[#174D32]">
                            04 / CROP FOCUS
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
                        Supporting the crops{" "}
                        <span className="font-serif italic text-[#4F8F45]">
                            that matter.
                        </span>
                    </h2>


                    {/* DESCRIPTION */}
                    <p
                        className="
                        mx-auto
                        mt-7
                        max-w-[600px]
                        text-[13px]
                        leading-[1.8]
                        text-[#172019]/50
                        sm:text-[14px]"
                    >
                        Tailored agricultural solutions designed around
                        different crops, growing conditions and production
                        requirements.
                    </p>

                </div>

            </div>


            {/* =====================================================
                CROP GRID
            ===================================================== */}
            <div className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-10 lg:pb-32">

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {cropCategories.map((crop, index) => (

                        <motion.article
                            key={crop.number}
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
                                amount: 0.15,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                group
                                relative
                                aspect-[1.45/1]
                                overflow-hidden
                                rounded-[7px]
                                bg-[#174D32]
                            "
                        >

                            {/* IMAGE */}
                            <img
                                src={crop.image}
                                alt={crop.name}
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.06]
                                "
                            />


                            {/* IMAGE OVERLAY */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-gradient-to-t
                                    from-[#062517]/95
                                    via-[#174D32]/35
                                    to-transparent
                                "
                            />


                            {/* HOVER OVERLAY */}
                            <div
                                className="
                                    absolute
                                    inset-0
                                    bg-[#174D32]/0
                                    transition-colors
                                    duration-500
                                    group-hover:bg-[#174D32]/20
                                "
                            />


                            {/* TOP INFORMATION */}
                            <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                                <span
                                    className="
                                        rounded-full
                                        border
                                        border-white/20
                                        bg-white/10
                                        px-3
                                        py-1.5
                                        text-[8px]
                                        font-semibold
                                        tracking-[0.16em]
                                        text-white/80
                                        backdrop-blur-sm
                                    "
                                >
                                    CATEGORY {crop.number}
                                </span>


                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/20
                                        bg-white/10
                                        text-white
                                        opacity-0
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                >
                                    <ArrowUpRight
                                        size={13}
                                        strokeWidth={1.8}
                                    />
                                </div>

                            </div>


                            {/* BOTTOM CONTENT */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                                <h3
                                    className="
                                        text-[clamp(1.6rem,2.5vw,2.25rem)]
                                        font-normal
                                        leading-none
                                        tracking-[-0.045em]
                                        text-white
                                    "
                                >
                                    {crop.name}
                                </h3>


                                <p
                                    className="
                                        mt-2
                                        max-w-[300px]
                                        text-[10px]
                                        leading-[1.6]
                                        text-white/55
                                        sm:text-[11px]
                                    "
                                >
                                    {crop.description}
                                </p>


                                {/* BOTTOM LINE */}
                                <div
                                    className="
                                        mt-5
                                        h-px
                                        w-0
                                        bg-[#E9EF9B]
                                        transition-all
                                        duration-500
                                        group-hover:w-full
                                    "
                                />

                            </div>

                        </motion.article>

                    ))}

                </div>


                {/* =================================================
                    BOTTOM DETAIL
                ================================================= */}
                <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#172019]/10 pt-5 sm:flex-row sm:items-center">

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/30">
                        FRUITS • VEGETABLES • SPICES • PLANTATION • CEREALS
                    </p>

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/25">
                        CROPSURE / 04
                    </p>

                </div>

            </div>

        </section>
    );
};

export default CropFocus;