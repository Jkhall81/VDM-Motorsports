import { CallToActionButton } from "@/app/components/landing-page/call-to-action-button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const TechnologyMain = () => {
  return (
    <main className="w-full min-h-[calc(100vh-5rem)]">
      <h1 className="sectionTitle">
        Reviving Performance: Technology That Powers Our Rebuilds
      </h1>
      <div className="bg-fuchsia-600 h-[100px] w-[400px] left-[1100px] top-[250px] opacity-90 absolute rounded-r-4xl rounded-tl-4xl" />
      <section className="grid grid-cols-2 pt-[50px]">
        {/* Left Container */}
        <div className="flex items-center justify-center min-h-[80vh]">
          <Image
            src="/stock-7.jpg"
            className="object-cover z-[30] rounded-l-4xl rounded-tr-4xl"
            alt="e30 transmission"
            height={700}
            width={700}
            priority
          />
          <div className="bg-purple-400 h-[400px] w-[800px] absolute top-[600px] left-[200px] opacity-90 z-[1] rounded-l-4xl rounded-tr-4xl" />
        </div>
        {/* Right Container */}
        <div className="flex flex-col">
          <div className="mx-[100px] mt-[200px] mb-[50px]">
            <p className="text-black">
              At VDM Motorsports, we are dedicated to keeping the legendary BMW
              E30 alive by providing high-quality transmission rebuilds for
              enthusiasts and restorers alike. With BMW no longer manufacturing
              new transmissions for the E30, sourcing reliable replacements has
              become increasingly difficult. Rather than settling for worn-out,
              unreliable units, w&apos;ve taken it upon ourselves to engineer
              solutions that restore these transmissions to peak performance.
              Our passion for the E30 drives us to deliver excellence in every
              build.
            </p>
          </div>
          <div className="mx-[100px] mb-[50px]">
            <p className="text-black">
              To ensure the highest level of precision and reliability,
              we&apos;ve developed our own custom tooling and machining
              processes. Unlike mass-market rebuilders, we don&apos;t rely on
              generic parts or outdated techniques. Instead, we design and
              fabricate specialized tools that allow us to restore and refine
              every critical component of an E30 transmission. This hands-on
              approach guarantees that every unit leaving our shop meets or
              exceeds original factory specifications—something no off-the-shelf
              replacement can offer.
            </p>
          </div>
          <div className="mx-[100px]">
            <p className="text-black">
              Our craftsmanship is built on years of experience, attention to
              detail, and an uncompromising standard for quality. Each
              transmission is carefully disassembled, inspected, and reassembled
              using only the best components available. We meticulously address
              wear and tear, reinforce weak points, and fine-tune every build
              for smooth, precise shifting. The result is a transmission that
              not only extends the life of your E30 but enhances its driving
              experience.
            </p>
          </div>
        </div>
      </section>
      <Separator className="bg-black mx-20 mt-[120px]" />
      <section className="grid grid-cols-2">
        {/* Left */}
        <div className="min-h-[80vh]">
          <div className="px-[100px] flex flex-col space-y-[50px] text-muted-foreground">
            <div className="flex justify-center">
              <CallToActionButton
                buttonText="Contact Us"
                styles="bg-gradient-to-r from-purple-400 to-fuchsia-600 z-[30] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full shadow-[0px_4px_15px_rgba(245,0,255,0.5)]"
                containerStyles="flex justify-center mt-[200px]"
                variant="default"
                href="/"
              />
            </div>
            <p className="text-black">
              We aren&apos;t just rebuilding transmissions—we&apos;re preserving
              the spirit of the E30. Every rebuild is a testament to our
              commitment to this iconic platform. BMW engineered the E30 to be a
              driver&apos;s car, and we make sure that legacy continues by
              ensuring each transmission we build is as solid and reliable as
              the day it left the factory.
            </p>
            <p className="text-black">
              Our team is passionate about these cars, and every rebuild
              reflects our deep appreciation for BMW&apos;s engineering legacy.
              Owning an E30 is more than just driving a classic; it&apos;s about
              experiencing a piece of automotive history. That&apos;s why we
              take every step necessary to ensure our transmissions uphold the
              precision and durability that BMW intended.
            </p>
            <p className="text-black">
              When you choose VDM Motorsports, you&apos;re choosing innovation,
              craftsmanship, and a team that shares your passion for the E30. We
              know these cars inside and out, and we put the same level of care
              into each transmission as we would for our own builds.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="min-h-[80vh] flex items-center justify-center">
          <Image
            src="/stock-5.jpg"
            alt="white e30"
            className="object-cover z-[30] rounded-r-4xl rounded-bl-4xl"
            height={700}
            width={700}
            priority
          />
          <div className="absolute bg-blue-400 h-[300px] w-[300px] z-[1] left-[900px] bottom-[200px] rounded-bl-4xl" />
        </div>
      </section>
    </main>
  );
};
