"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DemoRequestModal } from "@/components/demo-request-modal"
import type { User } from "@supabase/supabase-js"
import { motion } from "framer-motion"

// Feature data
const features = [
  {
    title: "AI-Enhanced Shipping Dashboard",
    description: "Real-time monitoring of shipments with AI-powered insights and IoT sensor analytics.",
    image:
      "https://quantumone.b-cdn.net/resendit/shipping_dashboard.png",
    alt: "AI-Enhanced Shipping Dashboard",
  },
  {
    title: "Sustainability & ROI Dashboard",
    description: "Track environmental impact and return on investment with detailed metrics and reporting.",
    image: "https://quantumone.b-cdn.net/resendit/sustainability.png",
    alt: "Sustainability Dashboard",
  },
  {
    title: "Branded Reusable Packaging",
    description: "Design eco-friendly, reusable packaging with your brand identity.",
    image:"https://quantumone.b-cdn.net/resendit/branded_resusable_packaging.png",
    alt: "Branded Reusable Packaging",
  },
  {
    title: "RAG Configuration",
    description: "Configure Retrieval Augmented Generation settings for your AI agents.",
    image:
      "https://quantumone.b-cdn.net/resendit/RAG_advanced_settings.png",
    alt: "RAG Configuration",
  },
  {
    title: "AI Business Suite",
    description:
      "Powerful AI tools for business optimization, including web search, database queries, and data analysis.",
    image:
      "https://quantumone.b-cdn.net/resendit/ai_business_suite_agent_tools.png",
    alt: "AI Business Suite Agent Tools",
  },
  {
    title: "AI Agent Templates",
    description: "Choose from preconfigured AI agent templates to get started quickly.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ai_bsuite_templates-gen-Dk8ZITlsuJSIQhYAwyVktU2mjShsiw.png",
    alt: "AI Agent Templates",
  },
  {
    title: "Supply Chain AI Templates",
    description: "Specialized AI agents for supply chain optimization, shipping routes, and sustainability.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agent_template3-6SztOT9CgoZuaGHBetHwl1NTajj64N.png",
    alt: "Supply Chain AI Templates",
  },
  {
    title: "Embeddings Management",
    description: "Manage and analyze your embeddings for enhanced AI capabilities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/embeddings_management-oUDGsqujJG2Et2WRQym2pwCOjDzfnB.png",
    alt: "Embeddings Management",
  },
  {
    title: "Advanced RAG Settings",
    description: "Fine-tune your RAG configuration with advanced settings and techniques.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RAG_advanced_settings-SUKIdVjDoTN52JEMTmtFGoQ7Zn18oB.png",
    alt: "Advanced RAG Settings",
  },
]

export default function DemoPageClient({ user }: { user: User | null }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Transform Your Logistics with AI-Powered Intelligence
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the future of shipping and packaging with our comprehensive platform that combines AI, IoT, and
            sustainability.
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Request a Demo
          </Button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-green-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Reduce Costs</h3>
            <p>Optimize shipping routes and packaging to significantly reduce operational costs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Increase Efficiency</h3>
            <p>AI-powered insights help streamline operations and improve delivery times.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Enhance Sustainability</h3>
            <p>Track and reduce your carbon footprint with reusable packaging solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
            <p>IoT sensors provide real-time data on shipment conditions and location.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p>Advanced analytics and AI agents help you make data-driven decisions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Customizable Solutions</h3>
            <p>Tailor the platform to your specific business needs and requirements.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the growing number of businesses that are revolutionizing their shipping and packaging operations with
          our platform.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="bg-white text-green-600 hover:bg-gray-100 border-white px-8 py-6 text-lg rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          Schedule Your Demo Today
        </Button>
      </section>

      {/* Demo Request Modal */}
      <DemoRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} user={user} />
    </div>
  )
}
