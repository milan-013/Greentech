"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Scrap Processing", href: "/scrapping" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant h-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 h-full flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2 text-[24px] font-bold text-primary tracking-tight">
          <Image
            alt="Green Tech Minerals Logo"
            className="h-12 w-auto object-contain"
            src="/assets/logo.jpeg"
            width={48}
            height={48}
            priority
          />
          <span>Green Tech Minerals</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-6 text-sm font-semibold tracking-wider">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all pb-1 duration-200 ${isActive(item.href)
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-secondary hover:text-primary font-medium"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary p-2 focus:outline-none hover:bg-surface-container rounded-lg transition-colors flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[24px]">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant shadow-lg z-40">
          <div className="flex flex-col py-4 px-6 space-y-3 font-semibold text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2.5 transition-colors ${isActive(item.href)
                  ? "text-primary border-l-4 border-primary pl-3 font-bold"
                  : "text-secondary hover:text-primary pl-3 font-medium"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
