"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function PromoVideo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="overflow-hidden rounded-lg border bg-white shadow-xl"
    >
      <video autoPlay muted playsInline>
        <source
      src="https://youtu.be/HR6a2aHhY_c?si=D1u5cPVyi7xuDWdf"
          type="video/mp4"/>
      </video>
    </AspectRatio>
  )
}