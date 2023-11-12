import React from "react";
import { Hero } from "@/components";
import { FilterCarProps } from "@/types";
import MainPage from "@/components/MainPage";
import Filters from "@/components/Filters";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p>Explore the cars and you will find your dream ride</p>
        </div>

        <div className="home__filters">
          {/* filters */}
          <Filters searchParams={searchParams} />
        </div>
        <MainPage searchParams={searchParams} />
      </div>
    </main>
  );
}
