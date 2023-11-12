"use client";

import Image from "next/image";
import { Vehicle } from "@/types";
import { CarDetails, CustomButton } from ".";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useRouter } from "next/navigation";
import { cloudinaryCloudName } from "@/constants";

interface CarCardProps {
  car: Vehicle;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    id,
    images,
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

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryCloudName,
    },
  });

  const handleClick = () => {
    router.push(`/details/${id}`);
  };

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
        {images?.map((image, index) => (
          <div key={index}>
            <AdvancedImage
              cldImg={cld.image(image)}
              plugins={[responsive(), placeholder()]}
            />
          </div>
        ))}
      </Carousel>
      <div className="space-y-2">
        <p className="text-sm font-semibold leading-tight">{title}</p>
        {year && (
          <p className="text-xs font-bold inline">
            {year} ({year % 100} reg ) |
          </p>
        )}
        <p className="text-xs font-bold inline ml-2">{bodyType} |</p>

        {owners && (
          <p className="text-xs font-bold inline ml-2">
            {owners} owner{owners > 1 ? "s" : ""} |
          </p>
        )}
        <p className="text-xs font-bold inline ml-2">
          {ulezCompliant ? "ULEZ.Compliant" : "ULEZ.Non-Compliant"}
        </p>
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
            <p>{fuel}</p>
          </div>
        </div>
      </div>
      <div className="car-card__btn-container">
        <CustomButton
          title="View More"
          containerStyles="w-full py-[16px] rounded-full bg-primary shadow-xl opacity-100"
          textStyles="text-white text-[14px] leading-[14px] font-bold"
          rightIcon="/right-arrow.svg"
          // handleClick={() => setIsOpen(true)}
          handleClick={handleClick}
        />
      </div>
      {/* <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      /> */}
    </div>
  );
};

export default CarCard;
