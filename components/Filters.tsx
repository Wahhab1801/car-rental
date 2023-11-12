"use client";

import React from "react";
import { CustomFilter } from ".";
import { conditions, fuels, makes, yearsOfProduction } from "@/constants";
import { FilterCarProps } from "@/types";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  searchParams: FilterCarProps;
};

const Filters = (props: Props) => {
  const { searchParams } = props;
  const router = useRouter();
  const pathname = usePathname();

  const handleOnClear = () => {
    router.push(pathname, { scroll: false });
  };

  return (
    <div className="home__filter-container">
      <CustomFilter title="make" options={makes} />
      <CustomFilter title="fuel" options={fuels} />
      <CustomFilter title="year[gte]" options={yearsOfProduction} />
      <CustomFilter title="condition" options={conditions} />
      {Object.keys(searchParams).length > 0 && (
        <button
          onClick={handleOnClear}
          className="flex justify-center items-center w-9 h-9 rounded-full bg-blue-50 hover:bg-blue-100 hover:shadow-xl shadow-lg"
        >
          <Image
            src="/close.svg"
            alt="cross"
            width={20}
            height={20}
            className="object-contain"
          />
        </button>
      )}
    </div>
  );
};

export default Filters;
