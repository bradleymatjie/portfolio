"use client"

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

type Experience = {
    id:string,
    title:string,
    subtitle:string,
    description:string,
    technologies:string[]
}

const experiences:Experience[] = [
  {
    id: "consnet-epson",
    title: "Consnet – Intermediate Full-Stack Developer",
    subtitle: "EPSON Project | Jun 2025 – Present",
    description: "Leading full-stack development for the EPSON project, focusing on building robust, responsive web applications. Implemented complex API integrations for printer-related data, optimized backend logic, and delivered seamless, user-friendly interfaces using React.js and TypeScript. Collaborated with cross-functional teams to ensure scalability and performance, enhancing client workflows.",
    technologies: ["React.js", "TypeScript", "Node.js", "API Integrations"],
  },
  {
    id: "social-banc",
    title: "Param Solutions – Frontend Developer",
    subtitle: "Social Banc | Jan 2024 – May 2025",
    description: "Developed the frontend for Social Banc, a platform for purchasing vouchers, electricity tokens, and services. Integrated secure payment systems and designed a fast, user-friendly UI with React.js and Tailwind CSS, improving user engagement and transaction efficiency.",
    technologies: ["React.js", "Tailwind CSS", "Payment APIs"],
  },
  {
    id: "thooto",
    title: "Param Solutions – Lead Frontend Developer",
    subtitle: "Thooto Educational App | Aug 2024 – May 2025",
    description: "Led frontend development for Thooto, an AI-powered educational platform enabling students to select math topics and complete dynamic quizzes. Built a highly responsive and intuitive UI using React.js and Tailwind CSS, enhancing student engagement and learning outcomes.",
    technologies: ["React.js", "Tailwind CSS", "AI Integration"],
  },
  {
    id: "fraktional",
    title: "Param Solutions – Lead Developer",
    subtitle: "Fraktional.dev | Jan 2023 – Jul 2023",
    description: "Directed technical strategy and feature implementation for Fraktional.dev, leading a cross-functional team to deliver a scalable web application. Oversaw development with React.js and TypeScript, ensuring high performance and client satisfaction.",
    technologies: ["React.js", "TypeScript", "Team Leadership"],
  },
];

export default function WorkExperience() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience|null>(null);

  const handleCardClick = (experience:Experience) => {
    setSelectedExperience(experience);
    setIsDrawerOpen(true);
  };

  return (
    <div className="container p-6 max-h-screen overflow-y-auto mb-30">
      <header className="text-center mb-10 flex flex-col">
        <h1 className="text-4xl font-bold text-primary">Work Experience</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Proven Full-Stack Development for Impactful Projects
        </p>
        <div className="mt-6">
          <Button asChild>
            <a href="mailto:bradleysaint45@gmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> Get in Touch
            </a>
          </Button>
        </div>
      </header>

      <Separator className="my-8" />

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {experiences.map((experience) => (
                <Card
                  key={experience.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleCardClick(experience)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{experience.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{experience.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
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
          Ready to bring my full-stack expertise to your next project? Let’s collaborate to create something amazing!
        </p>
        <Button asChild variant="default">
          <a href="mailto:bradleysaint45@gmail.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact Me for Freelance Projects
          </a>
        </Button>
      </section>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          {selectedExperience && (
            <>
              <DrawerHeader>
                <DrawerTitle>{selectedExperience.title}</DrawerTitle>
                <DrawerDescription>{selectedExperience.subtitle}</DrawerDescription>
              </DrawerHeader>
              <div className="p-6">
                <p className="text-muted-foreground">{selectedExperience.description!}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedExperience?.technologies.map((tech) => (
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