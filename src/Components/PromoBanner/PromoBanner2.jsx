import React from "react";
import "./PromoBanner2.css";

export default function PromoBanner() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="relative flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg h-auto md:h-56 bg-white">
        
        {/* Left Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex flex-col justify-center p-6 z-10 relative text-center md:text-left">
          <h2 className="text-2xl md:text-xl font-bold mb-2">
            Royal Taste of Tradition
          </h2>
          <p className="text-sm md:text-base">
            Savor the richness of hand-selected dry fruits sourced from the finest farms!
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[480px] relative z-0">
          <img
            src="/dryfurits.jpeg"
            alt="Promo"
            className="w-full h-48 md:h-full object-cover"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#dd5c5c] text-white flex items-center justify-center md:justify-end p-6 z-10 relative">
          <a
            href="/recipes"
            className="flex items-center space-x-2 text-lg md:text-xl font-medium hover:underline"
          >
            <span>➤</span>
            <span>View Recipes</span>
          </a>
        </div>
      </div>
    </div>
  );
}
