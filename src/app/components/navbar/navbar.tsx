"use client";

import { Logo } from "./logo";
import { Navlink } from "./nav-link";
import { Menu } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Hint } from "../hint";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  {
    href: "/services",
    title: "Services",
  },
  {
    href: "/technology",
    title: "Technology",
  },
  {
    href: "/about-us",
    title: "About Us",
  },
  {
    href: "/contact-us",
    title: "Contact Us",
  },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <nav className="h-20 flex items-center justify-between sticky bg-neutral-200 top-0 z-[50]">
      <div className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <div className="px-10 flex gap-x-4 h-full items-center z-[30]">
        <Logo
          image="/VDM-test-one.png"
          alt="garage logo"
          href="/"
          styles=""
          size={165}
        />
        {/* <span className="text-xl font-semibold">VDM Motorsports</span> */}
      </div>
      <div className="hidden lg:flex">
        {links.map((link, index) => (
          <Navlink key={index} href={link.href} title={link.title} />
        ))}
      </div>
      {/* <div className="w-[13%] border-2 border-red-500"></div> */}
      <div className="border-2 flex justify-center items-center mr-[40px]">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Hint text="Nav Menu">
              <Menu className="lg:hidden block cursor-pointer" size={40} />
            </Hint>
          </DialogTrigger>
          <DialogContent className="bg-neutral-300 border-none">
            <DialogHeader>
              <DialogTitle className="text-center pb-4">Go To...</DialogTitle>
              <div className="flex flex-col space-y-4 items-center">
                <Navlink href="/" title="Home" onClick={handleClose} />
                {links.map((link, index) => (
                  <Navlink
                    key={index}
                    href={link.href}
                    title={link.title}
                    onClick={handleClose}
                  />
                ))}
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};
