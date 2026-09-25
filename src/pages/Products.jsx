import MainLayout from "../layouts/MainLayout";
import ProductHero from "../components/Products/ProductHero";
import ProductSection from "../components/Products/ProductSection";
import CropApplication from "../components/Products/CropApplication";
import ProductCTA from "../components/Products/ProductCTA";

const Products = () => {
    return (
        <>
            <ProductHero />
            <ProductSection />
            {/* <CropApplication />
            <ProductCTA /> */}
        </>
    );
};

export default Products;