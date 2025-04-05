"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export const LandingMain = () => {
  return (
    <div className="w-full min-h-[calc(100vh-5rem)] flex mb-[50px]">
      <AnimatePresence>
        <motion.div
          key={"one"}
          initial={{ opacity: 0.1, transform: "translateX(-400px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ once: true, type: "ease-in", duration: 3 }}
          className="bg-[rgb(111,235,167)] 2xl:right-0 2xl:w-[800px] 2xl:h-[400px] absolute z-[1] 2xl:left-[600px] 2xl:top-[250px] opacity-90 will-change-transform rounded-tr-4xl rounded-bl-4xl"
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={"two"}
          initial={{ opacity: 0.1, transform: "translateX(300px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ once: true, type: "ease-in", duration: 3 }}
          className="bg-[#147a53b2] absolute 2xl:w-[400px] 2xl:h-[100px] 2xl:right-[100px] opacity-70 will-change-transform rounded-r-4xl rounded-tl-4xl"
        />
      </AnimatePresence>

      {/* Left Container */}
      <div className="w-full 2xl:w-[50%]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center pt-[80px] 2xl:ml-[200px]">
            <Image
              src="/stock-4.jpg"
              alt="white bmw e30"
              className="object-cover z-[30] 2xl:600 rounded-tl-4xl rounded-bl-4xl rounded-tr-4xl"
              height={400}
              width={800}
              priority
            />
          </div>
          <div className="flex flex-col items-start justify-center mt-[100px] 2xl:mt-[200px] 2xl:mr-[200px] pl-[50px] z-[30]">
            <span className="text-6xl">
              <strong className="bg-gradient-to-r from-[#6FEBA7] to-[#147a53b2] bg-clip-text text-transparent">
                VDM
              </strong>{" "}
              Motorsports
            </span>
            <p className="text-black pr-10 text-lg pt-10 text-wrap">
              Precision-built BMW E30 transmissions for enthusiasts who demand
              performance and reliability. Crafted with expertise, tested for
              excellence.
            </p>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className="w-[0%] 2xl:w-[50%]">
        <div className="flex flex-col h-full">
          <div className="w-full h-[20%]" />
          <div className="w-full px-10 h-[80%] flex justify-center items-center bg-neutral-200">
            <Image
              src="/stock-2.png"
              className="object-cover z-[30] rounded-tr-4xl hidden 2xl:block rounded-br-4xl rounded-tl-4xl"
              alt="bmw e30"
              height={900}
              width={900}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
