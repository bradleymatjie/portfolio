"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: string;
};

export function PricingDrawer({ open, onOpenChange, plan }: Props) {
  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = () => {
    if (!name.trim() || !project.trim()) {
      toast.error("Please fill in your name and project details");
      return;
    }

    const message = `
Hi Bradley 👋

I'm interested in the ${plan} package.

Name: ${name}
Budget: ${budget || "Not specified"}

Project details:
${project}
`;

    const whatsappUrl = `https://wa.me/27729509295?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
    onOpenChange(false);
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="border-white/10 bg-[#050505] text-white lg:h-screen lg:max-h-screen">
        <div className="mx-auto flex h-full w-full max-w-xl flex-col px-6 py-6">
          {/* Header */}
          <DrawerHeader className="px-0 text-left">
            <div className="mb-3 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
              Project enquiry
            </div>

            <DrawerTitle className="text-3xl font-semibold tracking-tight">
              {plan} package
            </DrawerTitle>

            <DrawerDescription className="mt-2 text-white/55">
              Tell me a bit about your project and I’ll get back to you.
            </DrawerDescription>
          </DrawerHeader>

          {/* Scrollable Body */}
          <div className="mt-6 flex-1 space-y-5 overflow-y-auto pr-1">
            <div>
              <Label className="text-white/65">Your name</Label>
              <Input
                placeholder="Name surname"
                className="mt-2 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-white/20"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label className="text-white/65">Estimated budget</Label>
              <Input
                placeholder="Example: R10,000"
                className="mt-2 rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-white/20"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>

            <div>
              <Label className="text-white/65">Project details</Label>
              <Textarea
                placeholder="Tell me what you want to build..."
                className="mt-2 min-h-40 resize-none rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-white/20"
                value={project}
                onChange={(e) => setProject(e.target.value)}
              />
            </div>
          </div>

          {/* Sticky Footer */}
          <DrawerFooter className="mt-6 px-0 pb-0">
            <Button
              onClick={handleSubmit}
              className="w-full rounded-2xl bg-white text-black hover:bg-white/90"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </Button>

            <DrawerClose asChild>
              <Button
                variant="outline"
                className="w-full rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}