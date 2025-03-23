"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CallToActionButton } from "@/app/components/landing-page/call-to-action-button";

export const ServicesMain = () => {
  return (
    <main>
      <section className="w-full min-h-screen bg-neutral-200  pb-[200px]">
        <h1 className="sectionTitle">
          Precision{" "}
          <span className="bg-gradient-to-r from-purple-300 to-fuchsia-700 bg-clip-text text-transparent font-semibold">
            BMW E30
          </span>{" "}
          Transmission Rebuilds
        </h1>
        <div className="flex">
          {/* Left Container */}
          <div className="min-h-[calc(100vh-5rem)] w-1/2">
            <div className="ml-[100px] mt-[100px] flex justify-between">
              <Image
                src="/stock-6.jpg"
                className="object-cover"
                width={300}
                height={300}
                alt="e30 transmission"
                priority
              />
              <div className="max-w-[300px]  max-h-[300px] mr-[100px]">
                <p className="text-muted-foreground">
                  At VDM Motorsports, we specialize in rebuilding and refining
                  BMW E30 transmissions to deliver exceptional performance and
                  reliability. Whether you&apos;re restoring a classic,
                  upgrading for better drivability, or preparing for track use,
                  our expert craftsmanship ensures your transmission meets the
                  highest standards. Each rebuild is meticulously inspected,
                  refreshed with high-quality components, and tested to ensure
                  smooth, precise shifting—bringing new life to your E30.
                </p>
              </div>
            </div>
            <div className="px-[100px] mt-[100px]">
              <p className="text-muted-foreground">
                Based in Phoenix, AZ, we take pride in serving BMW enthusiasts
                across the country. Our commitment to quality and attention to
                detail set us apart, making VDM Motorsports the trusted choice
                for E30 owners who demand the best. If you&apos;re ready to
                upgrade your transmission, reach out today and let us help you
                get back on the road with confidence.
              </p>
            </div>
            <div className="flex justify-center mt-[100px]">
              <CallToActionButton
                buttonText="Get a Quote"
                styles="bg-gradient-to-r from-blue-400 to-blue-600 hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full max-w-[300px] shadow-[0px_4px_15px_rgba(0,150,255,0.5)]"
                containerStyles="flex justify-center"
                variant="default"
                href="/"
              />
            </div>
          </div>
          {/* Right Container */}
          <div className="min-h-[calc(100vh-5rem)] w-1/2 flex items-center justify-center">
            <AnimatePresence>
              <motion.div
                key={"one"}
                initial={{ opacity: 0.1, transform: "translateX(0px)" }}
                animate={{ opacity: 1, transform: "translateX(-300px)" }}
                transition={{ once: true, type: "ease-in", duration: 3 }}
                className="bg-blue-400 absolute w-[400px] h-[400px] z-[1]"
              />
            </AnimatePresence>
            <Image
              src="/stock-1.webp"
              alt="e30 white"
              className="object-cover z-[30]"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};
