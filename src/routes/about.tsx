import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { TeamSection } from "@/components/TeamSection";
import {
  aboutPillars,
  differentiators,
  ogImagePath,
} from "@/data/site";
import heroTeam from "@/assets/hero-team.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Pynotech Solutions is a technology and engineering company in Accra, Ghana — software, infrastructure, automation, cybersecurity, and smart security under one roof.",
      },
      { property: "og:title", content: "About Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Local expertise connecting software, hardware, networking, and security into practical solutions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImagePath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImagePath },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={heroTeam}
        eyebrow="About Pynotech"
        title="Engineering Practical Technology"
        description="We connect software, hardware, networking, automation, cybersecurity, and digital services so businesses and institutions in Ghana can build, manage, protect, and improve their technology environments."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutPillars.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="scroll-mt-28 border border-border bg-card p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-card-foreground">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Why Pynotech
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Local expertise. End-to-end delivery.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Our strength is connecting different technologies into solutions that
                work in real offices, facilities, and operations — not one isolated
                specialty in isolation.
              </p>
              <Link
                to="/work"
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline"
              >
                See selected work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid gap-4 border-l-2 border-primary bg-card p-8 shadow-sm">
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

      <TeamSection />

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to work together?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Share a short brief and we will follow up with next steps.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
            Contact Us
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
