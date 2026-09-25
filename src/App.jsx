import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../src/pages/home";
import Aboutpage from "../src/pages/About";
import MainLayout from "../src/layouts/MainLayout";
import Products from "../src/pages/Products";
import Contact from "../src/pages/contact"
import ScrollToTop from "./components/ScrollToTop";
import CustomCursor from "./components/CustomCursor";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;