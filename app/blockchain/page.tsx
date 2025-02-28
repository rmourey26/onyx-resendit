import BlockchainInfographic from "@/components/blockchain-infographic";
import { PromoVideo } from "@/components/ui/promo-video";

export default function Page () {
    return (
        <section className="container max-w-7xl mx-auto flex flex-1 flex-col space-y-8 items-center gap-6 pb-32 pt-20 sm:pt-40 sm:pb-24">
      <div className="flex mx-auto flex-col px-4 md:px-6 lg:px-8 items-center text-center gap-2">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter md:text-6xl mb-4">
          Blockchain Efficiency 
        </h1>
        <BlockchainInfographic />
        <PromoVideo />
       
        </div>
        </section>
    )

}