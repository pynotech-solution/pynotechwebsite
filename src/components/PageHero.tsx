type PageHeroProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ image, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative h-[62vh] min-h-[25rem] w-full overflow-hidden bg-foreground">
      <img
        src={image}
        alt=""
        width={1600}
        height={900}
        className="h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/25" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-background">
            <span className="inline-flex items-center border-l-2 border-accent pl-3 text-xs font-bold uppercase tracking-[0.18em] text-background/80">
              {eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-background/85 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
