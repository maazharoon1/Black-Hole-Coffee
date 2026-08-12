import { business } from "@/data/business";

const FOOTER_NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Atmosphere", href: "#atmosphere" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="brand-main serif" style={{ fontSize: 24 }}>
              {business.name.toUpperCase()}
            </span>
            <p className="foot-addr">
              {business.street}
              <br />
              {business.city}, {business.state} {business.zip}
              <br />
              {business.phoneDisplay}
            </p>
          </div>

          <div className="foot-col">
            <h4>Explore</h4>
            {FOOTER_NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="foot-col">
            <h4>Visit</h4>
            <a href={business.phoneHref}>Call Us</a>
            <a href={business.mapsSearchUrl} target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            &copy; {year} {business.name}. All rights reserved.
          </span>
          <span>Houston, Texas</span>
        </div>
      </div>
    </footer>
  );
}
