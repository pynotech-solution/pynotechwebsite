import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Target } from "lucide-react";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Mission | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Our vision is to lead technology and engineering solutions in Ghana and beyond; our mission is to empower people and organizations with reliable technology.",
      },
      { property: "og:title", content: "Vision & Mission | Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Innovation, technical excellence, and reliability — turning real-world problems into practical technological solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Vision & Mission
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Our culture is built around innovation, engineering, problem-solving, and
            continuous learning.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-card-foreground">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become a leading technology and engineering solutions company in
                Ghana and beyond, recognized for innovation, technical excellence,
                reliability, and the ability to transform ideas and real-world problems
                into practical technological solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-card-foreground">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To empower individuals, businesses, and institutions with reliable
                technology, engineering, automation, security, and digital solutions
                that improve productivity, efficiency, safety, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
