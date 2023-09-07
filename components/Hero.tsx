"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    // window.scrollTo({
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find your dream ride - easily!</h1>
        <p className="hero__subtitle">
          We have the best cars in the world, ready for you to rent.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
