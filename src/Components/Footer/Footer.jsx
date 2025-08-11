import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import Logo from "/foodease.png"; // update the path if needed

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <img src={Logo} alt="Foodease Logo" className="h-14 mb-3" />
          <p className="text-sm">
            Foodease is your one-stop grocery solution offering fresh produce,
            daily essentials, and fast delivery at your fingertips.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-700">About Us</a></li>
            <li><a href="#" className="hover:text-green-700">Products</a></li>
            <li><a href="#" className="hover:text-green-700">New Arrivals</a></li>
            <li><a href="#" className="hover:text-green-700">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              support@foodease.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-gray-700">
            <a href="#"><Facebook className="hover:text-blue-600" /></a>
            <a href="#"><Instagram className="hover:text-pink-600" /></a>
            <a href="#"><Twitter className="hover:text-sky-500" /></a>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-4 text-center text-sm text-gray-600 px-4">
        © {new Date().getFullYear()} Foodease. All rights reserved.
      </div>
    </footer>
  );
}
