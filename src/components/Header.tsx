import Link from "next/link";
import React from "react";
import Navbar from "./Navbar";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-bold">
            <span className="text-accent">Portfolio</span>
          </h1>
        </Link>
        {/* Navbar */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/hire-me">
            <button className="bg-accent text-black px-6 py-1 rounded-full">
              Hire Me
            </button>
          </Link>
        </div>
        {/* Mobile Navbar */}
        <div className="xl:hidden">
          <MobileNavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
