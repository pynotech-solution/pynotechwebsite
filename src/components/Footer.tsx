import { Mail, Phone, MapPin } from "lucide-react";

import logoImage from "@/assets/logoimage.jpg";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <div className="inline-flex rounded-sm bg-white p-1">
              <img
                src={logoImage}
                alt="Pynotech Solutions"
                width="1024"
                height="336"
                className="h-11 w-auto max-w-[14rem] object-contain"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/80">
              Powering Innovation. Empowering Technology. Solving Real Problems.
              Practical, reliable technology solutions for individuals, businesses,
              institutions, and communities in Ghana and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Core Services
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-background/80 sm:grid-cols-2">
              <li>Software Development</li>
              <li>Machine Automation</li>
              <li>IT Infrastructure</li>
              <li>Cybersecurity</li>
              <li>Hardware Support</li>
              <li>Microsoft 365</li>
              <li>Smart Security</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/90">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <span>0558 779 734 / 030 294 9428</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <a
                  href="mailto:Solutionspynotech@gmail.com"
                  className="transition-colors hover:text-background"
                >
                  Solutionspynotech@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tech-muted" aria-hidden="true" />
                <span>Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-sm text-background/70">
            © {currentYear} Pynotech Solutions. All rights reserved.
          </p>
          <p className="text-sm text-background/70">
            Powering Innovation. Empowering Technology. Solving Real Problems.
          </p>
        </div>
      </div>
    </footer>
  );
}
