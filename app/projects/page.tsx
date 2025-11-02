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
import { Mail } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  impact: string;
}

const projects: Project[] = [
  {
    id: "mazwi-store",
    title: "Mazwi Store",
    subtitle: "Current Project | E-commerce Platform | Aug 2025 – Present",
    description: "Leading the development of Mazwi Store (mazwistore.com), an e-commerce platform specializing in premium tech products. Implemented features for fast order processing, secure payments, and a brand ambassador program targeting university students. Focused on creating a responsive and user-friendly interface to enhance customer engagement and satisfaction.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "API Integrations"],
    impact: "Provided a reliable online shopping experience with competitive pricing and excellent support, fostering a growing customer base of hundreds of loyal users.",
  },
  {
    id: "barber-booking",
    title: "Barber Booking Application",
    subtitle: "Freelance Project | 2025",
    description: "Developed a user-friendly barber booking platform for users in Johannesburg, enabling seamless discovery and booking of nearby barbers. Implemented features like real-time barber search with ratings, appointment scheduling, and location-based filtering (e.g., barbers within 0.7km–3.1km of Bree Street, Jhb 2001). Built a responsive and intuitive UI to enhance user experience and engagement.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "API Integrations"],
    impact: "Simplified the process of finding and booking barbers, improving convenience for users and increasing appointment efficiency for barbers in Johannesburg.",
  },
  {
    id: "epson",
    title: "EPSON Project",
    subtitle: "Consnet | Full-Stack Developer | Jun 2025 – Present",
    description: "Developed a robust web application for the EPSON project, focusing on seamless API integrations for printer-related data and responsive UI design. Built scalable backend logic with Node.js and delivered user-friendly interfaces using React.js and TypeScript, enhancing client workflows and operational efficiency.",
    technologies: ["React.js", "TypeScript", "Node.js", "API Integrations"],
    impact: "Streamlined client operations with efficient data handling and improved user experience through responsive design.",
  },
  {
    id: "social-banc",
    title: "Social Banc",
    subtitle: "Param Solutions | Frontend Developer | Jan 2024 – May 2025",
    description: "Created the frontend for Social Banc, a platform enabling users to purchase vouchers, electricity tokens, and services. Integrated secure payment APIs and designed a fast, intuitive UI using React.js and Tailwind CSS, significantly improving user engagement.",
    technologies: ["React.js", "Tailwind CSS", "Payment APIs"],
    impact: "Increased transaction efficiency and user retention through a seamless and secure payment experience.",
  },
  {
    id: "thooto",
    title: "Thooto Educational App",
    subtitle: "Param Solutions | Lead Frontend Developer | Aug 2024 – May 2025",
    description: "Led the frontend development of Thooto, an AI-powered educational platform allowing students to select math topics and complete dynamic quizzes. Built a highly responsive and engaging UI with React.js and Tailwind CSS, enhancing the learning experience.",
    technologies: ["React.js", "Tailwind CSS", "AI Integration"],
    impact: "Improved student engagement and learning outcomes with an intuitive and interactive platform.",
  },
  {
    id: "fraktional",
    title: "Fraktional.dev",
    subtitle: "Param Solutions | Lead Developer | Jan 2023 – Jul 2023",
    description: "Directed the technical strategy for Fraktional.dev, leading a cross-functional team to deliver a scalable web application. Oversaw development with React.js and TypeScript, ensuring high performance and client satisfaction.",
    technologies: ["React.js", "TypeScript", "Team Leadership"],
    impact: "Delivered a high-performance application that met client requirements and supported business growth.",
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
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-muted-foreground mb-4">{selectedProject.impact}</p>
                <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
              <DrawerFooter>
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