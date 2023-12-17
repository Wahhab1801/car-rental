"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { usePathname } from "next/navigation";
import Link from "next/link";

import useMobileResolution from "./useMobileResolution";

const HeroSecondary = () => {
  const handleScroll = () => {
    // window.scrollTo({
    //   top: window.innerHeight,
    //   behavior: "smooth",
    // });
  };
  const isMobile = useMobileResolution();

  const pathname = usePathname();
  return (
    <div className="hero mt-6">
      <div className="flex-1 pt-20 padding-x">
        <h1 className="2xl:text-[48px] sm:text-[48px] text-[36px] font-extrabold;">
          Motech Motors
        </h1>
        <ul className="ml-5 hero__subtitle list-disc">
          <li className="ml-6">
            Minimum 3 months RAC warranty<b>*</b>
          </li>
          <li className="ml-6">12 months free breakdown cover</li>
          <li className="ml-6">Vehicle History Check</li>
          <li className="ml-6">
            Drive away same day<b>*</b>
          </li>
        </ul>

        <Link href={pathname === "/" ? "#cars" : "/"}>
          <CustomButton
            title="Explore Cars"
            containerStyles="bg-primary text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </Link>
      </div>

      <div className="xl:flex-[1] flex justify-end items-end w-full xl:h-[60vh] mr-10">
        <div className="relative xl:w-[90%] w-[90%] top-8 xl:h-full h-[400px] z-0">
          <Image
            src="/bg-car.jpeg"
            alt="hero"
            fill
            className="object-contain"
          />
        </div>
        {/* <div className="absolute xl:-right-1/2 -right-[3%] w-full xl:h-[80vh] h-[60vh] overflow-hidden -z-10 bg-gradient-to-br from-black to-transparent transform rotate-[-3deg] md:rounded-[133px] rounded-[25%]" /> */}
      </div>
    </div>
  );
};

export default HeroSecondary;
