"use client"
import Image from "next/image"
import arrow from "@/assets/arroow.svg"
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Features from "./features"

export default function Home() {
  const performAPICall = async () => {
    try {
      const body = JSON.stringify({
        requestId: 1,
        intent: "I want to swap STRK for 0.001 ETH",
        userAddress: "0xAD14E2F920F1aF86F85D2c08F2FDf71254317B09",
      })

      const data = await fetch("/api/intents", {
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <main className=" grid grid-cols-12 min-h-screen bg-gradient-to-b from-purple-400/40 via-violet-500/40 to-indigo-600/40 py-20 max-w-7xl mx-auto rounded-xl rounded-b-none">
        <div className="min-h-[60vh] col-span-12 flex items-center justify-start flex-col backgrnd-pattern">
          <div className="space-y-4 pb-10 flex-col items-center justify-center flex relative">
            <h1 className=" text-4xl font-[800]">STRK-Ser</h1>
            <p className=" max-w-xl text-center ">
              Talk to the blockchain like {`you'd`} talk to a friend. With ,
              STRK Ser simply express what you want to do in plain language, and
              our network of solvers will turn your words into code that
              executes seamlessly on-chain.
            </p>
            {/* <Button onClick={performAPICall}>Call</Button> */}

            <Link
              href={"/app"}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Launch App
            </Link>
            <Image
              src={arrow}
              alt="arrow"
              className=" w-64 h-20 object-cover -z-10 -mt-6 animate-pulse"
            />
          </div>
        </div>
      </main>
      <div className="pb-12">
        <Features />
      </div>
    </div>
  )
}
