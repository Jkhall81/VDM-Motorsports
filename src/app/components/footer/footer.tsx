import Link from "next/link";
import { Logo } from "../navbar/logo";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <main className="w-full 2xl:h-[500px] bottom-0 bg-gray-400 2xl:grid 2xl:grid-cols-4">
      {/* Left */}
      <section className="2xl:block 2xl:col-span-1">
        <div className="flex flex-col">
          <div className="flex px-12 pt-10 pb-5">
            <Logo
              image="/VDM-test-one.png"
              alt="garage logo"
              href="/"
              styles=""
              size={165}
            />
          </div>
          <div className="mx-12">
            <blockquote className="text-neutral-100">
              &ldquo;All transmissions lubricated during break-in with the tears
              of our tail-light gazers.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
      {/* Middle */}
      <section className="col-span-2">
        <div className="grid grid-rows-4 h-full space-y-12 2xl:space-y-0">
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
              <Link className="hover:text-emerald-500" href="/services">
                Services
              </Link>
              <Link className="hover:text-emerald-500" href="/technology">
                Technology
              </Link>
              <Link className="hover:text-emerald-500" href="/about-us">
                About Us
              </Link>
              <Link className="hover:text-emerald-500" href="/contact-us">
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
            <p className="2xl:pt-26">Located in sunny Phoenix, Arizona</p>
          </div>
          <div className=""></div>
          <div className="text-zinc-800 flex flex-col space-y-5"></div>
        </div>
      </section>
    </main>
  );
};
