import { PersonBio } from "./components/person-bio";
import Image from "next/image";

const jackBioText = [
  "For many years, Jack had a deep and abiding love of motorcycles. He even raced them for a few years before realizing that he was the only one of his friends that walked without a limp. After spending a week learning how to improperly reassemble a flatslide racing carburetor, Jack decided to go back to school and soon found himself making a hard left turn into the world of precision manufacturing. From part design to prototyping and eventually to running a small production machine shop. He learned everything soup-to-nuts from materials selection all the way through post machine finishing, testing and assembly.",
  "The love of high performance wasn’t a drug Jack was ever able to fully quit, after falling in with a bad crowd (the Phoenix Spec Miata community) he was back on the high-octane juice.",
  "Like most racers, Jack realized that his lack of driving talent could be overcome with better equipment. He soon found that his knowledge of manufacturing and attention to detail translated nicely to building more reliable race cars.",
];

const gavinBioText = [
  "Gavin started his career in the automotive industry at 18 years old. With his passion being primarily focused on European cars he worked his way to Master BMW Technician with 8 years of German performance grease behind his ears until one day, after being introduced to one too many espresso shots and cannolis, Gavin found himself on the dark path to becoming a Ferrari Master Technician and learning how to speak with his hands.",
  "Some people call it OCD, others call it an incredible attention to detail, either way Gavin organizes the tool drawers by tool type and color.",
  "Since his first exposure to racing, he now finds it permanently in his blood (which apparently has many negative medical side-effects) and it now keeps him fueled every day… although he hasn’t given up on the espresso shots entirely.",
];

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-[100vh]">
      <h1 className="sectionTitle mb-10">About Us</h1>
      <section className="flex flex-col items-center">
        <div className="max-w-[850px] space-y-10 text-black px-10">
          <p>
            VDM Motorsports was founded because nobody built transmissions quite
            to our liking. While most racers we met didn’t blink twice at
            spending thousands (or tens of thousands) of dollars on a built
            motor only to drop a junkyard box-o-gears into their
            high-performance racing pride that ultimately would prove to be the
            next weakest link. After many seasons spent endurance racing, we
            came to believe that this was not the answer. So with a background
            that comes from the intersection of automotive technology, precision
            manufacturing, a healthy love of high-performance and an immense
            pride in doing things well we decided to try a different approach.
          </p>
          <p>
            Our transmissions are meticulously measured with components adjusted
            to achieve precise tolerances and clearances, often exceeding
            factory specifications. This is due to the fact we are providing the
            highest quality and performance and not aiming to meet a price point
            . More to the point, we&apos;re never satisfied. We keep looking for
            improvements whether that means using better bearings, new materials
            or new processes. We are constantly looking for ways to make our
            transmission more durable, more reliable and more performant.{" "}
          </p>
          <p>
            At VDM we believe that you shouldn&apos;t really notice the
            transmission working. We want it to be so well-integrated that it
            becomes an extension of your driving inputs, never interrupting the
            flow of power while creating a sense of confidence that helps
            elevate your driving experience.
          </p>
          <h3 className="font-semibold text-xl">
            The birth of VDM Motorsports
          </h3>
          <p>
            After finding themselves on the same endurance racing team, Gavin
            and Jack quickly realized that they could combine their powers for
            evil, culminating in some of the best built BMW transmissions this
            side of the Berlin Wall.
          </p>
        </div>
      </section>
      <section className="2xl:grid 2xl:grid-cols-3 h-[110vh]">
        <div className="col-span-1 2xl:ml-[50px]">
          <PersonBio
            name="Jack Roman"
            bioText={jackBioText}
            imageSrc="/stock-smiling-1.avif"
            imageSize={400}
            imageAlt="smiling person"
            imageStyles="rounded-l-4xl rounded-tr-4xl"
          />
        </div>
        <div className="2xl:col-span-2 2xl:flex hidden items-center justify-center">
          <Image
            src="/stock-8.webp"
            alt="e30 interior"
            height={700}
            width={700}
            className="object-cover z-[30] rounded-r-4xl rounded-tl-4xl"
          />
        </div>
      </section>
      <section className="2xl:grid 2xl:grid-cols-3 h-full pb-[200px]">
        <div className="2xl:col-span-2 2xl:flex hidden items-center justify-center">
          <Image
            src="/stock-9.jpg"
            alt="e30 interior"
            height={700}
            width={700}
            className="object-cover z-[30] rounded-l-4xl rounded-br-4xl"
          />
        </div>
        <div className="col-span-1 2xl:mr-[50px]">
          <PersonBio
            name="Gavin Goodoien"
            bioText={gavinBioText}
            imageSrc="/stock-smiling-2.webp"
            imageSize={400}
            imageAlt="smiling person"
            imageStyles="rounded-r-4xl rounded-bl-4xl"
          />
        </div>
      </section>
    </main>
  );
}
