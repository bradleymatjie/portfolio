"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto p-6 max-w-4xl max-h-screen overflow-y-auto mb-20 lg:mb-30">
      <header className="text-center mb-10 flex flex-col">
        <p className="text-xl text-muted-foreground mt-2">
          <u>Freelance Full-Stack Developer</u>
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Badge variant="secondary" className="flex items-center gap-2">
            <Phone className="h-4 w-4" /> 072 950 9295
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> bradleysaint45@gmail.com
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Johannesburg, South Africa
          </Badge>
          <Badge variant="secondary">
            <Link href={"https://www.linkedin.com/in/bradleymatjie/"} target="_blank" className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </Badge>
        </div>
      </header>

      <Separator className="my-8" />

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold"><u>About Me</u></CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              I'm Bradley, a dedicated freelance Full-Stack Developer with a passion for building seamless, user-friendly web and mobile applications. With expertise in <strong>React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, I create tailored solutions that drive engagement and performance.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Currently, I’m an Intermediate Full-Stack Developer at Consnet, working on the EPSON project, where I handle complex API integrations, responsive UI design, and backend logic to deliver high-quality solutions. My experience with platforms like Social Banc and Thooto.com has honed my ability to build scalable, impactful applications for diverse clients.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              As a freelancer, I offer flexible, client-focused services to startups, businesses, and individuals. Whether you need a modern website, a mobile app, or a custom full-stack solution, I’m here to bring your vision to life with clear communication and top-notch quality. Let’s connect to discuss your project!
            </p>
            <div className="mt-6 flex gap-4">
              <Button asChild variant="default">
                <a href="mailto:bradleysaint45@gmail.com">Hire Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">View LinkedIn</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Why Work With Me?</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Full-Stack Expertise</AccordionTrigger>
                <AccordionContent>
                  With hands-on experience in React.js, Next.js, TypeScript, and backend technologies, I deliver end-to-end solutions, including API integrations and responsive UIs, as demonstrated in my work on the EPSON project at Consnet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Client-Centric Approach</AccordionTrigger>
                <AccordionContent>
                  I prioritize your goals, offering personalized solutions, transparent communication, and timely delivery to ensure your project succeeds.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Flexible Collaboration</AccordionTrigger>
                <AccordionContent>
                  Available for remote or hybrid work, I adapt to your needs, whether it’s a one-off project or ongoing support, delivering results that align with your vision.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}