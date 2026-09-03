import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Cpu } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Approach", to: "/approach" as const },
  { label: "Vision", to: "/vision" as const },
  { label: "About Us", to: "/about" as const },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = scrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-card/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Cpu className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={`text-lg font-bold tracking-tight ${
                solid ? "text-foreground" : "text-background"
              }`}
            >
              Pynotech
            </span>
            <span
              className={`text-[0.65rem] font-semibold uppercase tracking-wider ${
                solid ? "text-muted-foreground" : "text-background/75"
              }`}
            >
              Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
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
            to="/about"
            hash="contact"
            className="ml-3 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${
            solid ? "text-foreground" : "text-background"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-border bg-card px-4 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className: "underline decoration-primary decoration-2 underline-offset-8",
                }}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 transition-colors hover:text-foreground hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-8"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/about"
              hash="contact"
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
