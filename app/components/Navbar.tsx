"use client";
import { LinkItems } from "@/lib/constants";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <div className="flex items-center justify-between gap-4 px-8">
        <div className="text-2xl font-black">CLEM3NT</div>
        <div className="hidden items-center gap-3 md:flex">
          {LinkItems.map((item) => (
            <div key={item.name} className="font-medium hover:text-zinc-400">
              <Link
                href={item.href}
                className={classNames({
                  "text-zinc-400": item.href === pathname,
                })}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="">Mode</div>
      </div>
    </nav>
  );
}
