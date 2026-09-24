import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
    {
        name: "Team Member 01",
        role: "Agricultural Science Lead",
        image:
            "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=90",
    },
    {
        name: "Team Member 02",
        role: "Crop Solutions Specialist",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=90",
    },
    {
        name: "Team Member 03",
        role: "Research & Development",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=90",
    },
];

const TeamSection = () => {
    return (
        <section className="overflow-hidden bg-[#F5F7EF]">

            <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">

                {/* =====================================================
                    HEADER
                ===================================================== */}
                <div className="mx-auto max-w-[850px] text-center">

                    {/* EYEBROW */}
                    <div className="mb-5 flex items-center justify-center gap-3">

                        <span className="h-px w-8 bg-[#174D32]" />

                        <span className="text-[9px] font-semibold tracking-[0.22em] text-[#174D32]">
                            02 / OUR TEAM
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
                        People behind{" "}
                        <span className="font-serif italic text-[#4F8F45]">
                            the progress.
                        </span>
                    </h2>


                    {/* DESCRIPTION */}
                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-[620px]
                            text-[13px]
                            leading-[1.8]
                            text-[#172019]/50
                            sm:text-[14px]
                        "
                    >
                        A multidisciplinary team bringing together
                        agricultural science, field experience and
                        innovation to develop better solutions for growers.
                    </p>

                </div>


                {/* =====================================================
                    TEAM GRID
                ===================================================== */}
                <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">

                    {teamMembers.map((member, index) => (

                        <motion.article
                            key={member.name}
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
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >

                            {/* IMAGE */}
                            <div
                                className="
                                    relative
                                    aspect-[0.9/1]
                                    overflow-hidden
                                    rounded-[10px]
                                    bg-[#174D32]
                                "
                            >

                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        object-top
                                        grayscale-[10%]
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-[1.04]
                                    "
                                />


                                {/* IMAGE OVERLAY */}
                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-[#063523]/35
                                        via-transparent
                                        to-transparent
                                    "
                                />


                                {/* NUMBER */}
                                <div
                                    className="
                                        absolute
                                        left-5
                                        top-5
                                        rounded-full
                                        border
                                        border-white/25
                                        bg-black/10
                                        px-3
                                        py-1.5
                                        text-[8px]
                                        font-semibold
                                        tracking-[0.16em]
                                        text-white
                                        backdrop-blur-sm
                                    "
                                >
                                    0{index + 1}
                                </div>

                            </div>


                            {/* =================================================
                                MEMBER INFO
                            ================================================= */}
                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                    border-b
                                    border-[#172019]/10
                                    py-5
                                "
                            >

                                <div>

                                    <h3
                                        className="
                                            text-[20px]
                                            font-medium
                                            leading-none
                                            tracking-[-0.04em]
                                            text-[#172019]
                                        "
                                    >
                                        {member.name}
                                    </h3>


                                    <p
                                        className="
                                            mt-2
                                            text-[10px]
                                            font-medium
                                            tracking-[0.04em]
                                            text-[#172019]/45
                                        "
                                    >
                                        {member.role}
                                    </p>

                                </div>


                                {/* ARROW */}
                                <button
                                    type="button"
                                    aria-label={`View ${member.name}`}
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#174D32]/25
                                        text-[#174D32]
                                        transition-all
                                        duration-300
                                        group-hover:border-[#174D32]
                                        group-hover:bg-[#174D32]
                                        group-hover:text-white
                                    "
                                >
                                    <ArrowUpRight
                                        size={17}
                                        strokeWidth={1.7}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:-translate-y-0.5
                                            group-hover:translate-x-0.5
                                        "
                                    />
                                </button>

                            </div>

                        </motion.article>

                    ))}

                </div>


                {/* =====================================================
                    BOTTOM DETAIL
                ===================================================== */}
                <div
                    className="
                        mt-8
                        flex
                        flex-col
                        justify-between
                        gap-3
                        border-t
                        border-[#172019]/10
                        pt-5
                        sm:flex-row
                        sm:items-center
                    "
                >

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/30">
                        AGRONOMY • RESEARCH • FIELD EXPERIENCE • INNOVATION
                    </p>

                    <p className="text-[9px] tracking-[0.18em] text-[#172019]/25">
                        CROPSURE / 02
                    </p>

                </div>

            </div>

        </section>
    );
};

export default TeamSection;