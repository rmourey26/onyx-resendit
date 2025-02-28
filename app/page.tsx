import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
import Features from "@/components/features"
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
            <section className="container max-w-7xl mx-auto flex flex-1 flex-col space-y-8 items-center gap-6 pb-16 pt-8 sm:pt-16 sm:pb-24">
      <div className="flex mx-auto flex-col px-4 md:px-6 lg:px-8 items-center text-center gap-2">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-6xl mb-4">
          Sustainable Shipping Reimagined
        </h1>

           <div className="place-self-stretch max-w-5xl aspect-video aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-lg space-y-8">

<iframe src="https://www.youtube.com/embed/rq0lS7ZKYFQ?si=GTgF6H3Rr78LRA2z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
        <p className="mt-2 max-w-2xl text-lg text-center text-muted-foreground sm:text-xl">
Reduce waste, cut costs, and enhance logistics with our innovative, seamless solution. Smart, durable, eco-friendly, powered by blockchain tracking, rewards, and AI insight, Resend-It fuels the circular economy. 
        </p>
      </div>
       <Cta/>
      <WhyResendItWrapper />
     <Features/>
   <AnimatedInfographic/>
    </section>
  )
}
