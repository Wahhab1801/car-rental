"use client";

import React from "react";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newPathname = updateSearchParams(
      "pageNumber",
      (pageNumber + 1).toString()
    );
    router.push(newPathname);
  };
  return (
    <div className="w-full flex-center gap=5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
