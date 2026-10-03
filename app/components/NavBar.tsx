"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import { routes } from "@/routes";

const navItems = [
  { name: "Feature", href: routes.FEATURES },
  { name: "Preview", href: routes.PREVIEW },
  { name: "Sign In", href: routes.SIGNIN },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Homepage" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href={routes.SIGNUP}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-white text-sm font-medium bg-blue-500 hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <ul className="px-5 py-4 space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-3 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  href={routes.SIGNUP}
                  onClick={closeMenu}
                  className="flex items-center justify-center px-5 py-3 rounded-lg text-white text-sm font-medium bg-blue-500 hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
