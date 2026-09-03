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
      className="group relative h-[70vh] min-h-[26rem] w-screen max-w-[100vw] overflow-hidden bg-foreground"
      aria-roledescription="carousel"
      aria-label="Pynotech Solutions highlights"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
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
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-background">
                <span className="inline-flex items-center rounded-full border border-background/30 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {slide.eyebrow}
                </span>
                <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
                  {slide.description}
                </p>
                <Link
                  to={slide.to}
                  className="mt-7 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-background/30 bg-foreground/40 p-2 text-background backdrop-blur transition-colors hover:bg-foreground/70 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-background/30 bg-foreground/40 p-2 text-background backdrop-blur transition-colors hover:bg-foreground/70 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-primary" : "w-2 bg-background/50 hover:bg-background/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
