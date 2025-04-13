"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { CallToActionButton } from "@/app/components/landing-page/call-to-action-button";

export const ServicesMain = () => {
  return (
    <main>
      <section className="w-full min-h-screen bg-neutral-200 2xl:pb-[200px]">
        <h1 className="sectionTitle">
          Precision{" "}
          <span className="bg-gradient-to-r from-[#6FEBA7] to-[#147a53b2] bg-clip-text text-transparent font-semibold">
            BMW E30
          </span>{" "}
          Transmission Rebuilds
        </h1>
        <div className="2xl:flex">
          {/* Left Container */}
          <div className="lg:min-h-[calc(100vh-5rem)] 2xl:w-1/2 2xl:max-w-[850px]">
            <div className="lg:ml-[100px] mt-[100px] flex 2xl:justify-between justify-center">
              <Image
                src="/stock-6.jpg"
                className="object-cover hidden lg:flex z-[30] rounded-l-4xl rounded-tr-4xl"
                width={300}
                height={300}
                alt="e30 transmission"
                priority
              />
              <div className="lg:max-w-[350px] lg:pl-10 lg:pr-0 max-h-[300px] lg:mr-[90px] px-10">
                <h2 className="text-center text-3xl font-bold py-[50px]">
                  Getrag 260
                </h2>
                <p className="text-black">
                  Our G260s start life as a factory plain old Getrag gearbox.
                  Unlike factory gearboxes, ours are never built down to a
                  price. They’re built up to the highest performance standards
                  possible. The cases are taken apart and all components are
                  inspected thoroughly for damage and excessive wear.
                </p>
              </div>
            </div>
            <div className="2xl:max-w-[960px] flex justify-center 2xl:mx-0 2xl:px-[100px] mt-[60px]">
              <div className="lg:max-w-[660px] px-10 lg:px-0">
                <p className="text-black">
                  The gears are sent out for isotropic surface refinishing (REM
                  polishing) and cryogenic treatment. The synchronizer mating
                  surfaces on each gear are hand finished for the best possible
                  shifting performance. The gear stack is assembled with all new
                  precision bearings, as well as hand fitted synchronizer and
                  polished engagement hubs. Each shift fork is measured for wear
                  and replaced as necessary. To address a common issue, we
                  incorporate oiling modifications to the secondary shaft
                  bearings, preventing oil starvation under high-load
                  conditions.
                </p>
                <p className="text-black mt-10">
                  If you’ve never driven a vehicle with a precision built
                  gearbox, you’re in for a treat. These gearboxes shift smoother
                  and more precisely with less effort. In short, they just feel
                  right.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-[100px]">
              <CallToActionButton
                buttonText="Get a Quote"
                styles="bg-gradient-to-r from-neutral-500 to-[#121212] z-[30] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full max-w-[300px] shadow-[0px_4px_15px_rgba(0,150,255,0.5)]"
                containerStyles="flex justify-center"
                variant="default"
                href="/contact-us"
              />
            </div>
          </div>
          {/* Right Container */}
          <div className="h-0 2xl:min-h-[calc(100vh-5rem)] w-0 2xl:w-1/2 flex items-center justify-center">
            <AnimatePresence>
              <motion.div
                key={"one"}
                initial={{ opacity: 0.1, transform: "translateX(0px)" }}
                animate={{ opacity: 1, transform: "translateX(-300px)" }}
                transition={{ once: true, type: "ease-in", duration: 3 }}
                className="bg-[rgb(111,235,167)] absolute 3xl:w-[400px] 3xl:h-[400px] z-[1] rounded-tl-4xl"
              />
            </AnimatePresence>
            <Image
              src="/stock-1.webp"
              alt="e30 white"
              className="object-cover z-[30] rounded-r-4xl rounded-tl-4xl"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
        {/* lower section */}
        <div className="2xl:grid 2xl:grid-cols-2 min-h-[85vh] w-full">
          {/* left container */}
          <div className="hidden 2xl:flex min-h-[80vh]"></div>
          {/* right container */}
          <div className="flex flex-col items-center min-h-[80vh]">
            <h2 className="text-center text-3xl font-bold py-[50px]">ZF5</h2>
            <div className="px-10 max-w-[850px]">
              <p className="text-black">
                Similar to our Getrag 260 but for people who actually like
                functional air conditioning in their vehicles.
              </p>
            </div>
            <h2 className="text-center text-3xl font-bold py-[50px]">
              Getrag 265
            </h2>
            <div className="space-y-10 px-10 max-w-[850px]">
              <p>
                Our G265 transmissions begin as standard Getrag gearboxes which
                fortunately for them have been brought to us to be revitalized.
                Unlike mass-produced units built to a budget, our G265s are
                meticulously engineered for peak performance. Each gearbox is
                completely disassembled, and every component undergoes rigorous
                inspection for damage or wear.{" "}
              </p>
              <p>
                Gears are then treated with isotropic surface finishing (REM
                polishing) and cryogenic processing to enhance durability and
                reduce friction. To ensure optimal shifting, the synchronizer
                mating surfaces on each gear are hand-finished.
              </p>
              <p>
                The gear stack is reassembled using all-new, precision bearings,
                along with hand-fitted synchronizers and polished engagement
                hubs. Shift forks are carefully inspected and replaced as
                needed. The result is a transformative driving experience.
                Expect smoother, more precise shifts with minimal effort. Simply
                put, these gearboxes deliver a feel that's undeniably excellent
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
