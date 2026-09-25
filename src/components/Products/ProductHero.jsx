import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ProductHero = () => {
    return (
        <section className="relative flex min-h-screen overflow-hidden bg-[#071C10]">

            {/* Background image */}
            <motion.img
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                    duration: 2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=90"
                alt="Agricultural field"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071C10]/60 via-[#071C10]/25 to-[#071C10]/45" />

            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#071C10] via-[#071C10]/45 to-transparent" />

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:100px_100px]" />

            {/* Main content */}
            <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-32 text-center sm:px-10 lg:px-16">

                <div className="flex w-full max-w-[1200px] flex-col items-center">

                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                        }}
                        className="flex items-center justify-center gap-3"
                    >
                        <span className="h-px w-8 bg-[#E9EF9B]" />

                        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#E9EF9B] sm:text-[10px]">
                            01 / OUR PRODUCTS
                        </span>

                        <span className="h-px w-8 bg-[#E9EF9B]" />
                    </motion.div>

                    {/* Heading */}
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
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-7 max-w-[1200px] text-[clamp(3.2rem,7vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white"
                    >
                        Solutions engineered
                        <br />
                        for{" "}
                        <span className=" text-[#E9EF9B]">
                            better crops.
                        </span>
                    </motion.h1>

                    {/* Description */}
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
                            duration: 0.7,
                            delay: 0.5,
                        }}
                        className="mx-auto mt-7 max-w-[600px] text-[13px] leading-[1.7] text-white/70 sm:text-[14px]"
                    >
                        Science-led agricultural solutions developed to
                        protect crops, improve nutrition, strengthen soil and
                        support more productive farming.
                    </motion.p>

                    {/* CTA / Explore */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.8,
                        }}
                        className="mt-10 flex flex-col items-center gap-3"
                    >
                        <span className="text-[8px] font-medium tracking-[0.2em] text-white/50">
                            EXPLORE PRODUCTS
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60">
                            <ArrowDown
                                size={14}
                                strokeWidth={1.5}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Bottom technical information */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                }}
                className="absolute bottom-6 left-6 right-6 z-20 flex justify-center border-t border-white/15 pt-4 sm:left-10 sm:right-10 lg:left-16 lg:right-16"
            >
                <span className="text-center text-[7px] font-medium tracking-[0.25em] text-white/35 sm:text-[8px]">
                    CROP PROTECTION / NUTRITION / BIO SOLUTIONS / SOIL HEALTH
                </span>
            </motion.div>

            {/* Background typography */}
            {/* <div className="pointer-events-none absolute bottom-[-2vw] right-[-2vw] select-none">
                <span className="text-[24vw] font-bold leading-none tracking-[-0.1em] text-white/[0.035]">
                    01
                </span>
            </div> */}
        </section>
    );
};

export default ProductHero;