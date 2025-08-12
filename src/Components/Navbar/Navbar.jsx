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
  ];

  return (
    <nav className="shadow bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/">
          <img
            src={Logo}
            alt="Foodease Logo"
            className="h-14 w-auto cursor-pointer"
          />
        </Link>

        {/* Desktop Search */}
        <input
          type="text"
          placeholder="Search for groceries..."
          className="hidden md:block w-1/2 px-6 py-2 border rounded-md focus:outline-none"
        />

        {/* Icons */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block cursor-pointer">🛒 Cart</span>
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
          </button>
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="border-t border-gray-200 relative hidden md:block">
        <ul className="flex justify-center gap-6 py-2 text-sm font-medium text-gray-700">
          {/* All Groceries with Dropdown */}
          <li
            className="flex items-center gap-1 cursor-pointer hover:text-red-600 relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            All Groceries <ChevronDown className="w-4 h-4" />
            {showCategories && (
              <ul className="absolute top-full left-0 bg-white shadow-md border mt-1 w-80 z-50 grid grid-cols-2">
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
          <li className="cursor-pointer hover:text-red-600">Srilankan Products</li>
          <li className="cursor-pointer hover:text-red-600">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="p-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none mb-4"
            />

            {/* All Groceries Collapsible */}
            <div>
              <button
                className="w-full flex justify-between items-center py-2 font-medium text-gray-700 hover:text-green-600"
                onClick={() => setShowCategories(!showCategories)}
              >
                All Groceries
                <ChevronDown
                  className={`w-4 h-4 transform transition ${
                    showCategories ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showCategories && (
                <ul className="grid grid-cols-2 gap-1 mt-2">
                  {categories.map((cat, idx) => (
                    <li
                      key={idx}
                      className="px-2 py-1 text-sm hover:bg-green-50 rounded cursor-pointer"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Other Links */}
            <ul className="mt-4 space-y-2">
              <li className="cursor-pointer hover:text-green-600">Weekly Specials</li>
              <li className="cursor-pointer hover:text-green-600">New Arrivals</li>
              <li className="cursor-pointer hover:text-green-600">Srilankan Products</li>
              <li className="cursor-pointer hover:text-green-600">Contact Us</li>
            </ul>

            {/* Auth Buttons */}
            <div className="mt-4 flex gap-2">
              <button className="flex-1 py-2 border rounded hover:bg-gray-100">
                Login
              </button>
              <button className="flex-1 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
