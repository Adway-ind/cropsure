import { ArrowUpRight } from "lucide-react";

const solutions = [
    {
        type: "image",
        image:
            "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=500&q=85",
        alt: "Agricultural crop field",
    },
    {
        type: "text",
        title: "Crop Protection",
    },
    {
        type: "image",
        image:
            "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=500&q=85",
        alt: "Healthy green crops",
    },
    {
        type: "text",
        title: "Soil Health",
    },
    {
        type: "image",
        image:
            "https://images.unsplash.com/photo-1592982537447-6f7a2c5f5f5c?auto=format&fit=crop&w=500&q=85",
        alt: "Agricultural field",
    },
    {
        type: "text",
        title: "Crop Nutrition",
    },
    {
        type: "image",
        image:
            "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=500&q=85",
        alt: "Modern farming",
    },
    {
        type: "text",
        title: "Biological Solutions",
    },
    {
        type: "image",
        image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=500&q=85",
        alt: "Agricultural landscape",
    },
    {
        type: "text",
        title: "Sustainable Agriculture",
    },
];

const SolutionMarquee = () => {
    const items = [...solutions, ...solutions];

    return (
        <section
            className="
                relative
                overflow-hidden
                border-y
                border-[#174D32]/10
                bg-[#F5F7EF]
                py-3
            "
        >
            {/* Moving track */}
            <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center gap-3">
                {items.map((item, index) => {
                    if (item.type === "image") {
                        return (
                            <div
                                key={`${item.alt}-${index}`}
                                className="
                                    h-[58px]
                                    w-[135px]
                                    shrink-0
                                    overflow-hidden
                                    rounded-[14px]
                                "
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                />
                            </div>
                        );
                    }

                    return (
                        <div
                            key={`${item.title}-${index}`}
                            className="
                                flex
                                h-[58px]
                                shrink-0
                                items-center
                                rounded-[14px]
                                bg-[#F8EFA8]
                                px-8
                            "
                        >
                            <span
                                className="
                                    whitespace-nowrap
                                    text-[13px]
                                    font-semibold
                                    tracking-[-0.02em]
                                    text-[#172019]
                                "
                            >
                                {item.title}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Fade edges */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-10
                    w-16
                    bg-gradient-to-r
                    from-[#F5F7EF]
                    to-transparent
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    z-10
                    w-16
                    bg-gradient-to-l
                    from-[#F5F7EF]
                    to-transparent
                "
            />

            <style>{`
                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }

                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default SolutionMarquee;