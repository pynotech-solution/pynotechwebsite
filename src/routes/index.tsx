import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HeroCarousel } from "@/components/HeroCarousel";
import { services, differentiators } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Pynotech Solutions | Technology & Engineering in Ghana",
      },
      {
        name: "description",
        content:
          "Pynotech Solutions delivers practical technology services: software development, machine automation, IT infrastructure, cybersecurity, hardware support, smart security, and digital marketing.",
      },
      {
        property: "og:title",
        content: "Pynotech Solutions | Technology, Engineering & Digital Solutions",
      },
      {
        property: "og:description",
        content:
          "Powering Innovation. Empowering Technology. Solving Real Problems. End-to-end tech solutions for businesses and institutions in Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroCarousel />

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Technology Solutions Under One Roof
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We operate across IT infrastructure, software development, hardware
              engineering, embedded systems, machine automation, cybersecurity,
              networking, digital services, and smart security solutions — giving
              clients the technical expertise needed to build, manage, protect, and
              improve their technology environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From code to hardware, hardware to automation, and automation to
              intelligent systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {services.slice(0, 4).map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Pynotech?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our strength lies in connecting different technologies to create
                solutions that work in the real world.
              </p>
              <Link
                to="/approach"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
              >
                Learn about our approach
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-4 rounded-2xl border border-border bg-card p-8 shadow-lg">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Code to Hardware. From Hardware to Automation. From Automation to
            Intelligent Systems.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Let us help you build, secure, and grow with technology that makes sense.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
