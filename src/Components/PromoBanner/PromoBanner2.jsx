import React from "react";
import "./PromoBanner2.css";

export default function PromoBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative flex overflow-hidden rounded-xl shadow-lg h-56 bg-white">
        {/* Left Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex flex-col justify-center pl-6 pr-4 z-10 relative">
          <h2 className="text-xl font-bold mb-2">Royal Taste of Tradition</h2>
          <p className="text-sm">Savor the richness of hand-selected dry fruits sourced from the finest farms!</p>
        </div>
<div>
  <h1 className="mt-10 items-center">
      
  </h1>
</div>
        {/* Image Section */}
        <div className="w-[480px] relative z-0 -mx-6">
          <img
            src="/dryfurits.jpeg"
            alt="Promo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex items-center justify-end pr-6 pl-4 z-10 relative">
          <a
            href="/recipes"
            className="flex items-center space-x-2 text-xl font-medium"
          >
            <span>➤</span>
            <span>View Recipes</span>
          </a>
        </div>
      </div>
    </div>
  );
}
