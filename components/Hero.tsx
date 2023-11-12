"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const handleScroll = () => {
    // window.scrollTo({
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // });
  };
  const pathname = usePathname();
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find your dream ride - easily!</h1>
        <p className="hero__subtitle">
          We have the best cars in the world, ready for you to rent.
        </p>
        <Link href={pathname === "/" ? "#cars" : "/"}>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary  text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
