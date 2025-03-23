import Image from "next/image";

export const ServicesMain = () => {
  return (
    <main>
      <section className="w-full min-h-screen bg-neutral-200  pb-[200px]">
        <h1 className="text-center text-3xl pt-[70px]">
          Precision{" "}
          <span className="bg-gradient-to-r from-purple-300 to-fuchsia-700 bg-clip-text text-transparent font-semibold">
            BMW E30
          </span>{" "}
          Transmission Rebuilds
        </h1>
        <div className="flex">
          {/* Left Container */}
          <div className="min-h-[calc(100vh-5rem)] w-1/2">
            <div className="ml-[100px] mt-[100px] flex justify-between">
              <Image
                src="/stock-6.jpg"
                className="object-cover"
                width={300}
                height={300}
                alt="e30 transmission"
                priority
              />
              <div className="max-w-[300px]  max-h-[300px] mr-[100px]">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  quod blanditiis reiciendis pariatur labore corrupti fugit
                  itaque cupiditate voluptatibus nostrum odio delectus hic cum
                  doloremque ea maiores repudiandae aliquam ut exercitationem
                  aut doloribus quisquam quae, iste dignissimos. Quam itaque
                  laudantium perspiciatis quos consectetur explicabo ab iste
                  suscipit eius velit incidunt ratione, eum perferendis
                  reiciendis eligendi soluta ea repellendus, consequuntur quod.
                </p>
              </div>
            </div>
            <div className="px-[100px] mt-[100px]">
              <p className="text-muted-foreground">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate commodi repudiandae enim assumenda! Aliquam omnis modi
                beatae illum delectus exercitationem sed excepturi facere eaque
                quas numquam atque harum quasi molestias dicta voluptates at
                optio debitis saepe sequi adipisci vel alias, error cumque! Quod
                quibusdam voluptate aperiam, provident ex similique impedit
                harum aliquam nemo? Quam ipsam sed dicta facilis, eaque
                provident quisquam? Alias dignissimos dolorum corporis corrupti.
                Eaque, numquam, repudiandae in exercitationem saepe fuga
                asperiores quaerat earum magnam molestias tempore laborum
                quisquam cum facilis esse magni architecto ipsum eum sapiente
                adipisci?
              </p>
            </div>
          </div>
          {/* Right Container */}
          <div className="min-h-[calc(100vh-5rem)] w-1/2 flex items-center justify-center">
            <Image
              src="/stock-1.webp"
              alt="e30 white"
              className="object-cover"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
};
