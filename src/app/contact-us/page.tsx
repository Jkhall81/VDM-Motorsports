import { ContactForm } from "./components/contact-form";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      <h1 className="sectionTitle">Contact Us</h1>
      <section className="w-full min-h-[90vh] 2xl:grid 2xl:grid-cols-3 pt-[200px] pb-[300px]">
        <div className="col-span-1">
          <div className="flex items-center justify-center h-full">
            <ContactForm />
          </div>
        </div>
        <div className="2xl:col-span-2 2xl:flex hidden items-center justify-center">
          <Image
            src="/contact-stock-2.avif"
            alt="red e30"
            className="object-cover z-[30] rounded-r-4xl rounded-tl-4xl"
            height={900}
            width={900}
          />
        </div>
      </section>
    </>
  );
}
