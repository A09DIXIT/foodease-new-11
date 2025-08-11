import React from "react";
import "./PromoBanner1.css"; // We'll include custom clip-path styles here

export default function PromoBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex overflow-hidden rounded-xl shadow-lg h-56 bg-white">
        {/* Left Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex flex-col justify-center pl-6 pr-4 rounded-l-xl promo-left">
          <h2 className="text-2xl font-bold mb-2"> Power Up with Premium Dry Fruits</h2>
          <p className="text-sm">Nutrient-rich snacks for your daily boost!</p>
        </div>

        {/* Image Section */}
        <div className="w-[480px] relative overflow-hidden">
          <img
            src="/dryfurits.jpeg" // Replace with your actual image path
            alt="Promo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex items-center justify-end pr-6 pl-4 rounded-r-xl promo-right">
          <a
  href="/recipes" // ← Replace with your actual URL
  className="flex items-center space-x-2"
>
  <span className="text-xl">➤</span>
  <span className="text-xl font-medium">View Recipes</span>
</a>
        </div>
      </div>
    </div>
  );
}
