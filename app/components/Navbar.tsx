"use client";
import { LinkItems } from "@/lib/constants";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Rocket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="relative flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <Rocket className="size-6" />
          <span className="text-xl font-black uppercase md:text-2xl">
            Clement
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-1.5">
            {LinkItems.map((link) => (
              <li
                key={link.name}
                className={classNames({
                  "px-4 py-2 text-lg font-medium": true,
                  "rounded-lg bg-blue-500 text-zinc-100":
                    pathname === link.href,
                })}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {open && (
          <div className="absolute top-12 z-50 block w-full bg-zinc-100 p-6 text-zinc-900 md:hidden dark:bg-zinc-900 dark:text-zinc-100">
            <ul className="flex flex-col gap-1.5">
              {LinkItems.map((link) => (
                <li
                  key={link.name}
                  className={classNames({
                    "px-4 py-2 text-lg font-medium": true,
                    "rounded-lg bg-blue-500 text-zinc-100":
                      pathname === link.href,
                  })}
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex items-center gap-1.5">
          <div className="block md:hidden">
            <button onClick={() => setOpen(!open)}>
              <Menu className="ring:border-zinc-700 cursor-pointer rounded hover:ring hover:ring-offset-2" />
            </button>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
