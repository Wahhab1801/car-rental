import React, { useState } from "react";
import { cloudinaryCloudName } from "@/constants";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import useMobileResolution from "../useMobileResolution";

type Props = {
  images: string[];
};

const GalleryNew = (props: Props) => {
  let xDown: number = 0;
  let yDown: number = 0;

  function getTouches(evt: any) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt: any) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: any) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /*most significant*/
      if (xDiff > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    } else {
      if (yDiff > 0) {
        /* down swipe */
      } else {
        /* up swipe */
      }
    }
    /* reset values */
    xDown = 0;
    yDown = 0;
  }

  const { images } = props;
  const [current, setCurrent] = useState<number>(0);
  const isMobile = useMobileResolution();

  const previousSlide = () => {
    if (!images?.length) {
      return;
    }
    if (current === 0) setCurrent(images?.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (!images?.length) {
      return;
    }
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryCloudName,
    },
  });

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full h-full"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div
          className="relative overflow-hidden rounded-lg border border-gray-200 mb-4"
          style={{ height: isMobile ? "20rem" : "30rem" }}
        >
          {images &&
            images.map((image, index) => (
              <div
                className={`duration-700 ease-in-out ${
                  index !== current ? "hidden" : ""
                }`}
                data-carousel-item={index === current}
                key={image}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <AdvancedImage
                  key={index}
                  className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  cldImg={cld.image(image)}
                  plugins={[responsive(), placeholder({ mode: "blur" })]}
                />
              </div>
            ))}
        </div>
        {/* <!-- Carousel next/previous controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={previousSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 dark:bg-gray-800/30 group-hover:bg-primary/70 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 dark:bg-gray-800/30 group-hover:bg-primary/70 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* images preview */}
      <div className="flex justify-center gap-2">
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className={`rounded-xl flex justify-center items-center h-32 w-48 bg-gray-100 cursor-pointer hover:bg-gray-200 hover:shadow-md ${
                current === index ? "border border-gray-500" : ""
              }`}
            >
              <AdvancedImage
                cldImg={cld.image(image)}
                plugins={[responsive(), placeholder()]}
                onClick={() => setCurrent(index)}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default GalleryNew;
