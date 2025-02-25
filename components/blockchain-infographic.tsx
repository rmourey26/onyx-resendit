"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Network, Zap, Shield, Globe, Cpu, type LucideIcon } from 'lucide-react'

interface Feature {
  name: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

const defaultFeatures: Feature[] = [
  { name: "Decentralized", icon: Network, color: "bg-blue-500", description: "Distributed ledger technology ensures transparency and eliminates single points of failure." },
  { name: "Fast", icon: Zap, color: "bg-yellow-500", description: "High-speed transactions and real-time updates across the supply chain." },
  { name: "Secure", icon: Shield, color: "bg-green-500", description: "Advanced cryptography protects data integrity and prevents unauthorized access." },
  { name: "Global", icon: Globe, color: "bg-purple-500", description: "Seamless integration of international logistics and cross-border transactions." },
  { name: "Intelligent", icon: Cpu, color: "bg-red-500", description: "AI-powered analytics for predictive maintenance and optimized routing." },
]

interface BlockchainInfographicProps {
  features?: Feature[];
}

export default function BlockchainInfographic({ features = defaultFeatures }: BlockchainInfographicProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <Card className="relative w-full max-w-3xl aspect-square bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="relative w-4/5 h-4/5 transform-style-3d" style={{ perspective: "1000px" }}>
            {features.map((feature, index) => (
              <FeatureBlock 
                key={feature.name} 
                feature={feature} 
                index={index} 
                onClick={() => {
                  setSelectedFeature(feature)
                  setIsDialogOpen(true)
                }}
              />
            ))}
          </div>
        </motion.div>
      </Card>
      <AnimatePresence>
        {isDialogOpen && selectedFeature && (
          <FeatureDialog 
            feature={selectedFeature} 
            isOpen={isDialogOpen} 
            onClose={() => setIsDialogOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface FeatureBlockProps {
  feature: Feature;
  index: number;
  onClick: () => void;
}

function FeatureBlock({ feature, index, onClick }: FeatureBlockProps) {
  const Icon = feature.icon
  const angle = (index / defaultFeatures.length) * 360
  const translateZ = 150

  return (
    <motion.div
      className="absolute w-40 h-40 cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
    >
      <Card className={`w-full h-full flex flex-col items-center justify-center text-white rounded-lg shadow-lg transition-colors duration-300 ${feature.color}`}>
        <Icon className="w-12 h-12 mb-2" />
        <h3 className="text-lg font-semibold">{feature.name}</h3>
      </Card>
    </motion.div>
  )
}

interface FeatureDialogProps {
  feature: Feature;
  isOpen: boolean;
  onClose: () => void;
}

function FeatureDialog({ feature, isOpen, onClose }: FeatureDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <feature.icon className="w-6 h-6 mr-2" />
            {feature.name}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {feature.description}
        </DialogDescription>
        <Button onClick={onClose}>Close</Button>
      </DialogContent>
    </Dialog>
  )
}