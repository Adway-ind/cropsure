import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#F5F7EF]">
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;