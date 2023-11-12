"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { CustomButton, Modal } from "..";
import ContactUsForm from "../ContactUsForm";

type Props = {
  carData: Vehicle;
};

const Description = (props: Props) => {
  const { carData } = props;
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const data = {
    price: `£${carData.price}`,
    year: `${carData.year}`,
    mileage: carData.mileage,
    fuel: carData.fuel,
    transmission: carData.transmission,
    doors: carData.doors,
    seats: carData.seats,
    condition: carData.condition,
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* <h1 className="text-2xl font-bold pl-3">Car Model Name</h1>
      <p className="mt-2">Description of the car...</p> */}
      {/* <div className="lg:w-1/2 lg:pl-4"> */}
      <h1 className="text-3xl font-bold mt-4 lg:mt-0">{carData?.title}</h1>
      <p className="mt-2 text-gray-700">{carData?.description}</p>
      {/* <div className="flex flex-wrap">
        {Object.entries(data).map(([key, value]) => (
          <span className="bg-gray-100 text-gray-800 text-lg font-bold me-2 px-3 mb-4 py-1 rounded">
            {value?.toLocaleString()}
          </span>
        ))}
      </div> */}
      <ul className="mt-4">
        <li className="flex items-center mb-2">
          <span className="w-1/2">Price:</span>
          <span className="font-bold pl-3">
            £{carData?.price?.toLocaleString()}
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Year:</span>
          <span className="font-bold pl-3">{carData?.year}</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Mileage:</span>
          <span className="font-bold pl-3">
            {carData?.mileage?.toLocaleString()} miles
          </span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Fuel Type:</span>
          <span className="font-bold pl-3">{carData?.fuel}</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Transmission:</span>
          <span className="font-bold pl-3">{carData?.transmission}</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Doors:</span>
          <span className="font-bold pl-3">{carData?.doors}</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Seats:</span>
          <span className="font-bold pl-3">{carData?.seats}</span>
        </li>
        <li className="flex items-center mb-2">
          <span className="w-1/2">Condition:</span>
          <span className="font-bold pl-3">{carData?.condition}</span>
        </li>
      </ul>
      <div className="flex justify-center mt-4">
        <CustomButton
          title="Contact Us"
          handleClick={() => setIsFormOpen(true)}
          containerStyles="w-full py-[16px] rounded-full bg-primary shadow-xl opacity-100"
          textStyles="text-white text-[14px] leading-[14px] font-bold"
          // rightIcon="/right-arrow.svg"
        />
      </div>

      <Modal
        header="Contact Us for details"
        isOpen={isFormOpen}
        closeModal={closeFormModal}
      >
        <ContactUsForm />
      </Modal>
    </>
  );
};

export default Description;
