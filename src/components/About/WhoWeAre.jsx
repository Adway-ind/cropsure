import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WhoWeAre = () => {
    return (
        <section
            id="story"
            className="
                relative
                overflow-hidden
                bg-[#F5F7EF]
            "
        >
            {/* =====================================================
                BACKGROUND NUMBER
            ===================================================== */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-10
                    top-[-80px]
                    select-none
                    font-serif
                    text-[260px]
                    leading-none
                    tracking-[-0.1em]
                    text-[#174D32]/[0.035]
                    sm:text-[340px]
                    lg:text-[430px]
                "
            >
                02
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}
            <div
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-[1440px]
                    px-6
                    py-24
                    sm:px-8
                    lg:px-10
                    lg:py-32
                    xl:py-40
                "
            >

                {/* =================================================
                    SECTION HEADER
                ================================================= */}
                <motion.div
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
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >
                    <span
                        className="
                            h-px
                            w-8
                            bg-[#174D32]
                        "
                    />

                    <span
                        className="
                            text-[9px]
                            font-semibold
                            tracking-[0.24em]
                            text-[#174D32]
                            sm:text-[10px]
                        "
                    >
                        02 / WHO WE ARE
                    </span>
                </motion.div>


                {/* =================================================
                    INTRO STATEMENT
                ================================================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                    }}
                    className="
                        mt-10
                        max-w-[1050px]
                        lg:mt-14
                    "
                >
                    {/* <h2
                        className="
                            text-[clamp(2.8rem,5.5vw,6.5rem)]
                            font-normal
                            leading-[0.9]
                            tracking-[-0.07em]
                            text-[#172019]
                        "
                    >
                        We believe better
                        <br />

                        agriculture begins with
                        <span
                            className="
                                ml-2
                                font-serif
                                italic
                                text-[#174D32]
                            "
                        >
                            better understanding.
                        </span>
                    </h2> */}
                </motion.div>


                {/* =================================================
                    EDITORIAL CONTENT
                ================================================= */}
                <div
                    className="
                        mt-16
                        grid
                        grid-cols-1
                        gap-12
                        lg:mt-24
                        lg:grid-cols-[1.05fr_0.95fr]
                        lg:items-center
                        lg:gap-24
                    "
                >

                    {/* =================================================
                        IMAGE
                    ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            relative
                            h-[480px]
                            overflow-hidden
                            sm:h-[560px]
                            lg:h-[620px]
                        "
                    >

                        {/* Image */}
                        <motion.img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1800&q=90"
                            alt="Agricultural crop field"
                            initial={{
                                scale: 1.08,
                            }}
                            whileInView={{
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 1.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                            "
                        />

                        {/* Image overlay */}
                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-[#071C10]/75
                                via-[#071C10]/10
                                to-transparent
                            "
                        />

                        {/* =================================================
                            TOP FIELD LABEL
                        ================================================= */}
                        <div
                            className="
                                absolute
                                left-6
                                top-6
                                flex
                                items-center
                                gap-2
                                border
                                border-white/20
                                bg-black/10
                                px-4
                                py-2.5
                                backdrop-blur-md
                                sm:left-8
                                sm:top-8
                            "
                        >
                            <span
                                className="
                                    h-[5px]
                                    w-[5px]
                                    rounded-full
                                    bg-[#E9EF9B]
                                "
                            />

                            <span
                                className="
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.18em]
                                    text-white
                                "
                            >
                                CROPSURE / FIELD SYSTEM
                            </span>
                        </div>


                        {/* =================================================
                            LARGE NUMBER
                        ================================================= */}
                        <span
                            className="
                                absolute
                                bottom-[-15px]
                                left-5
                                select-none
                                font-serif
                                text-[150px]
                                leading-none
                                tracking-[-0.1em]
                                text-white/[0.10]
                                sm:text-[190px]
                            "
                        >
                            02
                        </span>


                        {/* =================================================
                            IMAGE CAPTION
                        ================================================= */}
                        <div
                            className="
                                absolute
                                bottom-7
                                left-7
                                right-7
                                sm:bottom-9
                                sm:left-9
                                sm:right-9
                            "
                        >
                            <p
                                className="
                                    text-[8px]
                                    font-semibold
                                    tracking-[0.2em]
                                    text-[#E9EF9B]
                                "
                            >
                                FIELD / AGRICULTURE
                            </p>

                            <p
                                className="
                                    mt-2
                                    max-w-[300px]
                                    text-[11px]
                                    leading-[1.6]
                                    text-white/60
                                "
                            >
                                Understanding the field is where meaningful
                                agricultural solutions begin.
                            </p>
                        </div>
                    </motion.div>


                    {/* =================================================
                        TEXT CONTENT
                    ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            max-w-[620px]
                        "
                    >

                        {/* Label */}
                        <p
                            className="
                                text-[9px]
                                font-semibold
                                tracking-[0.2em]
                                text-[#4F8F45]
                            "
                        >
                            AGRICULTURAL SCIENCE / PRACTICAL THINKING
                        </p>


                        {/* Heading */}
                        <h3
                            className="
                                mt-5
                                text-[clamp(2.3rem,4vw,4.5rem)]
                                font-normal
                                leading-[0.94]
                                tracking-[-0.065em]
                                text-[#172019]
                            "
                        >
                            Science that
                            <br />
                            understands the
                            <span
                                className="
                                    ml-2
                                    font-serif
                                    italic
                                    text-[#174D32]
                                "
                            >
                                field.
                            </span>
                        </h3>


                        {/* Line */}
                        <div
                            className="
                                mt-8
                                h-px
                                w-14
                                bg-[#174D32]
                            "
                        />


                        {/* Main paragraph */}
                        <p
                            className="
                                mt-8
                                text-[15px]
                                leading-[1.9]
                                text-[#172019]/65
                                sm:text-[16px]
                            "
                        >
                            CropSure brings agricultural science, practical
                            expertise and responsible innovation together to
                            develop solutions designed around the real needs
                            of crops, growers and changing field conditions.
                        </p>


                        {/* Secondary paragraph */}
                        <p
                            className="
                                mt-5
                                text-[13px]
                                leading-[1.9]
                                text-[#172019]/45
                            "
                        >
                            Our approach connects crop protection, plant
                            nutrition, biological solutions and soil health
                            with a practical understanding of agriculture.
                            The goal is simple: create solutions that make
                            sense in the field and contribute to better
                            agricultural performance.
                        </p>


                        {/* =================================================
                            CTA
                        ================================================= */}
                        <a
                            href="#approach"
                            className="
                                group
                                mt-9
                                inline-flex
                                items-center
                                gap-3
                                text-[10px]
                                font-semibold
                                tracking-[0.1em]
                                text-[#174D32]
                            "
                        >
                            <span
                                className="
                                    relative
                                    pb-1
                                "
                            >
                                OUR APPROACH

                                <span
                                    className="
                                        absolute
                                        bottom-0
                                        left-0
                                        h-px
                                        w-full
                                        origin-left
                                        bg-[#174D32]
                                        transition-transform
                                        duration-300
                                        group-hover:scale-x-0
                                    "
                                />
                            </span>

                            <span
                                className="
                                    flex
                                    h-8
                                    w-8
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#174D32]/20
                                    transition-all
                                    duration-300
                                    group-hover:bg-[#174D32]
                                    group-hover:text-white
                                "
                            >
                                <ArrowUpRight
                                    size={14}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                    "
                                />
                            </span>
                        </a>


                        {/* =================================================
                            INFORMATION LINE
                        ================================================= */}
                        <div
                            className="
                                mt-14
                                grid
                                grid-cols-2
                                border-t
                                border-[#174D32]/10
                                pt-6
                                sm:grid-cols-4
                            "
                        >
                            {[
                                "SCIENCE",
                                "FIELD",
                                "PRECISION",
                                "PROGRESS",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className={`
                                        ${
                                            index !== 0
                                                ? "border-l border-[#174D32]/10 pl-4"
                                                : ""
                                        }
                                    `}
                                >
                                    <p
                                        className="
                                            text-[8px]
                                            font-semibold
                                            tracking-[0.16em]
                                            text-[#174D32]
                                        "
                                    >
                                        {item}
                                    </p>

                                    <p
                                        className="
                                            mt-2
                                            text-[8px]
                                            tracking-[0.1em]
                                            text-[#172019]/25
                                        "
                                    >
                                        0{index + 1}
                                    </p>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>


                {/* =====================================================
                    BOTTOM STATEMENT
                ===================================================== */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
                        mt-20
                        border-t
                        border-[#174D32]/10
                        pt-6
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <span
                            className="
                                text-[8px]
                                tracking-[0.2em]
                                text-[#172019]/30
                            "
                        >
                            CROPSURE / WHO WE ARE
                        </span>

                        <span
                            className="
                                text-[8px]
                                tracking-[0.2em]
                                text-[#172019]/25
                            "
                        >
                            SCIENCE • AGRONOMY • FIELD • FUTURE
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhoWeAre;