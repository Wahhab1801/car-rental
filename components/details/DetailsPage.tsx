"use client";

import React, { Suspense, useEffect } from "react";
import Description from "./Description";
import { fetchCar } from "@/utils";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import GalleryNew from "./GalleryNew";
import { Vehicle } from "@/types";

const DetailsPage = (props: Params) => {
  console.log("DetailsPage: ", props);
  const [car, setCar] = React.useState<Vehicle>({} as Vehicle);

  useEffect(() => {
    console.log("DetailsPage useEffect");
    fetchCar(props.id).then((car) => {
      console.log("DetailsPage useEffect fetchCar: ", car);
      setCar(car);
    });
  }, []);

  console.log("DetailsPage: car ", car);

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <GalleryNew images={car?.images} />
          </div>
          {/* lg:w-1/2 lg:pl-4 */}
          {/* basis-full lg:basis-2/6 */}
          <div className="lg:w-1/2 lg:pl-4">
            <Description carData={car} />
          </div>
        </div>
        <Suspense>{/* <RelatedProducts id={product.id} /> */}</Suspense>
      </div>
    </>
  );
};

export default DetailsPage;
