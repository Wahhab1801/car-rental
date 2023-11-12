import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type ToastType = "success" | "error" | "loading";

interface ToastOptions {
  duration?: number;
  position?:
    | "top-center"
    | "bottom-center"
    | "top-right"
    | "bottom-right"
    | "top-left"
    | "bottom-left";
}

interface UseToast {
  showToast: (
    message: string,
    type?: ToastType,
    options?: ToastOptions
  ) => void;
}

const useToast = (): UseToast => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const showToast = (
    message: string,
    type: ToastType = "success",
    options: ToastOptions = {}
  ) => {
    if (isMounted) {
      const { duration = 3000, position = "top-center" } = options;
      switch (type) {
        case "success":
          toast.success(message, { duration, position });
          break;
        case "error":
          toast.error(message, { duration, position });
          break;
        case "loading":
          toast.loading(message, { duration, position });
          break;
        default:
          toast(message, { duration, position });
          break;
      }
    }
  };

  return { showToast };
};

export default useToast;
