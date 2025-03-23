import { PersonBio } from "./components/person-bio";
import Image from "next/image";

let bioText = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eum non voluptatem tenetur voluptas atque illo, exercitationem mollitia voluptatum ut inventore accusamus quaerat iusto suscipit tempora? Tempora tenetur delectus inventore, ullam illum impedit molestias ipsa? Eveniet enim excepturi pariatur velit hic officiis a. Beatae sapiente quibusdam, necessitatibus quas eaque tempora reiciendis laboriosam repudiandae id consequatur. Nemo, officiis! Porro deserunt accusamus suscipit quibusdam iusto ab consequuntur officiis repellat, consectetur veniam eum nostrum vero aliquid delectus nemo dignissimos! Dolore sapiente asperiores similique!",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eum non voluptatem tenetur voluptas atque illo, exercitationem mollitia voluptatum ut inventore accusamus quaerat iusto suscipit tempora? Tempora tenetur delectus inventore, ullam illum impedit molestias ipsa? Eveniet enim excepturi pariatur velit hic officiis a. Beatae sapiente quibusdam, necessitatibus quas eaque tempora reiciendis laboriosam repudiandae id consequatur. Nemo, officiis! Porro deserunt accusamus suscipit quibusdam iusto ab consequuntur officiis repellat, consectetur veniam eum nostrum vero aliquid delectus nemo dignissimos! Dolore sapiente asperiores similique!",
];

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-[100vh]">
      <h1 className="text-center text-3xl mt-10 font-semibold">About Us</h1>
      <section className="grid grid-cols-3 h-[80vh]">
        <div className="col-span-1">
          <PersonBio
            name="Name Name"
            bioText={bioText[0]}
            imageSrc="/stock-smiling-1.avif"
            imageSize={400}
            imageAlt="smiling person"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src="/stock-8.webp"
            alt="e30 interior"
            height={700}
            width={700}
            className="object-cover"
          />
        </div>
      </section>
      <section className="grid grid-cols-3 h-[80vh] mb-[200px]">
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src="/stock-9.jpg"
            alt="e30 interior"
            height={700}
            width={700}
            className="object-cover"
          />
        </div>
        <div className="col-span-1">
          <PersonBio
            name="Name Name"
            bioText={bioText[0]}
            imageSrc="/stock-smiling-2.webp"
            imageSize={400}
            imageAlt="smiling person"
          />
        </div>
      </section>
    </main>
  );
}
