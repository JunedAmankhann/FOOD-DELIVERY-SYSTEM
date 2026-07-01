import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <GiKnifeFork className="w-[40px] h-[40px] text-green-600" />
              <h1 className="text-2xl font-bold">
                <span className="text-green-600">Tasty</span>
                <span className="text-orange-500">Bites</span>
              </h1>
            </div>
            <p className="text-gray-500 mt-3 text-sm">
              Fresh and delicious food delivered quickly to your doorstep. We bring taste and happiness together.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3">Quick Links</h2>
            <ul className="text-gray-600 space-y-2">
              <li>Home</li>
              <li>All Foods</li>
              <li>Offers</li>
              <li>Cart</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-lg mb-3">Contact</h2>
            <p className="text-gray-600 text-sm">Email: support@tastybites.com</p>
            <p className="text-gray-600 text-sm">Phone: +91 98765 43210</p>
            <p className="text-gray-600 text-sm">Odisha, India</p>
            <div className="flex gap-8 mt-4">
              <FaInstagram className=" flex gap-4 mt-4 text-pink-600 text-xl cursor-pointer"/>
              <FaFacebook className="flex gap-4 mt-4 text-blue-600 text-xl cursor-pointer"/>
              <FaTwitter className="flex gap-4 mt-4 text-sky-600 text-xl cursor-pointer"/>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-5 text-center text-gray-400 text-sm">
          @2026 TastyBites. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;