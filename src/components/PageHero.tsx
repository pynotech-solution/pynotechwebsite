type PageHeroProps = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ image, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[26rem] w-full overflow-hidden bg-foreground">
      <img
        src={image}
        alt=""
        width={1600}
        height={900}
        className="h-full w-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-background">
            <span className="inline-flex items-center rounded-full border border-background/30 bg-background/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              {eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
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
