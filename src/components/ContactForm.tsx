import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldErrors } from "react-hook-form";

import { contact } from "@/data/site";
import {
  contactFormSchema,
  contactNeeds,
  toWeb3FormsBody,
  type ContactFormPayload,
  type ContactFormValues,
} from "@/lib/contact-form";
import { cn } from "@/lib/utils";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;

type Status = "idle" | "submitting" | "success" | "error";

const fieldOrder = [
  "name",
  "email",
  "phone",
  "company",
  "need",
  "message",
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues, unknown, ContactFormPayload>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      need: contactNeeds[0],
      message: "",
    },
  });

  const submitting = status === "submitting" || isSubmitting;

  function onInvalid(formErrors: FieldErrors<ContactFormValues>) {
    const firstError = fieldOrder.find((field) => formErrors[field]);
    const message = firstError
      ? formErrors[firstError]?.message
      : "Please fix the highlighted fields and try again.";

    setStatus("error");
    setErrorMessage(
      typeof message === "string"
        ? message
        : "Please fix the highlighted fields and try again.",
    );
    if (firstError) setFocus(firstError);
  }

  async function onValid(values: ContactFormPayload) {
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Please email us or use WhatsApp instead.",
      );
      return;
    }

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      setStatus("error");
      setErrorMessage(issue?.message ?? "Please fix the highlighted fields and try again.");
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
        body: JSON.stringify(toWeb3FormsBody(accessKey, parsed.data)),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset({
        name: "",
        company: "",
        email: "",
        phone: "",
        need: contactNeeds[0],
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  const fieldClass = (hasError: boolean) =>
    cn(
      "mt-2 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:ring-2 disabled:opacity-60",
      hasError
        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
        : "border-input focus:border-primary focus:ring-primary/20",
    );

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
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Full name
          </label>
          <input
            id="contact-name"
            autoComplete="name"
            placeholder="Your name"
            disabled={submitting}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass(Boolean(errors.name))}
            {...register("name")}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-sm font-medium text-foreground">
            Company <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="contact-company"
            autoComplete="organization"
            placeholder="Organization"
            disabled={submitting}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            className={fieldClass(Boolean(errors.company))}
            {...register("company")}
          />
          {errors.company && (
            <p id="contact-company-error" className="mt-1.5 text-xs text-destructive">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            disabled={submitting}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
            {...register("email")}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground">
            Phone <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="0XX XXX XXXX"
            disabled={submitting}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className={fieldClass(Boolean(errors.phone))}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="contact-phone-error" className="mt-1.5 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-need" className="block text-sm font-medium text-foreground">
          What do you need help with?
        </label>
        <select
          id="contact-need"
          disabled={submitting}
          aria-invalid={errors.need ? true : undefined}
          aria-describedby={errors.need ? "contact-need-error" : undefined}
          className={fieldClass(Boolean(errors.need))}
          {...register("need")}
        >
          {contactNeeds.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.need && (
          <p id="contact-need-error" className="mt-1.5 text-xs text-destructive">
            {errors.need.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground">
          Project details
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Tell us briefly about the project, timeline, or challenge."
          disabled={submitting}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={fieldClass(Boolean(errors.message))}
          {...register("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
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
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Sending…" : "Send inquiry"}
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
