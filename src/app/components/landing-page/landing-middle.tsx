import Image from "next/image";
import { CallToActionButton } from "./call-to-action-button";

export const LandingMiddle = () => {
  return (
    <main className="w-full h-full flex pt-[100px] pb-[200px]">
      <div className="bg-blue-400 absolute h-[300px] w-[600px] z-[1] left-[650px] top-[1090px] rounded-l-4xl rounded-br-4xl" />
      <section className="flex items-center justify-center min-h-[70vh] w-2/3">
        <Image
          src="/stock-3.webp"
          alt="e30 pic"
          height={800}
          width={800}
          className="object-cover z-[30] rounded-l-4xl rounded-br-4xl"
          priority
        />
      </section>
      <section className="min-h-[70vh] w-1/3 flex flex-col justify-center text-lg">
        <div className="z-[30]">
          <p className="text-black px-10 pt-10 pb-5">
            At VDM Motorsports, we specialize in remanufacturing BMW E30
            transmissions to the highest standards. Every build is meticulously
            crafted to deliver smooth shifting, durability, and performance that
            exceeds factory expectations. Whether you&apos;re restoring a
            classic or upgrading for the track, our transmissions are built to
            perform.
          </p>
        </div>
        <div className="z-[30]">
          <p className="text-black px-10 pt-5 pb-10">
            Don&apos;t settle for anything less than the best. Get in touch
            today and experience the VDM Motorsports difference.
          </p>
        </div>
        <div className="flex justify-center">
          <CallToActionButton
            buttonText="Start Your Build"
            styles="bg-gradient-to-r from-purple-400 to-fuchsia-600 hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full shadow-[0px_4px_15px_rgba(245,0,255,0.5)]"
            containerStyles="flex justify-center"
            variant="default"
            href="/"
          />
        </div>
      </section>
    </main>
  );
};
