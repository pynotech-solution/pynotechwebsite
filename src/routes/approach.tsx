import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

import { differentiators } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import techNetworkImage from "@/assets/tech-network.jpg";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach | Pynotech Solutions" },
      {
        name: "description",
        content:
          "How Pynotech Solutions works: technology that is understood, adapted, maintained, and where possible built locally to solve real problems.",
      },
      { property: "og:title", content: "Our Approach | Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Software, hardware, networking, electronics, automation, cybersecurity, and digital services under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <>
      <PageHero
        image={techNetworkImage}
        eyebrow="How We Work"
        title="Our Approach"
        description="Technology should not simply be purchased — it should be understood, adapted, maintained, and where possible, built locally to solve real problems."
      />

      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={techNetworkImage}
            alt=""
            width={1200}
            height={800}
            className="h-full w-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our work brings together software, hardware, networking, electronics,
                automation, cybersecurity, and digital services to provide complete
                technology solutions under one roof.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From troubleshooting a computer to designing a network, developing
                software, engineering an embedded system, automating machinery,
                securing a facility, or helping a business grow digitally — Pynotech
                Solutions provides practical end-to-end technical support.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We are not limited to one area of technology. Our strength lies in
                connecting different technologies to create solutions that work in the
                real world.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h2 className="text-xl font-semibold text-card-foreground">
                Why Choose Us?
              </h2>
              <ul className="mt-6 space-y-4">
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
        </div>
      </section>
    </>
  );
}
