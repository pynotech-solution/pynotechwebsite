import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ogImagePath, services } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import heroAbstract from "@/assets/hero-abstract.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Core Services | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Software development, machine automation, IT infrastructure, cybersecurity, hardware support, Microsoft 365, smart security, and digital marketing services.",
      },
      { property: "og:title", content: "Core Services | Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Eight core service areas covering software, hardware, automation, networking, security, and digital growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImagePath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImagePath },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={heroAbstract}
        eyebrow="What We Do"
        title="Our Core Services"
        description="From code to hardware, hardware to automation, and automation to intelligent systems — complete technology solutions under one roof."
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90"
            >
              Request a service
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
