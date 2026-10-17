import { Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-tech.webp";

export function HeroCarousel() {
  return (
    <section className="relative flex h-[78vh] min-h-[30rem] w-full flex-col overflow-hidden bg-foreground">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={900}
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/25" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-background">
          <p className="inline-flex items-center border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[0.18em] text-background/80">
            Pynotech Solutions
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Innovate. Integrate. Transform.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
            Practical technology, engineering, and digital solutions for businesses,
            institutions, and communities in Ghana and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              Start a Project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-background/40 bg-background/10 px-6 py-3 text-base font-semibold text-background backdrop-blur transition-colors hover:bg-background/20"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
