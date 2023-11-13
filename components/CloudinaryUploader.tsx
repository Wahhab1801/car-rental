import { createContext, useEffect, useState } from "react";

const CloudinaryScriptContext = createContext({});

const CloudinaryUploadWidget = ({
  uwConfig,
  setPublicIds,
}: {
  uwConfig: any;
  setPublicIds: any;
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = (window as any)?.cloudinary?.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setPublicIds((prevPublicIds: string[]) => [
              ...prevPublicIds,
              result.info.public_id,
            ]);
          }
        }
      );
      myWidget.update({
        showAdvancedOptions: true,
        multiple: true,
      });

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function (event) {
          event.preventDefault();
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        type="button"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
};

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
