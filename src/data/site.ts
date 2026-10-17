import {
  Code,
  Cpu,
  Network,
  Shield,
  Monitor,
  LayoutGrid,
  Camera,
  TrendingUp,
} from "lucide-react";

import portfolioRestaurant from "@/assets/portfolio-restaurant.webp";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.webp";
import portfolioDashboard from "@/assets/portfolio-dashboard.webp";
import teamYahuza from "@/assets/team-yahuza.jpg";
import teamAlhassan from "@/assets/team-alhassan.jpg";
import teamAdam from "@/assets/team-adam.jpg";
import teamRidwan from "@/assets/team-ridwan.jpg";
import teamAnim from "@/assets/team-anim.jpg";
import teamEmmanuella from "@/assets/team-emmanuella.jpg";

export const company = {
  name: "Pynotech Solutions",
  tagline: "Powering Innovation. Empowering Technology. Solving Real Problems.",
  description:
    "Technology, engineering, and digital solutions for businesses, institutions, and communities in Ghana and beyond.",
};

export const contact = {
  phones: [
    { label: "0558 779 734", href: "tel:+233558779734", e164: "+233558779734" },
    { label: "030 294 9428", href: "tel:+233302949428", e164: "+233302949428" },
  ],
  phoneDisplay: "0558 779 734 / 030 294 9428",
  email: "Solutionspynotech@gmail.com",
  emailHref: "mailto:Solutionspynotech@gmail.com",
  whatsapp: {
    number: "+233558779734",
    href: "https://wa.me/233558779734",
    label: "Chat on WhatsApp",
  },
  location: "Accra, Ghana",
  responseTime: "Within one business day",
};

export const navLinks = [
  { label: "Services", to: "/services" as const },
  { label: "Work", to: "/work" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const services = [
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

/** Three flagship offers for the homepage preview. */
export const flagshipServices = [
  {
    icon: Code,
    title: "Software Development",
    blurb:
      "Custom applications, integrations, and digital products built around how your organization actually works.",
  },
  {
    icon: Network,
    title: "IT Infrastructure & Networking",
    blurb:
      "Networks, servers, Wi-Fi, backup, and managed support that keep offices and institutions online.",
  },
  {
    icon: Camera,
    title: "Smart Security & Automation",
    blurb:
      "CCTV, access control, gates, and related systems installed and maintained for safer facilities.",
  },
];

export const differentiators = [
  "Innovative & practical solutions",
  "Skilled technical expertise",
  "Reliable & timely support",
  "Quality service you can trust",
  "Committed to your growth",
  "Local expertise with global standards",
];

export const caseStudies = [
  {
    slug: "restaurant-website",
    image: portfolioRestaurant,
    title: "Restaurant Website",
    category: "Business Website",
    client: "Local hospitality business",
    problem:
      "The restaurant needed a clear online presence so customers could find the menu, location, and contact details on mobile.",
    solution:
      "We designed and built a modern, mobile-first website with menu showcase, brand storytelling, and easy contact paths.",
    outcome:
      "A polished web presence that supports walk-ins and inquiries without relying only on social posts.",
    href: "/contact",
  },
  {
    slug: "ecommerce-storefront",
    image: portfolioEcommerce,
    title: "E-Commerce Storefront",
    category: "Online Store",
    client: "Retail brand",
    problem:
      "The business needed a structured catalog and checkout flow beyond WhatsApp-only selling.",
    solution:
      "We delivered a product-focused storefront with catalog layout, secure checkout UX, and inventory-friendly structure.",
    outcome:
      "A scalable base for online orders and clearer product presentation for customers.",
    href: "/contact",
  },
  {
    slug: "school-management-dashboard",
    image: portfolioDashboard,
    title: "School Management Dashboard",
    category: "Web Application",
    client: "Educational institution",
    problem:
      "Staff needed a central place for records, reporting, and day-to-day operational visibility.",
    solution:
      "We built a data-driven management dashboard with analytics views, records workflows, and reporting tools.",
    outcome:
      "Faster access to institutional data and a clearer picture of operations for administrators.",
    href: "/contact",
  },
];

export const team = [
  {
    name: "Yahuza Sulley",
    role: "Founder & CEO",
    bio: "Leads strategy and delivery across software, infrastructure, and engineering engagements for clients in Ghana.",
    image: teamYahuza,
  },
  {
    name: "Alhassan Abudllahi Baaba",
    role: "Co-Founder",
    bio: "Partners on client relationships and delivery quality so solutions stay practical and reliable in the field.",
    image: teamAlhassan,
  },
  {
    name: "Adam Labaran",
    role: "Developer",
    bio: "Builds and maintains software and digital products for business and institutional clients.",
    image: teamAdam,
  },
  {
    name: "Ridwan Akyerefi Arthur",
    role: "Developer",
    bio: "Implements web and application features with a focus on clarity, performance, and maintainability.",
    image: teamRidwan,
  },
  {
    name: "Anim Anthony Kofi",
    role: "Developer",
    bio: "Drives web and app development for client projects across product and internal tools.",
    image: teamAnim,
  },
  {
    name: "Emmanuella Yawson",
    role: "Community Outreach Manager",
    bio: "Connects client needs and community context so engagements solve real operational problems.",
    image: teamEmmanuella,
  },
];

export const aboutPillars = [
  {
    id: "vision",
    title: "Our Vision",
    body: "To become a leading technology and engineering solutions company in Ghana and beyond, recognized for innovation, technical excellence, reliability, and the ability to transform real-world problems into practical systems.",
  },
  {
    id: "mission",
    title: "Our Mission",
    body: "To empower individuals, businesses, and institutions with reliable technology, engineering, automation, security, and digital solutions that improve productivity, efficiency, safety, and growth.",
  },
  {
    id: "approach",
    title: "Our Approach",
    body: "Technology should not simply be purchased — it should be understood, adapted, maintained, and where possible built locally. We connect software, hardware, networking, electronics, automation, cybersecurity, and digital services under one roof.",
  },
  {
    id: "commitment",
    title: "Our Commitment",
    body: "From troubleshooting a workstation to designing a network, engineering an embedded system, securing a facility, or launching a digital product — we deliver practical end-to-end support with local expertise and professional standards.",
  },
];

/** Absolute path used for Open Graph / Twitter cards (served from /public). */
export const ogImagePath = "/og.jpg";
