import React from "react";
import { FilterCarProps } from "@/types";
import HeroSecondary from "@/components/HeroSecondary";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <section className="padding-x padding-y max-width">
      <div className="mt-20 mx-auto max-w-screen-lg py-8 sm:py-12 lg:px-4">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black text-center">
          Motech Motors
        </h2>
        <p className="font-light text-gray-800 sm:text-xl">
          Motech motors is based in the heart of streatham. If you are looking
          for a used vehicle in south London, look no further than motech
          motors. We strive to provide the highest quality of used vehicles that
          have been well looked after. We aim to provide the best and affordable
          prices for our vehicles.
        </p>
        <b />
        <ul className="font-light text-gray-800 sm:text-xl ml-12 list-disc">
          <li>We offer part-exchange.</li>
          <li>Our prices online are correct to the time of sale.</li>
          <li>
            Deposits are non-refundable unless there is a discrepancy by us.
          </li>
          <li>
            We provide vehicle delivery (prices vary depending on distance).
          </li>
        </ul>
      </div>

      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black text-center">
        About us!
        <br />
      </h2>
      <div
        className="px-2 py-2 mx-auto max-w-screen-lg mb-8 flex"
        style={{
          height: "30rem",
        }}
      >
        <div
          className="relative h-full overflow-hidden mb-6 sm:w-2/3"
          id="my-map-canvas"
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Motech+Motors,+Mitcham+Lane,+London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>

        <div className="px-10 sm:w-1/3">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Our Address
            </h3>
            <p className="text-gray-600">
              43 Mitcham Lane Streatham <br />
              England United Kingdom
              <br /> SW16 6LJ
            </p>
          </div>

          <div className="sm:w-1/2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Phone</h3>
            <p className="text-gray-600">02034889498</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Email</h3>
            <a
              type="email"
              href="email:Motechmotors@outlook.com"
              className="text-gray-600"
            >
              Motechmotors@outlook.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
