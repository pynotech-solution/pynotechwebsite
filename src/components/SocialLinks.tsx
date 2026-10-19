import { company, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  variant?: "onDark" | "onLight";
  className?: string;
};

export function SocialLinks({ variant = "onLight", className }: SocialLinksProps) {
  const onDark = variant === "onDark";

  return (
    <ul
      className={cn("flex list-none flex-wrap items-center gap-2", className)}
      aria-label={`${company.name} on social media`}
    >
      {socialLinks.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${company.name} on ${item.label}`}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
              onDark
                ? "border-background/15 text-background/75 hover:border-background/40 hover:bg-background/10 hover:text-background"
                : "border-border text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
            )}
          >
            <item.icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
