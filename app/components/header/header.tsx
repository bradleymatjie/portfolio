"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMenu } from "@/app/Context/MenuContext";

const navItems = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { toggleMenu, isMenuOpen } = useMenu();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full text-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
        <Link
          href="/"
          className="text-2xl font-black leading-none tracking-[-0.02em]"
          aria-label="Bradley Matjie home"
        >
          BM.
        </Link>

        <nav className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] font-bold uppercase tracking-[0.02em] transition hover:opacity-60 ${
                isActive(item.href) ? "opacity-100" : "opacity-75"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMenu}
          className="inline-flex h-10 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.02em]"
          aria-label="Toggle menu"
        >
          Menu
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-4 rounded-b-lg border border-black/10 bg-[#f8f4ee]/95 px-6 py-5 shadow-2xl backdrop-blur md:mx-10">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className="border-b border-black/10 py-3 text-sm font-bold uppercase tracking-[0.02em]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
