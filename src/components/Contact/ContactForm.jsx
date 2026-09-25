import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
    return (
        <section className="bg-[#F5F7EF] px-5 py-24 text-[#172019] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-[1250px]">

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
                        <span className="h-px w-8 bg-[#174D32]" />

                        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#174D32]">
                            02 / LET'S TALK
                        </span>

                        <span className="h-px w-8 bg-[#174D32]" />
                    </div>

                    <h2 className="mx-auto mt-6 max-w-[950px] text-[clamp(2.8rem,4vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#172019]">
                        Tell us what you're
                        <br />
                        <span className="font-serif italic text-[#174D32]">
                            working on.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-[580px] text-[14px] leading-[1.7] text-[#172019]/65 sm:text-[15px]">
                        Share a little about your crop, your challenge or what
                        you are looking for. We'll take it from there.
                    </p>
                </motion.div>

                {/* =========================
                    MAIN CONTENT
                ========================== */}
                <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

                    {/* =========================
                        CONTACT FORM
                    ========================== */}
                    <motion.form
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-9"
                    >

                        {/* NAME */}
                        <div className="group border-b border-[#174D32]/20 pb-4">
                            <label
                                htmlFor="name"
                                className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                            >
                                YOUR NAME
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-transparent text-[18px] font-medium text-[#172019] outline-none placeholder:text-[#172019]/35"
                            />
                        </div>

                        {/* COMPANY + EMAIL */}
                        <div className="grid gap-9 sm:grid-cols-2">

                            {/* COMPANY */}
                            <div className="group border-b border-[#174D32]/20 pb-4">
                                <label
                                    htmlFor="company"
                                    className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                                >
                                    COMPANY
                                </label>

                                <input
                                    id="company"
                                    type="text"
                                    placeholder="Company name"
                                    className="w-full bg-transparent text-[18px] font-medium text-[#172019] outline-none placeholder:text-[#172019]/35"
                                />
                            </div>

                            {/* EMAIL */}
                            <div className="group border-b border-[#174D32]/20 pb-4">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                                >
                                    EMAIL
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-transparent text-[18px] font-medium text-[#172019] outline-none placeholder:text-[#172019]/35"
                                />
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="group border-b border-[#174D32]/20 pb-4">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                            >
                                PHONE
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                placeholder="+91"
                                className="w-full bg-transparent text-[18px] font-medium text-[#172019] outline-none placeholder:text-[#172019]/35"
                            />
                        </div>

                        {/* SELECT */}
                        <div className="group border-b border-[#174D32]/20 pb-4">
                            <label
                                htmlFor="subject"
                                className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                            >
                                WHAT CAN WE HELP WITH?
                            </label>

                            <select
                                id="subject"
                                defaultValue=""
                                className="w-full cursor-pointer bg-transparent text-[17px] font-medium text-[#172019] outline-none"
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>

                                <option value="product">
                                    Product Information
                                </option>

                                <option value="crop">
                                    Crop Solution
                                </option>

                                <option value="distribution">
                                    Distribution
                                </option>

                                <option value="partnership">
                                    Partnership
                                </option>

                                <option value="general">
                                    General Enquiry
                                </option>
                            </select>
                        </div>

                        {/* MESSAGE */}
                        <div className="group border-b border-[#174D32]/20 pb-4">
                            <label
                                htmlFor="message"
                                className="mb-3 block text-[10px] font-semibold tracking-[0.18em] text-[#174D32]"
                            >
                                MESSAGE
                            </label>

                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell us a little about your requirements..."
                                className="w-full resize-none bg-transparent text-[17px] leading-[1.7] text-[#172019] outline-none placeholder:text-[#172019]/35"
                            />
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            className="group flex items-center gap-3 rounded-full bg-[#174D32] px-7 py-4 text-[11px] font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0B2F20] hover:shadow-[0_10px_30px_rgba(23,77,50,0.18)]"
                        >
                            <span>SEND ENQUIRY</span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={1.8}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                        </button>
                    </motion.form>

                    {/* =========================
                        CONTACT INFORMATION
                    ========================== */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:pt-2"
                    >

                        {/* CONTACT DETAILS */}
                        <div className="border-t border-[#174D32]/20">

                            {/* EMAIL */}
                            <div className="flex gap-5 border-b border-[#174D32]/20 py-8">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#174D32]/20 text-[#174D32]">
                                    <Mail
                                        size={16}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#174D32]">
                                        EMAIL
                                    </span>

                                    <p className="mt-2 text-[17px] font-medium text-[#172019]">
                                        hello@cropsure.com
                                    </p>
                                </div>
                            </div>

                            {/* PHONE */}
                            <div className="flex gap-5 border-b border-[#174D32]/20 py-8">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#174D32]/20 text-[#174D32]">
                                    <Phone
                                        size={16}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#174D32]">
                                        PHONE
                                    </span>

                                    <p className="mt-2 text-[17px] font-medium text-[#172019]">
                                        +91 XXXXX XXXXX
                                    </p>
                                </div>
                            </div>

                            {/* LOCATION */}
                            <div className="flex gap-5 border-b border-[#174D32]/20 py-8">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#174D32]/20 text-[#174D32]">
                                    <MapPin
                                        size={16}
                                        strokeWidth={1.5}
                                    />
                                </div>

                                <div>
                                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#174D32]">
                                        LOCATION
                                    </span>

                                    <p className="mt-2 text-[17px] font-medium leading-[1.6] text-[#172019]">
                                        Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* =========================
                            STATEMENT
                        ========================== */}
                        <div className="mt-12">

                            <p className="max-w-[430px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[1] tracking-[-0.055em] text-[#172019]">
                                Close to the field.
                                <br />

                                <span className="font-serif italic text-[#174D32]">
                                    Close to what matters.
                                </span>
                            </p>

                            <p className="mt-6 max-w-[400px] text-[14px] leading-[1.7] text-[#172019]/60">
                                We believe meaningful agricultural solutions
                                begin with understanding the realities of the
                                field.
                            </p>
                        </div>

                    </motion.div>
                </div>

                {/* =========================
                    TECHNICAL FOOTER LINE
                ========================== */}
                <div className="mt-16 flex flex-col gap-3 border-t border-[#174D32]/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-[8px] font-medium tracking-[0.23em] text-[#172019]/35">
                        CONTACT / AGRONOMY / FIELD
                    </span>

                    <span className="text-[8px] font-medium tracking-[0.23em] text-[#172019]/35">
                        CROPSURE / 02
                    </span>
                </div>

            </div>
        </section>
    );
};

export default ContactForm;