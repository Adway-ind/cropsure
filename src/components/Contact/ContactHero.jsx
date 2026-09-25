import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative flex min-h-screen overflow-hidden bg-[#071C10]">
      {/* Background */}
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Agricultural field"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#071C10]/65 via-[#071C10]/30 to-[#071C10]/50" />

      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#071C10] via-[#071C10]/50 to-transparent" />

      {/* Technical grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:100px_100px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-6 py-32 text-center sm:px-10 lg:px-16">
        <div className="flex w-full max-w-[1150px] flex-col items-center">
          {/* Eyebrow */}
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
              01 / CONTACT CROPSURE
            </span>

            <span className="h-px w-8 bg-[#E9EF9B]" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-[1000px] text-[clamp(3.2rem,6vw,8rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white"
          >
            Let's grow something
            <span className=" text-[#E9EF9B] ml-3">better together.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
            className="mx-auto mt-7 max-w-[580px] text-[13px] leading-[1.7] text-white/65 sm:text-[14px]"
          >
            Whether you are looking for product information, crop solutions or
            simply want to start a conversation, we're here to help.
          </motion.p>

          {/* Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <span className="text-[8px] font-medium tracking-[0.2em] text-white/45">
              START A CONVERSATION
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60">
              <ArrowDown size={14} strokeWidth={1.5} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom technical bar */}
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
          AGRONOMY / SCIENCE / SOLUTIONS / FIELD
        </span>
      </motion.div>

      {/* Background number */}
      {/* <div className="pointer-events-none absolute bottom-[-2vw] right-[-2vw] select-none">
        <span className="text-[24vw] font-bold leading-none tracking-[-0.1em] text-white/[0.035]">
          01
        </span>
      </div> */}
    </section>
  );
};

export default ContactHero;
