import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import React from "react";

type Props = {
  images: string[];
};

const GalleryNew = (props: Props) => {
  console.log("GalleryNew: ", props);
  const { images } = props;
  const [currentImage, setCurrentImage] = React.useState(0);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dr815brzr",
    },
  });

  return (
    <div>
      <div className="grid gap-4">
        <div className="bg-gray-100 rounded-xl flex justify-center items-center shadow">
          {images && (
            <AdvancedImage
              cldImg={cld.image(images[currentImage])}
              plugins={[responsive(), placeholder()]}
              className="h-96 max-w-full rounded-lg"
            />
          )}
        </div>
        <div className="flex justify-center gap-2">
          {images &&
            images.map((image, index) => (
              <div className="rounded-xl flex justify-center items-center h-32 w-48 bg-gray-100 cursor-pointer hover:bg-gray-200 hover:shadow-md">
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
