import React from "react";
import Block from "../components/Block";
import Image from "next/image";
import Profile from "@/public/img/cartoon-man-wearing-glasses.jpg";
import SocialIcon from "../components/socialIcon";

export default function AboutPage() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-blue-600">About Me</h2>
      <Block className="grid items-center justify-center gap-4 md:grid-cols-2">
        <div className="">
          <Image src={Profile} alt="hero" className="rounded-lg" />
        </div>
        <div className="">
          <h3 className="text-2xl font-bold text-zinc-200">Clement Apary</h3>
          <h3 className="text-lg font-medium text-zinc-400">
            Web Developer | Graphic Designer | Freelancer
          </h3>
          <p className="text-base leading-relaxed tracking-tight">
            I am, a passionate Web Developer, Graphic Designer, and Freelancer
            based in Juba, South Sudan. I specialize in building modern,
            responsive, and user-friendly digital solutions that help
            individuals, businesses, and organizations improve their online
            presence.
          </p>
          <SocialIcon />
        </div>
      </Block>
    </div>
  );
}
