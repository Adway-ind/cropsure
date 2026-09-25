import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const crops = [
    {
        name: "Cardamom",
        category: "Plantation Crop",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Pepper",
        category: "Plantation Crop",
        image:
            "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=85",
    },
    {
        name: "Vegetables",
        category: "Horticulture",
        image:
            "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=85",
    },
];

const CropApplication = () => {
    return (
        <section className="bg-[#174D32] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            <div className="mx-auto max-w-[1250px]">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-7 bg-[#E9EF9B]" />

                        <span className="text-[9px] font-semibold tracking-[0.23em] text-[#E9EF9B]">
                            03 / CROP APPLICATION
                        </span>

                        <span className="h-px w-7 bg-[#E9EF9B]" />
                    </div>

                    <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                        Solutions for{" "}
                        <span className="font-serif italic text-[#E9EF9B]">
                            different crops.
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-[520px] text-[12px] leading-[1.6] text-white/50 sm:text-[13px]">
                        Developed around the needs and conditions of the
                        crops we serve.
                    </p>
                </motion.div>

                {/* Crop cards */}
                <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {crops.map((crop, index) => (
                        <motion.article
                            key={crop.name}
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
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                            className="group relative overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative h-[300px] overflow-hidden sm:h-[330px] lg:h-[360px]">
                                <img
                                    src={crop.image}
                                    alt={crop.name}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/80 via-transparent to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <span className="text-[8px] font-semibold tracking-[0.2em] text-[#E9EF9B]">
                                        {crop.category}
                                    </span>

                                    <div className="mt-2 flex items-end justify-between gap-3">
                                        <h3 className="text-[24px] font-semibold tracking-[-0.04em]">
                                            {crop.name}
                                        </h3>

                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E9EF9B] group-hover:bg-[#E9EF9B] group-hover:text-[#172019]">
                                            <ArrowUpRight
                                                size={14}
                                                strokeWidth={1.7}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Small footer line */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[7px] tracking-[0.22em] text-white/25 sm:text-[8px]">
                        CROP / APPLICATION / FIELD
                    </span>

                    <span className="text-[7px] tracking-[0.22em] text-white/25 sm:text-[8px]">
                        CROPSURE / 03
                    </span>
                </div>

            </div>
        </section>
    );
};

export default CropApplication;