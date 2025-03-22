import React from "react";
import logo from "../assets/plums.webp";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between px-4 py-2 md:flex-row md:px-8 md:py-4">
      <div className="flex items-center">
        <Image
          className="h-16 w-16 md:h-24 md:w-24"
          alt="logo"
          src={logo}
          priority
        />
        <h1 className="ml-2 text-xl font-bold md:text-3xl">Plums</h1>
      </div>
      <div className="mt-4 flex items-center md:mt-0">
        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border-2 border-gray-300 bg-gray-200 px-4 py-2 focus:border-blue-500 focus:outline-hidden"
          />
          <MagnifyingGlassIcon className="absolute top-3 right-3 h-5 w-5 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
