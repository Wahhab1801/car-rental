"use client";

import { some_random_images } from "@/constants";
import React, { Suspense } from "react";
import { Gallery } from "./gallery";

type Props = {};

const DetailsPage = (props: Props) => {
  console.log("DetailsPage: ", props);
  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={some_random_images.map((image: any) => ({
                src: image,
                altText: image.toString(),
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            {/* <ProductDescription product={product} /> */}
          </div>
        </div>
        <Suspense>{/* <RelatedProducts id={product.id} /> */}</Suspense>
      </div>
    </>
  );
};

export default DetailsPage;
