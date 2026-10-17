import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoImage from "@/assets/logo.png";
import { navLinks } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    firstLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border/70 bg-card/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className={`flex items-center rounded-sm ${solid ? "" : "bg-white/95 p-1"}`}
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logoImage}
            alt="Pynotech Solutions"
            width="1024"
            height="354"
            className="h-10 w-auto max-w-[12rem] object-contain sm:h-11 sm:max-w-[14rem]"
          />
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className: "after:scale-x-100",
              }}
              className={`relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 ${
                solid
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-background/85 hover:text-background"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${
            solid
              ? "text-foreground"
              : "bg-foreground/40 text-background backdrop-blur-sm"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-card px-4 py-4 shadow-lg md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                ref={index === 0 ? firstLinkRef : undefined}
                to={link.to}
                activeProps={{
                  className:
                    "underline decoration-primary decoration-2 underline-offset-8",
                }}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-8"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
