"use client";

import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SearchButtonProps {
  customClasses?: string;
}

const SearchButton = ({ customClasses }: SearchButtonProps) => {
  return (
    <button type="submit" className={`ml-3 z-10 ${customClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("manufacturer: ", manufacturer);
    console.log("model: ", model);
    if (manufacturer === "" && model === "") {
      alert("Please enter a manufacturer or model");
    }

    updateSearchParams(model?.toLowerCase(), manufacturer?.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const params = new URLSearchParams();
    if (model) {
      params.set("model", model);
    } else {
      params.delete("model");
    }
    if (manufacturer) {
      params.set("manufacturer", manufacturer);
    } else {
      params.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${params.toString()}`;
    router.push(newPathname);
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton customClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton customClasses="sm:hidden" />
      </div>
      <SearchButton customClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
