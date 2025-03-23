import { CallToActionButton } from "@/app/components/landing-page/call-to-action-button";
import Image from "next/image";

export const TechnologyMain = () => {
  return (
    <main className="w-full min-h-[calc(100vh-5rem)]">
      <h1 className="text-center mt-20 text-3xl">
        Reviving Performance: Technology That Powers Our Rebuilds
      </h1>
      <section className="grid grid-cols-2 pt-[50px]">
        {/* Left Container */}
        <div className="flex items-center justify-center min-h-[80vh]">
          <Image
            src="/stock-7.jpg"
            className="object-cover"
            alt="e30 transmission"
            height={700}
            width={700}
            priority
          />
        </div>
        {/* Right Container */}
        <div className="flex flex-col">
          <div className="mx-[100px] mt-[160px] mb-[50px]">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eligendi, deleniti asperiores qui voluptates neque officia vitae
              quasi voluptatum perferendis porro magni veniam dicta dolorem
              maxime saepe aperiam reprehenderit. Deleniti aliquid expedita
              placeat et tempora culpa, laudantium, esse minima blanditiis fugit
              quaerat harum? Quibusdam, ut? Reiciendis possimus excepturi
              sapiente distinctio ut.
            </p>
          </div>
          <div className="mx-[100px] mb-[50px]">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates magni maiores repudiandae laboriosam quas accusantium
              ipsa. Expedita culpa dolorum aut reprehenderit eos, facilis
              quibusdam, harum perferendis ipsam cumque debitis? Enim adipisci
              vitae quisquam pariatur provident repudiandae expedita nihil
              laboriosam eos? Odio libero a, totam enim ipsum corrupti, sequi
              necessitatibus repellendus sit eius vero vel fugit labore quaerat
              voluptate harum. Sit commodi nam, ratione deleniti odio atque
              repellat iusto nemo! Omnis iste dolores non modi autem
              exercitationem tempora nulla ipsum magni.
            </p>
          </div>
          <div className="mx-[100px]">
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates magni maiores repudiandae laboriosam quas accusantium
              ipsa. Expedita culpa dolorum aut reprehenderit eos, facilis
              quibusdam, harum perferendis ipsam cumque debitis? Enim adipisci
              vitae quisquam pariatur provident repudiandae expedita nihil
              laboriosam eos? Odio libero a, totam enim ipsum corrupti.
            </p>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2">
        {/* Left */}
        <div className="min-h-[80vh]">
          <div className="px-[100px] flex flex-col space-y-[50px] text-muted-foreground">
            <div className="flex justify-center">
              <CallToActionButton
                buttonText="Atque modi odio fugiat!"
                styles="bg-black hover:bg-neutral-700 opacity-90 text-neutral-100 rounded-md w-full w-[300px] shadow-2xl"
                containerStyles="mt-[200px]"
                variant="default"
                href="/"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              dolores laborum est voluptatum ducimus nesciunt.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio eos necessitatibus ut rem voluptate rerum sed, aliquid
              assumenda accusantium laudantium quisquam a maxime laborum omnis
              consectetur, id beatae voluptatibus cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quis minus odit officia ut quibusdam suscipit porro cum
              nemo! Earum ea veniam, qui ducimus animi unde quibusdam
              repudiandae molestiae quisquam?
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="min-h-[80vh] flex items-center justify-center">
          <Image
            src="/stock-5.jpg"
            alt="white e30"
            className="object-cover"
            height={700}
            width={700}
            priority
          />
        </div>
      </section>
    </main>
  );
};
