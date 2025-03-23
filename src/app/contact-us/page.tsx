import { ContactForm } from "./components/contact-form";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      <h1 className="sectionTitle">Contact Us</h1>
      <section className="w-full min-h-[90vh] grid grid-cols-3">
        <div className="col-span-1">
          <div className="flex items-center justify-center h-full">
            <ContactForm />
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <Image
            src="/contact-stock-2.avif"
            alt="red e30"
            className="object-cover"
            height={900}
            width={900}
          />
        </div>
      </section>
    </>
  );
}
