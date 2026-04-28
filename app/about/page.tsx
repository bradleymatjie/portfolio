"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Globe,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Supabase",
    "AWS",
    "React Native",
    "API Integrations",
    "UI / UX",
  ];

  const stats = [
    { label: "Years Building", value: "3+" },
    { label: "Production Projects", value: "10+" },
    { label: "Main Stack", value: "React / Next.js" },
    { label: "Based In", value: "Johannesburg" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
              About Bradley Matjie
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              I build products that look sharp, work fast and scale properly.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              I’m Bradley Matjie, a Johannesburg-based Full-Stack Software
              Engineer focused on modern web experiences, scalable systems and
              polished interfaces. I help startups, agencies and businesses turn
              ideas into real digital products.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-black hover:bg-white/90"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Work With Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Johannesburg, South Africa
              </span>

              <span className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Available for freelance / full-time
              </span>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
              >
                <p className="text-sm text-white/50">{item.label}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="mt-24 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-white/70" />
              <h2 className="text-2xl font-semibold">My Experience</h2>
            </div>

            <p className="leading-8 text-white/65">
              I currently work as an Intermediate Software Engineer at Consnet,
              contributing to enterprise-level platforms and integrations. My
              experience includes React ecosystems, CMS platforms, AWS services,
              e-commerce systems and performance-focused frontend development.
            </p>

            <p className="mt-5 leading-8 text-white/65">
              I’ve also built independent products such as booking platforms,
              online stores and marketplace ideas from concept to deployment.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-white/70" />
              <h2 className="text-2xl font-semibold">Why Clients Choose Me</h2>
            </div>

            <ul className="space-y-4 text-white/65">
              <li>• Clean modern UI with strong attention to detail</li>
              <li>• Business-minded development, not just code</li>
              <li>• Fast communication and reliable delivery</li>
              <li>• Full-stack capability from frontend to backend</li>
              <li>• Production-ready solutions built to scale</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-24">
          <div className="mb-8 flex items-center gap-3">
            <Code2 className="h-5 w-5 text-white/70" />
            <h2 className="text-3xl font-semibold">Core Skills</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/75"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-24 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
          <Globe className="mx-auto h-6 w-6 text-white/70" />

          <h2 className="mt-4 text-3xl font-semibold">
            Need a serious developer for your next project?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/65">
            Whether it’s a startup MVP, business website, dashboard or custom
            platform — I can help bring it to life properly.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact">Let’s Talk</Link>
          </Button>
        </section>
      </div>
    </main>
  );
}