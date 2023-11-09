"use client";

import { CarProps } from "@/types";
import React, { useEffect, useState } from "react";

const CarDetailsPage = ({ id }: { id: string }) => {
  const [car, setCarData] = useState<(CarProps & { images: string[] }) | null>(
    null
  );

  useEffect(() => {
    const fetchCarData = async () => {
      console.log(id);
      if (id) {
        console.log(JSON.parse(localStorage.getItem(id) || "{}"));

        const data = JSON.parse(localStorage.getItem(id) || "{}");
        console.log(data);
        setCarData(data);
      }
    };

    fetchCarData();
  }, [id]);

  if (!car) return <div>loading...</div>;
  console.log(car);

  return (
    <div className={"car-details-container"}>
      <div className={"car-images"}>
        {car?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Car ${index}`}
            className={"car-image"}
          />
        ))}
      </div>
      <div className={"car-details"}>
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="font-semibold text-xol capitalize">
            {car?.make} {car?.model}
          </h2>

          <div className="mt-3 flex flex-wrap gap-4">
            {Object.entries(car).map(
              ([key, value]) =>
                key !== "images" && (
                  <div
                    className="flex justify-between gap-5 w-full text-right"
                    key={key}
                  >
                    <h1 className="text-gray capitalize">
                      {key?.split("_").join(" ")}
                    </h1>
                    <p className="text-black-100 font-semibold">{value}</p>
                  </div>
                )
            )}
          </div>
        </div>
        {/* <h1 className={"car-details__title"}>{name}</h1>
        <p className={"car-details__description"}>{description}</p> */}
        {/* Add more car details here */}
      </div>
    </div>
  );
};

export default CarDetailsPage;
