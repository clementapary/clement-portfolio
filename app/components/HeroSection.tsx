import Image from "next/image";
import Hero from "@/public/img/cartoon-man-wearing-glasses.jpg";
import Block from "./Block";
export default function HeroSection() {
  // Next.js 16 explicit caching directive for lightning-fast server side delivery

  return (
    <Block className="grid gap-4 md:grid-cols-2">
      <div className="">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Build things faster
        </h1>
        <p className="mt-4 text-lg">
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
          <a href="/demo" className="px-5 py-3 font-medium hover:text-white">
            Live Demo →
          </a>
        </div>
      </div>
      <Image
        src={Hero}
        alt="Dashboard Layout"
        className="rounded-lg object-cover"
      />
    </Block>
  );
}
