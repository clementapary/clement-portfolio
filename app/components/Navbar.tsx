"use client";
import { LinkItems } from "@/lib/constants";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillRocket } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative top-0 right-0 left-0 z-50 mx-auto max-w-6xl overflow-hidden py-3 backdrop-blur-lg md:fixed">
      <div className="flex items-center justify-between gap-4 px-8">
        <div className="flex items-center gap-2 text-2xl font-black">
          <AiFillRocket className="size-10 rotate-45" />
          <span>CLEMENT</span>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          {LinkItems.map((item) => (
            <div
              key={item.name}
              className={classNames({
                "px-2 text-lg font-bold": true,
                "rounded-lg bg-blue-500 text-zinc-100": item.href === pathname,
              })}
            >
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
            <AiOutlineBars className="size-6" />
          </button>
          {open && <NavMobile />}
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export function NavMobile() {
  return (
    <nav className="absolute -top-12">
      <ul className="">
        {LinkItems.map((link) => (
          <li key={link.name} className="block">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
