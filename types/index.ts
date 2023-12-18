import { MouseEventHandler } from "react";
import { Vehicle } from "./vehicle";
export * from "./vehicle";

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
export interface CarDetailsProps {
  car: Vehicle;
  isOpen: boolean;
  closeModal: () => void;
}

export interface FilterCarProps {
  manufacturer: string;
  make: string;
  "year[gte]": string;
  fuel: string;
  limit: number;
  model: string;
  condition: string;
  unlist: boolean;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  [key: string]: string | OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
