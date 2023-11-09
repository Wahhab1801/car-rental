import { CarProps, FilterCarProps } from "@/types";
import { ReadonlyURLSearchParams } from "next/navigation";

export const fetchCars = async (filters: FilterCarProps) => {
  const headers = {
    "X-RapidAPI-Key": "cf30120f9amsh82f6df583ebe966p13c03ejsne2b394f52ae7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${filters.manufacturer}&year=${filters.year}&fuel_type=${filters.fuel}&limit=${filters.limit}&model=${filters.model}`,
    {
      headers: headers,
    }
  );
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

export const fetchCarDetails = async (id: string) => {
  const headers = {
    "X-RapidAPI-Key": "cf30120f9amsh82f6df583ebe966p13c03ejsne2b394f52ae7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars/${id}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};
