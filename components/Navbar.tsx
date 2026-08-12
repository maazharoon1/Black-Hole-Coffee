"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/business";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Atmosphere", href: "#atmosphere" },
  { label: "Visit", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav id="nav" className={scrolled ? "scrolled" : ""}>
        <div className="brand">
          <span className="brand-main">BLACK HOLE</span>
          <span className="brand-sub">Coffee House</span>
        </div>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-cta">
          <a className="btn btn-fill" href="#location">
            Visit Us
          </a>
        </div>

        <button
          type="button"
          className={`burger ${menuOpen ? "open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-menu" className={menuOpen ? "open" : ""}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-fill mob-cta" href={business.phoneHref} onClick={() => setMenuOpen(false)}>
          Call Us
        </a>
      </div>
    </>
  );
}
