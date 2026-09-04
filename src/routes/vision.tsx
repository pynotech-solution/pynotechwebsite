import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Target, Globe } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import heroTech from "@/assets/hero-tech.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioDashboard from "@/assets/portfolio-dashboard.jpg";

const portfolio = [
  {
    image: portfolioRestaurant,
    title: "Restaurant Website",
    category: "Business Website",
    description:
      "A modern, mobile-friendly website with menu showcase, online presence, and customer engagement features for a local restaurant.",
  },
  {
    image: portfolioEcommerce,
    title: "E-Commerce Storefront",
    category: "Online Store",
    description:
      "A complete online shopping experience with product catalogs, secure checkout flow, and inventory-friendly design.",
  },
  {
    image: portfolioDashboard,
    title: "School Management Dashboard",
    category: "Web Application",
    description:
      "A data-driven management dashboard with analytics, records management, and reporting tools for institutional use.",
  },
];

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
      <PageHero
        image={heroTech}
        eyebrow="Where We're Going"
        title="Vision & Mission"
        description="Our culture is built around innovation, engineering, problem-solving, and continuous learning."
      />

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
