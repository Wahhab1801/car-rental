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
    fetchCar(props.id).then((car) => {
      console.log("DetailsPage useEffect fetchCar: ", car);
      setCar(car);
    });
  }, [props.id]);

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg bg-white p-5 md:p-5 mt-3 lg:flex-row lg:gap-8">
          <div className="h-full w-full lg:w-2/3 lg:pr-4 mb-8 lg:mb-0">
            <GalleryNew images={car?.images} />
          </div>
          <div className="lg:w-1/3">
            <Description carData={car} />
          </div>
        </div>
        {/* <Suspense><RelatedProducts id={product.id} /></Suspense> */}
      </div>
    </>
  );
};

export default DetailsPage;
