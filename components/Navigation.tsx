"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "Bridal Makeup", href: "/services/bridal" },
  { label: "Editorial & Fashion", href: "/services/editorial" },
  { label: "Special Events", href: "/services/events" },
  { label: "Makeup Lessons", href: "/services/lessons" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1410]/90 backdrop-blur-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">

        {/* LEFT NAV */}
        <ul className="hidden lg:flex items-center gap-10">
          {/* Services with dropdown */}
          <li className="dropdown-trigger relative">
            <button className="nav-link flex items-center gap-1 bg-transparent border-0 cursor-pointer">
              SERVICES
              <svg
                className="w-3 h-3 mt-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="dropdown-menu absolute top-full left-0 mt-4 min-w-[200px] bg-[#1A1410] py-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-5 py-3 text-[11px] tracking-[0.15em] uppercase text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </li>
          <li>
            <Link href="/portfolio" className="nav-link">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/about" className="nav-link">ABOUT</Link>
          </li>
          <li>
            <Link href="/faq" className="nav-link">FAQ</Link>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-white font-serif tracking-[0.3em] text-sm font-normal uppercase whitespace-nowrap hover:opacity-75 transition-opacity"
        >
          BEAUTY BY ALDA
        </Link>

        {/* RIGHT NAV */}
        <ul className="hidden lg:flex items-center gap-8 ml-auto">
          <li>
            <Link href="/contact" className="nav-link">CONTACT</Link>
          </li>
          <li>
            <Link
              href="/contact#book"
              className="nav-link border border-white px-5 py-2 hover:bg-white hover:text-[#1A1410] transition-all duration-300 flex items-center gap-2"
            >
              BOOK NOW
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="lg:hidden ml-auto text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-[#1A1410] overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-6 flex flex-col gap-6">
          <button
            className="text-left text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white flex items-center gap-2"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            SERVICES
            <svg className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {servicesOpen && (
            <div className="pl-4 flex flex-col gap-4 border-l border-white/10">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="text-[11px] tracking-[0.15em] uppercase text-white/60 hover:text-white" onClick={() => setMobileOpen(false)}>
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {[
            { label: "PORTFOLIO", href: "/portfolio" },
            { label: "ABOUT", href: "/about" },
            { label: "FAQ", href: "/faq" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.2em] uppercase text-white/80 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact#book"
            className="mt-2 inline-flex items-center gap-2 border border-white text-white text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-white hover:text-[#1A1410] transition-all w-fit"
            onClick={() => setMobileOpen(false)}
          >
            BOOK NOW →
          </Link>
        </div>
      </div>
    </header>
  );
}
