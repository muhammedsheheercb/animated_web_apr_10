import Link from "next/link";
import { FizziLogo } from "./FizziLogo";
import CircleText from "./CircleText";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Contact", href: "/contact" },
  { name: "Gift Card", href: "/gift-card" },
  { name: "Our story", href: "/our-story" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-20">
        {/* Decorative spinning circle */}
        <div className="absolute right-8 top-0 size-24 -translate-y-12 md:right-16 md:size-40 md:-translate-y-20">
          <CircleText />
        </div>

        {/* Logo + tagline */}
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <FizziLogo className="h-14 text-cyan-300" />
          <p className="text-slate-400">
            Real food. Real flavour. Made fresh daily.
          </p>
        </div>

        {/* Nav links */}
        <nav className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-slate-300 transition-colors duration-150 hover:text-cyan-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
            <p>© 2026 Tasty. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-cyan-300">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-cyan-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
