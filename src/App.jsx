import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Footer from "./Components/Footer/Footer";
import PromoSection from "./Pages/PromoSection/PromoSection";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<HeroBanner />} />
        <Route path="PromoSection" element={<PromoSection />} />

        {/* Product List Page */}
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </Router>
  );
}
