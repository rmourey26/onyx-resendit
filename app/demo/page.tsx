import type { Metadata } from "next"
import DemoPageClient from "./demo-page-client"
import { createSupbaseServerClient } from "@/utils/supaone"

export const metadata: Metadata = {
  title: "ResendIt Platform Demo | Intelligent Shipping & Packaging Solutions",
  description:
    "Experience the future of shipping and packaging with our AI-powered platform. Request a demo to see how we can transform your logistics operations.",
}

export default async function DemoPage() {
  const supabase = await createSupbaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <DemoPageClient user={user} />
    </div>
  )
}
