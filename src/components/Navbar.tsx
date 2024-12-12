"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link href={link.href} key={index}>
            <span
              className={`${
                link.href === pathname && "text-accent border-b-2 border-accent"
              }capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
