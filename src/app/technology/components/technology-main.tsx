import { CallToActionButton } from "@/app/components/landing-page/call-to-action-button";
import { Separator } from "@/components/ui/separator";
import { StepComponent } from "./step-component";
import { stepData } from "../data/step-data";
import Image from "next/image";

export const TechnologyMain = () => {
  return (
    <main className="w-full min-h-[calc(100vh-5rem)]">
      <h1 className="sectionTitle">
        Reviving Performance: Technology That Powers Our Rebuilds
      </h1>
      <div className="bg-[#147a53b2] 3xl:h-[100px] 3xl:w-[400px] left-[1100px] top-[250px] opacity-90 absolute rounded-r-4xl rounded-tl-4xl" />
      <section className="2xl:grid 2xl:grid-cols-2 pt-[50px]">
        {/* Left Container */}
        <div className="flex items-center justify-center 2xl:min-h-[80vh]">
          <Image
            src="/stock-7.jpg"
            className="object-cover z-[30] rounded-l-4xl rounded-tr-4xl"
            alt="e30 transmission"
            height={700}
            width={700}
            priority
          />
          <div className="bg-[rgb(111,235,167)] 3xl:h-[400px] 3xl:w-[800px] absolute top-[600px] left-[200px] opacity-90 z-[1] rounded-l-4xl rounded-tr-4xl" />
        </div>
        {/* Right Container */}
        <div className="flex flex-col lg:mx-[100px] px-10">
          <div className="mt-[100px] 2xl:mt-[130px] 2xl:mb-[50px]">
            <h2 className="text-2xl font-bold mb-10">Driveline Operation</h2>
            <h3 className="text-xl font-semibold mb-10">
              Importance of inspecting all components of your
              transmission/driveline
            </h3>
            <p className="text-black">
              When installing a new VDM transmission &apos;s imperative you
              inspect and understand the operation of the other components that
              contribute to a functional driveline.
            </p>
          </div>
          <div className="mt-10 2xl:mt-0">
            <p className="text-black">
              This article will help with understanding your driveline
              components by explaining how the clutch operates and its essential
              components. As well as reviewing the shifter rod and bushings,
              Transmission and engine mounts and the driveshaft.
            </p>
            <h2 className="text-2xl font-semibold mt-10 2xl:mt-30">
              How the clutch system works — Step by Step
            </h2>
            <p className="mt-10">
              Let&apos;s imagine for a second, you&apos;re sitting in your car
              with your precision VDM gearbox installed. It&apos;s a beautiful
              day out when you start your car up. You&apos;re ready, and
              you&apos;re excited.
            </p>
            <div className="flex justify-center">
              <CallToActionButton
                buttonText="Contact Us"
                styles="bg-gradient-to-r from-[#121212] to-neutral-500 z-[30] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full shadow-[0px_4px_15px_rgba(111,235,167,0.5)]"
                containerStyles="flex justify-center mt-[50px]"
                variant="default"
                href="/contact-us"
              />
            </div>
          </div>
        </div>
      </section>
      <Separator className="bg-black mx-20 mt-[120px]" />
      {/* Cluth System Steps */}
      <section className="lg:pl-[100px] 2xl:pl-0 w-full 2xl:grid 2xl:grid-cols-2">
        {/* Left Container */}
        <div className="min-h-[50vh] flex justify-center w-full">
          <div className="max-w-[850px]">
            {/* 1 - 4 */}
            {stepData.slice(0, 4).map((x, index) => (
              <StepComponent
                key={x.id}
                number={index + 1}
                title={x.title}
                bulletPoints={x.bulletPoints}
              />
            ))}
          </div>
        </div>
        {/* Right Container */}
        <div className="min-h-[50vh] flex justify-center w-full">
          <div className="max-w-[850px]">
            {/* 5 - 7 */}
            {stepData.slice(4, 7).map((x, index) => (
              <StepComponent
                key={x.id}
                number={index + 5}
                title={x.title}
                bulletPoints={x.bulletPoints}
              />
            ))}
          </div>
        </div>
      </section>
      <Separator className="bg-black mx-20 mt-[60px]" />
      <section className="2xl:grid 2xl:grid-cols-3 w-full">
        {/* Col 1 */}
        <div className="px-20 pt-10 flex flex-col items-center 2xl:justify-start 2xl:min-h-[80vh]">
          <p>
            Picturing this whole process helps us understand better how each and
            every component contributes to a functioning vehicle and better
            experience.
          </p>
          <p className="mt-10">
            Let&apos;s talk about how some of these components can fail and
            affect other parts of the system and how you can identify them.
          </p>
          <h3 className="my-10 font-semibold">
            Clutch Master/Slave Failure Identification
          </h3>
          <ul className="list-disc">
            <li>Spongy or soft clutch pedal</li>
            <li>Difficulty shifting gears, grinding gears</li>
            <li>
              Clutch fluid leaks, on the floor, outside of gearbox, or in the
              bell housing
            </li>
            <li>Clutch pedal sticking to the floor</li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col items-center 2xl:justify-center mt-10 2xl:mt-0 px-20 space-y-10">
          <p>
            Ignoring a failing clutch master/slave may cause damage to the
            clutch, pressure plate and flywheel. It may also cause premature
            wear or damage to the internals of the transmission including the
            synchronizers and gears.{" "}
          </p>
          <h3 className="font-semibold">Driveshaft Failure or Wear</h3>
          <ul className="list-disc">
            <li>Vibrations when driving</li>
            <li>Clunking when loading or unloading the driveline</li>
            <li>Possible whining noises from the center support bearing</li>
          </ul>
          <div className="flex justify-center mb-10 2xl:mb-0">
            <CallToActionButton
              buttonText="Request a Rebuild"
              styles="bg-gradient-to-r from-[#121212] to-neutral-500 z-[30] hover:brightness-110 hover:scale-[1.02] transition-all duration-200 ease-in-out text-neutral-100 rounded-lg w-full shadow-[0px_4px_15px_rgba(111,235,167,0.5)]"
              containerStyles="flex justify-center mt-[50px]"
              variant="default"
              href="/contact-us"
            />
          </div>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-center 2xl:justify-end px-20 space-y-10">
          <h3 className="font-semibold">Shifter component failure</h3>
          <ul className="list-disc">
            <li>
              Sloppy shifter feel, which includes excessive side to side or
              front to back play.
            </li>
          </ul>
          <p>
            The shifter component failure is typically the least likely to cause
            any damage to other components
          </p>
        </div>
      </section>
      <Separator className="bg-black mx-20 mt-[60px]" />
      {/* Synchronizers */}
      <section className="2xl:grid 2xl:grid-cols-2 w-full mt-10">
        <div className="min-h-[50vh] flex flex-col items-center">
          <div className="flex flex-col max-w-[850px] px-10">
            <h2 className="text-2xl font-bold mb-10">Synchronizers</h2>
            <p className="mb-10">
              Manual transmission synchronizers (or &ldquo;synchros&rdquo;) are
              a critical, though often misunderstood, component to smooth gear
              shifting. These mechanical components inside your manual
              transmission make it possible to shift gears without grinding or
              forcing them together. They do this, as their name suggests, by
              synchronizing the speed of the gear being selected with the speed
              of the transmission shaft. Without them, you would have to
              perfectly rev-match for every upshift and downshift to prevent
              grinding (and possibly damaging) gears.
            </p>
            <h3 className="text-xl font-semibold mb-10">
              The synchronized manual transmission shifting process:
            </h3>
            <ul className="list-disc leading-loose">
              <li>
                Shift Begins: You move the gear lever and push the shift fork
                against the shift sleeve.
              </li>
              <li>
                Slider Moves: A sleeve (or collar) moves over toward the gear
                you want by pushing against a synchro ring.
              </li>
              <li>
                Blocking Ring (Synchro Ring): This ring, usually made of brass
                or a similar soft metal, uses friction to slow down or speed up
                the target gear.
              </li>
              <li>
                Speed Match: Once the speeds are synchronized, the collar locks
                into the gear via small teeth (called dog teeth).
              </li>
              <li>
                Gear Engaged: Now the collar is locked into gear and the
                transmission shaft and gear are engaged.
              </li>
            </ul>
          </div>
        </div>
        {/* Currently Empty */}
        <div></div>
      </section>
      <section className="2xl:grid 2xl:grid-cols-2 w-full mt-10">
        <div></div>
        <div className="min-h-[50vh] flex flex-col items-center">
          <div className="flex flex-col max-w-[850px] px-10">
            <h3 className="text-xl font-semibold mb-10">
              Common Synchro Issues:
            </h3>
            <ul className="list-disc leading-loose">
              <li>
                Worn synchros: Synchros are commonly made of brass or some other
                high-friction material and will eventually wear. You&apos;ll
                start noticing grinding during gear changes, especially when
                downshifting as the synchros become worn out.
              </li>
              <li>
                Hard shifting: If the synchros are damaged or worn out, shifting
                may feel notchy or grind when going into gear as the gear and
                transmission shaft are spinning at different rates.
              </li>
            </ul>
            <div className="space-y-10 mt-10">
              <p>
                Replacing worn sychros involves disassembly and rebuilding of
                the transmission. Worn synchro rings will need to be replaced,
                gear mating surfaces inspected and possibly re-finished and
                damaged gears may need to be replaced.{" "}
              </p>
              <p>
                At VDM we&apos;ve spent months testing different synchros,
                refinishing gear mating surfaces and trying various gear fluids
                to find the best combination for both durability and
                performance.{" "}
              </p>
              <p>
                It turns out that not all synchros are created equal. New
                materials and manufacturing technology has allowed the creation
                of both more durable as well as more effective synchros. When
                combined with hand finished gear mating surfaces we&apos;ve
                found that these allow for incredibly smooth shifts throughout
                the entire RPM range with minimal break-in while operating
                across a wide range of operating temperatures
              </p>
            </div>
          </div>
        </div>
      </section>
      <Separator className="bg-black mx-20 mt-[60px]" />
      <section className="2xl:grid 2xl:grid-cols-2 pb-[200px]">
        {/* Left */}
        <div className="2xl:min-h-[80vh]">
          <div className="lg:px-[100px] px-10 flex flex-col space-y-[50px]">
            <h3 className="text-xl font-semibold my-10">Gear Finishing</h3>
            <p className="text-black">
              While OEM transmission gears are produced in vast quantities with
              considerable expertise, they are also designed and manufactured
              with cost constraints in mind. This often leads to the omission of
              certain processes that, while not essential for typical road cars,
              are highly beneficial in high-performance applications.
            </p>
            <h3 className="text-xl font-semibold mb-10">
              Cryogenic Metal Treatment:
            </h3>
            <p className="text-black">
              Originally developed by NASA, cryogenic treatment involves
              carefully cooling components to extremely low temperatures (as low
              as -300°F) using liquid nitrogen, followed by a gradual return to
              room temperature. To prevent thermal shock, the gears are never
              directly exposed to the liquid nitrogen.
            </p>
            <p className="text-black">
              The primary goal of cryogenic treatment is to transform retained
              austenite and increase the hardness of the material&apos;s
              structure. Cryo-treated gears exhibit a measurable improvement in
              wear resistance and bending fatigue life, while also minimizing
              residual stress and the risk of stress fractures.
            </p>
            <h3 className="text-xl font-semibold mb-10">
              REM / Isotropic Surface Finishing (ISF):
            </h3>
            <p className="text-black">
              Standard transmissions can take months or even years to fully
              break in and develop optimal mating surfaces. ISF finishing
              dramatically accelerates this process by creating a near-polished,
              omni-directional surface on the gears. Unlike conventional
              polishing methods, ISF employs a non-abrasive chemical-mechanical
              process that selectively removes surface peaks without affecting
              the valleys. This ensures that the critical case-hardened surface
              remains intact, and dimensional tolerances are maintained.
            </p>
            <p className="text-black">
              The result is a jewel-like polish that significantly reduces
              friction, leading to smoother, cooler operation and reduced
              parasitic drag. ISF-treated surfaces also exhibit fewer stress
              raisers and increased resistance to corrosion and micropitting.
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
          <div className="absolute bg-[#121212] 3xl:h-[300px] 3xl:w-[300px] z-[1] left-[900px] bottom-[360px] rounded-bl-4xl" />
        </div>
      </section>
    </main>
  );
};
