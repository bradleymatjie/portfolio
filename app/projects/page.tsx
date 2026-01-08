"use client"
import "./projects.scss"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  previewUrl?: string;
}

const projects: Project[] = [
  {
    id: "mazwi-store",
    title: "Mazwi Store",
    subtitle: "Current Project | E-commerce Platform | Aug 2025 – Present",
    description: "Leading the development of Mazwi Store (mazwistore.com), an e-commerce platform specializing in premium tech products. Implemented features for fast order processing, secure payments, and a brand ambassador program targeting university students. Focused on creating a responsive and user-friendly interface to enhance customer engagement and satisfaction.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "API Integrations"],
    impact: "Provided a reliable online shopping experience with competitive pricing and excellent support, fostering a growing customer base of hundreds of loyal users.",
    liveUrl: "https://mazwistore.com",
    previewUrl: "https://via.placeholder.com/1200x800/1a1a1a/ffffff?text=Mazwi+Store+Preview", // Replace with actual screenshot
  },
  {
    id: "village-streetwear",
    title: "The Village - Streetwear",
    subtitle: "Personal Project | Custom Streetwear E-commerce | 2025 – Present",
    description: "Developed thevillagestreetwear.com, a South African custom streetwear platform enabling users to design and order personalized apparel (T-shirts, hoodies, long sleeves) via an interactive design studio. Implemented on-demand printing with no minimum orders and pricing starting from R250, delivering a responsive and intuitive interface for seamless customization and purchasing.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "API Integrations", "Postgres", "Node.js", "Typescript"],
    impact: "Empowered users to create and own unique streetwear styles, providing premium quality custom apparel and building a growing community of style-conscious customers in South Africa.",
    liveUrl: "https://thevillagestreetwear.com",
    previewUrl: "https://via.placeholder.com/1200x800/1a1a1a/ffffff?text=The+Village+Streetwear+Preview", // Replace with actual screenshot
  },
];

export default function Projects() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  return (
    <div className="projects container p-6 max-h-screen overflow-y-auto mb-30 mr-auto ml-auto">
      <header className="text-center mb-10 flex flex-col text-gray-900">
        <h1 className="text-4xl font-bold text-primary">My Projects</h1>
        <p className="text- text-muted-foreground mt-2">
          Showcasing Full-Stack Solutions for Real-World Impact
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="mailto:bradleysaint45@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Start Your Project
            </a>
          </Button>
        </div>
      </header>
      <Separator className="my-8" />
      <section className="mb-12 cards-projects">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Featured Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cards-list">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() => handleCardClick(project)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to create your next big project? Let’s build something extraordinary together!
        </p>
        <Button asChild variant="default">
          <a href="mailto:bradleysaint45@gmail.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact Me for Freelance Projects
          </a>
        </Button>
      </section>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          {selectedProject && (
            <>
              <DrawerHeader>
                <DrawerTitle>{selectedProject.title}</DrawerTitle>
                <DrawerDescription>{selectedProject.subtitle}</DrawerDescription>
              </DrawerHeader>
              <div className="p-6 overflow-y-auto">
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.impact}</p>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <DrawerFooter className="flex flex-row justify-center gap-4">
                {selectedProject.liveUrl && (
                  <Button asChild>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> View Live Site
                    </a>
                  </Button>
                )}
                <Button variant="outline" onClick={() => setIsDrawerOpen(false)}>
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