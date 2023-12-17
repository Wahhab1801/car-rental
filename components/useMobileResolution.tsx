import { useState, useEffect } from "react";

const useMobileResolution = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobileThreshold = 600; // Adjust this threshold based on your design considerations
      const isMobileNow = window.innerWidth < mobileThreshold;

      if (isMobileNow !== isMobile) {
        setIsMobile(isMobileNow);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return isMobile;
};

export default useMobileResolution;
