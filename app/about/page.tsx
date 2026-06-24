import React from "react";
import Block from "../components/Block";
import Image from "next/image";
import Profile from "@/public/img/cartoon-man-wearing-glasses.jpg";
import SocialIcon from "../components/socialIcon";
import SectionHeader from "../components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="">
      <SectionHeader title="About me" />

      <Block className="grid items-center justify-center gap-8 md:grid-cols-2">
        <div className="">
          <Image src={Profile} alt="hero" className="rounded-lg" />
        </div>
        <div className="grid gap-4">
          <h3 className="text-2xl font-bold md:text-4xl">Clement Apary</h3>
          <h3 className="text-xl font-medium">
            Web Developer | Graphic Designer | Freelancer
          </h3>
          <p className="text-lg leading-relaxed tracking-tight">
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
