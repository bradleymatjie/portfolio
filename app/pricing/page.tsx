"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { PricingDrawer } from "./components/PricingDrawer";

const plans = [
  {
    name: "Starter",
    price: "R5,500",
    subtitle: "per project",
    description: "Best for landing pages and small business websites.",
    features: [
      "Landing page or small website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Deployment support",
    ],
    popular: false,
    button: "Get started",
  },
  {
    name: "Professional",
    price: "R10,000",
    subtitle: "per project",
    description: "Best for brands that need a polished multi-page website.",
    features: [
      "Multi-page website",
      "Modern UI/UX design",
      "API integrations",
      "Performance optimization",
      "Deployment support",
      "Basic analytics setup",
      "R1,500/month – Hosting, server & maintenance",
    ],
    popular: true,
    button: "Start project",
  },
  {
    name: "Custom",
    price: "Let’s talk",
    subtitle: "tailored solution",
    description: "Best for dashboards, platforms, MVPs and custom systems.",
    features: [
      "Web apps / dashboards",
      "Complex integrations",
      "Authentication",
      "Database setup",
      "Ongoing support options",
      "Custom requirements",
    ],
    popular: false,
    button: "Contact me",
  },
];

export default function PricingPage() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpen = (plan: string) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-28 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.13),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <section className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            Pricing
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Simple pricing for serious digital products.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Clear packages for startups, businesses and growing brands. Built
            with quality, speed and long-term scalability in mind.
          </p>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.popular
                  ? "border-white/20 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.045]"
              }`}
            >
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-amber-500/10 blur-3xl" />

              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-black">
                  Most popular
                </span>
              )}

              <div className="relative flex min-h-[500px] flex-col">
                <p className="text-sm text-white/45">{plan.name}</p>

                <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                  {plan.price}
                </h2>

                <p className="mt-2 text-sm text-white/45">{plan.subtitle}</p>

                <p className="mt-5 leading-7 text-white/60">
                  {plan.description}
                </p>

                <button
                  onClick={() => handleOpen(plan.name)}
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition ${
                    plan.popular
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {plan.button}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm leading-6 text-white/65"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl font-semibold">
            Not sure which package fits?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-8 text-white/60">
            Send me your idea, website reference or business goal and I’ll
            recommend the best direction.
          </p>
        </section>

        <PricingDrawer open={open} onOpenChange={setOpen} plan={selectedPlan} />
      </div>
    </main>
  );
}