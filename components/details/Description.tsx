"use client";

import React from "react";
import { Vehicle } from "@/types/vehicle";
import { CustomButton, Modal } from "..";
import ContactUsForm from "../ContactUsForm";
import Image from "next/image";

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

  const features = [
    {
      id: 1,
      label: "Year",
      icon: "/calendar.svg",
      text: carData.year,
    },
    {
      id: 2,
      label: "Mileage",
      icon: "/tire.svg",
      text: carData.mileage,
    },
    {
      id: 3,
      label: "Fuel Type",
      icon: "/gas.svg",
      text: carData.fuel,
    },
    {
      id: 4,
      label: "Transmission",
      icon: "/steering-wheel.svg",
      text: carData.transmission,
    },
    {
      id: 5,
      label: "Doors",
      icon: undefined,
      text: carData.doors,
    },
    {
      id: 6,
      label: "Seats",
      icon: undefined,
      text: carData.seats,
    },
  ];

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* <h1 className="text-2xl font-bold pl-3">Car Model Name</h1>
      <p className="mt-2">Description of the car...</p> */}
      {/* <div className="lg:w-1/2 lg:pl-4"> */}
      <h1 className="text-3xl font-bold mt-4 lg:mt-0">
        {carData?.make} - {carData.model}
      </h1>
      {/* <div className="flex flex-wrap">
        {Object.entries(data).map(([key, value]) => (
          <span className="bg-gray-100 text-gray-800 text-lg font-bold me-2 px-3 mb-4 py-1 rounded">
            {value?.toLocaleString()}
          </span>
        ))}
      </div> */}

      <p className="mb-1 mt-1 font-light">{carData.title}</p>
      <h2 className="text-5xl mb-5 mt-2 font-bold">
        £{carData?.price?.toLocaleString()}
      </h2>

      <a
        className="block w-full py-[16px] rounded-full bg-primary shadow-xl opacity-100 text-center"
        href="tel:02087699949"
      >
        <span className="text-white text-[14px] leading-[14px] font-bold">
          <Image
            src={"/phone.svg"}
            width={20}
            height={20}
            alt="year"
            className="inline mr-1"
          />
          Call Us
        </span>
      </a>

      <ul className="mt-8 mb-8">
        {features.map(({ text, label, icon, id }) => (
          <li className="flex items-center mb-2 py-1 border-b-2" key={id}>
            <span className="w-1/2">
              {icon && (
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt={label?.toLowerCase()}
                  className="inline mr-1"
                />
              )}
              {label}
            </span>
            <span className="font-bold pl-3">{text}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-4 lg:mt-2">Description</h2>
      <p className="mt-2 text-gray-700">{carData?.description}</p>

      <div className="flex justify-center mt-4 mb-2">
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
