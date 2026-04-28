"use client";

import { GraduationCap, Code2, Award, Sparkles } from "lucide-react";

const education = [
  {
    title: "National Certificate: Information Technology",
    school: "Camblish Training Institute",
    period: "2023 – 2024",
    desc: "Focused on software development, systems thinking, databases and practical IT skills for real-world delivery.",
  },
  {
    title: "Web Development Program",
    school: "Mate Academy",
    period: "2022",
    desc: "Hands-on training in modern frontend development using React, JavaScript and professional development workflows.",
  },
];

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "SCSS",
  "Supabase",
  "PostgreSQL",
  "AWS",
  "REST APIs",
  "Git",
  "GitHub",
  "Jira",
  "Magento",
  "WordPress",
  "Agility CMS",
  "Responsive Design",
];

export default function EducationSkillsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.13),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              Education & Skills
            </div>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Built on learning. Proven through execution.
            </h1>
          </div>

          <p className="max-w-2xl text-base leading-8 text-white/60 sm:text-lg lg:justify-self-end">
            Strong technical foundations combined with hands-on commercial
            experience building real products, platforms and business solutions.
          </p>
        </section>

        {/* Education */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-white/70" />
            <h2 className="text-3xl font-semibold">Education</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-white/70">{item.school}</p>

                <p className="mt-2 text-sm text-white/45">{item.period}</p>

                <p className="mt-5 leading-8 text-white/60">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-20">
          <div className="mb-6 flex items-center gap-3">
            <Code2 className="h-5 w-5 text-white/70" />
            <h2 className="text-3xl font-semibold">Core Skills</h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/75"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="mt-20 grid gap-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <Award className="h-5 w-5 text-white/70" />
            <h3 className="mt-4 text-xl font-semibold">Fast Learner</h3>
            <p className="mt-3 leading-7 text-white/60">
              Quickly adapt to new tools, business domains and engineering
              environments.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <Sparkles className="h-5 w-5 text-white/70" />
            <h3 className="mt-4 text-xl font-semibold">Ownership Mindset</h3>
            <p className="mt-3 leading-7 text-white/60">
              I focus on solving problems, shipping outcomes and improving the
              final product.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <Code2 className="h-5 w-5 text-white/70" />
            <h3 className="mt-4 text-xl font-semibold">Business Focused</h3>
            <p className="mt-3 leading-7 text-white/60">
              I build software that supports growth, conversions, efficiency and
              user satisfaction.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}