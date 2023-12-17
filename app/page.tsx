import React from "react";
import { FilterCarProps } from "@/types";
import MainPage from "@/components/MainPage";
import Filters from "@/components/Filters";
import HeroSecondary from "@/components/HeroSecondary";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      <HeroSecondary />
      <div className="mt-1 padding-x padding-y max-width" id="discover">
        {/* <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p>Explore the cars and you will find your dream ride</p>
        </div> */}

        {/* <div className="home__filters">
          <Filters searchParams={searchParams} />
        </div> */}
        <MainPage searchParams={searchParams} />
      </div>
    </main>
  );
}
