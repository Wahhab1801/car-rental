import React, { useState } from "react";
import { cloudinaryCloudName } from "@/constants";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";

type Props = {
  images: string[];
};

const GalleryNew = (props: Props) => {
  const { images } = props;
  const [current, setCurrent] = useState<number>(0);

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
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 border border-gray-200 mb-4">
        {images &&
          images.map((image, index) => (
            <div
              className={`duration-700 ease-in-out ${
                index !== current ? "hidden" : ""
              }`}
              data-carousel-item={index === current}
              key={image}
            >
              <AdvancedImage
                key={index}
                cldImg={cld.image(image)}
                plugins={[responsive(), placeholder()]}
              />
            </div>
          ))}
      </div>
      {/* images preview */}
      <div className="flex justify-center gap-2">
        {images &&
          images.map((image, index) => (
            <div
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
  );
};

// const GalleryNew = (props: Props) => {
//   console.log("GalleryNew: ", props, cloudinaryCloudName);
//   const { images } = props;
//   const [currentImage, setCurrentImage] = React.useState(0);
//   const cld = new Cloudinary({
//     cloud: {
//       cloudName: "dr815brzr",
//     },
//   });

//   return (
//     <div>
//       <div className="grid gap-4">
//         <div className="bg-gray-100 rounded-xl flex justify-center items-center shadow">
//           <Carousel
//             showArrows={true}
//             selectedItem={currentImage}
//             onChange={(index: number) => setCurrentImage(index)}
//             className="h-[480px] max-w-full rounded-lg"
//             showThumbs={false}
//           >
//             {images &&
//               images.map((image, index) => (
//                 <AdvancedImage
//                   key={index}
//                   cldImg={cld.image(image)}
//                   plugins={[responsive(), placeholder()]}
//                   className="h-auto max-w-full rounded-lg"
//                 />
//               ))}
//           </Carousel>
//         </div>
//         <div className="flex justify-center gap-2">
//           {images &&
//             images.map((image, index) => (
//               <div
//                 className={`rounded-xl flex justify-center items-center h-32 w-48 bg-gray-100 cursor-pointer hover:bg-gray-200 hover:shadow-md ${
//                   currentImage === index ? "border border-gray-500" : ""
//                 }`}
//               >
//                 <AdvancedImage
//                   cldImg={cld.image(image)}
//                   plugins={[responsive(), placeholder()]}
//                   onClick={() => setCurrentImage(index)}
//                 />
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

export default GalleryNew;
