import { z } from "zod";

export const contactNeeds = [
  "Software development",
  "IT infrastructure & networking",
  "Smart security & automation",
  "Machine automation / embedded",
  "Cybersecurity",
  "Hardware support",
  "Digital marketing / website",
  "Other",
] as const;

export type ContactNeed = (typeof contactNeeds)[number];

/** Digits only; Ghana local (0XXXXXXXXX) or international (+233...). */
function isPlausiblePhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 9 || digits.length > 15) return false;
  return /^[+\d][\d\s().-]{7,24}$/.test(value);
}

function collapseWhitespace(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export const contactFormSchema = z.object({
  name: z
    .string()
    .transform(collapseWhitespace)
    .pipe(
      z
        .string()
        .min(2, "Enter your full name.")
        .max(80, "Name is too long.")
        .regex(
          /^[\p{L}\p{M}'’.\- ]+$/u,
          "Name can only include letters and basic punctuation.",
        ),
    ),
  company: z
    .string()
    .transform(collapseWhitespace)
    .pipe(z.string().max(100, "Company name is too long.")),
  email: z
    .string()
    .transform((value) => value.trim().toLowerCase())
    .pipe(
      z
        .string()
        .min(1, "Enter your email address.")
        .email("Enter a valid email address.")
        .max(254, "Email is too long."),
    ),
  phone: z
    .string()
    .transform((value) => value.trim())
    .pipe(
      z
        .string()
        .max(24, "Phone number is too long.")
        .refine(
          (value) => value.length === 0 || isPlausiblePhone(value),
          "Enter a valid phone number.",
        ),
    ),
  need: z.enum(contactNeeds, {
    errorMap: () => ({ message: "Select what you need help with." }),
  }),
  message: z
    .string()
    .transform(collapseWhitespace)
    .pipe(
      z
        .string()
        .min(10, "Add a short note about the project (at least 10 characters).")
        .max(2000, "Keep the message under 2000 characters."),
    ),
});

export type ContactFormValues = z.input<typeof contactFormSchema>;
export type ContactFormPayload = z.output<typeof contactFormSchema>;

/** Whitelist payload for Web3Forms — never forward raw form extras or honeypot. */
export function toWeb3FormsBody(accessKey: string, data: ContactFormPayload) {
  const company = data.company.length > 0 ? data.company : undefined;
  const phone = data.phone.length > 0 ? data.phone : undefined;

  return {
    access_key: accessKey,
    subject: `Project inquiry from ${data.name}${company ? ` (${company})` : ""}`,
    from_name: data.name,
    name: data.name,
    email: data.email,
    need: data.need,
    message: data.message,
    ...(company ? { company } : {}),
    ...(phone ? { phone } : {}),
  };
}
