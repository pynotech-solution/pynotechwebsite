import { createFileRoute } from "@tanstack/react-router";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Clock,
  Rocket,
  Lightbulb,
  HeartHandshake,
  Route as RouteIcon,
} from "lucide-react";

import { PageHero } from "@/components/PageHero";
import heroTeam from "@/assets/hero-team.jpg";
import teamYahuza from "@/assets/team-yahuza.jpg";
import teamAlhassan from "@/assets/team-alhassan.jpg";
import teamAdam from "@/assets/team-adam.jpg";
import teamRidwan from "@/assets/team-ridwan.jpg";
import teamAnim from "@/assets/team-anim.jpg";
import teamEmmanuella from "@/assets/team-emmanuella.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Pynotech Solutions" },
      {
        name: "description",
        content:
          "Pynotech Solutions: innovation made simple. Meet our team, our journey, our commitment to affordable technology, and our impact on businesses and communities.",
      },
      { property: "og:title", content: "About Pynotech Solutions" },
      {
        property: "og:description",
        content:
          "Empowering businesses and communities with innovative, affordable technology solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Lightbulb,
    title: "Our Vision",
    body: "Pynotech Solutions is a forward-thinking tech startup dedicated to solving small-scale digital and tech-related problems. We envision a world where cutting-edge technology is accessible to businesses of all sizes.",
  },
  {
    icon: Rocket,
    title: "Our Approach",
    body: "We provide innovative, efficient, and cost-effective software and hardware solutions to businesses and individuals. Our strong focus on addressing community challenges sets us apart in the tech industry.",
  },
  {
    icon: RouteIcon,
    title: "Our Journey",
    body: "Our journey began with a vision to empower small businesses and communities through affordable technology solutions. We started with small-scale solutions like appointment apps and gradually expanded to comprehensive web and app development.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    body: "At Pynotech, we believe that technology should be accessible to all. We prioritize affordability without compromising quality, ensuring that even small businesses can benefit from cutting-edge digital solutions that drive growth and efficiency.",
  },
];

const team = [
  {
    name: "Yahuza Sulley",
    role: "Founder & CEO",
    bio: "With over 5 years of experience in tech innovation, Yahuza leads our team in creating impactful solutions for businesses and communities.",
    image: teamYahuza,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Alhassan Abudllahi Baaba",
    role: "Co-Founder",
    bio: "As a co-founder, Alhassan's vision and leadership inspire our innovations, ensuring we deliver exceptional solutions to our clients.",
    image: teamAlhassan,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Adam Labaran",
    role: "Developer",
    bio: "With a ton of experience in the tech space, Adam assists our team in creating impactful solutions for businesses and communities.",
    image: teamAdam,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Ridwan Akyerefi Arthur",
    role: "Developer",
    bio: "With a ton of experience in the tech space, Ridwan assists our team in creating impactful solutions for businesses and communities.",
    image: teamRidwan,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Anim Anthony Kofi",
    role: "Developer",
    bio: "Anthony's expertise in web and app development drives our technical innovations, ensuring we deliver cutting-edge solutions to our clients.",
    image: teamAnim,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Emmanuella Yawson",
    role: "Community Outreach Manager",
    bio: "Emmanuella's passion for community development helps us identify and address the unique challenges faced by local businesses and organizations.",
    image: teamEmmanuella,
    socials: { linkedin: "#", twitter: "#", github: "#" },
  },
];

const impact = [
  { value: "50", label: "Businesses Empowered" },
  { value: "30", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10", label: "Community Challenges Solved" },
];

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "0558 779 734 / 030 294 9428",
    href: "tel:+233558779734",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Solutionspynotech@gmail.com",
    href: "mailto:Solutionspynotech@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Ghana" },
  { icon: Clock, label: "Response time", value: "Within one business day" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={heroTeam}
        eyebrow="About Pynotech"
        title="Innovation Made Simple"
        description="Empowering businesses and communities with innovative, affordable technology solutions. Let's create a smarter, more connected world together."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-card-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Meet the passionate tech experts behind Pynotech Solutions. Our team is
              driven by a shared commitment to solving real-world problems through
              innovative technology.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group border border-border bg-card">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Pynotech Solutions`}
                    width={800}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 flex items-end justify-center bg-foreground/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-within:opacity-100">
                    <div className="mb-6 flex gap-3">
                      <a
                        href={member.socials.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex h-10 w-10 items-center justify-center bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Linkedin className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href={member.socials.twitter}
                        aria-label={`${member.name} on X`}
                        className="flex h-10 w-10 items-center justify-center bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Twitter className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href={member.socials.github}
                        aria-label={`${member.name} on GitHub`}
                        className="flex h-10 w-10 items-center justify-center bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              At Pynotech Solutions, we measure our success by the positive changes we
              bring to businesses and communities. Here's a glimpse of our journey so
              far.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((stat) => (
              <div
                key={stat.label}
                className="border border-border bg-card p-8 text-center shadow-sm"
              >
                <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Let's Innovate Together
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Ready to transform your business with affordable, cutting-edge technology
              solutions? Let's collaborate to address your unique challenges and drive
              your success.
            </p>
            <a
              href="mailto:Solutionspynotech@gmail.com"
              className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-2 block break-words font-semibold text-card-foreground transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 font-semibold text-card-foreground">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
