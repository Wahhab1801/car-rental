"use client";
import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";

const Navbar = () => {
  return (
    <section className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Car Rental Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          containerStyles="bg-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        />
      </nav>
    </section>
  );
};

export default Navbar;
