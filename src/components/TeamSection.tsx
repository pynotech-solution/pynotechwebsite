import { team } from "@/data/site";

export function TeamSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-secondary/35"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint opacity-50"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            People
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The team behind the work
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Practitioners who turn software, infrastructure, and engineering into
            solutions that hold up in the real world.
          </p>
        </div>

        <ul className="mt-16 grid list-none gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <li
              key={member.name}
              className="team-member group"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <article>
                <div className="relative overflow-hidden bg-muted/80">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Pynotech Solutions`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/35 via-foreground/5 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-5 border-l-2 border-primary/40 pl-4 transition-colors duration-300 group-hover:border-primary">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                    {member.bio}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
