"use client";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
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
        <div className="flex justify-end items-center w-[50%] gap-4">
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
            target="_"
            href="https://www.motechautocentre.co.uk/"
            style={{
              color: pathname.endsWith("/mot-services") ? "black" : "white",
              ...(pathname.endsWith("/mot-services") && {
                textDecoration: "underline",
              }),
            }}
            className="mx-4 hover:underline underline-offset-4"
          >
            MOT & Servicing
          </Link>
          <Link
            href="/warranty"
            style={{
              color: pathname.endsWith("/warranty") ? "black" : "white",
              ...(pathname.endsWith("/warranty") && {
                textDecoration: "underline",
              }),
            }}
            className="mx-4 hover:underline underline-offset-4"
          >
            Warranty
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
          <Link
            href="/contact-us"
            style={{
              color: pathname.endsWith("/contact-us") ? "black" : "white",
              ...(pathname.endsWith("/contact-us") && {
                textDecoration: "underline",
              }),
            }}
            className="mx-4 hover:underline underline-offset-4"
          >
            Contact Us
          </Link>
        </div>
        {pathname?.includes("/details/") && (
          <div className="w-[40%] absolute h-[85px] right-0 overflow-hidden -z-10">
            <div className="absolute -bottom-2 xl:-right-[50px] rotate-[4deg] -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-[100vh] h-[100vh] overflow-hidden" />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
