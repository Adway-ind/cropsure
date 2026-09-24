import { ArrowUpRight, Check, TrendingUp } from "lucide-react";

const WhoWeAre = () => {
    const stats = [
        {
            number: "10+",
            title: "Years Experience",
            description: "Proven agronomic performance",
        },
        {
            number: "25+",
            title: "Solutions",
            description: "Field-tested formulations",
        },
        {
            number: "100%",
            title: "Quality Focus",
            description: "Stringent batch testing",
        },
    ];

    return (
        <section className="bg-[#F5F7EF] px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-[1320px]">
                <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">

                    {/* ================= LEFT ================= */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative overflow-visible">
                            <div className="aspect-[1.12/1] overflow-hidden rounded-[7px]">
                                <img
                                    src="https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1400&q=90"
                                    alt="Healthy agricultural crops growing in a field"
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        hover:scale-[1.025]
                                    "
                                />
                            </div>

                            {/* Image bottom label */}
                            <div
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    flex
                                    items-center
                                    gap-2
                                    rounded-tr-[6px]
                                    bg-[#174D32]
                                    px-4
                                    py-2.5
                                    text-[9px]
                                    font-medium
                                    tracking-[0.08em]
                                    text-white
                                "
                            >
                                <span className="h-[6px] w-[6px] rounded-full bg-[#E9EF9B]" />

                                <span>
                                    ACTIVE FIELD TRIAL INSPECTION
                                </span>

                                <span className="text-white/40">
                                    — TARGET 2026
                                </span>
                            </div>

                            {/* Yield Index Card */}
                            <div
                                className="
                                    absolute
                                    -bottom-5
                                    right-4
                                    flex
                                    items-center
                                    gap-3
                                    rounded-[7px]
                                    bg-white
                                    px-4
                                    py-3
                                    shadow-[0_12px_35px_rgba(23,77,50,0.14)]
                                    sm:right-5
                                    sm:px-5
                                    sm:py-3.5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-[8px]
                                        bg-[#BFEFAE]
                                        text-[#174D32]
                                    "
                                >
                                    <TrendingUp size={15} strokeWidth={2.2} />
                                </div>

                                <div>
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-[20px] font-medium leading-none tracking-[-0.04em] text-[#174D32]">
                                            99.4%
                                        </span>

                                        <span className="text-[9px] font-medium text-[#174D32]/45">
                                            INDEX
                                        </span>
                                    </div>

                                    <p className="mt-1 text-[8px] font-medium uppercase tracking-[0.04em] text-[#172019]/50">
                                        Yield Resilience Index
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT ================= */}
                    <div className="lg:pl-2 xl:pl-8">

                        {/* Eyebrow */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-5 bg-[#4F8F45]" />

                            <span
                                className="
                                    text-[10px]
                                    font-semibold
                                    tracking-[0.2em]
                                    text-[#174D32]
                                "
                            >
                                WHO WE ARE
                            </span>
                        </div>

                        {/* Heading */}
                        <h2
                            className="
                                max-w-[590px]
                                text-[clamp(2.5rem,4vw,4.4rem)]
                                font-normal
                                leading-[0.98]
                                tracking-[-0.045em]
                                text-[#172019]
                            "
                        >
                            Solutions that help agriculture{" "}
                            <span className="font-serif italic text-[#174D32]">
                                move forward.
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                                mt-7
                                max-w-[570px]
                                text-[14px]
                                leading-[1.8]
                                text-[#172019]/65
                                sm:text-[15px]
                            "
                        >
                            CropSure is an advanced agricultural solutions
                            enterprise dedicated to bridging high-standard
                            scientific research and practical agronomic
                            execution. From multi-target cellular biocontrols
                            to micro-formulated soil nutrients, we deliver
                            measured biological performance to commercial
                            farming operations worldwide.
                        </p>

                        {/* Link */}
                        <a
                            href="/about"
                            className="
                                group
                                mt-6
                                inline-flex
                                items-center
                                gap-2
                                border-b
                                border-[#174D32]/30
                                pb-1.5
                                text-[11px]
                                font-semibold
                                text-[#174D32]
                                transition-colors
                                duration-300
                                hover:border-[#174D32]
                            "
                        >
                            <span>Discover CropSure Story</span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.8}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                            />
                        </a>

                        {/* Stats */}
                        <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.title}
                                    className="
                                        min-h-[112px]
                                        rounded-[7px]
                                        bg-[#EDF2E7]
                                        px-4
                                        py-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:bg-[#E7EEE0]
                                    "
                                >
                                    <div className="text-[22px] font-medium leading-none tracking-[-0.04em] text-[#174D32]">
                                        {stat.number}
                                    </div>

                                    <div className="mt-2 text-[9px] font-semibold text-[#172019]">
                                        {stat.title}
                                    </div>

                                    <p className="mt-1 text-[8px] leading-[1.4] text-[#172019]/50">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;