import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { ClientLogos } from "@/components/ClientLogos";
import { PageHero } from "@/components/PageHero";
import { caseStudies, ogImagePath } from "@/data/site";
import heroAbstract from "@/assets/hero-abstract.webp";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Selected projects from Pynotech Solutions — websites, storefronts, and management tools built for businesses and institutions in Ghana.",
      },
      { property: "og:title", content: "Work | Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Case studies: problem, solution, and outcome across web and digital product work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImagePath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImagePath },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHero
        image={heroAbstract}
        eyebrow="Selected work"
        title="Projects That Solve Real Problems"
        description="A look at how we turn operational needs into practical digital products — from business websites to management tools."
      />
      <ClientLogos />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {caseStudies.map((project, index) => (
            <article
              key={project.slug}
              className="grid items-center gap-10 border-b border-border pb-16 last:border-b-0 last:pb-0 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} by Pynotech Solutions`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="aspect-[8/5] w-full object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {project.client}
                </p>

                <dl className="mt-8 space-y-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Problem
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.problem}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-foreground">
                      What we built
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.solution}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Outcome
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.outcome}
                    </dd>
                  </div>
                </dl>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Discuss a similar project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what you need to build, secure, or improve — we will help you
            scope the next step.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
