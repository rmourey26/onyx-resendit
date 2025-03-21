import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import { ArrowRight } from "lucide-react";
import Featurez from "@/components/features"
import AnimatedInfographic from "@/components/animated-infographic"
import WhyResendItWrapper from "@/components/whyresenditwrapper"
import Cta from "@/components/cta";

import { redirect } from "next/navigation";

interface YouTubeID {
  youtubeID : string;
}

const youtubeID ="UC38fsAFWSN6MP1UZ-8tX_5w" as unknown as string;

export default async function IndexPage() {
  const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/dashboard");
	}
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-mint-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="container px-4 md:px-6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2 max-w-[600px]">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Sustainable Shipping Re-imagined
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400 mt-4">
            Reduce waste, drive margin growth, and enhance logistics with our innovative, seamless solution. Smart, durable, eco-friendly, powered by hybrid blockchain, AI, and cloud infrastructure, Resend-It is fueling the circular economy. 
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Link href="/contact">
              <Button size="lg" className="inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-lg">
           


  

                <iframe className="aspect-video max-w-lg w-full place-self-center overflow-hidden rounded-lg shadow-lg mb-6" src="https://www.youtube.com/embed/rq0lS7ZKYFQ?si=GTgF6H3Rr78LRA2z"></iframe>
              </div>
            </div>
          </div>
        </div>
        
        
       <Cta/>
      <WhyResendItWrapper />
     <Featurez/>
   <AnimatedInfographic/>
    </section>
  )
}
