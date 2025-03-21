import Image from "next/image";
import { CallToActionButton } from "./call-to-action-button";

export const LandingMiddle = () => {
  return (
    <main className="w-full h-full flex">
      <div className="bg-blue-400 absolute h-[300px] w-[600px] z-[1] left-[650px] top-[1090px]" />
      <section className="flex items-center justify-center min-h-[70vh] w-2/3">
        <Image
          src="/stock-3.webp"
          alt="e30 pic"
          height={800}
          width={800}
          className="object-cover z-[30]"
        />
      </section>
      <section className="min-h-[70vh] w-1/3 flex flex-col justify-center">
        <div className="z-[30]">
          <p className="text-muted-foreground p-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic,
            laudantium rem fugiat voluptate sequi reprehenderit nostrum
            voluptas, corrupti atque ab modi odio animi nulla inventore quo
            iusto accusantium, nihil fuga!
          </p>
        </div>
        <div className="z-[30]">
          <p className="text-muted-foreground p-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
            delectus ad hic nobis odio repudiandae deserunt id, provident minus
            earum expedita dolores consequuntur a laudantium saepe, illo ducimus
            autem sunt. Perspiciatis repellat omnis cum eaque soluta autem
            consequatur, odio nemo harum velit voluptates suscipit optio
            dignissimos illo exercitationem! Fuga, soluta.
          </p>
        </div>
        <div className="flex justify-center">
          <CallToActionButton
            buttonText="Atque modi odio fugiat!"
            styles="bg-black hover:bg-neutral-700 opacity-90 text-neutral-100 rounded-md w-full w-[300px] shadow-2xl"
            containerStyles=""
            variant="default"
            href="/"
          />
        </div>
      </section>
    </main>
  );
};
