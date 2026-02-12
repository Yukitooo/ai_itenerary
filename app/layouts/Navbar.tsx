"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-grey-700 border-b border-gray-200 shadow-sm">
      <div className="text-xl font-bold text-white">
        <Link href="/">AI Itinerary</Link>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-sm font-medium text-gray-700">
          <Link
            href="/pages/generatePage"
            className="text-white hover:text-blue-700 transition-colors"
          >
            Generate
          </Link>
          <Link href="/history" className="text-white hover:text-blue-600 transition-colors">
            History
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Searcg Itinerary"
            className="pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">Search</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
