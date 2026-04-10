"use client";

import { useState } from "react";
import Link from "next/link";
import { FizziLogo } from "@/components/FizziLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "Gift Card", href: "/gift-card" },
  { name: "Our story", href: "/our-story" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[100]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="The Rusty Ladle home">
          <FizziLogo className="h-10 cursor-pointer text-cyan-300" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-slate-100 transition-colors duration-150 hover:text-cyan-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex flex-col justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-0.5 w-6 origin-center bg-cyan-300 transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cyan-300 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 origin-center bg-cyan-300 transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-md transition-all duration-300 md:hidden ${menuOpen ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-base font-semibold uppercase tracking-widest text-slate-100 transition-colors hover:text-cyan-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
