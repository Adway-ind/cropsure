import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FieldPresence = () => {
    return (
        <section className="relative overflow-hidden bg-[#174D32] px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            {/* Subtle background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:80px_80px]" />

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-[#4F8F45]/20 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-[1250px]">

                {/* =========================
                    SECTION HEADER
                ========================== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#E9EF9B]" />

                        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#E9EF9B]">
                            03 / OUR FIELD
                        </span>

                        <span className="h-px w-8 bg-[#E9EF9B]" />
                    </div>

                    <h2 className="mx-auto mt-6 max-w-[950px] text-[clamp(2.8rem,4vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-white">
                        Closer to the crop.
                        <br />
                        <span className="font-serif italic text-[#E9EF9B]">
                            Closer to better solutions.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[560px] text-[14px] leading-[1.7] text-white/60">
                        Meaningful agricultural solutions begin with an
                        understanding of the crops, conditions and people
                        behind every field.
                    </p>
                </motion.div>

                {/* =========================
                    MAIN VISUAL
                ========================== */}
                <div className="mt-16 grid gap-8 lg:grid-cols-[1.55fr_0.75fr] lg:gap-10">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative h-[420px] overflow-hidden sm:h-[500px] lg:h-[560px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90"
                            alt="Agricultural field"
                            className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/75 via-transparent to-[#071C10]/10" />

                        {/* Image label */}
                        <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">
                            <span className="text-[9px] font-semibold tracking-[0.22em] text-white/75">
                                FIELD / OBSERVATION / AGRICULTURE
                            </span>
                        </div>

                        {/* Corner detail */}
                        <div className="absolute right-6 top-6 h-16 w-16 border-r border-t border-[#E9EF9B]/50 sm:right-8 sm:top-8 sm:h-20 sm:w-20" />
                    </motion.div>

                    {/* INFORMATION */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                        className="flex flex-col justify-between border-t border-white/15 lg:border-t-0"
                    >
                        <div>

                            {/* LOCATION */}
                            <div className="border-b border-white/15 py-7 lg:border-t lg:border-white/15 lg:pt-7">
                                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E9EF9B]">
                                    BASED IN
                                </span>

                                <h3 className="mt-3 text-[28px] font-medium tracking-[-0.05em] text-white sm:text-[34px]">
                                    Kerala, India
                                </h3>

                                <p className="mt-3 max-w-[330px] text-[13px] leading-[1.7] text-white/55">
                                    Working close to one of India's most
                                    diverse agricultural landscapes.
                                </p>
                            </div>

                            {/* FOCUS */}
                            <div className="border-b border-white/15 py-7">
                                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E9EF9B]">
                                    OUR FOCUS
                                </span>

                                <div className="mt-5 space-y-3">
                                    {[
                                        "Crop Protection",
                                        "Plant Nutrition",
                                        "Bio Solutions",
                                        "Soil Health",
                                    ].map((item, index) => (
                                        <div
                                            key={item}
                                            className="group flex items-center gap-4"
                                        >
                                            <span className="text-[9px] font-semibold tracking-[0.15em] text-white/30">
                                                0{index + 1}
                                            </span>

                                            <span className="text-[15px] font-medium text-white/85 transition-colors duration-300 group-hover:text-[#E9EF9B]">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <p className="max-w-[320px] text-[13px] leading-[1.7] text-white/50">
                                Have a question about a crop, product or
                                agricultural challenge?
                            </p>

                            <a
                                href="#contact-form"
                                className="group mt-5 flex w-fit items-center gap-2 text-[10px] font-semibold tracking-[0.14em] text-[#E9EF9B]"
                            >
                                START A CONVERSATION

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={1.7}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* =========================
                    TECHNICAL LINE
                ========================== */}
                <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[8px] font-medium tracking-[0.23em] text-white/30">
                        FIELD / AGRONOMY / UNDERSTANDING
                    </span>

                    <span className="text-[8px] font-medium tracking-[0.23em] text-white/30">
                        CROPSURE / 03
                    </span>
                </div>

            </div>
        </section>
    );
};

export default FieldPresence;