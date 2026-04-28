"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMenu } from "@/app/Context/MenuContext";

export default function Header() {
  const { toggleMenu, isMenuOpen } = useMenu();
  const pathname = usePathname();

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Work Experience", href: "/work" },
    { label: "Education & Skills", href: "/education" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white text-sm font-bold text-black">
            BM
          </div>

          <div>
            <h2 className="text-base font-semibold tracking-tight text-white">
              Bradley Matjie
            </h2>

            <p className="hidden text-xs text-white/50 sm:block">
              Full-Stack Software Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition ${
                isActive(item.href)
                  ? "bg-white text-black font-medium"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90 md:inline-flex"
        >
          Let’s Talk
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-black/95 px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  isActive(item.href)
                    ? "bg-white text-black font-medium"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={toggleMenu}
              className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-medium text-black"
            >
              Let’s Talk
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}