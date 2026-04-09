"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = navItems.map((item) => {
    const isActive =
      item.href === "/"
        ? pathname === item.href
        : pathname.startsWith(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className={`transition ${
          isActive ? "text-white font-medium" : "text-slate-300 hover:text-white"
        }`}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-(--border) bg-(--surface-alt)/90 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-(--foreground)">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Technical Portfolio
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-controls="navbar-menu"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--border) bg-(--surface) text-(--foreground) transition hover:bg-(--surface-alt) md:hidden"
        >
          <span className="sr-only">Toggle navigation menu</span>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          )}
        </button>

        <div
          id="navbar-menu"
          className={`absolute inset-x-0 top-full z-40 border-t border-(--border) bg-(--surface-alt) px-6 py-4 backdrop-blur md:hidden ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-sm">
            {navLinks}
          </div>
        </div>
      </nav>
    </header>
  );
}