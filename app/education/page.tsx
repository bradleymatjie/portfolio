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

interface Education {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const educationList: Education[] = [
  {
    id: "national-certificate",
    title: "National Certificate in Information Technology",
    subtitle: "Camblish Training Institute, Johannesburg | Apr 2023 – Sep 2024",
    description: "Completed a comprehensive program in Information Technology, gaining foundational knowledge in software development, system analysis, and IT project management. Focused on practical skills in programming, database management, and web development, preparing me for real-world application development challenges.",
  },
  {
    id: "software-development",
    title: "Certificate in Software Development",
    subtitle: "ZAIO, Johannesburg | Apr 2023 – Mar 2024",
    description: "Acquired in-depth expertise in software development through hands-on training in modern JavaScript frameworks, TypeScript, and UI/UX design principles. Developed multiple projects using React.js and Next.js, emphasizing scalable and responsive web applications.",
  },
];

const skills: string[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
  "SASS",
  "React.js",
  "Next.js",
  "React Native",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Figma",
  "Framer",
  "Shell",
  "UI/UX Design",
  "Responsive Web Design",
  "API Integration",
  "Agile Development",
];

export default function EducationAndSkills() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(null);

  const handleCardClick = (education: Education) => {
    setSelectedEducation(education);
    setIsDrawerOpen(true);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl max-h-screen overflow-y-auto">
      <header className="text-center mb-10 flex flex-col">
        <h1 className="text-4xl font-bold text-primary">Education & Skills</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Equipped with Modern Tech Skills for Your Next Project
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
            <CardTitle className="text-2xl font-semibold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {educationList.map((education) => (
                <Card
                  key={education.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => handleCardClick(education)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{education.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{education.subtitle}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="text-center">
        <p className="text-muted-foreground mb-4">
          Ready to leverage my skills for your project? Let’s build something extraordinary together!
        </p>
        <Button asChild variant="default">
          <a href="mailto:bradleysaint45@gmail.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> Contact Me for Freelance Projects
          </a>
        </Button>
      </section>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          {selectedEducation && (
            <>
              <DrawerHeader>
                <DrawerTitle>{selectedEducation.title}</DrawerTitle>
                <DrawerDescription>{selectedEducation.subtitle}</DrawerDescription>
              </DrawerHeader>
              <div className="p-6">
                <p className="text-muted-foreground">{selectedEducation.description}</p>
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