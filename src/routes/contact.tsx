import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pynotech Solutions | Ghana" },
      {
        name: "description",
        content:
          "Get in touch with Pynotech Solutions in Ghana. Call 0558 779 734 or 030 294 9428, or email Solutionspynotech@gmail.com to start a project.",
      },
      { property: "og:title", content: "Contact Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Talk to our team about software, automation, IT infrastructure, security, and digital solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: "0558 779 734 / 030 294 9428",
    href: "tel:+233558779734",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Solutionspynotech@gmail.com",
    href: "mailto:Solutionspynotech@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Ghana" },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Tell us about your project — software, automation, networking, security, or
            digital growth. We'll get back to you with practical next steps.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {details.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </h2>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block text-lg font-semibold text-card-foreground transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-card-foreground">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
