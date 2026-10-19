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

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [need, setNeed] = useState<(typeof needs)[number] | "">(needs[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Please email us or use WhatsApp instead.",
      );
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Project inquiry from ${name}${company ? ` (${company})` : ""}`,
          from_name: name,
          name,
          company: company || "—",
          email,
          phone: phone || "—",
          need: need || "—",
          message: message || "No additional details provided.",
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setNeed(needs[0]);
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60";

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h3 className="text-xl font-semibold text-card-foreground">Message sent</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thanks — we received your inquiry and will respond{" "}
          {contact.responseTime.toLowerCase()}. You can also reach us on WhatsApp if
          it&apos;s urgent.
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
            onClick={() => setStatus("idle")}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
            disabled={status === "submitting"}
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
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
        />
      </label>

      {status === "error" && (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          {errorMessage}{" "}
          <a href={contact.emailHref} className="font-medium underline">
            Email us
          </a>{" "}
          or use WhatsApp.
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
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
