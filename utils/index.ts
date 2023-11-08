import { CarProps, FilterCarProps } from "@/types";

export const fetchCars = async (filters?: FilterCarProps) => {
 const response = await fetch(`http://localhost:3001/vehicles`)
    // const response = await fetch(` https://motech-backend.vercel.app/vehicles?skip=0`)

  console.log('response', response)
  const result = await response.json();
  return result;
};

export const generateCarImages = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  params.set(type, value);

  const newPathName = `${window.location.pathname}?${params.toString()}`;
  return newPathName;
};
