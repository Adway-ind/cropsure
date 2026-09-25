import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const LocationMap = () => {
    const locationQuery = "Puliyanmala, Idukki, Kerala, India";

    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query=Puliyanmala%2C+Idukki%2C+Kerala%2C+India";

    return (
        <section className="overflow-hidden bg-white px-5 py-5 text-[#172019] sm:px-8 sm:py-28 lg:px-12 lg:py-12">

            <div className="mx-auto max-w-[1500px]">

                


                {/* =====================================================
                    GOOGLE MAP
                ====================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                    }}
                    className="mt-16 w-full sm:mt-20"
                >

                    {/* =================================================
                        MAP HEADER
                    ================================================== */}

                    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

                        <div>

                            <span className="text-[9px] font-semibold tracking-[0.22em] text-[#174D32]">
                                OUR LOCATION
                            </span>

                            <h3 className="mt-2 text-[clamp(2rem,3.5vw,3.4rem)] font-medium leading-[1] tracking-[-0.055em]">
                                Find us in Kerala.
                            </h3>

                        </div>


                        <p className="max-w-[350px] text-[11px] leading-[1.7] text-[#172019]/45 sm:text-right">

                            Visit our location or open the map for directions
                            and navigation.

                        </p>

                    </div>


                    {/* =================================================
                        MAP
                    ================================================== */}

                    <div className="relative w-full overflow-hidden rounded-[24px] border border-[#174D32]/10 bg-[#F5F7EF] shadow-[0_15px_50px_rgba(23,77,50,0.08)]">

                        <iframe
                            title="CropSure location - Puliyanmala Kerala"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(
                                locationQuery
                            )}&output=embed`}
                            className="h-[360px] w-full grayscale contrast-[0.92] sm:h-[440px] lg:h-[500px]"
                            style={{
                                border: 0,
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />


                        {/* =================================================
                            CROPSURE BADGE
                        ================================================== */}

                        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">

                            <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 shadow-[0_8px_25px_rgba(0,0,0,0.10)] backdrop-blur-md">

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E9EF9B] text-[#174D32]">

                                    <MapPin
                                        size={14}
                                        strokeWidth={1.8}
                                    />

                                </span>


                                <div>

                                    <p className="text-[9px] font-bold tracking-[0.16em] text-[#174D32]">
                                        CROPSURE
                                    </p>

                                    <p className="mt-0.5 text-[7px] tracking-[0.12em] text-[#172019]/45">
                                        PULIYANMALA / KERALA
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* =================================================
                        LOCATION INFORMATION
                    ================================================== */}

                    <div className="mt-5 flex flex-col gap-5 border-t border-[#174D32]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <span className="text-[8px] font-semibold tracking-[0.2em] text-[#174D32]">
                                LOCATION
                            </span>

                            <p className="mt-1 text-[13px] font-medium text-[#172019]">
                                Puliyanmala, Idukki, Kerala, India
                            </p>

                        </div>


                        <a
                            href={googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex w-fit items-center gap-2 rounded-full bg-[#174D32] px-5 py-3 text-[9px] font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#0B2F20]"
                        >

                            OPEN IN GOOGLE MAPS

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.7}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />

                        </a>

                    </div>

                </motion.div>


                {/* =====================================================
                    TECHNICAL LINE
                ====================================================== */}

                <div className="mt-10 border-t border-[#174D32]/10 pt-5">

                    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

                        <span className="text-[8px] font-medium tracking-[0.23em] text-[#172019]/30">
                            SCIENCE / AGRICULTURE / CONNECTION
                        </span>

                        <span className="text-[8px] font-medium tracking-[0.23em] text-[#172019]/30">
                            PULIYANMALA / KERALA
                        </span>

                        <span className="text-[8px] font-medium tracking-[0.23em] text-[#172019]/30">
                            CROPSURE / 04
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default LocationMap;