"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Github,
    Linkedin,
} from "lucide-react";

import ProjectsPage from "@/app/projects/page";

const landingAnimation = (
    delay = 0,
    x = 0,
    y = 120,
    rotate = 0
) => ({
    initial: {
        opacity: 0,
        x,
        y,
        rotate,
        scale: 0.7,
        filter: "blur(12px)",
    },

    whileInView: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: "blur(0px)",
    },

    viewport: {
        once: true,
        amount: 0.3,
    },

    transition: {
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
    },
});

export default function Hero() {
    return (
        <>
            <section className="sticky top-0 relative min-h-[100dvh] overflow-hidden bg-[#050505] px-4 py-4 text-white sm:px-6 lg:px-8">
                {/* Background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(0, 0, 0, 0.14),transparent_35%)]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                            Full-Stack Software Engineer • React • Next.js •
                            TypeScript
                        </div>

                        <h1 className="max-w-4xl text-2xl font-semibold leading-tight tracking-tight">
                            I build production-ready web platforms for
                            businesses, startups and product teams.
                        </h1>

                        <div className="mt-6 max-w-2xl h-[150px] ">
                            <TypeAnimation
                                sequence={[
                                    "I’m Bradley Matjie, a Software Engineer focused on building polished, scalable digital products using React, Next.js, TypeScript, Node.js and cloud technologies.",
                                ]}
                                wrapper="p"
                                cursor={true}
                                speed={50}
                                className="font-handwriting text-base leading-8 text-white/75 sm:text-lg"
                            />
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-black hover:bg-white/90"
                            >
                                <Link
                                    href="/pricing"
                                    className="flex items-center gap-2"
                                >
                                    Pricing
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>

                        {/* Links */}
                        <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/60">
                            <Link
                                href="https://www.linkedin.com/in/bradleymatjie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition hover:text-white"
                            >
                                <Linkedin className="h-4 w-4" />
                                LinkedIn
                            </Link>

                            <Link
                                href="https://github.com/bradleymatjie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 transition hover:text-white"
                            >
                                <Github className="h-4 w-4" />
                                GitHub
                            </Link>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}
                    <div className="hidden relative min-h-[620px] items-center justify-center lg:flex">
                        <div className="relative h-[620px] w-full max-w-[720px]">
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />

                            <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

                            {/* Card 1 */}
                            <motion.div
                                {...landingAnimation(
                                    0.1,
                                    -120,
                                    120,
                                    -10
                                )}
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 10,
                               
                                    ease: "easeInOut",
                                }}
                                className="absolute left-0 top-16 z-30 w-80 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl"
                            >
                                <p className="text-sm text-white/50">
                                    Booking Platform
                                </p>

                                <h3 className="mt-2 text-3xl font-semibold text-white">
                                    ApointMe
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    Marketplace for barbers, salons, nail techs
                                    and beauty professionals.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Next.js
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Supabase
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Payments
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                {...landingAnimation(
                                    0.25,
                                    120,
                                    -100,
                                    12
                                )}
                                animate={{
                                    y: [0, 10, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    ease: "easeInOut",
                                    delay: 1.5,
                                }}
                                className="absolute right-4 top-0 z-20 w-72 rotate-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl"
                            >
                                <p className="text-sm text-white/50">
                                    E-Commerce
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    Mazwi Store
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    iPhone reseller store with variants,
                                    checkout and admin dashboard.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Next.js
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Storefront
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Admin
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                {...landingAnimation(
                                    0.4,
                                    140,
                                    140,
                                    -8
                                )}
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 7,
                                  
                                    ease: "easeInOut",
                                    delay: 1.8,
                                }}
                                className="absolute bottom-20 right-8 z-40 w-80 -rotate-3 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl"
                            >
                                <p className="text-sm text-white/50">
                                    Marketplace
                                </p>

                                <h3 className="mt-2 text-3xl font-semibold text-white">
                                    The Village
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    Streetwear platform helping local brands
                                    sell online.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Marketplace
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Brands
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Orders
                                    </span>
                                </div>
                            </motion.div>

                            {/* Card 4 */}
                            <motion.div
                                {...landingAnimation(
                                    0.55,
                                    -140,
                                    120,
                                    -14
                                )}
                                animate={{
                                    y: [0, 12, 0],
                                }}
                                transition={{
                                    duration: 9,
                            
                                    ease: "easeInOut",
                                    delay: 2,
                                }}
                                className="absolute bottom-0 left-6 z-10 w-72 -rotate-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl"
                            >
                                <p className="text-sm text-white/50">
                                    Business Website
                                </p>

                                <h3 className="mt-2 text-2xl font-semibold text-white">
                                    LS Printings
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/60">
                                    Premium printing and branding website
                                    focused on lead generation and customer
                                    conversion.
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Next.js
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Responsive
                                    </span>

                                    <span className="rounded-full bg-white/10 px-3 py-1">
                                        Tailwind
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <ProjectsPage />
        </>
    );
}