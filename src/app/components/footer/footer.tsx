import Link from "next/link";
import { Logo } from "../navbar/logo";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <main className="w-full h-[500px] bottom-0 bg-gray-400 grid grid-cols-4">
      {/* Left */}
      <section className="col-span-1">
        <div className="flex flex-col">
          <div className="flex px-10 pt-10 pb-5">
            <Logo
              image="/logo.svg"
              alt="garage logo"
              href="/"
              styles=""
              size={55}
            />
            <h2 className="text-xl ml-4">
              <span className="font-semibold">VDM</span>{" "}
              <span className="text-white">Motorsports</span>
            </h2>
          </div>
          <div className="mx-10">
            <blockquote className="text-neutral-100">
              &ldquo;Precision-built E30 transmissions for enthusiasts and
              professionals.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
      {/* Middle */}
      <section className="col-span-2">
        <div className="grid grid-rows-4 h-full">
          <div className="row-span-1"></div>
          <div className="row-span-2">
            <div className="flex justify-center space-x-15">
              <FaFacebook className="text-blue-700" size={40} />
              <FaInstagramSquare className="text-black" size={40} />
              <FaYoutube className="text-red-700" size={40} />
            </div>
          </div>
          <div className="row-span-1">
            <div className="flex justify-center space-x-15 text-neutral-100">
              <Link className="hover:text-blue-500" href="/services">
                Services
              </Link>
              <Link className="hover:text-blue-500" href="/technology">
                Technology
              </Link>
              <Link className="hover:text-blue-500" href="/about-us">
                About Us
              </Link>
              <Link className="hover:text-blue-500" href="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Right */}
      <section className="col-span-1">
        <div className="px-10 pt-10 pb-5 grid grid-rows-3 h-full">
          <div className="text-neutral-100 space-y-5">
            <p>Phone:</p>
            <p>Address:</p>
            <p>Phoenix, AZ</p>
          </div>
          <div className=""></div>
          <div className="text-zinc-800 flex flex-col space-y-5">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Warranty / Returns Policy</span>
          </div>
        </div>
      </section>
    </main>
  );
};
