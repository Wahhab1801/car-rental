import React, { useState } from "react";
import { cloudinaryCloudName } from "@/constants";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { Carousel } from "react-responsive-carousel";

type Props = {
  images: string[];
};

const GalleryNew = (props: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const { images } = props;

  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryCloudName,
    },
  });

  return (
    <>
      <Carousel
        showArrows={true}
        selectedItem={currentImage}
        onChange={(index) => setCurrentImage(index)}
        showThumbs={false}
        showIndicators={false}
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
    </>
  );
};

export default GalleryNew;
