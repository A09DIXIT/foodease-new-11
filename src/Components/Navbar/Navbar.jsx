import { Link } from "react-router-dom";
import { Bell, ChevronDown } from "lucide-react";
import Logo from "/foodease.png";

export default function Navbar() {
  return (
    <nav className="flex flex-col shadow bg-white sticky top-0 z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={Logo} alt="Foodease Logo" className="h-20 w-auto cursor-pointer" />
          </Link>
        </div>

        <input
          type="text"
          placeholder="Search for groceries..."
          className="w-1/2 px-6 py-2 border rounded-md focus:outline-none"
        />

        <div className="flex items-center gap-4">
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
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200">
        <ul className="flex justify-center gap-6 py-2 text-sm font-medium text-gray-700">
          <li className="flex items-center gap-1 cursor-pointer hover:text-green-600">
            All Groceries <ChevronDown className="w-4 h-4" />
          </li>
          <li className="cursor-pointer hover:text-green-600">Weekly Specials</li>
          <li className="cursor-pointer hover:text-green-600">New Arrivals</li>
          <li className="cursor-pointer hover:text-green-600">Srilankan Products</li>
          <li className="cursor-pointer hover:text-green-600">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
