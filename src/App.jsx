import React from "react";
import {  BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import ProductList from "./Components/ProductList/ProductList";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import Footer from "./Components/Footer/Footer";
import PromoSection from "./Pages/PromoSection/PromoSection";

import Login from "./Pages/Login";   // ✅ your login page
import Signup from "./Pages/Signup"; // ✅ your signup page
import Profile from "./Pages/Profile"; // ✅ profile page
import ProtectedRoute from "./Pages/ProtectedRoute"; // ✅ route protection

// Layout wrapper to hide Navbar & Footer on Login/Signup
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<HeroBanner />} />
          <Route path="/PromoSection" element={<PromoSection />} />

          {/* Product List Page */}
          <Route path="/products" element={<ProductList />} />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Profile Page */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}
