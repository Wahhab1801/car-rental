import React from "react";

import { FilterCarProps } from "@/types";
import HeroSecondary from "@/components/HeroSecondary";

type Props = {};

export default async function Page({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      <HeroSecondary />
      <section className="mt-12 padding-x padding-y max-width">
        <div className="px-6 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black text-center">
            Best rates
          </h2>
          <p className="font-light text-gray-800 sm:text-xl">
            When buying a used car, warranty is highly suggested as it can give
            you a peace of mind that you will not have to worry about covering
            the cost of repairs and maintenance. When purchasing a vehicle
            through us we can go through a range of comprehensive covers that
            suit your needs. We can provide warranty for any vehicle we stock.
          </p>
        </div>

        <div
          className="px-6 py-10 mx-auto max-w-screen-lg"
          style={{
            height: "30rem",
          }}
        >
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black text-center">
            Come visit us!
            <br />
          </h2>
          <div
            className="relative h-full overflow-hidden mb-6 pb-10"
            id="my-map-canvas"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Motech+Motors,+Mitcham+Lane,+London,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
