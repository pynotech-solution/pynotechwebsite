import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";

import { contact } from "@/data/site";

const needs = [
  "Software development",
  "IT infrastructure & networking",
  "Smart security & automation",
  "Machine automation / embedded",
  "Cybersecurity",
  "Hardware support",
  "Digital marketing / website",
  "Other",
] as const;

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState<(typeof needs)[number] | "">(needs[0]);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project inquiry from ${name}${company ? ` (${company})` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company || "—"}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Need: ${need || "—"}`,
        "",
        message || "No additional details provided.",
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-card-foreground">Opening your email app</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          If nothing opens, email us at{" "}
          <a href={contact.emailHref} className="font-medium text-primary hover:underline">
            {contact.email}
          </a>{" "}
          or message us on WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={contact.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {contact.whatsapp.label}
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Edit details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Full name
          <input
            required
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Company
          <input
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={fieldClass}
            placeholder="Organization (optional)"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Phone
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={fieldClass}
            placeholder="0XX XXX XXXX"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        What do you need help with?
        <select
          required
          name="need"
          value={need}
          onChange={(e) => setNeed(e.target.value as (typeof needs)[number])}
          className={fieldClass}
        >
          {needs.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm font-medium text-foreground">
        Project details
        <textarea
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={fieldClass}
          placeholder="Tell us briefly about the project, timeline, or challenge."
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          Send inquiry
        </button>
        <a
          href={contact.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
        >
          {contact.whatsapp.label}
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        Prefer email?{" "}
        <a href={contact.emailHref} className="text-primary hover:underline">
          {contact.email}
        </a>
        . We typically respond {contact.responseTime.toLowerCase()}.{" "}
        <Link to="/about" className="text-primary hover:underline">
          Meet the team
        </Link>
        .
      </p>
    </form>
  );
}
