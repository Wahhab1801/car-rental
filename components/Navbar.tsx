"use client";
import Image from "next/image";
import Link from "next/link";

import { CustomButton } from ".";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log("pathname: ", pathname);
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center h-[50px]">
          <Image
            src="/car.png"
            alt="Motech MotorsLogo"
            width={118}
            height={50}
            className="object-contain mt-[5px]"
          />
          <h1 className="text-[30px]">Motech Motors</h1>
        </Link>

        {/* <CustomButton
          title="Sign In"
          containerStyles="bg-primary-blue rounded-full bg-white min-w-[130px]"
          btnType="button"
        /> */}
        <div className="flex justify-end items-center w-[30%] gap-4">
          <Link
            href="/"
            style={{
              color: pathname.endsWith("/") ? "black" : "white",
              ...(pathname.endsWith("/") && {
                textDecoration: "underline",
              }),
            }}
            className="mx-4 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            style={{
              color: pathname.endsWith("/about-us") ? "black" : "white",
              ...(pathname.endsWith("/about-us") && {
                textDecoration: "underline",
              }),
            }}
            className="mx-4 hover:underline underline-offset-4"
          >
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
