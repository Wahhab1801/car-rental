import React from "react";
import { FilterCarProps } from "@/types";
import HeroSecondary from "@/components/HeroSecondary";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      <HeroSecondary />
      <section className="mt-12 padding-x padding-y max-width">
        <div className="flex flex-wrap -mx-4">
          {/* <!-- Contact Information --> */}
          <div className="px-4 lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About us</h2>
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

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">02034889498</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Email
              </h3>
              <a
                type="email"
                href="email:Motechmotors@outlook.com"
                className="text-gray-600"
              >
                Motechmotors@outlook.com
              </a>
            </div>
          </div>

          {/* <!-- Responsive Google Map --> */}
          <div className="px-4 lg:w-1/2 h-auto">
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
        </div>
        {/* <!-- Additional contact details or a contact form can be added here --> */}
      </section>
    </main>
  );
}
