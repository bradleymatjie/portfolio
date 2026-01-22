'use client'

import { useState } from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type Props = {
    open: boolean
    onOpenChange: (open: boolean) => void
    plan: string
}

export function PricingDrawer({ open, onOpenChange, plan }: Props) {
    const [name, setName] = useState('')
    const [project, setProject] = useState('')
    const [budget, setBudget] = useState('')

  const handleSubmit = () => {
    if (!name.trim() || !project.trim()) {
        toast.error('Please fill in all fields')
        return
    }
    
    const message = `
    Hi Bradley 👋
    I'm interested in the *${plan}* package.
    Name: ${name}
    Project details: ${project}
`
    
    const whatsappUrl = `https://wa.me/+27729509295?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank')
    onOpenChange(false)
}

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                <div className="mx-auto w-full max-w-lg p-6">
                    <DrawerHeader>
                        <DrawerTitle>{plan} package</DrawerTitle>
                        <DrawerDescription>
                            Tell me a bit about your project.
                        </DrawerDescription>
                    </DrawerHeader>

                    <div className="space-y-4">
                        <div>
                            <Label>Your name</Label>
                            <Input
                                placeholder="name surname"
                                className='mt-1'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <Label>Project details</Label>
                            <Textarea
                                placeholder="please describe your project"
                                 className='mt-1'
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                            />
                        </div>
                    </div>

                    <DrawerFooter className="mt-6">
                        <Button onClick={handleSubmit} className="w-full">
                            Send via WhatsApp
                        </Button>
                        <DrawerClose asChild>
                            <Button variant="outline" className="w-full">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
