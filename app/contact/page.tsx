"use client";

import Link from "next/link";
import {
    ArrowRight,
    Github,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const email = "bradleysaint45@gmail.com";
    const phone = "0729509295";
    const whatsappLink =
        "https://wa.me/27729509295?text=Hi%20Bradley%2C%20I%20would%20like%20to%20discuss%20a%20project.";

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050505] px-4 py-24 text-white sm:px-6 lg:px-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_35%)]" />

            <div className="relative mx-auto max-w-7xl">
                <section className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-start">
                    <div>
                        <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
                            Contact Bradley Matjie
                        </div>

                        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Let’s build something clean, scalable and production-ready.
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                            Have a project, role, collaboration or idea? Send me a message and
                            I’ll get back to you as soon as possible.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <a
                                href={`mailto:${email}`}
                                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]"
                            >
                                <Mail className="h-5 w-5 text-white/70" />
                                <p className="mt-4 text-sm text-white/50">Email</p>
                                <h3 className="mt-1 font-medium text-white">{email}</h3>
                            </a>

                            <a
                                href={`tel:${phone}`}
                                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]"
                            >
                                <Phone className="h-5 w-5 text-white/70" />
                                <p className="mt-4 text-sm text-white/50">Phone</p>
                                <h3 className="mt-1 font-medium text-white">072 950 9295</h3>
                            </a>

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:bg-white/[0.08]"
                            >
                                <MessageCircle className="h-5 w-5 text-white/70" />
                                <p className="mt-4 text-sm text-white/50">WhatsApp</p>
                                <h3 className="mt-1 font-medium text-white">
                                    Message me directly
                                </h3>
                            </a>

                            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                                <MapPin className="h-5 w-5 text-white/70" />
                                <p className="mt-4 text-sm text-white/50">Location</p>
                                <h3 className="mt-1 font-medium text-white">
                                    Johannesburg, South Africa
                                </h3>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/60">
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

                    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                        <p className="text-sm text-white/50">Available for work</p>

                        <h2 className="mt-2 text-3xl font-semibold">
                            Let’s start a conversation
                        </h2>

                        <p className="mt-4 leading-8 text-white/60">
                            I’m currently available for freelance projects, contract work,
                            full-time roles and collaborations.
                        </p>

                        <div className="mt-8 space-y-4">

                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                            >
                                <div>
                                    <p className="text-sm text-white/50">WhatsApp</p>
                                    <p className="font-medium text-white">Message me instantly</p>
                                </div>
                                <MessageCircle className="h-5 w-5 text-white/70" />
                            </a>

                            <a
                                href={`mailto:${email}`}
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                            >
                                <div>
                                    <p className="text-sm text-white/50">Email</p>
                                    <p className="font-medium text-white">{email}</p>
                                </div>
                                <Mail className="h-5 w-5 text-white/70" />
                            </a>

                            <a
                                href={`tel:${phone}`}
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                            >
                                <div>
                                    <p className="text-sm text-white/50">Phone</p>
                                    <p className="font-medium text-white">072 950 9295</p>
                                </div>
                                <Phone className="h-5 w-5 text-white/70" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bradleymatjie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                            >
                                <div>
                                    <p className="text-sm text-white/50">LinkedIn</p>
                                    <p className="font-medium text-white">Connect professionally</p>
                                </div>
                                <Linkedin className="h-5 w-5 text-white/70" />
                            </a>

                        </div>

                        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                            <p className="text-sm text-white/50">Typical response time</p>
                            <p className="mt-1 font-medium text-white">Within a few hours</p>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}