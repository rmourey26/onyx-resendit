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
            <section className="relative max-w-dvw w-full overflow-hidden pb-16">
<div className="container px-4 md:px-6 mx-auto flex flex-col space-y-16 items-center pb-16 pt-16 sm:pt-16 sm:pb-24">
      <div className="flex mx-auto flex-col px-4 md:px-6 lg:px-8 w-full items-center gap-y-12">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-6xl text-center">Sustainable Shipping Reimagined</h1>
 <iframe className="aspect-video max-w-3xl w-full place-self-center overflow-hidden rounded-lg shadow-lg" src="https://www.youtube.com/embed/rq0lS7ZKYFQ?si=GTgF6H3Rr78LRA2z"></iframe>
        <p className="max-w-3xl text-lg lg:text-xl xs:text-justify text-muted-foreground">Reduce waste, reinvent optimization, and maximize revenue while rewarding your customers like never before with our Smart Packaging as-a Service platform.</p>
       </div>
       </div>
       <Cta/>
      <WhyResendItWrapper />
     <Featurez/>
   <AnimatedInfographic/>
    </section>
  )
}