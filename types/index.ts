import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  leftIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
    images:  string[];
    id: string;
    make: string;
    model: string;
    title: string;
    colour: string;
    description: string;
    vehicleCategory: string;
    ulezCompliant: boolean;
    doors: number;
    seats: number;
    dateOfRegistration: string;
    registration: string;
    price: number;
    sold: boolean;
    unlist: boolean;
    bodyType: string;
    fuel: string;
    transmission: string;
    owners: number;
    year: number;
    mileage: number;
    emissionClass: string;
    condition: string;
    createdAt: string;
    updatedAt: string;
}
export interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

export interface FilterCarProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export type Vehicle = {
  id?: string;
  make?: string;
  model?: string;
  title?: string;
  colour?: string;
  description?: string;
  vehicleCategory?: string;
  ulezCompliant?: boolean | string;
  doors?: number;
  seats?: number;
  dateOfRegistration?: string | null;
  registration?: string;
  price?: number;
  sold?: boolean | string;
  unlist?: boolean | string;
  bodyType?: string;
  fuel?: string;
  transmission?: string;
  owners?: number | null;
  year?: number;
  mileage?: number;
  emissionClass?: string;
};
