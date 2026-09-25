import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "CropShield",
        category: "Crop Protection",
        code: "CS / CP-01",
        image:
            "https://vestdata.s3.ap-southeast-1.amazonaws.com/images/product-detail/26020.jpg?X-Amz-Expires=259200&response-content-disposition=attachment%3B%20filename%3Dfile.jpg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIASELD6XF5K3M7XT5Z%2F20260923%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20260923T112925Z&X-Amz-SignedHeaders=host&X-Amz-Signature=faeb6fabc7659827aaaf18d034794c6284cbe43d8f12c01b62131554bfd810dd",
        description:
            "A science-led crop protection solution designed to support healthier plants and reduce crop stress caused by common field pressures.",
        benefits: [
            "Supports crop protection",
            "Helps maintain plant health",
            "Designed for field application",
        ],
        crops: "Vegetables / Fruits / Field Crops",
        application: "Foliar application",
    },
    {
        id: 2,
        name: "NutriCore",
        category: "Plant Nutrition",
        code: "CS / PN-02",
        image:
            "https://awpl-kycdocs.s3.ap-south-1.amazonaws.com/upload1/product/_T1271_028516.jpeg",
        description:
            "Balanced plant nutrition formulated to support crop development, nutrient availability and stronger overall plant performance.",
        benefits: [
            "Supports balanced nutrition",
            "Promotes healthy crop development",
            "Improves nutrient availability",
        ],
        crops: "Vegetables / Fruits / Plantation Crops",
        application: "Foliar / Soil application",
    },
    {
        id: 3,
        name: "BioRise",
        category: "Bio Solutions",
        code: "CS / BS-03",
        image:
            "https://www.kisanshop.in/uploads/Barfi-Agrivit-Imazethapyr-10-SL-Herbicide.jpg",
        description:
            "Biological solution designed to work alongside natural crop processes and support resilient plant growth.",
        benefits: [
            "Supports natural plant processes",
            "Promotes biological activity",
            "Designed for sustainable agriculture",
        ],
        crops: "Vegetables / Fruits / Plantation Crops",
        application: "Soil / Foliar application",
    },
    {
        id: 4,
        name: "SoilActive",
        category: "Soil Health",
        code: "CS / SH-04",
        image:
            "https://kevaindustries.com/cdn/shop/files/KevaAgro80Plus_270922124806.png?v=1764160414&width=1080",
        description:
            "A soil-focused solution developed to support healthier growing conditions and long-term agricultural productivity.",
        benefits: [
            "Supports soil vitality",
            "Encourages biological activity",
            "Helps improve growing conditions",
        ],
        crops: "Field Crops / Vegetables / Plantation Crops",
        application: "Soil application",
    },
];

const categories = [
    "All",
    "Crop Protection",
    "Plant Nutrition",
    "Bio Solutions",
    "Soil Health",
];

const ProductSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                  (product) => product.category === activeCategory
              );

    return (
        <>
            <section
                id="products"
                className="relative overflow-hidden bg-[#F5F7EF] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-36"
            >
                <div className="mx-auto max-w-[1380px]">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-[#174D32]" />

                            <span className="text-[9px] font-semibold tracking-[0.24em] text-[#174D32] sm:text-[10px]">
                                02 / PRODUCT RANGE
                            </span>

                            <span className="h-px w-8 bg-[#174D32]" />
                        </div>

                        <h2 className="mx-auto mt-6 max-w-[1000px] text-[clamp(2.8rem,5vw,5.8rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#172019]">
                            Solutions built around
                            <br />
                            <span className="font-serif italic text-[#174D32]">
                                the field.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-[600px] text-[13px] leading-[1.7] text-[#172019]/55 sm:text-[14px]">
                            Explore CropSure's range of agricultural solutions
                            developed around crop performance, field
                            conditions and responsible agriculture.
                        </p>
                    </motion.div>

                    {/* Category navigation */}
                    <div className="mt-12 overflow-x-auto pb-2">
                        <div className="flex min-w-max justify-center gap-2">
                            {categories.map((category) => {
                                const active =
                                    activeCategory === category;

                                return (
                                    <button
                                        key={category}
                                        type="button"
                                        onClick={() =>
                                            setActiveCategory(category)
                                        }
                                        className={`rounded-full border px-5 py-2.5 text-[10px] font-semibold tracking-[0.08em] transition-all duration-300 ${
                                            active
                                                ? "border-[#174D32] bg-[#174D32] text-white"
                                                : "border-[#174D32]/15 bg-white/40 text-[#174D32]/60 hover:border-[#174D32]/40 hover:text-[#174D32]"
                                        }`}
                                    >
                                        {category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Product list */}
                    <motion.div
                        layout
                        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProducts.map(
                                (product, index) => (
                                    <motion.article
                                        layout
                                        key={product.id}
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: 15,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: index * 0.04,
                                        }}
                                        className="group overflow-hidden border border-[#174D32]/10 bg-white"
                                    >
                                        {/* Image */}
                                        <div className="relative h-[300px] overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/65 via-transparent to-transparent" />

                                            <div className="absolute left-5 top-5">
                                                <span className="bg-[#E9EF9B] px-3 py-1.5 text-[8px] font-semibold tracking-[0.15em] text-[#172019]">
                                                    {product.category}
                                                </span>
                                            </div>

                                            <span className="absolute bottom-5 left-5 text-[8px] font-semibold tracking-[0.2em] text-white/65">
                                                {product.code}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-[24px] font-semibold tracking-[-0.045em] text-[#172019]">
                                                {product.name}
                                            </h3>

                                            <p className="mt-3 line-clamp-3 text-[12px] leading-[1.7] text-[#172019]/55">
                                                {product.description}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedProduct(
                                                        product
                                                    )
                                                }
                                                className="group/button mt-6 flex items-center gap-2 text-[9px] font-semibold tracking-[0.18em] text-[#174D32]"
                                            >
                                                VIEW PRODUCT

                                                <ArrowUpRight
                                                    size={14}
                                                    strokeWidth={1.8}
                                                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                                                />
                                            </button>
                                        </div>
                                    </motion.article>
                                )
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Bottom information */}
                    <div className="mt-12 flex flex-col gap-3 border-t border-[#174D32]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <span className="text-[8px] font-medium tracking-[0.22em] text-[#172019]/35">
                            CROPSURE / AGRICULTURAL SOLUTIONS
                        </span>

                        <span className="text-[8px] font-medium tracking-[0.22em] text-[#172019]/35">
                            {filteredProducts.length
                                .toString()
                                .padStart(2, "0")}{" "}
                            PRODUCTS
                        </span>
                    </div>
                </div>
            </section>

            {/* =========================================
                PRODUCT DETAIL MODAL
            ========================================= */}

            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06180E]/80 p-4 backdrop-blur-md sm:p-6"
                        onMouseDown={(event) => {
                            if (
                                event.target === event.currentTarget
                            ) {
                                setSelectedProduct(null);
                            }
                        }}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.97,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative max-h-[92vh] w-full max-w-[1100px] overflow-y-auto bg-[#F5F7EF] shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
                        >
                            {/* Close */}
                            <button
                                type="button"
                                aria-label="Close product details"
                                onClick={() =>
                                    setSelectedProduct(null)
                                }
                                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#071C10]/85 text-white backdrop-blur-md transition-colors hover:bg-[#174D32] sm:right-6 sm:top-6"
                            >
                                <X
                                    size={18}
                                    strokeWidth={1.7}
                                />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">

                                {/* Product image */}
                                <div className="relative h-[360px] overflow-hidden sm:h-[450px] lg:h-[650px]">
                                    <img
                                        src={
                                            selectedProduct.image
                                        }
                                        alt={
                                            selectedProduct.name
                                        }
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C10]/70 via-transparent to-transparent" />

                                    <div className="absolute bottom-7 left-7">
                                        <span className="text-[9px] font-semibold tracking-[0.25em] text-white/65">
                                            {
                                                selectedProduct.code
                                            }
                                        </span>
                                    </div>
                                </div>

                                {/* Product information */}
                                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">

                                    <div>
                                        <span className="text-[9px] font-semibold tracking-[0.24em] text-[#174D32]">
                                            {
                                                selectedProduct.category
                                            }
                                        </span>

                                        <h3 className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[#172019]">
                                            {
                                                selectedProduct.name
                                            }
                                        </h3>

                                        <p className="mt-6 max-w-[520px] text-[13px] leading-[1.8] text-[#172019]/60">
                                            {
                                                selectedProduct.description
                                            }
                                        </p>
                                    </div>

                                    {/* Benefits */}
                                    <div className="mt-9 border-t border-[#174D32]/10 pt-7">
                                        <span className="text-[8px] font-semibold tracking-[0.24em] text-[#174D32]/60">
                                            KEY BENEFITS
                                        </span>

                                        <div className="mt-4 space-y-3">
                                            {selectedProduct.benefits.map(
                                                (
                                                    benefit
                                                ) => (
                                                    <div
                                                        key={
                                                            benefit
                                                        }
                                                        className="flex items-start gap-3"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#174D32]" />

                                                        <span className="text-[12px] text-[#172019]/65">
                                                            {
                                                                benefit
                                                            }
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Application details */}
                                    <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#174D32]/10 pt-7 sm:grid-cols-2">
                                        <div>
                                            <span className="text-[8px] font-semibold tracking-[0.2em] text-[#174D32]/50">
                                                SUITABLE FOR
                                            </span>

                                            <p className="mt-2 text-[11px] leading-[1.6] text-[#172019]/65">
                                                {
                                                    selectedProduct.crops
                                                }
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-[8px] font-semibold tracking-[0.2em] text-[#174D32]/50">
                                                APPLICATION
                                            </span>

                                            <p className="mt-2 text-[11px] leading-[1.6] text-[#172019]/65">
                                                {
                                                    selectedProduct.application
                                                }
                                            </p>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button
                                        type="button"
                                        className="group mt-9 flex w-fit items-center gap-3 rounded-full bg-[#174D32] px-6 py-3.5 text-[10px] font-semibold tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#0F3D27]"
                                    >
                                        ENQUIRE ABOUT PRODUCT

                                        <ArrowUpRight
                                            size={15}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductSection;