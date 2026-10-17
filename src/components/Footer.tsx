import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

import logoImage from "@/assets/logo.png";
import { company, contact, navLinks, services } from "@/data/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="inline-flex rounded-sm bg-white/95 p-1">
              <img
                src={logoImage}
                alt="Pynotech Solutions"
                width="1024"
                height="354"
                className="h-11 w-auto max-w-[14rem] object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/80">
              {company.tagline} Practical, reliable technology solutions for
              individuals, businesses, institutions, and communities in {contact.location}{" "}
              and beyond.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Project
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Core Services
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-background/80 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <span>{contact.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <a
                  href={contact.emailHref}
                  className="transition-colors hover:text-background"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <span>{contact.location}</span>
              </li>
            </ul>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-tech-muted transition-colors hover:text-background"
            >
              {contact.whatsapp.label}
            </a>
            <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-background/70" aria-label="Footer">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-colors hover:text-background"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/70">
            © {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-background/70">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
