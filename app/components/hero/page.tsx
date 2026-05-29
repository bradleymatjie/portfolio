"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const work = [
  {
    title: "ApointMe",
    type: "Booking platform",
    description: "Booking platform for beauty professionals.",
    href: "https://www.apointme.co.za",
  },
  {
    title: "The Village",
    type: "Streetwear commerce",
    description: "Streetwear e-commerce platform.",
    href: "https://thevillagestreetwear.com",
  },
  {
    title: "LS Printings",
    type: "Business website",
    description: "Printing and branding website for businesses.",
    href: "https://lsprintings.com",
  },
];

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "20+", label: "Projects completed" },
  { value: "10+", label: "Happy clients" },
  { value: "1000+", label: "Users impacted" },
];

const posts = [
  "Building scalable Next.js applications",
  "Designing better user experiences",
  "What I learned building ApointMe",
];

function ProjectMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-[#050505] text-white shadow-2xl ${
        compact ? "h-28" : "h-56"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.12),transparent_18%)]" />
      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.12em] text-white/60">
          <span>Product UI</span>
          <span>2026</span>
        </div>
        <div>
          <div className="mb-3 h-8 w-8 rounded-full bg-white/90" />
          <div className="h-2 w-28 rounded-full bg-white/80" />
          <div className="mt-2 h-2 w-20 rounded-full bg-white/35" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="h-8 rounded bg-white/10" />
          <span className="h-8 rounded bg-white/15" />
          <span className="h-8 rounded bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen bg-[#f8f4ee] text-black">
      <section className="mx-auto grid min-h-[calc(100vh-1px)] max-w-7xl grid-cols-1 items-center gap-12 border-x border-b border-black/15 px-6 pb-12 pt-28 sm:px-10 lg:grid-cols-[1fr_0.92fr_72px] lg:px-14">
        <div className="max-w-[620px]">
          <div className="mb-5 flex items-center gap-4 text-[11px] font-bold">
            <span>01</span>
            <span className="h-px w-10 bg-black/25" />
          </div>

          <h1 className="font-display text-[58px] leading-[0.95] tracking-normal sm:text-[82px] lg:text-[88px]">
            I build digital products that make an{" "}
            <em className="font-normal">impact.</em>
          </h1>

          <p className="mt-8 max-w-sm text-base font-medium leading-8">
            Software engineer with a passion for clean code, user experience and
            solving real problems.
          </p>

          <Link
            href="/projects"
            className="mt-9 inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.03em]"
          >
            Explore my work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[440px]">
          <div className="aspect-[4/5] overflow-hidden rounded-[4px] bg-[#e7e5e1]">
            <Image
              src="/media/editorial-portrait.png"
              alt="Black and white portrait of Bradley Matjie"
              width={1200}
              height={1200}
              priority
              className="h-full w-full object-cover object-center grayscale"
            />
          </div>
          <div className="absolute -bottom-7 -left-10 hidden h-28 w-28 rounded-full border border-dashed border-black/45 lg:block" />
        </div>

        <div className="hidden h-[320px] flex-col items-center justify-between text-[11px] font-bold uppercase lg:flex">
          {["ApointMe", "LinkedIn", "GitHub"].map((item) => (
            <span key={item} className="-rotate-90 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl border-x border-b border-black/15 md:grid-cols-3">
        {work.map((item) => (
          <article
            key={item.title}
            className="grid gap-6 border-b border-black/15 p-6 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:grid-cols-[1fr_130px]"
          >
            <div>
              <h2 className="text-lg font-black">{item.title}</h2>
              <p className="mt-2 max-w-[180px] text-sm font-medium leading-6">
                {item.description}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.03em]"
              >
                View case study <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <ProjectMockup compact />
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 border-x border-b border-black/15 px-6 py-24 sm:px-10 lg:grid-cols-[0.8fr_1fr_0.55fr] lg:px-14">
        <div>
          <div className="max-w-[280px] overflow-hidden rounded-[4px] bg-[#e7e5e1]">
            <Image
              src="/media/editorial-portrait.png"
              alt="Bradley Matjie editorial portrait"
              width={1200}
              height={1200}
              className="aspect-[4/5] w-full object-cover grayscale"
            />
          </div>
          <p className="font-display mt-7 text-2xl italic">Bradley Matjie</p>
          <p className="mt-2 text-sm font-medium">Software Engineer</p>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-4 text-[11px] font-bold">
            <span>02</span>
            <span className="h-px w-10 bg-black/25" />
          </div>
          <h2 className="font-display text-5xl leading-none">About me</h2>
          <p className="mt-8 max-w-sm text-sm font-medium leading-7">
            I&apos;m a software engineer focused on building scalable web
            applications and polished user experiences. I work across product
            strategy, frontend systems and practical backend integrations.
          </p>
          <p className="mt-5 max-w-sm text-sm font-medium leading-7">
            I&apos;ve worked with startups and businesses to bring ideas to life
            through code.
          </p>
        </div>

        <div className="divide-y divide-black/15">
          {stats.map((item) => (
            <div key={item.label} className="py-5 first:pt-0">
              <p className="text-3xl font-medium">{item.value}</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.03em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto border-x border-b border-black/15 px-6 py-20 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-4 text-[11px] font-bold">
            <span>03</span>
            <span className="h-px w-10 bg-black/25" />
          </div>
          <h2 className="font-display text-5xl leading-none">Selected work</h2>

          <div className="mt-8 flex gap-8 border-b border-black/15 pb-4 text-[10px] font-bold uppercase">
            <span>All</span>
            <span>Web apps</span>
            <span>E-commerce</span>
            <span>Branding</span>
          </div>

          <div className="grid gap-10 border-b border-black/15 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <ProjectMockup />
            <div>
              <h3 className="text-2xl font-black">ApointMe</h3>
              <p className="mt-4 max-w-xs text-xl font-medium leading-8">
                Booking platform for beauty professionals.
              </p>
              <p className="mt-4 max-w-sm text-sm leading-7">
                A full-stack booking platform that helps beauty professionals
                manage appointments, clients and payments.
              </p>
              <a
                href="https://www.apointme.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.03em]"
              >
                View case study <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 py-10 md:grid-cols-2">
            {work.slice(1).map((item) => (
              <article key={item.title} className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <ProjectMockup compact />
                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-2 max-w-xs text-sm font-medium leading-6">
                    {item.type} for growing businesses.
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.03em]"
                  >
                    View case study <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 border-x border-b border-black/15 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-14">
        <div>
          <div className="mb-5 flex items-center gap-4 text-[11px] font-bold">
            <span>04</span>
            <span className="h-px w-10 bg-black/25" />
          </div>
          <h2 className="font-display text-5xl leading-none">Journal</h2>
          <div className="mt-8 space-y-8">
            {posts.map((post) => (
              <article key={post} className="grid grid-cols-[80px_1fr] gap-5">
                <div className="h-20 rounded bg-black/10" />
                <div>
                  <h3 className="max-w-xs font-black leading-6">{post}</h3>
                  <p className="mt-2 text-[10px] font-bold uppercase text-black/55">
                    May 12, 2026 - 5 min read
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-4 text-[11px] font-bold">
            <span>05</span>
            <span className="h-px w-10 bg-black/25" />
          </div>
          <h2 className="font-display max-w-sm text-5xl leading-none">
            Let&apos;s work together
          </h2>
          <p className="mt-6 max-w-xs text-sm font-medium leading-7">
            Have a project in mind or just want to say hi? I&apos;d love to hear
            from you.
          </p>

          <div className="mt-7 space-y-3 text-sm font-medium">
            <a className="flex items-center gap-3" href="mailto:bradleysaint45@gmail.com">
              <Mail className="h-4 w-4" /> bradleysaint45@gmail.com
            </a>
            <a className="flex items-center gap-3" href="tel:+27729509295">
              <Phone className="h-4 w-4" /> +27 72 950 9295
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4" /> Johannesburg, South Africa
            </p>
          </div>

          <form className="mt-8 grid gap-3">
            <input
              className="h-12 border border-black/15 bg-transparent px-4 text-sm outline-none"
              placeholder="Your name"
            />
            <input
              className="h-12 border border-black/15 bg-transparent px-4 text-sm outline-none"
              placeholder="Your email"
            />
            <textarea
              className="min-h-32 resize-none border border-black/15 bg-transparent px-4 py-3 text-sm outline-none"
              placeholder="Your message"
            />
            <button className="inline-flex h-12 items-center justify-center gap-3 bg-black text-[10px] font-black uppercase tracking-[0.04em] text-white">
              Send message <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          <div className="mt-8 flex gap-6">
            <a href="https://www.linkedin.com/in/bradleymatjie" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/bradleymatjie" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
