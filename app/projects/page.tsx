"use client";

import "./projects.scss";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Mail, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  impact: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: "apointme",
    title: "ApointMe",
    subtitle: "Founder Project | Booking Marketplace | 2026 – Present",
    description:
      "Built a marketplace platform connecting barbers, hair stylists, nail technicians and beauty professionals with customers through seamless online bookings.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    impact:
      "Designed for real-world scale with bookings, scheduling, notifications and location-based discovery across South Africa.",
    liveUrl: "https://www.apointme.co.za",
  },
  {
    id: "mazwi-store",
    title: "Mazwi Store",
    subtitle: "E-commerce Platform | 2025 – Present",
    description:
      "Developed an online store specializing in premium mobile devices with dynamic pricing, product variants, secure ordering flows and mobile-first UX.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API Integrations",
    ],
    impact:
      "Supports a growing customer base through fast ordering, trust-focused UI and conversion-driven shopping flows.",
    liveUrl: "https://mazwistore.com",
  },
  {
    id: "ls-printings",
    title: "LS Printings",
    subtitle: "Client Project | Printing & Branding Website | 2026",
    description:
      "Designed and launched a premium lead-generation website for a printing and branding company with strong mobile UX and clear contact flows.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    impact:
      "Delivered a polished client-ready website in a rapid weekend sprint.",
    liveUrl: "https://lsprintings.com",
  },
  {
    id: "village-streetwear",
    title: "The Village Streetwear",
    subtitle: "Streetwear Brand Platform | 2025 – Present",
    description:
      "Built a modern streetwear storefront positioned for future marketplace growth and local brand expansion.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    impact:
      "Created a scalable e-commerce foundation for a growing fashion brand.",
    liveUrl: "https://thevillagestreetwear.com",
  },
];

export default function Projects() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  return (
    <div className="projects container max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Featured Projects
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Production Web Platforms, Marketplaces & Business Solutions
        </p>

        <div className="mt-6">
          <Button asChild size="lg">
            <a
              href="mailto:bradleysaint45@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Start Your Project
            </a>
          </Button>
        </div>
      </header>

      <Separator className="mb-10" />

      {/* Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => openProject(project)}
              className="cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="text-center mt-16">
        <p className="text-muted-foreground mb-4">
          Need a website, platform or product built? Let’s create something exceptional.
        </p>

        <Button asChild size="lg">
          <a
            href="mailto:bradleysaint45@gmail.com"
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </Button>
      </section>

      {/* Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          {selectedProject && (
            <>
              <DrawerHeader>
                <DrawerTitle>{selectedProject.title}</DrawerTitle>
                <DrawerDescription>
                  {selectedProject.subtitle}
                </DrawerDescription>
              </DrawerHeader>

              <div className="px-6 pb-4 max-h-[60vh] overflow-y-auto">
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.impact}
                </p>

                <h3 className="font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <DrawerFooter className="flex flex-row justify-center gap-3">
                {selectedProject.liveUrl && (
                  <Button asChild>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Live Site
                    </a>
                  </Button>
                )}

                <Button
                  variant="outline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
