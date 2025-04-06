import { PersonBio } from "./components/person-bio";
import Image from "next/image";

const bioText = [
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eum non voluptatem tenetur voluptas atque illo, exercitationem mollitia voluptatum ut inventore accusamus quaerat iusto suscipit tempora? Tempora tenetur delectus inventore, ullam illum impedit molestias ipsa? Eveniet enim excepturi pariatur velit hic officiis a. Beatae sapiente quibusdam, necessitatibus quas eaque tempora reiciendis laboriosam repudiandae id consequatur. Nemo, officiis! Porro deserunt accusamus suscipit quibusdam iusto ab consequuntur officiis repellat, consectetur veniam eum nostrum vero aliquid delectus nemo dignissimos! Dolore sapiente asperiores similique!",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur eum non voluptatem tenetur voluptas atque illo, exercitationem mollitia voluptatum ut inventore accusamus quaerat iusto suscipit tempora? Tempora tenetur delectus inventore, ullam illum impedit molestias ipsa? Eveniet enim excepturi pariatur velit hic officiis a. Beatae sapiente quibusdam, necessitatibus quas eaque tempora reiciendis laboriosam repudiandae id consequatur. Nemo, officiis! Porro deserunt accusamus suscipit quibusdam iusto ab consequuntur officiis repellat, consectetur veniam eum nostrum vero aliquid delectus nemo dignissimos! Dolore sapiente asperiores similique!",
];

export default function AboutUsPage() {
  return (
    <main className="w-full min-h-[100vh]">
      <h1 className="sectionTitle">About Us</h1>
      <section className="2xl:grid 2xl:grid-cols-3 h-[80vh]">
        <div className="col-span-1 2xl:ml-[50px]">
          <PersonBio
            name="Jack Roman"
            bioText={bioText[0]}
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
            bioText={bioText[0]}
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
