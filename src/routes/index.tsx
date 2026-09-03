import { createFileRoute } from "@tanstack/react-router";
import {
  Code,
  Cpu,
  Network,
  Shield,
  Monitor,
  LayoutGrid,
  Camera,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Target,
} from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";
import techNetworkImage from "@/assets/tech-network.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Pynotech Solutions | Technology, Engineering & Digital Solutions in Ghana",
      },
      {
        name: "description",
        content:
          "Pynotech Solutions delivers practical, reliable technology services: software development, machine automation, IT infrastructure, cybersecurity, hardware support, Microsoft 365, smart security, and digital marketing.",
      },
      {
        property: "og:title",
        content: "Pynotech Solutions | Technology, Engineering & Digital Solutions",
      },
      {
        property: "og:description",
        content:
          "Powering Innovation. Empowering Technology. Solving Real Problems. End-to-end tech solutions for businesses and institutions in Ghana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software, applications, system integration, and digital solutions tailored to your business or organizational needs.",
  },
  {
    icon: Cpu,
    title: "Machine Automation & Embedded Systems",
    description:
      "Embedded systems, IoT, PCB design, sensors, microcontrollers, machine automation, and smart control systems.",
  },
  {
    icon: Network,
    title: "IT Infrastructure & Networking",
    description:
      "Network setup, Wi-Fi & hotspot solutions, servers, systems integration, IT support, backup & recovery, website design & hosting.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protecting your systems, networks, and data with modern security solutions and threat prevention strategies.",
  },
  {
    icon: Monitor,
    title: "Computer Hardware & Technical Support",
    description:
      "Computer installation, repair, maintenance, troubleshooting, and supply of desktops, laptops, workstations & IT equipment.",
  },
  {
    icon: LayoutGrid,
    title: "Microsoft & Business Productivity Solutions",
    description:
      "Microsoft 365, Office, Excel, Word, PowerPoint, Exchange, SharePoint, and collaboration tools to improve productivity.",
  },
  {
    icon: Camera,
    title: "Smart Security & Automation",
    description:
      "CCTV, access control, intercom, automated gates, electric fence installation, and security system maintenance.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Online Solutions",
    description:
      "Digital marketing, online strategies, analytics, website development, hosting, and business growth solutions.",
  },
];

const differentiators = [
  "Innovative & practical solutions",
  "Skilled technical expertise",
  "Reliable & timely support",
  "Quality service you can trust",
  "Committed to your growth",
  "Local expertise with global standards",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-grid-faint opacity-60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-primary shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Technology, Engineering & Digital Solutions
              </div>
              <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Innovate. Integrate. Transform.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Pynotech Solutions is a technology, engineering, and digital solutions
                company delivering practical, reliable, and innovative solutions that
                empower businesses, institutions, and communities in Ghana and beyond.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
              <img
                src={heroImage}
                alt="Technology workspace with hardware, code, and security systems"
                width={1920}
                height={1088}
                className="rounded-2xl border border-border shadow-2xl"
                priority="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Complete Technology Solutions Under One Roof
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We operate across IT infrastructure, software development, hardware
              engineering, embedded systems, machine automation, cybersecurity,
              networking, digital services, and smart security solutions — giving
              clients the technical expertise needed to build, manage, protect, and
              improve their technology environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From code to hardware, hardware to automation, and automation to
              intelligent systems.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-primary">0{index + 1}</span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 -z-10">
          <img
            src={techNetworkImage}
            alt=""
            width={1200}
            height={800}
            className="h-full w-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Approach
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Pynotech Solutions believes that technology should not simply be
                purchased — it should be understood, adapted, maintained, and where
                possible, built locally to solve real problems.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our work brings together software, hardware, networking, electronics,
                automation, cybersecurity, and digital services to provide complete
                technology solutions under one roof.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                From troubleshooting a computer to designing a network, developing
                software, engineering an embedded system, automating machinery,
                securing a facility, or helping a business grow digitally — Pynotech
                Solutions provides practical end-to-end technical support.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-card-foreground">
                Why Choose Us?
              </h3>
              <ul className="mt-6 space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-card-foreground">Our Vision</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become a leading technology and engineering solutions company in
                Ghana and beyond, recognized for innovation, technical excellence,
                reliability, and the ability to transform ideas and real-world
                problems into practical technological solutions.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-card-foreground">Our Mission</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To empower individuals, businesses, and institutions with reliable
                technology, engineering, automation, security, and digital solutions
                that improve productivity, efficiency, safety, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand statement / CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Code to Hardware. From Hardware to Automation. From Automation to
            Intelligent Systems.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our strength lies in connecting different technologies to create
            solutions that work in the real world. Let us help you build, secure, and
            grow with technology that makes sense.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
