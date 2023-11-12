import React from "react";
import { cloudinaryCloudName } from "@/constants";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { Carousel } from "react-responsive-carousel";

type Props = {
  images: string[];
};

const GalleryNew = (props: Props) => {
  console.log("GalleryNew: ", props, cloudinaryCloudName);
  const { images } = props;
  const [currentImage, setCurrentImage] = React.useState(0);
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryCloudName,
    },
  });

  return (
    <div>
      <div className="grid gap-4">
        <div className="bg-gray-100 rounded-xl flex justify-center items-center shadow">
          <Carousel
            showArrows={true}
            selectedItem={currentImage}
            onChange={(index: number) => setCurrentImage(index)}
            className="h-auto max-w-full rounded-lg"
          >
            {images &&
              images.map((image, index) => (
                <AdvancedImage
                  key={index}
                  cldImg={cld.image(image)}
                  plugins={[responsive(), placeholder()]}
                  className="h-auto max-w-full rounded-lg"
                />
              ))}
          </Carousel>
        </div>
        <div className="flex justify-center gap-2">
          {images &&
            images.map((image, index) => (
              <div
                className={`rounded-xl flex justify-center items-center h-32 w-48 bg-gray-100 cursor-pointer hover:bg-gray-200 hover:shadow-md ${
                  currentImage === index ? "border border-gray-500" : ""
                }`}
              >
                <AdvancedImage
                  cldImg={cld.image(image)}
                  plugins={[responsive(), placeholder()]}
                  onClick={() => setCurrentImage(index)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryNew;
