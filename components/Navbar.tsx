"use client";
import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center h-[50px]">
          <Image
            src="/car.png"
            alt="Car Rental Logo"
            width={118}
            height={50}
            className="object-contain mt-[5px]"
          />
          <h1 className="text-[30px]">Motech Motors</h1>
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="bg-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
