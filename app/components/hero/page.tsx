import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Download,
    ExternalLink,
    Github,
    Linkedin,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_35%)]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div>
                    <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                        Full-Stack Software Engineer • React • Next.js • TypeScript
                    </div>

                    <h1 className="max-w-4xl text-3xl font-semibold leading-tight tracking-tight">
                        I build production-ready web platforms for businesses, startups and
                        product teams.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                        I’m Bradley Matjie, a Johannesburg-based Software Engineer focused
                        on building polished, scalable digital products using React,
                        Next.js, TypeScript, Node.js and cloud technologies.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-black hover:bg-white/90"
                        >
                            <Link href="/projects" className="flex items-center gap-2">
                                View Case Studies
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                        >
                            <a
                                href="/updated_cv_bradleymatjie.pdf"
                                className="flex items-center gap-2"
                            >
                                Download CV
                                <Download className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>

                    {/* Links */}
                    <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/60">
                        <a
                            href="https://www.bradleymatjie.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Portfolio
                        </a>

                        <a
                            href="https://www.linkedin.com/in/bradleymatjie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 transition hover:text-white"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="relative hidden min-h-[620px] lg:flex items-center justify-center">
                    <div className="relative h-[620px] w-full max-w-[720px]">
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute bottom-0 left-10 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />

                        {/* Card 1 */}
                        <div className="absolute left-0 top-16 z-30 w-80 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl animate-[float_6s_ease-in-out_infinite]">
                            <p className="text-sm text-white/50">Booking Platform</p>

                            <h3 className="mt-2 text-3xl font-semibold text-white">
                                ApointMe
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/60">
                                Marketplace for barbers, salons, nail techs and beauty professionals.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                <span className="rounded-full bg-white/10 px-3 py-1">Next.js</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Supabase</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Payments</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="absolute right-4 top-0 z-20 w-72 rotate-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl animate-[float_8s_ease-in-out_infinite]">
                            <p className="text-sm text-white/50">E-Commerce</p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                Mazwi Store
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/60">
                                iPhone reseller store with variants, checkout and admin dashboard.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                <span className="rounded-full bg-white/10 px-3 py-1">Next.js</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Storefront</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Admin</span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="absolute bottom-20 right-8 z-40 w-80 -rotate-3 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl animate-[float_7s_ease-in-out_infinite]">
                            <p className="text-sm text-white/50">Marketplace</p>

                            <h3 className="mt-2 text-3xl font-semibold text-white">
                                The Village
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/60">
                                Streetwear platform helping local brands sell online.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                <span className="rounded-full bg-white/10 px-3 py-1">Marketplace</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Brands</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Orders</span>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="absolute bottom-0 left-6 z-10 w-72 -rotate-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl animate-[float_9s_ease-in-out_infinite]">
                            <p className="text-sm text-white/50">Business Website</p>

                            <h3 className="mt-2 text-2xl font-semibold text-white">
                                LS Printings
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/60">
                                Premium printing and branding website focused on lead generation and customer conversion.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/70">
                                <span className="rounded-full bg-white/10 px-3 py-1">Next.js</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Responsive</span>
                                <span className="rounded-full bg-white/10 px-3 py-1">Lead Gen</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}