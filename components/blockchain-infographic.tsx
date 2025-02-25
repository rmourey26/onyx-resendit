"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Network, Zap, Shield, Globe, Cpu, type LucideIcon } from "lucide-react"

interface Feature {
  name: string
  icon: LucideIcon
  color: string
  description: string
}

const defaultFeatures: Feature[] = [
  {
    name: "Decentralized",
    icon: Network,
    color: "bg-blue-500",
    description: "Distributed ledger technology ensures transparency and eliminates single points of failure.",
  },
  {
    name: "Fast",
    icon: Zap,
    color: "bg-yellow-500",
    description: "High-speed transactions and real-time updates across the supply chain.",
  },
  {
    name: "Secure",
    icon: Shield,
    color: "bg-green-500",
    description: "Advanced cryptography protects data integrity and prevents unauthorized access.",
  },
  {
    name: "Global",
    icon: Globe,
    color: "bg-purple-500",
    description: "Seamless integration of international logistics and cross-border transactions.",
  },
  {
    name: "Intelligent",
    icon: Cpu,
    color: "bg-red-500",
    description: "AI-powered analytics for predictive maintenance and optimized routing.",
  },
]

interface BlockchainInfographicProps {
  features?: Feature[]
}

export default function BlockchainInfographic({ features = defaultFeatures }: BlockchainInfographicProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative aspect-square">
        <motion.div
          className="w-full h-full"
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.name}
              feature={feature}
              index={index}
              totalFeatures={features.length}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </motion.div>
      </div>
      <FeatureDialog feature={selectedFeature} isOpen={!!selectedFeature} onClose={() => setSelectedFeature(null)} />
    </div>
  )
}

interface FeatureBlockProps {
  feature: Feature
  index: number
  totalFeatures: number
  onClick: () => void
}

function FeatureBlock({ feature, index, totalFeatures, onClick }: FeatureBlockProps) {
  const Icon = feature.icon
  const angle = (index / totalFeatures) * 360
  const radius = 150 // Adjust this value to change the size of the circle

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-24 h-24 -mt-12 -ml-12"
      style={{
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
    >
      <Card
        className={`w-full h-full flex flex-col items-center justify-center ${feature.color} text-white rounded-lg shadow-lg cursor-pointer`}
      >
        <Icon className="w-8 h-8 mb-2" />
        <h3 className="text-sm font-semibold text-center">{feature.name}</h3>
      </Card>
    </motion.div>
  )
}

interface FeatureDialogProps {
  feature: Feature | null
  isOpen: boolean
  onClose: () => void
}

function FeatureDialog({ feature, isOpen, onClose }: FeatureDialogProps) {
  if (!feature) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <feature.icon className="w-6 h-6 mr-2" />
            {feature.name}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{feature.description}</DialogDescription>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}

