"use client";

import Image from "next/image";
import { CarProps } from "@/types";
import { CarDetails, CustomButton } from ".";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    // images,
    make,
    model,
    year,
    bodyType,
    mileage,
    transmission,
    fuel,
    owners,
    price,
    title,
    ulezCompliant,
    condition,
  } = car;
  const images = ["/hero.png", "/hero.png"]; //TEMp
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">£</span>
        {price}
      </p>
      <Carousel
        showArrows={true}
        selectedItem={currentImage}
        onChange={(index) => setCurrentImage(index)}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="Car" />
          </div>
        ))}
      </Carousel>
      <div className="space-y-2">
        <p className="text-sm font-semibold leading-tight">{title}</p>
        <p className="text-xs font-bold inline">
          {year} ({year % 100} reg ) |
        </p>
        <p className="text-xs font-bold inline ml-2">{bodyType} |</p>

        <p className="text-xs font-bold inline ml-2">
          {owners} owner{owners > 1 ? "s" : ""} |
        </p>
        <p className="text-xs font-bold inline ml-2">
          {ulezCompliant ? "ULEZ.Compliant" : "ULEZ.Non-Compliant"} |
        </p>
        <p className="text-xs font-bold inline ml-2">{condition}</p>
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width={20} height={20} alt="tire" />
            <p>{mileage} miles</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src={"/steering-wheel.svg"}
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width={20} height={20} alt="gas" />
            <p>{fuel} Hybrid</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[14px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
