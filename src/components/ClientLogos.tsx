import { clients } from "@/data/site";

export function ClientLogos() {
  return (
    <section
      className="border-b border-border/70 bg-secondary/40 py-12 sm:py-16"
      aria-label="Clients we work with"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Clients we've worked with
        </p>

        <ul className="mt-10 grid list-none grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {clients.map((client) => (
            <li key={client.name}>
              <figure className="flex h-full flex-col items-center justify-center gap-3 rounded-lg border border-border/80 bg-card px-4 py-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:px-5 sm:py-6">
                <div className="flex h-16 w-full items-center justify-center sm:h-20">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={220}
                    height={80}
                    loading="lazy"
                    className="max-h-full max-w-[85%] object-contain"
                  />
                </div>
                <figcaption className="text-center text-xs font-semibold tracking-wide text-foreground/80 sm:text-sm">
                  {client.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
