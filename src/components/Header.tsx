"use client";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className="relative z-10 flex items-center justify-between px-5 py-4">
        <Image src="/logo.webp" alt="logo" width={180} height={50} />
        {showSidebar ? (
          <button className="md:hidden" onClick={() => setShowSidebar(false)}>
            <XIcon size={36} />
          </button>
        ) : (
          <button className="md:hidden" onClick={() => setShowSidebar(true)}>
            <MenuIcon size={36} />
          </button>
        )}
      </div>
      <Sidebar className={cn(showSidebar ? "inset-0" : "")}>
        <ul className="flex flex-col items-center justify-between h-full gap-4 py-4 text-xl font-bold">
          <li>
            <Link href={"#"}>Features</Link>
          </li>

          <li>
            <Link href={"#"}>Integrations</Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>Features</Link>
          </li>
          <li>
            {" "}
            <Link href={"#"}>Features</Link>
          </li>
        </ul>
      </Sidebar>
    </>
  );
};

export default Header;
