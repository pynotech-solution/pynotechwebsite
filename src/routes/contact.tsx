import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { contact, ogImagePath } from "@/data/site";
import heroTeam from "@/assets/hero-team.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Start a project with Pynotech Solutions. Reach us by form, WhatsApp, phone, or email in Accra, Ghana.",
      },
      { property: "og:title", content: "Contact | Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Tell us about your software, infrastructure, security, or digital project. We respond within one business day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImagePath },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImagePath },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: contact.phoneDisplay,
    href: contact.phones[0]?.href,
  },
  {
    icon: Mail,
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
  },
  {
    icon: MapPin,
    label: "Location",
    value: contact.location,
  },
  {
    icon: Clock,
    label: "Response time",
    value: contact.responseTime,
  },
];

function ContactPage() {
  return (
    <>
      <PageHero
        image={heroTeam}
        eyebrow="Get in touch"
        title="Start a Project"
        description="Tell us what you need — software, infrastructure, automation, security, or digital growth. We respond within one business day."
      />

      <section id="contact" className="scroll-mt-24 py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              How to reach us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Prefer WhatsApp for a quick conversation, or send a short project
              brief through the form. Either way, a real person on our team will
              follow up.
            </p>

            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              {contact.whatsapp.label}
            </a>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block break-words text-sm font-semibold text-card-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm font-semibold text-card-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
