"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ApointMe",
    category: "Booking Platform",
    description:
      "Location-based booking marketplace for barbers, salons, nail techs and beauty professionals.",
    stack: ["Next.js", "Supabase", "OneSignal", "Payments"],
    href: "/projects/apointme",
    liveUrl: "https://www.apointme.co.za",
  },
  {
    title: "Mazwi Store",
    category: "E-commerce",
    description:
      "iPhone reseller platform with variants, checkout, admin tools and returns workflow.",
    stack: ["Next.js", "Supabase", "Resend", "Dashboard"],
    href: "/projects/mazwi-store",
    liveUrl: "https://mazwistore.com",
  },
  {
    title: "The Village",
    category: "Marketplace",
    description:
      "Streetwear marketplace concept for local brands with seller dashboards, orders and earnings.",
    stack: ["Next.js", "Marketplace", "Orders", "E-commerce"],
    href: "/projects/the-village",
    liveUrl: "https://thevillagestreetwear.com",
  },
   {
    title: "LS Printings",
    category: "Business Website",
    description:
      "Premium printing and branding website designed to generate leads, showcase services and convert visitors into paying customers.",
    stack: ["Next.js", "UI Design", "Lead Generation", "Responsive"],
    href: "/projects/ls-printings",
    liveUrl: "https://lsprintings.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.13),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              Selected Work
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Real products, built for real users.
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg lg:justify-self-end">
            A collection of platforms, marketplaces, dashboards and business
            tools I’ve built or contributed to using modern full-stack
            technologies.
          </p>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative min-h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-amber-500/10 blur-3xl transition group-hover:bg-amber-500/15" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm text-white/45">{project.category}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {project.title}
                    </h2>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack?.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                

                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Live Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10">
          <Github className="mx-auto h-6 w-6 text-white/60" />

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Clean UI, strong structure, production-ready delivery.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/60">
            I focus on building digital products that feel polished, perform
            well and solve real business problems.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact">Start a Project</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}