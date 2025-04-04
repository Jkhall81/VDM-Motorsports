import { Logo } from "./logo";
import { Navlink } from "./nav-link";

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
      <div>
        {links.map((link, index) => (
          <Navlink key={index} href={link.href} title={link.title} />
        ))}
      </div>
      <div className="w-[13%]"></div>
    </nav>
  );
};
