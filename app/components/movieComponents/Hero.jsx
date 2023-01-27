import React from "react";
import Image from "next/image";

const HeroSection = ({ imgUrl, title, text }) => (
  <div className="relative h-128 w-full">
    <div className="relative z-10 m-auto flex h-full max-w-7xl flex-col-reverse pb-12 text-center md:text-left">
      <div className="max-w-2xl px-4 text-white">
        <h2 className="pb-8 text-2xl font-bold md:text-5xl">{title}</h2>
        <p className="text-lg md:text-xl">{text}</p>
      </div>
    </div>
    <Image
      className="object-cover"
      priority
      fill
      src={imgUrl}
      alt="hero-image"
    />
  </div>
);

export default HeroSection;
