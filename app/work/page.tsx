"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Intermediate Full-Stack Software Engineer",
    company: "Consnet (Pty) Ltd",
    period: "2025 – Present",
    location: "Johannesburg",
    description:
      "Developing production-grade web applications using Next.js, React and TypeScript, while working across APIs, dashboards, internal systems and cloud-based integrations.",
    highlights: [
      "Build and maintain production web applications",
      "Integrate REST APIs for internal and customer-facing platforms",
      "Create dashboards and data-driven tools",
      "Contribute to sprint planning, troubleshooting and delivery",
    ],
    stack: ["Next.js", "React", "TypeScript", "REST APIs", "AWS"],
  },
  {
    role: "Lead Frontend Developer",
    company: "Thooto / Param Solutions",
    period: "2024 – 2025",
    location: "Remote / Hybrid",
    description:
      "Led frontend development for a complex platform using React, Next.js and TypeScript, with integrations across vouchers, payments, utilities and e-commerce workflows.",
    highlights: [
      "Led frontend architecture and implementation",
      "Integrated third-party APIs",
      "Built reusable frontend systems",
      "Recognized as Developer of the Month",
    ],
    stack: ["React", "Next.js", "TypeScript", "APIs", "Payments"],
  },
  {
    role: "Software Engineer Intern",
    company: "BiznesXpo",
    period: "Jan 2023 – Jul 2023",
    location: "South Africa",
    description:
      "Contributed to internal software products using React.js and Node.js, gaining practical experience in API integrations, Git workflows and Agile delivery.",
    highlights: [
      "Built frontend features connected to backend APIs",
      "Worked with React.js and Node.js",
      "Collaborated in Agile engineering workflows",
    ],
    stack: ["React.js", "Node.js", "Git", "Agile"],
  },
  {
    role: "Frontend Engineer Intern",
    company: "Mate Academy",
    period: "2022 – 2023",
    location: "Remote",
    description:
      "Built React applications using modern frontend best practices, responsive layouts, REST APIs and version-controlled projects.",
    highlights: [
      "Built responsive React applications",
      "Worked with REST APIs",
      "Practiced clean frontend development",
    ],
    stack: ["React", "JavaScript", "HTML", "CSS", "REST APIs"],
  },
];

export default function WorkExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.13),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              Work Experience
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Experience building production-ready software.
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg lg:justify-self-end">
            My experience spans full-stack development, frontend architecture,
            API integrations, dashboards, CMS platforms and production web
            applications.
          </p>
        </section>

        <section className="mt-16 space-y-6">
          {experiences.map((item, index) => (
            <article
              key={item.company}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8"
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-blue-500/20" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-amber-500/10 blur-3xl transition group-hover:bg-amber-500/15" />

              <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
                    0{index + 1}
                  </span>

                  <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {item.role}
                  </h2>

                  <p className="mt-2 text-lg text-white/70">{item.company}</p>

                  <div className="mt-5 space-y-3 text-sm text-white/50">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </p>

                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="leading-8 text-white/60">{item.description}</p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-6 text-white/65"
                      >
                        <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-white/50" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Need someone who can own delivery end-to-end?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/60">
            I bring frontend polish, full-stack thinking and business-focused
            execution to every project.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Let’s Talk
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}