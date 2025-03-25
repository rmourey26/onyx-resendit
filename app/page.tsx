import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { readUserSession } from "@/utils/actions";
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
            <section className="container max-w-7xl mx-auto flex flex-1 flex-col space-y-8 items-center gap-6 pb-16 pt-16 sm:pt-16 sm:pb-24">
      <div className="flex mx-auto flex-col px-4 md:px-6 lg:px-8 items-center text-center gap-8">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-6xl">
          Sustainable Shipping Reimagined
        </h1>

  

<iframe className="aspect-video max-w-3xl w-full place-self-center overflow-hidden rounded-lg shadow-lg" src="https://www.youtube.com/embed/rq0lS7ZKYFQ?si=GTgF6H3Rr78LRA2z"></iframe>
        <p className="max-w-3xl text-base xs:text-start md:text-justify text-muted-foreground">
Reduce waste, drive revenue, and optimize your business cycle while rewarding your customers like never before. Powered by hybrid blockchain, AI, and cloud technologies, Resend-It fuels the circular economy. 
        </p>
      </div>
       <Cta/>
      <WhyResendItWrapper />
     <Featurez/>
   <AnimatedInfographic/>
    </section>
  )
}