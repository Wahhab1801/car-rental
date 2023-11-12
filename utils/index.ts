import axios from "axios";
import { Vehicle, FilterCarProps } from "@/types";
import { ReadonlyURLSearchParams } from "next/navigation";

export const fetchCars = async (filters?: FilterCarProps) => {
  //  const response = await fetch(`http://localhost:3001/vehicles`)
  const response = await fetch(
    'https://motech-backend.vercel.app/vehicles?skip=0'
  );

  const result = await response.json();
  return result;
};

export const fetchCar = async (id: string) => {
  const response = await fetch(
    `https://motech-backend.vercel.app/vehicles/${id}`
  );
  const result = await response.json();
  return result;
};

export const updateSearchParams = (type: string, value: string) => {
  const params = new URLSearchParams(window.location.search);
  if (params.has(type)) params.delete(type);
  if (value != "") params.set(type, value);
  console.log("params", params);
  const newPathName = `${window.location.pathname}?${params.toString()}`;
  return newPathName;
};

// for main page
export const fetchCarsAxios = (filters: FilterCarProps) => {
  const params = new URLSearchParams();

  if (filters?.manufacturer)
    params.append("manufacturer", filters.manufacturer);
  if (filters?.condition) params.append("make", filters.condition);
  if (filters?.make) params.append("make", filters.make);
  if (filters?.model) params.append("modelFamily", filters.model);
  if (filters?.fuel) params.append("fuel", filters.fuel);
  if (filters!["year[gte]"]) params.append("year[gte]", filters!["year[gte]"]);
  return axios.get(
    `https://motech-backend.vercel.app/vehicles?skip=0${
      params ? "&" + params.toString() : ""
    }`
  );
};
