import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Sprout,
  ShieldCheck,
  Leaf,
} from "lucide-react";

/* =========================
   ANIMATION VARIANTS
========================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUpSlow = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const lineReveal = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


/* =========================
   HERO
========================= */

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#102f1d]">

      {/* =====================================
          BACKGROUND IMAGE
      ====================================== */}

      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=90&w=2400&auto=format&fit=crop')",
        }}
        initial={{
          scale: 1.08,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Slow cinematic movement */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=90&w=2400&auto=format&fit=crop')",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.18,
          scale: [1, 1.04, 1],
        }}
        transition={{
          opacity: {
            duration: 2,
          },
          scale: {
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Green overlay */}
      <div className="absolute inset-0 bg-[#0b4425]/25 mix-blend-multiply" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#062b18] via-[#062b18]/30 to-transparent" />

      {/* Right gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#062b18]/70 via-transparent to-[#062b18]/20" />


      {/* =====================================
          SUBTLE GRID
      ====================================== */}

      {/* <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute left-[25%] top-0 h-full w-px bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
        <div className="absolute left-[75%] top-0 h-full w-px bg-white" />
      </motion.div> */}


      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pb-7 pt-[145px] sm:px-8 lg:px-10">

        {/* =================================
            TOP BADGE
        ================================== */}

        <motion.div
          className="mb-8 flex items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">

            {/* Pulsing dot */}
            <span className="relative flex h-2 w-2">

              <motion.span
                className="absolute inline-flex h-full w-full rounded-full bg-[#dce78a]"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#dce78a]" />

            </span>

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90">
              Agricultural Innovation
            </span>
          </div>

          <span className="hidden text-[10px] text-white/50 sm:block">
            Growing with purpose
          </span>
        </motion.div>


        {/* =================================
            HERO GRID
        ================================== */}

        <div className="grid flex-1 grid-cols-1 lg:grid-cols-[1.25fr_0.75fr]">

          {/* =================================
              LEFT CONTENT
          ================================== */}

          <motion.div
            className="flex flex-col justify-center pb-20 lg:pb-28"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            {/* LINE 1 */}

            <motion.div
              variants={lineReveal}
              className="overflow-hidden"
            >
              <h1
                className="
                  max-w-[850px]
                  text-[#ffffff]
                  text-[58px]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.065em]
                  sm:text-[76px]
                  md:text-[92px]
                  lg:text-[96px]
                  xl:text-[112px]
                "
              >
                Better crops.
              </h1>
            </motion.div>


            {/* LINE 2 */}

            {/* <motion.div
              variants={lineReveal}
              className="overflow-hidden"
            >
              <h1
                className="
                  max-w-[850px]
                  text-white
                  text-[58px]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.065em]
                  sm:text-[76px]
                  md:text-[92px]
                  lg:text-[96px]
                  xl:text-[112px]
                "
              >
                Better
              </h1>
            </motion.div> */}


            {/* LINE 3 */}

            <motion.div
              variants={lineReveal}
              className="relative overflow-hidden"
            >
              <h1
                className="
                  relative
                  inline-block
                  text-[#f4f2c7]
                  text-[58px]
                  font-semibold
                  leading-[0.88]
                  tracking-[-0.065em]
                  sm:text-[76px]
                  md:text-[92px]
                  lg:text-[96px]
                  xl:text-[112px]
                "
              >
                Better future.

                {/* Animated underline */}

                <motion.span
                  className="
                    absolute
                    -bottom-1
                    left-1
                    h-[5px]
                    rounded-full
                    bg-[#dce78a]
                    sm:h-[7px]
                  "
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: "65%",
                  }}
                  transition={{
                    delay: 1.15,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </h1>
            </motion.div>


            {/* DESCRIPTION */}

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[510px] text-[14px] leading-[1.65] text-white/75 sm:text-[15px]"
            >
              CropSure develops thoughtful agricultural solutions that
              help growers protect crops, improve growth and move toward
              a more sustainable future.
            </motion.p>


            {/* CTA BUTTONS */}

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >

              {/* Primary */}

              <motion.a
                href="/products"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  h-[48px]
                  items-center
                  gap-3
                  rounded-full
                  bg-[#e9ef9b]
                  px-6
                  text-[12px]
                  font-semibold
                  text-[#172019]
                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                "
              >
                Explore Solutions

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>


              {/* Secondary */}

              <motion.a
                href="/about"
                whileHover={{
                  y: -3,
                  backgroundColor: "rgba(255,255,255,0.18)",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-[48px]
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-6
                  text-[12px]
                  font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                Discover CropSure
              </motion.a>

            </motion.div>

          </motion.div>


          {/* =================================
              RIGHT SIDE
          ================================== */}

          <div className="relative hidden lg:block">

            {/* =================================
                CROPSURE FOCUS CARD
            ================================== */}

            <motion.div
              className="
                absolute
                right-[5%]
                top-[18%]
                w-[245px]
                rounded-[22px]
                border
                border-white/20
                bg-[#0c351e]/55
                p-4
                shadow-[0_25px_70px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
              "
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 1.25,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Continuous floating */}

              <motion.div
                animate={{
                  y: [0, 0, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >

                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/50">
                    CropSure Focus
                  </span>

                  <motion.div
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dce78a] text-[#173b24]"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sprout size={14} />
                  </motion.div>

                </div>


                <h3 className="mt-5 text-[20px] font-medium leading-tight tracking-[-0.03em] text-white">
                  Growing with
                  <br />
                  <span className="text-[#dce78a]">
                    purpose.
                  </span>
                </h3>


                <div className="my-5 h-px bg-white/10" />


                {/* Protection */}

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <ShieldCheck
                      size={14}
                      className="text-[#dce78a]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-white">
                      Crop Protection
                    </p>

                    <p className="text-[8px] text-white/45">
                      Solutions for healthier crops
                    </p>
                  </div>

                </div>


                {/* Sustainability */}

                <div className="mt-3 flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <Leaf
                      size={14}
                      className="text-[#dce78a]"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-white">
                      Sustainable Growth
                    </p>

                    <p className="text-[8px] text-white/45">
                      Designed with tomorrow in mind
                    </p>
                  </div>

                </div>

              </motion.div>

            </motion.div>


            {/* =================================
                VIDEO CARD
            ================================== */}

            <motion.div
              className="
                absolute
                bottom-[10%]
                right-[8%]
                w-[220px]
                overflow-hidden
                rounded-[20px]
                border
                border-white/20
                shadow-[0_20px_60px_rgba(0,0,0,0.3)]
              "
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.55,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
            >

              <div className="relative aspect-[1.35/1]">

                <motion.img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=90&w=1000&auto=format&fit=crop"
                  alt="Agricultural field"
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />


                {/* Play button */}

                <motion.button
                  type="button"
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#173b24]
                    shadow-lg
                  "
                  whileHover={{
                    scale: 1.12,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Play
                    size={12}
                    fill="currentColor"
                  />
                </motion.button>


                {/* Text */}

                <div className="absolute bottom-3 left-3 right-3">

                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/60">
                    Our Journey
                  </p>

                  <h3 className="mt-1 text-[12px] font-medium text-white">
                    From Field to Future
                  </h3>

                </div>

              </div>

            </motion.div>

          </div>

        </div>


        {/* =====================================
            BOTTOM BAR
        ====================================== */}

        <motion.div
          className="flex flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.8,
            duration: 0.8,
          }}
        >

          <div className="flex items-center gap-3">

            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-[#dce78a]"
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/55">
              Agriculture · Innovation · Sustainability
            </span>

          </div>


          <div className="flex items-center gap-5">

            <span className="text-[9px] text-white/50">
              Discover what&apos;s next
            </span>

            <a
              href="/contact"
              className="group flex items-center gap-2 text-[10px] font-medium text-white"
            >
              Get in touch

              <ArrowUpRight
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;