"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];
const MobileNavBar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] cursor-pointer text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4">
        <div className="mt-32 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-bold">
              <span className="text-accent">Portfolio</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 text-center justify-center items-center">
          {links.map((link, index) => (
            <Link
              className={`text-xl capitalize hover:text-accent transition-all duration-300 ${
                pathname === link.href && "text-accent border-b-2 border-accent"
              }`}
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
