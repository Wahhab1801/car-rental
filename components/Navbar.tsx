"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const mobileClass = "flex flex-col justify-center items-center w-full h-full";
  return (
    <header className="w-full absolute z-10">
      <nav
        className="bg-[#767676]"
        // className="w-full bg-[#767676] mx-auto flex justify-between items-center sm:px-16 px-6 py-4"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex justify-center items-center h-[50px]">
            <Image
              src="/car.svg"
              alt="Motech MotorsLogo"
              width={80}
              height={30}
              className="object-contain mt-[0px] md:h-[30px] md:w-[100px] lg:h-[50px] lg:w-[100px]"
            />
            <h1 className="lg:text-[30px] text-[24px] font-bold">Motech</h1>
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden focus:text-[#daa520] hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-[#daa520]"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? mobileClass : "hidden"
            }`}
            id="navbar-default"
            // className="flex justify-end items-center w-[50%] gap-4"
          >
            <Link
              href="/"
              style={{
                color: pathname.endsWith("/") ? "#daa520" : "white",
                ...(pathname.endsWith("/") && {
                  textDecoration: "underline",
                }),
              }}
              className="mx-2 lg:mx-4 hover:underline underline-offset-4 mt-1 mb-1"
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
              className="mx-2 lg:mx-4  hover:underline underline-offset-4 mt-1 mb-1"
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
              className="mx-2 lg:mx-4 hover:underline underline-offset-4 mt-1 mb-1"
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
              className="mx-2 lg:mx-4 hover:underline underline-offset-4 mt-1 mb-1"
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
              className="mx-2 lg:mx-4 hover:underline underline-offset-4  mt-1 mb-1"
            >
              Contact Us
            </Link>
          </div>
          {/* {pathname?.includes("/details/") && (
            <div className="w-[40%] absolute h-[85px] right-0 overflow-hidden -z-10">
              <div className="absolute -bottom-2 xl:-right-[50px] rotate-[4deg] -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-[100vh] h-[100vh] overflow-hidden" />
            </div>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
