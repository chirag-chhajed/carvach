"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { MenuIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    name: "products",
    link: "#",
  },
  {
    name: "dao",
    link: "#",
  },
  {
    name: "build",
    link: "#",
  },
  {
    name: "docs",
    link: "#",
  },
];

const variants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-black border-white border-solid border-[1px] rounded-[100px] border-opacity-10 bg-opacity-50 max-sm:px-5">
      <Image
        width={120}
        height={24}
        src={"/logo.svg"}
        alt={"logo of the site"}
      />
      <nav className="items-center hidden md:flex ">
        <ul className="items-center justify-between hidden gap-10 text-base text-white sm:flex">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className="relative px-2 pb-2 transition-all border-b-2 border-transparent hover:border-white"
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href={"/signin"} className="hidden md:block">
        <Button text="launch app" />
      </Link>
      <button className="relative z-50">
        <span className="sr-only">Open sidebar</span>
        {showSidebar ? (
          <XIcon
            className="p-1 border-2 rounded-full md:hidden"
            strokeWidth={3}
            size={32}
            onClick={() => setShowSidebar(false)}
          />
        ) : (
          <MenuIcon
            className="p-1 border-2 rounded-full md:hidden"
            strokeWidth={3}
            size={32}
            onClick={() => setShowSidebar(true)}
          />
        )}
      </button>
      <aside
        className={cn(
          "fixed top-0 bottom-0 right-0 flex backdrop-blur-xl w-[300px] z-40 transition-transform duration-500",
          showSidebar ? "" : "translate-x-[300px]"
        )}
      >
        <nav className="flex items-center w-full md:hidden">
          <ul className="flex flex-col justify-between gap-16 px-5 py-4 text-2xl text-white md:hidden">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="relative transition-all border-b-2 border-white"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Link href={"/signin"} className="scale-125">
              <Button text="launch app" />
            </Link>
          </ul>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
