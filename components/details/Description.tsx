import { Vehicle } from "@/types/vehicle";
import {
  CalendarDaysIcon,
  CurrencyPoundIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  carData: Vehicle;
};

const Description = (props: Props) => {
  const { carData } = props;
  return (
    <>
      {/* <h1 className="text-2xl font-bold pl-3">Car Model Name</h1>
      <p className="mt-2">Description of the car...</p> */}
      {/* <div className="lg:w-1/2 lg:pl-4"> */}
      <h1 className="text-3xl font-bold mt-4 lg:mt-0">{carData?.title}</h1>
      <p className="mt-2 text-gray-700">{carData?.description}</p>
      <ul className="mt-4">
        {/* List other details */}
        <li className="flex items-center">
          Price:
          <span className="font-bold pl-3">
            £{carData?.price?.toLocaleString()}
          </span>
        </li>
        <li className="flex items-center">
          Year: <span className="font-bold pl-3">{carData?.year}</span>
        </li>
        <li className="flex items-center">
          Mileage:{" "}
          <span className="font-bold pl-3">
            {carData?.mileage?.toLocaleString()} miles
          </span>
        </li>
        <li className="flex items-center">
          Fuel Type: <span className="font-bold pl-3">{carData?.fuel}</span>
        </li>
        <li className="flex items-center">
          Transmission:{" "}
          <span className="font-bold pl-3">{carData?.transmission}</span>
        </li>
        <li className="flex items-center">
          Doors: <span className="font-bold pl-3">{carData?.doors}</span>
        </li>
        <li className="flex items-center">
          Seats: <span className="font-bold pl-3">{carData?.seats}</span>
        </li>
        <li className="flex items-center">
          Condition:{" "}
          <span className="font-bold pl-3">{carData?.condition}</span>
        </li>
        {/* Add more details as needed */}
      </ul>
      {/* </div> */}
    </>
  );
};

export default Description;
