import Image from "next/image";
import Hero from "@/public/img/cartoon-man-wearing-glasses.jpg";
import Block from "./Block";
export default function HeroSection() {
  // Next.js 16 explicit caching directive for lightning-fast server side delivery

  return (
    <Block className="">
      {/* 12-Column Layout Engine */}
      <div className="mx-auto grid max-w-6xl grid-cols-12 items-center gap-8">
        {/* Content Box: Spans 7 columns on desktop */}
        <div className="col-span-12 md:col-span-7">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Build things faster
          </h1>
          <p className="mt-4 max-w-lg text-lg text-slate-300">
            A minimalist workspace designed for high-performance development
            teams.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/docs"
              className="rounded bg-indigo-600 px-5 py-3 font-medium hover:bg-indigo-500"
            >
              Get Started
            </a>
            <a
              href="/demo"
              className="px-5 py-3 font-medium text-slate-300 hover:text-white"
            >
              Live Demo →
            </a>
          </div>
        </div>

        {/* Media Box: Spans 5 columns on desktop */}
        <div className="relative col-span-12 aspect-video w-full overflow-hidden rounded-xl bg-slate-800 md:col-span-5">
          <Image src={Hero} alt="Dashboard Layout" className="object-cover" />
        </div>
      </div>
    </Block>
  );
}
