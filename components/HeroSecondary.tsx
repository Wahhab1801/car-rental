"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeroSecondary = () => {
  const handleScroll = () => {
    // window.scrollTo({
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // });
  };
  const pathname = usePathname();
  return (
    <div className="hero mt-6">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="2xl:text-[48px] sm:text-[48px] text-[36px] font-extrabold;">
          Find your dream car - easily!
        </h1>
        <p className="hero__subtitle">
          We have the best cars in the world, ready for you.
        </p>
        <Link href={pathname === "/" ? "#cars" : "/"}>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>
      {/* <div className="xl:flex-[1] flex justify-end items-end w-full xl:h-[60vh]">
        <div className="relative xl:w-[90%] w-[90%] top-8 xl:h-full h-[400px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="absolute xl:-right-1/2 -right-[3%] w-full xl:h-[80vh] h-[60vh] overflow-hidden -z-10 bg-gradient-to-br from-black to-transparent transform rotate-[-3deg] md:rounded-[133px] rounded-[25%]" />
      </div> */}
    </div>
  );
};

export default HeroSecondary;
