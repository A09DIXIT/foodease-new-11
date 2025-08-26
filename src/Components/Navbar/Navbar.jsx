import { Link } from "react-router-dom";
import { Bell, ChevronDown, Menu, X } from "lucide-react";
import Logo from "/foodease.png";
import { useState } from "react";

export default function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    "Frozen",
    "Spices",
    "Flours",
    "Snacks",
    "Sauces, Pickles & Paste",
    "Dairy",
    "Fresh produces",
    "Bakery",
    "Lentils & Wadi",
    "Pooja Items & Inc",
    "Health & Beauty",
    "Rice",
    "Cooking Oils & Ghee",
    "Drinks",
    "Ready to Eat",
    "Instant Mix",
    "Utensils & Disposables",
    "Confectionary",
    "Pacific Island Foods",
    "Fryums & Pappadams",
    "Pooja Items & Incense",
    "Nuts AND Grains",
    "Noodles & Vermicille",
    "Nepalease Food",
    "Suger & Jaggery",
    "Tea & Coffee",
    "House Hold Products",
    "Fresh Produces",
    "Dry Fish",
    



  ];

  return (
    <nav className="shadow bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Foodease Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for Khushi..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <span className="cursor-pointer">🛒 Cart</span>
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <button className="text-sm px-4 py-2 bg-white border rounded hover:bg-gray-100">
            Login
          </button>
          <button className="text-sm px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Bottom Section - Desktop Only */}
      <div className="border-t border-gray-200 hidden md:block">
        <ul className="flex justify-center gap-6 py-2 text-sm font-medium text-gray-700">
          {/* All Groceries with Dropdown */}
          <li
            className="flex items-center gap-1 cursor-pointer hover:text-red-600 relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            All Groceries <ChevronDown className="w-4 h-4" />
           {showCategories && (
  <ul
    className="absolute top-full left-0 bg-white shadow-md border mt-1 w-[600px] z-50 grid grid-cols-3"
  >
    {categories.map((cat, idx) => (
      <li
        key={idx}
        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
      >
        {cat}
      </li>
    ))}
  </ul>
)}
          </li>

          <li className="cursor-pointer hover:text-red-600">Weekly Specials</li>
          <li className="cursor-pointer hover:text-red-600">New Arrivals</li>
          <li className="cursor-pointer hover:text-red-600">
            Srilankan Products
          </li>
          <li className="cursor-pointer hover:text-red-600">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="bg-white w-3/4 h-full p-4 overflow-y-auto">
            {/* Close Button */}
            <button
              className="mb-4 p-2 rounded hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            {/* Mobile Search */}
            <input
              type="text"
              placeholder="Search for groceries..."
              className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none"
            />

            {/* Menu Items */}
            <ul className="space-y-3">
              <li className="font-semibold">All Groceries</li>
              <ul className="pl-4 space-y-2 text-gray-600">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="hover:text-green-600 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>

              <li className="hover:text-green-600 mt-4">Weekly Specials</li>
              <li className="hover:text-green-600">New Arrivals</li>
              <li className="hover:text-green-600">Srilankan Products</li>
              <li className="hover:text-green-600">Contact Us</li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-6 space-y-2">
              <button className="w-full px-4 py-2 border rounded hover:bg-gray-100">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
