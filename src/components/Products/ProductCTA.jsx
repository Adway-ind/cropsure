import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCTA = () => {
    return (
        <section className="relative overflow-hidden bg-[#174D32] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=80)",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#174D32]/80" />

            {/* Decorative number */}
            <div className="pointer-events-none absolute -bottom-10 right-[-2%] select-none">
                <span className="text-[22vw] font-bold leading-none tracking-[-0.1em] text-white/[0.035]">
                    03
                </span>
            </div>

            <div className="relative z-10 mx-auto max-w-[1100px] text-center">

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3"
                >
                    <span className="h-px w-7 bg-[#E9EF9B]" />

                    <span className="text-[9px] font-semibold tracking-[0.24em] text-[#E9EF9B]">
                        03 / LET'S TALK
                    </span>

                    <span className="h-px w-7 bg-[#E9EF9B]" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-6 max-w-[900px] text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.07em]"
                >
                    Have a crop in mind?
                    <br />
                    <span className="font-serif italic text-[#E9EF9B]">
                        Let's find the solution.
                    </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.25,
                    }}
                    className="mx-auto mt-6 max-w-[520px] text-[12px] leading-[1.7] text-white/55 sm:text-[13px]"
                >
                    Tell us about your crop, your challenge and your field.
                    Our team can help you explore the right approach.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.4,
                    }}
                >
                    <Link
                        to="/contact"
                        className="group mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#E9EF9B] px-6 py-3.5 text-[10px] font-semibold tracking-[0.12em] text-[#172019] transition-all duration-300 hover:bg-white hover:shadow-[0_10px_30px_rgba(233,239,155,0.15)]"
                    >
                        TALK TO CROPSURE

                        <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </Link>
                </motion.div>

                {/* Technical line */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                    }}
                    className="mt-14 border-t border-white/10 pt-4"
                >
                    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
                        <span className="text-[7px] font-medium tracking-[0.24em] text-white/25 sm:text-[8px]">
                            AGRONOMY / SCIENCE / FIELD
                        </span>

                        <span className="text-[7px] font-medium tracking-[0.24em] text-white/25 sm:text-[8px]">
                            CROPSURE / 03
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ProductCTA;