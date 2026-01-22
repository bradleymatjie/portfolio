'use client'

import { useState } from "react"
import { PricingDrawer } from "./components/PricingDrawer"

export default function PricingPage() {
    const [open, setOpen] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState('')

    const handleOpen = (plan: string) => {
        setSelectedPlan(plan)
        setOpen(true)
    }
    return (
        <section className="py-24 px-6 bg-[#fafafa]">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        Simple & transparent pricing
                    </h1>
                    <p className="mt-4 text-gray-500 max-w-xl mx-auto">
                        Clear packages for startups, businesses, and growing brands.
                        No hidden costs.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Starter */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900">Starter</h3>
                        <p className="mt-4 text-4xl font-bold text-gray-900">R5,500</p>
                        <p className="text-sm text-gray-500">per project</p>

                        <button onClick={() => handleOpen('Starter')} className="mt-6 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-900 hover:bg-gray-200 transition">
                            Get started
                        </button>

                        <ul className="mt-8 space-y-3 text-sm text-gray-600">
                            <li>✓ Landing page or small site</li>
                            <li>✓ Responsive design</li>
                            <li>✓ Basic SEO setup</li>
                            <li>✓ Contact form integration</li>
                        </ul>
                    </div>

                    {/* Professional */}
                    <div className="relative rounded-2xl border border-gray-900 bg-white p-8 shadow-md">
                        <span className="absolute -top-3 right-6 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
                            Most popular
                        </span>

                        <h3 className="text-lg font-medium text-gray-900">Professional</h3>
                        <p className="mt-4 text-4xl font-bold text-gray-900">R10,000</p>
                        <p className="text-sm text-gray-500">per project</p>

                        <button onClick={() => handleOpen('Professional')} className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-800 transition">
                            Get started
                        </button>

                        <ul className="mt-8 space-y-3 text-sm text-gray-600">
                            <li>✓ Multi-page website</li>
                            <li>✓ Modern UI/UX</li>
                            <li>✓ API integrations</li>
                            <li>✓ Performance optimization</li>
                            <li>✓ Deployment support</li>
                        </ul>
                    </div>

                    {/* Custom */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                        <h3 className="text-lg font-medium text-gray-900">Custom</h3>
                        <p className="mt-4 text-4xl font-bold text-gray-900">Let’s talk</p>
                        <p className="text-sm text-gray-500">tailored solution</p>

                        <button onClick={() => handleOpen('Custom')} className="mt-6 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-900 hover:bg-gray-200 transition">
                            Contact me
                        </button>

                        <ul className="mt-8 space-y-3 text-sm text-gray-600">
                            <li>✓ Web apps / dashboards</li>
                            <li>✓ Complex integrations</li>
                            <li>✓ Ongoing support</li>
                            <li>✓ Custom requirements</li>
                        </ul>
                    </div>
                </div>
                <PricingDrawer
                    open={open}
                    onOpenChange={setOpen}
                    plan={selectedPlan}
                />
            </div>
        </section>
    )
}
