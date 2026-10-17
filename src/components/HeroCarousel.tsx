import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-tech.jpg";
import networkImage from "@/assets/tech-network.jpg";
import automationImage from "@/assets/slide-automation.jpg";
import securityImage from "@/assets/slide-security.jpg";

const slides = [
  {
    image: heroImage,
    eyebrow: "Technology & Engineering",
    title: "Innovate. Integrate. Transform.",
    description:
      "Practical, reliable, and innovative technology solutions for businesses, institutions, and communities in Ghana and beyond.",
    to: "/services" as const,
    cta: "Explore Services",
  },
  {
    image: automationImage,
    eyebrow: "Machine Automation",
    title: "From Hardware to Intelligent Systems",
    description:
      "Embedded systems, IoT, PCB design, sensors, and smart control systems engineered for the real world.",
    to: "/approach" as const,
    cta: "Our Approach",
  },
  {
    image: networkImage,
    eyebrow: "IT Infrastructure",
    title: "Networks Built to Perform",
    description:
      "Network setup, Wi-Fi and hotspot solutions, servers, backup & recovery, and dependable ongoing IT support.",
    to: "/services" as const,
    cta: "See What We Do",
  },
  {
    image: securityImage,
    eyebrow: "Smart Security",
    title: "Protect What Matters",
    description:
      "CCTV, access control, intercom, automated gates, and cybersecurity that keeps your people and data safe.",
    to: "/about" as const,
    cta: "Talk to Us",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    const id = window.setInterval(next, 6000);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <section
      className="group relative flex h-[78vh] min-h-[30rem] w-full flex-col overflow-hidden bg-foreground"
      aria-roledescription="carousel"
      aria-label="Pynotech Solutions highlights"
    >
      {/* Full-bleed media — grid stack instead of absolute layers */}
      <div className="pointer-events-none absolute inset-0 grid" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            className={`col-start-1 row-start-1 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/25" />
          </div>
        ))}
      </div>

      {/* Content aligned with header: max-w-7xl + same horizontal padding */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="grid flex-1 items-center">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={`col-start-1 row-start-1 max-w-2xl text-background transition-opacity duration-700 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <span className="inline-flex items-center border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[0.18em] text-background/80">
                {slide.eyebrow}
              </span>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {slide.title}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
                {slide.description}
              </p>
              <Link
                to={slide.to}
                className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
              >
                {slide.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center pb-5">
          <div className="flex gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-background/50 hover:bg-background/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-background/30 bg-foreground/40 p-2 text-background opacity-0 backdrop-blur transition-all duration-300 hover:bg-foreground/70 focus-visible:opacity-100 group-hover:opacity-100 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-background/30 bg-foreground/40 p-2 text-background opacity-0 backdrop-blur transition-all duration-300 hover:bg-foreground/70 focus-visible:opacity-100 group-hover:opacity-100 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
